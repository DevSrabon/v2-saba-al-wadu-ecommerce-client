/** @type {import('next').NextConfig} */
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "m360ict-ecommerce.s3.ap-south-1.amazonaws.com",
      },
    ],
  },
};

export default withNextIntl(nextConfig);
