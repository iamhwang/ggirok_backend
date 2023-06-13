import { gql } from "apollo-server";

export default gql`
  type User {
    id: String!
    email: String!
    password: String!
    name: String!
    createdAt: String!
    updatedAt: String!
  }
`;