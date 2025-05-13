import { NextResponse } from "next/server";
import { isMobileUserAgent } from "@/utils/isMobile.js";

export function middleware(request) {
  const userAgent = request.headers.get("user-agent") || "";
  const isMobile = isMobileUserAgent(userAgent);
  const url = request.nextUrl.clone();
  const { hostname, pathname, search } = url;
  const port = url.port;

  const mobileDomain = process.env.NEXT_PUBLIC_MOBILE_DOMAIN;
  const pcDomain = process.env.NEXT_PUBLIC_PC_DOMAIN;
  const nodeEnv = process.env.NEXT_PUBLIC_NODE_ENV;
  const currentRole = process.env.NEXT_PUBLIC_CURRENT_SERVICE_ROLE;

  let needsRedirect = false;
  let targetUrl = "";

  if (nodeEnv === "production") {
    if (!mobileDomain || !pcDomain || !currentRole) {
      return NextResponse.next();
    }
    const isCurrentRoleMobile = currentRole === "MO";
    if (isMobile && !isCurrentRoleMobile) {
      needsRedirect = true;
      targetUrl = `${mobileDomain}${pathname}${search}`;
    } else if (!isMobile && isCurrentRoleMobile) {
      needsRedirect = true;
      targetUrl = `${pcDomain}${pathname}${search}`;
    }
  } else if (nodeEnv === "development") {
    if (!mobileDomain || !pcDomain) {
      return NextResponse.next();
    }
    const expectedPort = isMobile ? "13001" : "13000";
    if (port !== expectedPort) {
      needsRedirect = true;
      targetUrl = isMobile
        ? `${mobileDomain}${pathname}${search}`
        : `${pcDomain}${pathname}${search}`;
    }
  } else if (nodeEnv === "local") {
    if (!mobileDomain || !pcDomain) {
      return NextResponse.next();
    }
    const expectedPort = isMobile ? "4000" : "4100";
    if (port !== expectedPort) {
      needsRedirect = true;
      targetUrl = isMobile
        ? `${mobileDomain}${pathname}${search}`
        : `${pcDomain}${pathname}${search}`;
    }
  }

  if (needsRedirect && targetUrl) {
    try {
      const redirectURL = new URL(targetUrl);
      return NextResponse.redirect(redirectURL);
    } catch (e) {
      return NextResponse.next();
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico).*)"],
};
