import client from "../client";

export const resolvers = {
  Query: {
    users: () => client.user.findMany(),
    seeUser: async (_, { username }) => await client.user.findUnique({ where: { username }})
  },
};
