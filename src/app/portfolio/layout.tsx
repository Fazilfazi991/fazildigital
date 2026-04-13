import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio & Clients | Mohammad Fazil - Digital Consultant in Dubai",
  description: "Browse the digital marketing, SEO, and AI automation work Mohammad Fazil has delivered for leading businesses in the UAE and Saudi Arabia.",
  alternates: { canonical: "https://www.fazildigital.com/portfolio/" },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
