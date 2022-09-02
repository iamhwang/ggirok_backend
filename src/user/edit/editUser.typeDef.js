import { gql } from 'apollo-server';

export const typeDefs = gql`
  type EditResult {
    status: Boolean!
    error: String
  }
  type Mutation {
    editUser(username: String, password: String): EditResult!
  }
`;