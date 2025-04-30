import createMiddleware from "next-intl/middleware";
import { routing } from "@/lib/routing";

export default createMiddleware(routing);

export const config = {
  matcher: [
    "/", // root
    "/(en|id)", // <<< tambahkan ini
    "/(en|id)/:path*", // halaman turunan
  ],
};
