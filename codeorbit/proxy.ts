import { clerkMiddleware } from "@clerk/nextjs/server";

const isPublicRoute = (pathname: string) =>
  /^\/$|^\/(sign-in|sign-up)(\/|$)/.test(pathname);

export default clerkMiddleware(async (auth, req) => {
  if (isPublicRoute(req.nextUrl.pathname)) {
    return;
  }

  await auth.protect();
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/__clerk/:path*",
    "/(api|trpc)(.*)",
  ],
};