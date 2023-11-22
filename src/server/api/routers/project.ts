import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "fireup/server/api/trpc";
import { BlogPost, Prisma, Tag } from "@prisma/client";
import { CreateProjectInputSchema } from "fireup/types";
import { db } from "fireup/server/db";

export const projectRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

    create: protectedProcedure
    .input(CreateProjectInputSchema)
    .mutation(async ({ ctx, input }) => {

      const tags = input.tags.map((tagName) => ({
        where: { name: tagName },
        create: { name: tagName },
      }));
      const categories = input.categories.map((categoryName:string) => ({
        where: { name: categoryName },
        create: { name: categoryName },
      }));


      return await ctx.db.project.create({
        data: {
          title: input.title,
          description: input.description,
          demoLink: input.demoLink,
          creatorId: ctx.session.user.id,
          coverImage: input.coverImage,
          githubLink:input.githubLink,
          tags:{
            connectOrCreate:tags 
          },
          categories:{
              connectOrCreate:categories
          }

          // tag: {
          //   create: input.tags.map((tagName)=>{
          //     return { tag: { connect: { name: tagName } } }
          //   }),
          // },
          




        }
      })
    
    }),
    

  getAll: publicProcedure.query(async() => {
    return await db.project.findMany({
      orderBy: { createdAt: "desc" },
      include:{tags:true},
      
      
      
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
