require('dotenv').config()

import { ApolloServer } from 'apollo-server';
import { typeDefs, resolvers } from './schema';
import { getUser, checkLoggedInUserToken } from './user/user.utils';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => {
    return {
      loggedInUser: await getUser({ token: req.headers.token }),
      checkLoggedInUserToken,
    }
  }
});

const PORT = process.env.PORT;
server
  .listen(PORT)
  .then(() => console.log(`🚀 Apollo server is running on ${PORT} 🚀`));
  