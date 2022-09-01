import { gql } from 'apollo-server';

export const typeDefs = gql`
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