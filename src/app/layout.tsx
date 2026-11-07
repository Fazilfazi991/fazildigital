import type { Metadata } from "next";
import "./globals.css";
import "./home.css";
import "./site.css";
import "./refresh.css";
import localFont from "next/font/local";
import { SiteChrome } from "@/components/SiteChrome";
import { Analytics } from "@/components/Analytics";
const manrope = localFont({ src: "./fonts/manrope-latin.woff2", variable: "--fd-sans", display: "swap", weight: "200 800" });
const editorial = localFont({ src: "./fonts/instrument-serif-latin.woff2", variable: "--fd-serif", display: "swap", weight: "400" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.fazildigital.com"),
  title: {
    default: "SEO Consultant Saudi Arabia | Fazil Digital",
    template: "%s | Fazil Digital",
  },
  description:
    "SEO and organic growth consultancy for Saudi businesses, with direct support from Mohammad Fazil.",
  icons: {
    icon: [{ url: "/icon.png", type: "image/png", sizes: "512x512" }],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    locale: "en_SA",
    siteName: "Fazil Digital",
  },
  twitter: {
    card: "summary_large_image",
    site: "@fazilfazi",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased`}>
      <body className={`min-h-full flex flex-col font-body bg-primary text-bg-base ${manrope.variable} ${editorial.variable}`}>
        <Analytics />
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
