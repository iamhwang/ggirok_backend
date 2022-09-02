import { gql } from 'apollo-server';

export const typeDefs = gql`
  type LoginResult {
    status: Boolean!
    token: String
    error: String
  }
  type Mutation {
    loginUser(userId: String!, password: String!): LoginResult!
  }
`;