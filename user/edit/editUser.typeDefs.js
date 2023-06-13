import { gql } from "apollo-server";

export default gql`
  type editUserResult {
    status: Boolean!
    error: String
  }

  type Mutation {
    editUser(
      email: String!
      password: String!
      token: String!
    ): editUserResult
  }
`;