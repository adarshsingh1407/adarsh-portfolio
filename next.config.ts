import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  images: {
    domains: ["cdn-images-1.medium.com"],
  },
};

export default withNextIntl(nextConfig);
