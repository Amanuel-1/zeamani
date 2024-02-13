
import { createTRPCRouter } from "fireup/server/api/trpc";
import { guestRouter } from "./routers/guestbook";
import { ArticleRouter } from "./routers/article";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({

  article:ArticleRouter,
  guests:guestRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
