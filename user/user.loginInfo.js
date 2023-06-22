import jwt from "jsonwebtoken";
import client from "../client";

export async function getLoginInfo(token) {
  const { id } = await jwt.verify(token, process.env.SECRET_KEY);
  const user = await client.user.findUnique({ where : { id } });

  if(user) {
    return user;
  }
}



/*

export const getLoginInfo = async (token) => {
const { id } = await jwt.verify(token, process.env.SECRET_KEY);  
}

*/
