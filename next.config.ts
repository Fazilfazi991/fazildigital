import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/blog/:slug.md",
        destination: "/blog/raw/:slug",
      },
    ];
  },
};

export default nextConfig;
