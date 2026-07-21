import jwt, { JwtPayload } from "jsonwebtoken";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const AUTH_ROUTES = ["/login", "/register"];
const PUBLIC_ROUTES = ["/", "/news"];

export function proxy(request: NextRequest) {
  // get path name
  const pathname = request.nextUrl.pathname;

  const accessToken = request.cookies.get("accessToken")?.value || null;

  const decodedToken = accessToken
    ? (jwt.decode(accessToken) as JwtPayload)
    : null;

  let userRole = null;

  if (decodedToken) {
    userRole = decodedToken?.role;
  }

  // protected logged user to going /login and /register page
  if (accessToken && AUTH_ROUTES.includes(pathname)) {
    if (userRole === "USER") {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    } else if (userRole === "ADMIN") {
      return NextResponse.redirect(new URL("/admin-dashboard", request.url));
    } else if (userRole === "AUTHOR") {
      return NextResponse.redirect(new URL("/author-dashboard", request.url));
    } else {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  const isPublicRoute = PUBLIC_ROUTES.some(
    (route) => pathname === route || pathname.startsWith(route + "/"),
  );

  const isAuthRoute = AUTH_ROUTES.some(
    (route) => pathname === route || pathname.startsWith(route + "/"),
  );

  // Authenticated Pages Protection : Authorization is not handled yet
  if (!accessToken && !isPublicRoute && !isAuthRoute) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Authorization : Role based access control
  if (pathname.startsWith("/dashboard") && userRole !== "USER") {
    return NextResponse.redirect(new URL("/not-found", request.url));
  } else if (pathname.startsWith("/admin-dashboard") && userRole !== "ADMIN") {
    return NextResponse.redirect(new URL("/not-found", request.url));
  } else if (
    pathname.startsWith("/author-dashboard") && userRole !== "AUTHOR") {
    return NextResponse.redirect(new URL("/not-found", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|favicon.ico|_next/image|.*\\.png$).*)",

    // "/dashboard"
  ],
};
