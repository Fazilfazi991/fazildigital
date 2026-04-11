import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.fazildigital.com" }],
        destination: "https://fazildigital.com/:path*",
        permanent: true,
      },
    ];
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
