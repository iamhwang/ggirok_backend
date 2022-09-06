import client from "../../client";
import bycrypt from 'bcrypt';
import { checkLoggedInUserToken } from "../user.utils";

const editUser = async (_, { username, password }, { loggedInUser }) => {
  try {
    const updatedUser = await client.user.update({
      where: { id: loggedInUser.id },
      data: {
        username, 
        password: password ? await bycrypt.hash(password, 10) : password,
      }
    })
    
    if(updatedUser.id) {
      return { status: true }
    } else {
      return { status: false, error: '사용자 정보를 수정하는데 실패했습니다.' }
    }
  } catch(e) {
    return e;
  }
};

export const resolvers = {
  Mutation: {
    editUser: checkLoggedInUserToken(editUser),
  }
};
