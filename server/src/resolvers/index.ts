import { Context, context } from "../context";

export const resolvers = {
  Query: {
    movie: (_parent: any, { id }: { id: string }) => {
      return context.prisma.movie.findFirst({ where: { id: parseInt(id) } });
    },
    movies: async (_parent: any, _args: any) => {
      return await context.prisma.movie.findMany();
    },
    shareholder: (_parent: any, { id }: { id: string }) => {
      return context.prisma.shareholder.findFirst({
        where: { id: parseInt(id) },
      });
    },
    shareholders: (_parent: any, _args: any) => {
      return context.prisma.shareholder.findMany();
    },
    transfers: (_parent: any, _args: any) => {
      return context.prisma.transfer.findMany();
    },
    transfer: (_parent: any, { id }: { id: string }) => {
      return context.prisma.transfer.findFirst({
        where: { id: parseInt(id) },
      });
    },
  },
  Mutation: {
    createTransfer: (
      _parent: any,
      args: {
        amount: number;
        description: string;
        movieId: string;
      }
    ) => {
      //find all shareholders that have this movieId

      // return context.prisma.shareholder.update({
      //   where: { id: Number(args.id) },
      //   data: {
      //     balance: args.amount, //add to balance!
          // transfers: {
          //   amount: args.amount,
          //   description: args.description,
          //   movieId: args.movieId,
          // },
      //   },
      // });
    },
    createMovie: (_parent: any, args: { title: string }) => {
      return context.prisma.movie.create({
        data: {
          title: args.title,
        },
      });
    },
    createShareholder: (
      _parent: any,
      args: {
        firstName: string;
        lastName: string;
        address: string;
        IBAN: string;
        movieId: number;
      }
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
  },
};
