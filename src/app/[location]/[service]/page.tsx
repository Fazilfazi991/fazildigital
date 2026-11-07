import { Metadata } from "next";
import { notFound } from "next/navigation";
import { services } from "@/data/services";
import { locations } from "@/data/locations";
import { getMoneyPageLayout } from "@/data/moneyPageLayouts";
import { BlockRenderer } from "@/components/money-pages/BlockRenderer";
import { preservedLegacyCombinationPaths } from "@/data/seo-routes";

interface Props {
  params: Promise<{ location: string; service: string }>;
}

export const dynamicParams = false;

/** Preserve the reviewed legacy routes without multiplying future city/service arrays. */
export async function generateStaticParams() {
  return preservedLegacyCombinationPaths.map(path => {
    const [location, service] = path.split('/').filter(Boolean);
    return { location, service };
  });
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { location: locationSlug, service: serviceSlug } = await params;

  const location = locations.find((l) => l.slug === locationSlug);
  const service = services.find((s) => s.slug === serviceSlug);
  if (!location || !service) return {};

  let hook = "Free Audit";
  if (serviceSlug === "ai-automation") hook = "Reduce Repetitive Manual Work";
  if (serviceSlug === "seo") hook = "Rank Higher on Google";
  if (serviceSlug === "paid-ads") hook = "Stop Wasting Ad Spend";

  const isDammamSeo = locationSlug === "dammam" && serviceSlug === "seo";
  const isRiyadhSeo = locationSlug === "riyadh" && serviceSlug === "seo";
  const title = isDammamSeo
    ? "SEO Services in Dammam | Local & B2B SEO Consultant"
    : isRiyadhSeo
      ? "SEO Services in Riyadh | Arabic & English SEO Consultant"
      : `${service.name} ${location.city}: ${hook} | Fazil Digital`;
  const description = isDammamSeo
    ? "SEO services for Dammam businesses: technical SEO, local search, Google Business Profile, and Arabic-English content strategy for qualified leads."
    : isRiyadhSeo
      ? "SEO services in Riyadh for technical, local, B2B, Arabic and English search. Build qualified visibility with direct senior strategy and clear measurement."
      : `${location.city} ${service.name} expert helping businesses ${hook.toLowerCase()}. Book your free 30-min growth consultation today.`;

  const canonical = `https://www.fazildigital.com/${locationSlug}/${serviceSlug}/`;

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {},
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
        "@type": "Service",
        "url": `https://www.fazildigital.com/${locationSlug}/${serviceSlug}/`,
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
  const layout = getMoneyPageLayout(locationSlug, serviceSlug);

  // Common data passed to all blocks
  const commonData = {
    locationCity: location.city,
    locationCountry: location.country,
    locationSlug: location.slug,
    serviceName: service.name,
    serviceSlug: service.slug,
    longOpening: specialized?.heroIntro || service.longOpening,
    headingText: specialized?.heroHeading,
    deliverables: specialized?.deliverables || service.deliverables,
    faqs: mergedFaqs,
    marketContext: [specialized?.marketContext, location.marketContext].filter(Boolean).join('\n<hr class="border-white/10 my-8"/>\n') || undefined,
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
