import { NextRequest } from "next/server";
import { cookies } from "next/headers";
import { verifyJwt } from "./jwt";

export async function getAuthUser(req: NextRequest) {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) {
      return null;
    }

    const payload = verifyJwt(token);
    return payload;
  } catch (error) {
    console.error("Auth verification failed:", error);
    return null;
  }
}