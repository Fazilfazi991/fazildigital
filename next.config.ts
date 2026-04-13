import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mir-s3-cdn-cf.behance.net",
      },
    ],
  },
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
