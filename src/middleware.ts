import { NextRequest, NextResponse } from "next/server";
import { LOGIN_PATH } from "./app/login/page";

const pagesNotUseToken = [LOGIN_PATH];

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  const pathname = request.nextUrl.pathname;

  if (!token && !pagesNotUseToken.includes(pathname)) {
    return NextResponse.redirect(new URL(LOGIN_PATH, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Áp dụng middleware cho tất cả các trang ngoại trừ các tệp tĩnh
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
