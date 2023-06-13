import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";

import client from "../../client";

export default {
  Mutation: {
    loginUser: async (_, { email, password }) => {
      // 사용자 체크
      const checkUser = await client.user.findFirst({ where: { email } });
      if (!checkUser) {
        return {
          status: false,
          error: "존재하지 않는 사용자입니다.",
        };
      }

      // 패스워드 체크
      const checkPassword = await bcrypt.compare(password, checkUser.password);
      if (!checkPassword) {
        return {
          status: false,
          error: "비밀번호를 확인해 주세요.",
        };
      }

      // 토큰 발급
      const token = await jwt.sign({ id: checkUser.id }, process.env.SECRET_KEY);
      return {
        status: true,
        token,
      };
    },
  },
};