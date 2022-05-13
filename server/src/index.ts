const { ApolloServer } = require("apollo-server");

const {typeDefs} = require("./schema.ts");
const {resolvers}  = require("./resolvers/index.ts");

const port = process.env.PORT || 9090;

const server = new ApolloServer({ resolvers, typeDefs, csrfPrevention: true,   cors: {

  origin: "*"

},});

server.listen({ port }, () =>
  console.log(`Server runs at: http://localhost:${port}`)
);
