import { router } from "../trpc";
import { authRouter } from "./auth";
import { linkRouter } from "./links";

export const appRouter = router({
  link: linkRouter,
  auth: authRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
