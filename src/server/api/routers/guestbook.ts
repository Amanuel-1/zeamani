import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "fireup/server/api/trpc";
import { BlogPost, Prisma} from "@prisma/client";
import { SignGuestBookInputSchema } from "fireup/types";
import { db } from "fireup/server/db";

export const guestRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      }; 
    }),

    create: publicProcedure
    .input(SignGuestBookInputSchema)
    .mutation(async ({input }) => {

   


      return await db.guestBook.create({
        data: {
            guestName:input.guestName,
            avatar:input.avatar,
            profileUrl:input.profileUrl,
            country:input.country,
            content:input.content
        }
      })
    
    }),
    

  getAll: publicProcedure.query(async() => {
    return await db.guestBook.findMany({ 
    });
  }),

  getById:publicProcedure.input(z.object({id:z.string()})).query(async ({ctx,input})=>{
    const guest  = await ctx.db.guestBook.findFirst({where:{id:input.id}})

    return guest
  }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});
