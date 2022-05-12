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
    IBAN: Int!
    movie: Movie!
    movieId: Int!
    balance: Float!
    updatedAt: String
    createdAt: String
  }

  type Transfer {
    id: ID!
    movieId: Int!
    shareholderId: Int!
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
      IBAN: Int
      movieId: Int!
    ): Shareholder!
    transfer(
      id: String!
      movieId: Int!
      amount: Float!
      description: String
    ): Transfer!
  }
`;
