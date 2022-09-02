import client from "../../client";
import bycrypt from 'bcrypt';

export const resolvers = {
  Mutation: {
    createUser: async (_, { userId, username, password }) => {
      try {
        const checkUniqueUser = await client.user.findFirst({ where : { 
          OR: [{ userId }, { username }]
        }})   
        if(checkUniqueUser) {
          throw new Error("중복된 사용자입니다.")
        }
  
        const hashPassword = await bycrypt.hash(password, 10);
        return client.user.create({ data: { userId, username, password: hashPassword }})
      } catch(e) {
        return e;
      }
    },
  }
};
