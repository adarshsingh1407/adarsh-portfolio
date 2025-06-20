import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  images: {
    domains: [
      "cdn-images-1.medium.com",
      "media.licdn.com",
      "leetcard.jacoblin.cool",
    ],
  },
};

export default withNextIntl(nextConfig);
