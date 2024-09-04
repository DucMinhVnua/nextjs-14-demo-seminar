import { NextRequest, NextResponse } from "next/server";
import { LOGIN_PATH } from "./app/login/page";
import { HOME_PATH } from "./app/page";

const pageInaccessible = [LOGIN_PATH];

const validatePagesExistCookies = (authenticated: any, pathname: string) => {
  if (authenticated && pageInaccessible.includes(pathname)) {
    return true;
  }

  return false;
};

export function middleware(request: NextRequest) {
  const authenticated = request.cookies.get("token");
  const pathname = request.nextUrl.pathname;

  if (validatePagesExistCookies(authenticated, pathname)) {
    return NextResponse.redirect(new URL(HOME_PATH, request.url));
  }

  if (authenticated || pathname === LOGIN_PATH) {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL(LOGIN_PATH, request.url));
}

export const config = {
  matcher: ["/", "/login"],
};
