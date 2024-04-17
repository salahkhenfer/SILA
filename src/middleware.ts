import createMiddleware from "next-intl/middleware";
import { localePrefix, locales } from "../navigation";

export default createMiddleware({
  // A list of all locales that are supported
  locales: ["en", "ar"],

  // Used when no locale matches
  defaultLocale: "en",
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(ar|en)/:path*"],
  localePrefix,
  locales,
};
