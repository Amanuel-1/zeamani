/*eslint prefer-const: ["error", {"ignoreReadBeforeAssign": true}]*/
import {z} from "zod"

export const SignGuestBookInputSchema = z.object({
  content:z.string(),
  country:z.string(),
  guestName:z.string(),
  avatar:z.string(),
  profileUrl:z.string(),

  
})


export const SignGuestBookOutputSchema = z.object({
  id:z.string(),
  createdAt:z.date(),
  guestName:z.string(),
  content:z.string(),
  country:z.string(),
  avatar:z.string(),
  profileUrl:z.string(),
  
})



export const CreateArticleInputSchema = z.object({
      slug: z.string()
  });
  
  export const CreateArticleOutputSchema = z.object({
    id: z.string(),
    slug: z.string(),
    views:z.number().int().default(0),
    love:z.number().int().default(0),
    neutral:z.number().int().default(0),
    dislike:z.number().int().default(0),
    createdAt: z.date(),
    updatedAt: z.date()

 
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

  export const CreatCategoryInputSchema = z.object({
    name:z.string(),
    description:z.string()
  })
  export const CreateCategoryOutputSchema  = z.object({
    id:z.string(),
    name:z.string(),
    description:z.string(),
    createdAt:z.date(),
    rate:z.number(),
    projects : z.array(CreateProjectOutputSchema)
  
  })