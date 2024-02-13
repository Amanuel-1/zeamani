import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "fireup/server/api/trpc";
import { BlogPost, Prisma} from "@prisma/client";
import { CreateArticleInputSchema, CreateProjectInputSchema } from "fireup/types";
import { db } from "fireup/server/db";

export const ArticleRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

    create: protectedProcedure
    .input(CreateArticleInputSchema)
    .mutation(async ({input }) => {

     

      return await db.article.create({
        data: {
          slug:input.slug
        }
      })
    
    }),
    

  getAll: publicProcedure.query(async() => {
    return await db.article.findMany({
    
      
      
    });
  }),

  getById:publicProcedure.input(z.object({id:z.string()})).query(async ({ctx,input})=>{
    const project  = await ctx.db.project.findFirst({where:{id:input.id}})

    return project
  }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});
