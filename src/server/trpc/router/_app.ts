import { router } from "../trpc";
import { authRouter } from "./auth";
import { pageRouter } from "./page";

export const appRouter = router({
  page: pageRouter,
  auth: authRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
