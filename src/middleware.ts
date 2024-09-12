import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Define your public and ignored routes
const publicRoutes = [
  "/",
  "/api/clerk-webhook",
  "/api/drive-activity/notification",
  "/api/payment/success",
];

const ignoredRoutes = [
  "/api/auth/callback/discord",
  "/api/auth/callback/notion",
  "/api/auth/callback/slack",
  "/api/flow",
  "/api/cron/wait",
];

const isProtectedRoute = createRouteMatcher(["/dashboard(.*)", "/forum(.*)"]);

export default clerkMiddleware((auth, req) => {
  const path = req.nextUrl.pathname;

  // Skip authentication for public and ignored routes
  if (publicRoutes.includes(path) || ignoredRoutes.includes(path)) {
    return;
  }

  // Protect the route if it's a protected route
  if (isProtectedRoute(req)) {
    auth().protect();
  }
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
