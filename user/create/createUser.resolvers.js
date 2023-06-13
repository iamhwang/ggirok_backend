import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";

import client from "../../client";

export default {
  Mutation: {
    createUser: async (_, { name, email, password }) => {
      const existingUser = await client.user.findFirst({
        where: { OR: [{ name }, { email }] },
      });
      
      // 비밀번호 암호화
      const hashPassword = await bcrypt.hash(password, 10);

      return client.user.create({
        data: {
          name,
          email,
          password: hashPassword,
        },
      });
    },
  },
};