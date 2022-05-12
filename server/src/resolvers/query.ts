import { Context } from "../context";

const Query = {
  movie: (_parent: any, { id }: { id: number }, context: Context) => {
    return context.prisma.movie.findFirst({ where: { id } });
  },
  movies: (_parent: any, _args: any, context: Context) => {
    return context.prisma.movie.findMany({});
  },
  shareholder: (_parent: any, { id }: { id: number }, context: Context) => {
    return context.prisma.shareholder.findMany({
      where: { id },
    });
  },
  shareholders: (_parent: any, _args: any, context: Context) => {
    return context.prisma.shareholder.findMany({});
  },
  transfers: (_parent: any, { id }: { id: number }, context: Context) => {
    return context.prisma.transfer.findMany({
      where: { id },
    });
  },
  transfer: (
    _parent: any,
    { shareholderId }: { shareholderId: number },
    context: Context
  ) => {
    return context.prisma.transfer.findMany({
      where: { shareholderId: shareholderId },
    });
  },
};

module.exports = {
  Query,
};
