import { postRouter } from "fireup/server/api/routers/post";
import { createTRPCRouter } from "fireup/server/api/trpc";
import { projectRouter } from "./routers/project";
import { guestRouter } from "./routers/guestbook";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  post: postRouter,
  project:projectRouter,
  guests:guestRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
