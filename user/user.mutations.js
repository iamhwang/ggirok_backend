import client from "../client";

export default {
  Mutation: {
    createAccount: async (_, { name, email, password }) => {
      const existingUser = await client.user.findFirst({
        where: { OR: [{ name }, { email }] },
      });
      console.log(existingUser);
      
      //
      // 비밀번호 암호화

      return client.user.create({
        data: {
          name,
          email,
          password,
        },
      });

    },
  },
};