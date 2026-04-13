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

  let hook = "Free Audit";
  if (serviceSlug === "ai-automation") hook = "Save 10+ Hours/Week";
  if (serviceSlug === "seo") hook = "Rank Higher on Google";
  if (serviceSlug === "paid-ads") hook = "Stop Wasting Ad Spend";

  const title = `${service.name} ${location.city}: ${hook} | Fazil Digital`;
  const description = `${location.city} ${service.name} expert helping businesses ${hook.toLowerCase()}. 50+ clients served in ${location.country}. Book your free 30-min growth consultation today.`;

  const isUAE = ["dubai", "abu-dhabi", "sharjah", "ajman"].includes(locationSlug);
  const isSA = ["riyadh", "jeddah", "dammam"].includes(locationSlug);
  const canonical = `https://www.fazildigital.com/${locationSlug}/${serviceSlug}/`;

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
        "@type": ["LocalBusiness", "ProfessionalService"],
        "name": "Fazil Digital Consulting",
        "url": `https://www.fazildigital.com/${locationSlug}/${serviceSlug}/`,
        "image": "https://www.fazildigital.com/og-image.jpg",
        "description": `${service.name} expertise in ${location.city}. Helping mid-size businesses scale via direct-access strategic consulting.`,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": location.city,
          "addressRegion": location.city,
          "addressCountry": location.country === "UAE" ? "AE" : "SA",
        },
        "areaServed": {
          "@type": "City",
          "name": location.city
        }
      },
      {
        "@type": "Service",
        "name": `${service.name} Expert in ${location.city}`,
        "description": service.fullDescription,
        "provider": {
          "@type": "Person",
          "name": "Mohammad Fazil",
          "url": "https://www.fazildigital.com/",
          "sameAs": "https://linkedin.com/in/fazilfazi",
        },
        "areaServed": {
          "@type": "City",
          "name": location.city
        },
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.fazildigital.com/" },
          { "@type": "ListItem", "position": 2, "name": location.city, "item": `https://www.fazildigital.com/locations/${locationSlug}/` },
          { "@type": "ListItem", "position": 3, "name": service.name, "item": `https://www.fazildigital.com/${locationSlug}/${serviceSlug}/` },
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
