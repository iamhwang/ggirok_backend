import { gql } from "apollo-server";

export default gql`
  type loginResult {
    status: Boolean!
    token: String
    error: String
  }

  type Mutation {
    loginUser(
      email: String!
      password: String!
    ): loginResult
  }
`;