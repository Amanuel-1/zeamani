import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "fireup/server/api/trpc";
import { CreatCategoryInputSchema, CreateBlogPostInputSchema } from "fireup/types";
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
    .input(CreatCategoryInputSchema)
    .mutation(async ({ ctx, input }) => {   

      return await ctx.db.category.create({
        data: {
          name:input.name,
          description:input.description
        }
      })
    
    }),
    

  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.category.findMany({
      orderBy: { createdAt: "desc" },
      include:{projects:true}

    });
  }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});
