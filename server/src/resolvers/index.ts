import { Context, context } from "../context";

export const resolvers = {
  Query : {
    movie: (_parent: any, { id }: { id: number }) => {
      return context.prisma.movie.findFirst({ where: { id } });
    },
    movies: async (_parent: any, _args: any) => {
      return await context.prisma.movie.findMany();
    },
    shareholder: (_parent: any, { id }: { id: number }) => {
      return context.prisma.shareholder.findMany({
        where: { id },
      });
    },
    shareholders: (_parent: any, _args: any) => {
      return context.prisma.shareholder.findMany({});
    },
    transfers: (_parent: any, { id }: { id: number }) => {
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
  },
  Mutation : {
    transfer: (
      _parent:any,
      args: {
        id: string;
        balance: number;
        amount: number;
        description: string;
        movieId: number;
        shareholderId: number;
      },
      context: Context
    ) => {
      const shareholder = context.prisma.shareholder.update({
        where: { id: Number(args.id) },
        data: {
          balance: args.balance, //add to balance!
        },
      });
      const transfer = context.prisma.transfer.create({
        data: {
          amount: args.amount,
          description: args.description,
          movieId: args.movieId,
          shareholderId: args.shareholderId
          // args.movieId && {
          //   connect: { id: args.movieId },
          // },
        },
      });
      return {
        transfer,
        shareholder,
      };
    },
    createMovie: (_parent:any, args: { title: string }) => {
      return context.prisma.movie.create({
        data: {
          title: args.title,
        },
      });
    },
    createShareholder: (
      _parent:any,
      args: {
        firstName: string;
        lastName: string;
        address: string;
        IBAN: string;
        movieId: number;
      },
      context: Context
    ) => {
      return context.prisma.shareholder.create({
        data: {
          firstName: args.firstName,
          lastName: args.lastName,
          address: args.address,
          IBAN: args.IBAN,
          movieId: args.movieId,
          // args.movieId && {
          //   connect: { id: args.movieId },
          // },
        },
      });
    },
  }
};
