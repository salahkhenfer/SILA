/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: false,
  i18n: {
    defaultLocale: "en",
    locales: ["en", "ar"],
  },
};

export default nextConfig;
