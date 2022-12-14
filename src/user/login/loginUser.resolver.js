import client from "../../client";
import bycrypt from 'bcrypt';
import jwt from 'jsonwebtoken'

export const resolvers = {
  Mutation: {
    loginUser: async (_, { userId, password }) => {
      const user = await client.user.findUnique({ where: { userId }});
      if(!user) {
        return {
          status: false,
          error: "존재하지 않는 사용자입니다."
        }
      } 

      const checkPassword = await bycrypt.compare(password, user.password);
      if(!checkPassword) {
        return {
          status: false,
          error: '아이디/패스워드를 확인해주세요.'
        }
      }

      const payload = { id: user.id };
      const privateKey = process.env.PRIVATE_KEY;
      const options = {
        algorithm : "HS256", // 해싱 알고리즘
        expiresIn : "600m",  // 토큰 유효 기간
        issuer : "ggirok" // 발행자
      }
      const token = await jwt.sign(payload, privateKey, options);
      return {
        status: true,
        token,
      }
    },
  }
};
