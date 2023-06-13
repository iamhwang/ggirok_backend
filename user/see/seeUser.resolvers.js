import client from "../../client";

export default {
  Query: {
    seeUser: (_, { name }) => client.user.findUnique({ 
      where: { name } 
    })
  },
};