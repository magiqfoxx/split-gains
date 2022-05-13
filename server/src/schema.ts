const { gql } = require("apollo-server");

export const typeDefs = gql`
  type Movie {
    id: ID!
    title: String!
    amount: Float!
    updatedAt: String
    createdAt: String
  }

  type Shareholder {
    id: ID!
    firstName: String!
    lastName: String!
    address: String
    IBAN: String!
    movie: Movie!
    movieId: Int!
    balance: Float!
    updatedAt: String
    createdAt: String
    transfers: [Transfer]
  }

  type Transfer {
    id: ID!
    movieId: Int!
    amount: Float!
    updatedAt: String
    createdAt: String
  }

  type Query {
    movies: [Movie]
    movie(id: ID!): Movie
    shareholders: [Shareholder!]
    shareholder(id: ID!): Shareholder
    transfers: [Transfer!]
    transfer(id: ID!): Transfer
  }

  type Mutation {
    createMovie(title: String!): Movie!
    createShareholder(
      firstName: String!
      lastName: String!
      address: String
      IBAN: String
      movieId: Int!
    ): Shareholder!
    createTransfer(
      movieId: String!
      amount: Float!
      description: String
    ): Shareholder!
  }
`;
