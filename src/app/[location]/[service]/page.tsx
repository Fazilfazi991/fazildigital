import { Metadata } from "next";
import { notFound } from "next/navigation";
import { services } from "@/data/services";
import { locations } from "@/data/locations";
import { getMoneyPageLayout } from "@/data/moneyPageLayouts";
import { BlockRenderer } from "@/components/money-pages/BlockRenderer";

interface Props {
  params: Promise<{ location: string; service: string }>;
}

/**
 * This generates all 36+ money pages at build time (6 cities × 7 services).
 * Add more cities to data/locations.ts and they are automatically included.
 */
export async function generateStaticParams() {
  const params: { location: string; service: string }[] = [];
  for (const loc of locations) {
    for (const svc of services) {
      params.push({ location: loc.slug, service: svc.slug });
    }
  }
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { location: locationSlug, service: serviceSlug } = await params;

  const location = locations.find((l) => l.slug === locationSlug);
  const service = services.find((s) => s.slug === serviceSlug);
  if (!location || !service) return {};

  const title = `${service.name} Expert in ${location.city} | ${location.country} | Mohammad Fazil`;
  const description = `Looking for a ${service.name.toLowerCase()} expert in ${location.city}? Mohammad Fazil offers senior-level ${service.name.toLowerCase()} for mid-size businesses in ${location.city} and across ${location.country}.`;

  const isUAE = ["dubai", "abu-dhabi", "sharjah", "ajman"].includes(locationSlug);
  const isSA = ["riyadh", "jeddah", "dammam"].includes(locationSlug);
  const canonical = `https://fazildigital.com/${locationSlug}/${serviceSlug}`;

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        ...(isUAE ? { "en-ae": canonical } : {}),
        ...(isSA ? { "en-sa": canonical } : {}),
        "x-default": canonical,
      },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "Mohammad Fazil",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

import { specializedContentMap } from "@/data/specializedContent";

export default async function MoneyPage({ params }: Props) {
  const { location: locationSlug, service: serviceSlug } = await params;

  const location = locations.find((l) => l.slug === locationSlug);
  const service = services.find((s) => s.slug === serviceSlug);
  if (!location || !service) notFound();

  // Specialized content lookup
  const specialized = specializedContentMap[`${locationSlug}-${serviceSlug}`];

  // Merge FAQs: specialized first, then generic
  const mergedFaqs = specialized?.additionalFAQs 
    ? [...specialized.additionalFAQs, ...service.faqs]
    : service.faqs;

  // JSON-LD structured data for SEO remains exactly the same
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "name": "Mohammad Fazil Digital Consulting",
        "url": `https://fazildigital.com/${locationSlug}/${serviceSlug}`,
        "image": "https://fazildigital.com/og-image.jpg",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": location.city,
          "addressRegion": location.city,
          "addressCountry": location.country === "UAE" ? "AE" : "SA",
        },
        "areaServed": [
          { "@type": "City", "name": location.city },
          { "@type": "Country", "name": location.country === "UAE" ? "United Arab Emirates" : "Saudi Arabia" }
        ]
      },
      {
        "@type": "Service",
        "name": `${service.name} Expert in ${location.city}`,
        "description": service.fullDescription,
        "provider": {
          "@type": "Person",
          "name": "Mohammad Fazil",
          "url": "https://fazildigital.com",
          "sameAs": "https://linkedin.com/in/fazilfazi",
        },
        "areaServed": [
          { "@type": "City", "name": location.city },
          { "@type": "Country", "name": location.country === "UAE" ? "United Arab Emirates" : "Saudi Arabia" }
        ],
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://fazildigital.com" },
          { "@type": "ListItem", "position": 2, "name": location.city, "item": `https://fazildigital.com/locations/${locationSlug}` },
          { "@type": "ListItem", "position": 3, "name": service.name, "item": `https://fazildigital.com/${locationSlug}/${serviceSlug}` },
        ],
      },
      {
        "@type": "FAQPage",
        "mainEntity": mergedFaqs.map((faq) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": { "@type": "Answer", "text": faq.answer },
        })),
      },
    ],
  };

  // Determine the block structure depending on the slug
  const layout = getMoneyPageLayout(locationSlug, serviceSlug, {});

  // Common data passed to all blocks
  const commonData = {
    locationCity: location.city,
    locationCountry: location.country,
    locationSlug: location.slug,
    serviceName: service.name,
    serviceSlug: service.slug,
    longOpening: service.longOpening,
    deliverables: service.deliverables,
    faqs: mergedFaqs,
    marketContext: specialized?.marketContext 
      ? `${specialized.marketContext}\n<hr class="border-white/10 my-8"/>\n${location.marketContext}`
      : location.marketContext,
    localDistricts: location.localDistricts,
    platformNotes: location.platformNotes,
    vision2030Note: location.vision2030Note,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <BlockRenderer layout={layout} commonData={commonData} />
    </>
  );
}
