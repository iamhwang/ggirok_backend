import client from "../../client";

export const resolvers = {
  Query: {
    users: () => client.user.findMany(),
    user: () => ({ id: 1, name: 'iamhwang' }),
  },

  Mutation: {
    createUser: (_, { name }) => client.user.create({ data: { name }})
  }
};
