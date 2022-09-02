import jwt from 'jsonwebtoken'
import client from '../client';

export default async function getUser({ token }) {
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