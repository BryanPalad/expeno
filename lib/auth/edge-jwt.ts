export type JwtPayload = {
  exp?: number;
  sub?: string;
  iat?: number;
};

export function validateJwtFormat(token: string): boolean {
  return token.split(".").length === 3;
}

export function decodeJwtPayload(token: string): JwtPayload | null {
  try {
    const payload = token.split(".")[1];
    return JSON.parse(atob(payload));
  } catch {
    return null;
  }
}

export function isJwtExpired(token: string): boolean {
  const payload = decodeJwtPayload(token);
  if (!payload?.exp) return true;

  return Date.now() >= payload.exp * 1000;
}
