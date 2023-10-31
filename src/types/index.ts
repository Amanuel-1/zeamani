import {z} from "zod"

export const CreateBlogPostInputSchema = z.object({
    title: z.string(),
    authorId:z.string(),
    slug: z.string(),
    description: z.string(),
    content: z.string(),
    coverImage: z.string(),
    tags : z.array(z.string())
  });
  
  export const CreateBlogPostOutputSchema = z.object({
    id: z.string(),
    title: z.string(),
    slug: z.string(),
    description: z.string(),
    content: z.string(),
    coverImage: z.string(),
    tags :z.array(z.string()),
    reactions: z.array(z.number()),
    createdAt: z.date(),
    updatedAt: z.date(),
  });


 export const UpdateBlogPostInputSchema = z.object({
    id: z.string(),
    title: z.string().min(3),
    slug: z.string().min(3),
    description: z.string().min(10),
    content: z.string().min(100),
    coverImage: z.string(),
    tags: z.array(z.string()).optional(),
  });
  
  export const UpdateBlogPostOutputSchema = z.object({
    id: z.string(),
    title: z.string(),
    slug: z.string(),
    description: z.string(),
    content: z.string(),
    coverImage: z.string().optional(),
    tags: z.array(z.string()),
    reactions: z.array(z.number()),
    createdAt: z.date(),
    updatedAt: z.date(),
  });


  export const CreateProjectInputSchema = z.object({
    title:z.string(),
    authorId:z.string(),
    coverImage:z.string(),
    description:z.string(),
    demoLink:z.string(),
    githubLink:z.string(),
    tags : z.array(z.string()),
    categories:z.array(z.string())
  })
  export const CreateProjectOutputSchema = z.object({
    id:z.string(),
    title:z.string(),
    authorId:z.string(),
    coverImage:z.string(),
    description:z.string(),
    demoLink:z.string(),
    githubLink:z.string().optional(),
    tags : z.array(z.string()),
    categories:z.array(z.string()),
    createdAt:z.date(),
    updatedAt:z.date()
  })