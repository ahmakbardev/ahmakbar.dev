import createMiddleware from "next-intl/middleware";
import { routing } from "./lib/routing";

export default createMiddleware(routing);

export const config = {
  // Jangan terapkan middleware ke file statis
  matcher: ["/((?!_next|favicon.ico|icons|images|logo|fonts|api|.*\\.svg$).*)"],
};
