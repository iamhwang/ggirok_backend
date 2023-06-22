import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";

import client from "../../client";

export default {
  Mutation: {
    editUser: async (_, { email, password: newPassword }, { user }) => {
      // 변경할 비밀번호 암호화
      let hashPassword = null;
      if (newPassword) {
        hashPassword = await bcrypt.hash(newPassword, 10);
      }

      console.log(user)

      // 사용자 정보 변경
      const updatedUser = await client.user.update({
        where: { id: user.id },
        data: {
          email,
          ...(hashPassword && { password: hashPassword }),
        },
      });

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