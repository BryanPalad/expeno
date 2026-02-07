import { NextRequest, NextResponse } from "next/server";
import { validateJwtFormat, isJwtExpired } from "@/lib/auth/edge-jwt";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;
  const { pathname } = req.nextUrl;

  if (pathname.startsWith("/dashboard")) {
    if (!token || !validateJwtFormat(token) || isJwtExpired(token)) {
      return NextResponse.redirect(new URL("/login", req.url));
    }

    return NextResponse.next();
  }

  if (
    (pathname === "/" || pathname === "/login" || pathname === "/register") &&
    token
  ) {
    if (validateJwtFormat(token) && !isJwtExpired(token)) {
      return NextResponse.redirect(new URL("/dashboard", req.url));
    }
  }

  return NextResponse.next();
}
