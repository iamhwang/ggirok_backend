import { gql } from "apollo-server";

export default gql`
  type createUserResult {
    status: Boolean!
    error: String
  }

  type Mutation {
    createUser(
      name: String!
      email: String!
      password: String!
    ): User
  }
`;