import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Mutation {
    createUser(userId: String!, username: String!, password: String!): User
  }
`;