import { authMiddleware } from "@clerk/nextjs";

console.log("Middleware is running");

export default authMiddleware({
  publicRoutes: ["/"],
});
