import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MobileStickyCTA } from "@/components/MobileStickyCTA";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fazildigital.com"),
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
    canonical: "https://fazildigital.com",
    languages: {
      "en-ae": "https://fazildigital.com/locations/dubai",
      "en-sa": "https://fazildigital.com/locations/riyadh",
    },
    types: {
      "text/plain": "https://fazildigital.com/llms.txt",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-primary text-bg-base font-dm-sans">
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
