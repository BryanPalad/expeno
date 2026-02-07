import jwt from "jsonwebtoken";

export function signJwt(userId: string) {
  return jwt.sign(
    { sub: userId },
    process.env.JWT_SECRET!,
    { expiresIn: "7d" }
  );
}

export function verifyJwt(token: string) {
  return jwt.verify(token, process.env.JWT_SECRET!);
}
