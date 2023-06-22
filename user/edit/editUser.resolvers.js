import bcrypt from 'bcrypt';

import client from "../../client";
import { protectedResolver } from '../user.loginInfo';

export default {
  Mutation: {
    editUser: protectedResolver(
      async (_, { email, password: newPassword }, { loggedInUser }) => {
        // 변경할 비밀번호 암호화
        let hashPassword = null;
        if (newPassword) {
          hashPassword = await bcrypt.hash(newPassword, 10);
        }

        // 사용자 정보 변경
        const updatedUser = await client.user.update({
          where: { id: loggedInUser.id },
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
      }
    )
  },
};