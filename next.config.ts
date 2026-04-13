import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "mir-s3-cdn-cf.behance.net" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "zorxmedia.com" },
      { protocol: "https", hostname: "synopslabs.com" },
      { protocol: "https", hostname: "fmauditors.com" },
      { protocol: "https", hostname: "ayishamuneer.com" },
      { protocol: "https", hostname: "desertgp.com" },
      { protocol: "https", hostname: "Stepvisionhotelsupplies.com" },
      { protocol: "https", hostname: "stepvisionhotelsupplies.com" },
      { protocol: "https", hostname: "nuniversalyoga.ae" },
      { protocol: "https", hostname: "www.nuniversalyoga.ae" },
      { protocol: "https", hostname: "www.ayishamuneer.com" },
      { protocol: "https", hostname: "ayishamuneer.com" },
      { protocol: "https", hostname: "www.payyolimixture.co.in" },
      { protocol: "https", hostname: "www.aurorasouq.com" },
      { protocol: "https", hostname: "www.alrizq.sa" },
      { protocol: "https", hostname: "jaypeedent.com" },
      { protocol: "https", hostname: "www.jaypeedent.com" },
      { protocol: "https", hostname: "pixelandpepper.com" },
      { protocol: "https", hostname: "www.pixelandpepper.com" },
      { protocol: "https", hostname: "suntoolsengineering.com" },
      { protocol: "https", hostname: "ahaliagroup.com" },
      { protocol: "https", hostname: "bhnoe-hyundai.com" },
      { protocol: "https", hostname: "duacollege.in" },
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
  async redirects() {
    return [
      {
        source: "/en-US",
        destination: "/",
        permanent: true,
      },
      {
        source: "/blog/seo-cost-dubai",
        destination: "/blog/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
