import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "fireup/server/api/trpc";
import { CreateBlogPostInputSchema } from "fireup/types";
import { CreateBlogPostOutputSchema } from '../../../types/index';
import { BlogPost, Prisma, Tag } from "@prisma/client";

export const postRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

    create: protectedProcedure
    .input(CreateBlogPostInputSchema)
    .mutation(async ({ ctx, input }) => {
      const post = await ctx.db.blogPost.create({
        data: {
          title: input.title,
          slug: input.slug,
          description: input.slug,
          content: input.content,
          authorId: ctx.session.user.id,
          coverImage: input.coverImage,
        },
      });

      const tags = await Promise.all(
        input.tags.map(async (tagName) => {
          const tag = await ctx.db.tag.findFirst({ where: { name: tagName } });
          if (tag) {
            return {
              postId: post.id,
              tagId: tag.id,
            };
          } else {
            // The tag does not exist in the database.
            return undefined;
          }
        })
      );

      // Declare a new variable to store the filtered tags array.
      const filteredTags = tags.filter((tag) => tag !== undefined);

      if (filteredTags.length > 0) {
        await ctx.db.tagsOnPosts.createMany({
          data: filteredTags as Prisma.TagsOnPostsCreateManyInput[],
        });
      }

      return post;
    }),
    

  getAll: protectedProcedure.query(({ ctx }) => {
    return ctx.db.blogPost.findMany({
      orderBy: { createdAt: "desc" },
      where: { createdBy: { id: ctx.session.user.id } },
    });
  }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});
