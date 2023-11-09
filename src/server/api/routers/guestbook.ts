import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "fireup/server/api/trpc";
import { CreateBlogPostInputSchema, SignGuestBookInputSchema } from "fireup/types";
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

    sign: protectedProcedure
    .input(SignGuestBookInputSchema)
    .mutation(async ({ ctx, input }) => {

     

      return await ctx.db.guestBook.create({
        data: {
            guestId:ctx.session.user.id,
            content:input.content
        }
      })
    
    }),
    

  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.guestBook.findMany({
      orderBy: { createdAt: "desc" }
    });
  }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});
