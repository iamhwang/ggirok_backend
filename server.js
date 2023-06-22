import { ApolloServer, gql } from "apollo-server";

import schema from "./schema";
import { getLoginInfo } from "./user/user.loginInfo";

const server = new ApolloServer({
  schema,
  context: async ({ req }) => {
    return {
      loggedInUser: await getLoginInfo(req.headers.token)
    }
  }
});

server
  .listen()
  .then(() => console.log("Server is running on http://localhost:4000/ 🚀"));




