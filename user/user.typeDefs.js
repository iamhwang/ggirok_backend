import { gql } from "apollo-server";

export default gql`
  type User {
    id: String!
    name: String!
    email: String!
    password: String!
    createdAt: String!
    updatedAt: String!
  }

  type Mutation {
    createAccount(
      name: String!
      email: String!
      password: String!
    ): User
  }

  type Query {
    seeProfile(username: String!): User
  }
`;