import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";

import client from "../../client";

export default {
  Mutation: {
    editUser: async (_, { email, password: newPassword, token }) => {
      // 사용자 체크
      const { id } = await jwt.verify(token, process.env.SECRET_KEY);

      console.log(id);
      
      let hashPassword = null;
      if (newPassword) {
        hashPassword = await bcrypt.hash(newPassword, 10);
      }

      const updatedUser = await client.user.update({
        where: { id },
        data: {
          email,
          ...(hashPassword && { password: hashPassword }),
        },
      });

      console.log(updatedUser)

      if (updatedUser.id) {
        return {
          status: true,
        };
      } else {
        return {
          status: false,
          error: "사용자 정보 수정 실패했습니다. 잠시 후에 다시 수정해주세요.",
        };
      }
    },
  },
};