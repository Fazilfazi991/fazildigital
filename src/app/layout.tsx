import type { Metadata } from "next";
import "./globals.css";
import "./home.css";
import "./site.css";
import "./visual-reset.css";
import { DM_Sans, Plus_Jakarta_Sans } from "next/font/google";
import { SiteChrome } from "@/components/SiteChrome";
import { Analytics } from "@/components/Analytics";
const plusJakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-plus-jakarta", display: "swap", weight: ["500", "600", "700"] });
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans", display: "swap", weight: ["400", "500", "600", "700"] });

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
      <body className={`min-h-full flex flex-col font-body ${plusJakarta.variable} ${dmSans.variable}`}>
        <Analytics />
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
