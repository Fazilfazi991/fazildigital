import type { Metadata } from "next";
import "./globals.css";
import { SiteChrome } from "@/components/SiteChrome";
import { Analytics } from "@/components/Analytics";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.fazildigital.com"),
  title: {
    default: "Mohammad Fazil | Digital Consultant in Dubai",
    template: "%s | Mohammad Fazil",
  },
  description:
    "Digital Consultant based in Dubai, specializing in SEO, Digital Marketing, Paid Ads, Web Development and AI Automation for UAE & Saudi Arabia.",
  icons: {
    icon: [{ url: "/icon.png", type: "image/png", sizes: "512x512" }],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Mohammad Fazil",
  },
  twitter: {
    card: "summary_large_image",
    site: "@fazilfazi",
  },
  // llms.txt — machine-readable site overview for AI crawlers
  alternates: {
    languages: {
      "en-ae": "https://www.fazildigital.com/locations/dubai/",
      "en-sa": "https://www.fazildigital.com/locations/riyadh/",
    },
    types: {
      "text/plain": "https://www.fazildigital.com/llms.txt",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased`}>
      <body className="min-h-full flex flex-col font-body bg-primary text-bg-base">
        <Analytics />
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
