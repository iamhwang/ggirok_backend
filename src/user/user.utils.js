import jwt from 'jsonwebtoken'
import client from '../client';

export async function getUser({ token }) {
  try {
    if (!token) { return null; }

    const { id } = await jwt.verify(token, process.env.PRIVATE_KEY);
    const user = await client.user.findUnique({ where: { id } });

    if (user) { return user; } 
    else { return null; }
  } catch {
    return null;
  }
}

export const checkLoggedInUserToken = (resolvers) => (root, args, context, info) => {
  if (!context.loggedInUser) {
    return {
      status: false,
      error: "로그인 정보를 찾을 수 없습니다.",
    };
  }
  return resolvers(root, args, context, info);
}
