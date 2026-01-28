import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";

export async function requireAuth(request, response) {
  const session = await getServerSession(request, response, authOptions);

  if (!session) {
    response.status(401).json({ status: "Not authorized" });
    return null;
  }

  return session;
}
