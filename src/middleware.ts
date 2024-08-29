import Paths from "@/constants/paths";
import { NextRequest, NextResponse } from "next/server";

const pageInaccessible = [Paths.login];

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
    return NextResponse.redirect(new URL(Paths.home, request.url));
  }

  if (authenticated || pathname === Paths.login) {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL(Paths.login, request.url));
}

export const config = {
  matcher: ["/", "/login"],
};
