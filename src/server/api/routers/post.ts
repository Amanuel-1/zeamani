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

      const tags = input.tags.map((tagName) => ({
        where: { name: tagName },
        create: { name: tagName },
      }));


      return await ctx.db.blogPost.create({
        data: {
          title: input.title,
          slug: input.slug,
          description: input.slug,
          content: input.content,
          authorId: ctx.session.user.id,
          coverImage: input.coverImage,

          tag:{
            connectOrCreate:tags
          }

          // tag: {
          //   create: input.tags.map((tagName)=>{
          //     return { tag: { connect: { name: tagName } } }
          //   }),
          // },
          




        }
      })
    
    }),
    

  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.blogPost.findMany({
      orderBy: { createdAt: "desc" },
      include:{tag:true}
    });
  }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});
