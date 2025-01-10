// import createMiddleware from "next-intl/middleware";

// export default createMiddleware({
//   locales: ["en", "ar"],
//   defaultLocale: "en",
// });

// export const config = {
//   matcher: ["/", "/(en|ar)/:path*"],
// };

import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Skip all paths that should not be internationalized
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
