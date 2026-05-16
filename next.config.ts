import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    viewTransition: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "happiness.bymany.bg",
        pathname: "/images/**",
      },
    ],
  },
};

export default nextConfig;
