import { z } from "zod";

import { router, publicProcedure, protectedProcedure } from "../trpc";

export const pageRouter = router({
  findPage: protectedProcedure.query(async ({ ctx }) => {
    const userId = ctx.session.user.id;
    return await ctx.prisma.page.findFirst({
      where: {
        userId: userId
      }
    });
  }),
  createPage: protectedProcedure
    .query(async ({ ctx }) => {
      const userId = ctx.session.user.id
      return await ctx.prisma.page.create({
        data: {
          userId: userId,
        }
      })
    }),
});
