import { z } from "zod";

import { router, publicProcedure, protectedProcedure } from "../trpc";

export const linkRouter = router({
  getUserLinks: protectedProcedure.query(async ({ ctx }) => {
    const userId = ctx.session.user.id;
    return await ctx.prisma.link.findMany({
      where: {
        userId: userId
      }
    });
  }),
  createLink: protectedProcedure
    .input(z.object({
      name:z.string(),
      href:z.string(),
      icon: z.string(),
    }))
    .mutation(async ({ ctx, input }) => {
      const userId = ctx.session.user.id
      const { name, href, icon } = input;
      console.log('Icon?:', icon)
      const payload = {
        userId,
        name,
        href,
        icon
      }
      return await ctx.prisma.link.create({
        data: payload
      })
    }),
});
