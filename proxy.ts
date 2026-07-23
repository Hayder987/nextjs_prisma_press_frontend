import { getNewAccessToken } from "./services/refreshToken";
import { JwtPayload } from "jsonwebtoken";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtUtils } from "./utils/jwt";
import { cookies } from "next/headers";
import { getSubscriptionStatus } from "./app/(publicGroup)/_actions/getSubscriptionStatus";

const AUTH_ROUTES = ["/login", "/register"];
const PUBLIC_ROUTES = ["/", "/news"];

export async function proxy(request: NextRequest) {
  // get path name
  const pathname = request.nextUrl.pathname;
  const cookieStore = await cookies();

  const response = NextResponse.next();

  let accessToken = request.cookies.get("accessToken")?.value;
  const refreshToken = request.cookies.get("refreshToken")?.value;

  let decodedAccessToken = accessToken
    ? jwtUtils.verifyToken(accessToken, process.env.JWT_ACCESS_SECRET as string)
    : null;

  const decodedRefreshToken = refreshToken
    ? jwtUtils.verifyToken(
        refreshToken,
        process.env.JWT_REFRESH_SECRET as string,
      )
    : null;

  //access token has expired but refresh token is valid, get new access token from backend
  if (!decodedAccessToken?.success && decodedRefreshToken?.success) {
    const result = await getNewAccessToken();

    if (result.success) {
      const newAccessToken = result?.data?.accessToken;

      // method 1
      // response.cookies.set("accessToken", newAccessToken,{
      //    httpOnly: true,
      //   maxAge: 60 * 60 * 24,
      //   sameSite: "lax",
      // });

      // method- 2
      cookieStore.set("accessToken", newAccessToken, {
        httpOnly: true,
        maxAge: 60 * 60 * 24,
        sameSite: "lax",
      });

      accessToken = newAccessToken;

      decodedAccessToken = jwtUtils.verifyToken(
        accessToken!,
        process.env.JWT_ACCESS_SECRET as string,
      );
    }
  }

  let userRole = null;

  //   if access token invalid or expired
  if (!decodedAccessToken?.success) {
    // method 1
    // response.cookies.delete("accessToken");

    // method -2
    cookieStore.delete("accessToken");
  }

  // set user role from token
  if (decodedAccessToken?.success && decodedAccessToken?.data) {
    userRole = (decodedAccessToken?.data as JwtPayload).role;
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
    pathname.startsWith("/author-dashboard") &&
    userRole !== "AUTHOR"
  ) {
    return NextResponse.redirect(new URL("/not-found", request.url));
  }

  if (pathname === "/premium") {
    const subscriptionPremiumStatus = await getSubscriptionStatus();

    const isActive = Boolean(
      subscriptionPremiumStatus.success &&
      subscriptionPremiumStatus.data.isSubscribed,
    );

    if(!isActive){
      return NextResponse.redirect(new URL("/payment", request.url));
    }

  }

  return response;

  // return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|favicon.ico|_next/image|.*\\.png$).*)",

    // "/dashboard"
  ],
};
