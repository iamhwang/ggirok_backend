import { gql } from 'apollo-server';

export const typeDefs = gql`
type LoginResult {
  status: Boolean!
  token: String
  error: String
}
  type User {
    id: Int!
    userId: String!
    username: String!
    createdAt: String!
    updateAt: String
  }
  type Query {
    users: [User],
    user: User,
  }
  type Mutation {
    createUser(userId: String!, username: String!, password: String!): User
    loginUser(userId: String!, password: String!): LoginResult!
  }
`;