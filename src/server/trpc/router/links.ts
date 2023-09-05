import { z } from "zod";

import { router, publicProcedure, protectedProcedure } from "../trpc";

export const linkRouter = router({

  getLinks: protectedProcedure.query(async ({ ctx }) => {
    const userId = ctx.session.user.id;
    return await ctx.prisma.link.findMany({
      where: {
        userId: userId
      }
    });
  }),

  getUserLinks: publicProcedure.input(z.object({
    id: z.string()
  })).query( async ({ ctx, input }) => {
    return await ctx.prisma.link.findMany({
        where:{
            userId: input.id
        },
        include:{
            user: {
                select:{
                    id: true,
                    image:true,
                    backgroundImage: true,
                    name: true
                }
            }
        }
        
    }) 
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

    deleteLink: protectedProcedure
    .input(z.object({
      id:z.string()
    }))
    .mutation(async ({input,ctx}) => {
      return ctx.prisma.link.delete({
        where:{
          id: input.id,
          userId:ctx.session.user.id
        }
      });
    }),
});
