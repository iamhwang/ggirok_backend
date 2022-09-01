import { PrismaClient } from '@prisma/client';
import { ApolloServer, gql } from 'apollo-server';

//import client from './client';
const client = new PrismaClient();

const typeDefs = gql`
  type User {
    id: Int!
    name: String!
    createdAt: String!
    updateAt: String
  }
  type Query {
    users: [User],
    user: User,
  }
  type Mutation {
    createUser(name: String!): User
  }
`;

const resolvers = {
  Query: {
    users: () => client.user.findMany(),
    user: () => ({ id: 1, name: 'iamhwang' }),
  },

  Mutation: {
    createUser: (_, { name }) => client.user.create({ data: { name }})
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Apollo server is running on ${url} 🚀`);
});