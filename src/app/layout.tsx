import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MobileStickyCTA } from "@/components/MobileStickyCTA";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.fazildigital.com"),
  title: {
    default: "Mohammad Fazil | Digital Consultant in Dubai",
    template: "%s | Mohammad Fazil",
  },
  description:
    "Digital Consultant based in Dubai, specializing in SEO, Digital Marketing, Paid Ads, Web Development and AI Automation for UAE & Saudi Arabia.",
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
      <head>
        <link rel="stylesheet" href="https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&amp;f[]=satoshi@400,500,600,700&amp;display=swap" />
      </head>
      <body className="min-h-full flex flex-col font-body bg-primary text-bg-base">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <MobileStickyCTA />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
