import { gql } from 'apollo-server';

export const typeDefs = gql`
  type User {
    id: Int!
    userId: String!
    username: String!
    createdAt: String!
    updateAt: String
  }
  type Query {
    users: [User],
    seeUser(username: String!): User
  }
`;