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
    formats: ["image/avif", "image/webp"],
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
      { source: "/snapchat-ads-saudi-arabia-benchmarks", destination: "/blog/snapchat-ads-cpa-benchmarks-saudi-arabia-2026/", permanent: true },
      { source: "/dubai/social-media", destination: "/dubai/social-media-management/", permanent: true },
      { source: "/case-studies/dammam-logistics-seo", destination: "/case-studies/dammam-marketing/", permanent: true },
      { source: "/case-studies/dental-seo-dubai", destination: "/case-studies/dubai-seo/", permanent: true },
    ];
  },
};

export default nextConfig;
