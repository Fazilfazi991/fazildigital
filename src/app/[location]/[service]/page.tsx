import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { services } from "@/data/services";
import { locations } from "@/data/locations";
import { Button } from "@/components/Button";

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

export default async function MoneyPage({ params }: Props) {
  const { location: locationSlug, service: serviceSlug } = await params;

  const location = locations.find((l) => l.slug === locationSlug);
  const service = services.find((s) => s.slug === serviceSlug);
  if (!location || !service) notFound();

  // Related services at the same city (exclude current)
  const relatedServices = services.filter((s) => s.slug !== serviceSlug).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "name": "Mohammad Fazil Digital Consulting",
        "url": `https://fazildigital.com/${locationSlug}/${serviceSlug}`,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": location.city,
          "addressRegion": location.city,
          "addressCountry": location.country === "UAE" ? "AE" : "SA",
        },
      },
      {
        "@type": "Service",
        "name": `${service.name} in ${location.city}`,
        "description": service.fullDescription,
        "provider": {
          "@type": "Person",
          "name": "Mohammad Fazil",
          "url": "https://fazildigital.com",
          "sameAs": "https://linkedin.com/in/fazilfazi",
        },
        "areaServed": {
          "@type": "City",
          "name": location.city,
        },
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
        "mainEntity": service.faqs.map((faq) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": { "@type": "Answer", "text": faq.answer },
        })),
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="pt-24 pb-20 border-b border-white/5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-text-muted mb-8 flex items-center gap-2 flex-wrap">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link href={`/locations/${locationSlug}`} className="hover:text-accent transition-colors">{location.city}</Link>
            <span>/</span>
            <span className="text-accent">{service.name}</span>
          </nav>
          <div className="inline-block border border-accent/30 bg-accent/10 px-4 py-1.5 rounded-full mb-6">
            <span className="text-xs font-semibold text-accent tracking-wider uppercase">{location.city} · {location.country}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-syne font-bold text-bg-base mb-6 leading-tight">
            {service.name} Expert in {location.city} — Direct Senior Access, Measurable Results
          </h1>
          <p className="text-xl text-text-muted mb-10 max-w-3xl leading-relaxed">
            Mohammad Fazil is a {service.name.toLowerCase()} consultant in {location.city} offering senior-level {service.name.toLowerCase()} services for mid-size businesses across {location.country}. Working directly with companies in {location.city} and across the GCC, Mohammad delivers the strategy and execution that produces measurable results — with no account managers and no agency layers between you and the work.
          </p>
          <Button href="/contact" className="text-lg px-8 py-4">Get Your Free 30-Min Digital Audit</Button>
        </div>
      </section>

      {/* Why This City Needs This Service */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-b border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-syne font-bold text-bg-base mb-8">
            Why {location.city} Businesses Need {service.name}
          </h2>
          <div className="space-y-6 text-text-muted text-lg leading-relaxed">
            <p>
              {location.city} businesses that invest in {service.name.toLowerCase()} now are building a compounding asset — organic authority, audience trust, and inbound lead infrastructure that grows in value over time. Those that delay are ceding ground to faster-moving competitors who are already capturing high-intent traffic in {location.city} and across {location.country}.
            </p>
            <p>
              {location.localContext} Generic {service.name.toLowerCase()} approaches built for Western markets do not transfer directly to {location.city}. Every strategy Mohammad builds is tailored to the specific platforms, buyer behaviors, and competitive dynamics of the {location.country} market.
            </p>
          </div>
        </div>
      </section>

      {/* What Mohammad Delivers */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#050505] border-b border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-syne font-bold text-bg-base mb-12">
            What Mohammad Delivers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {service.deliverables.map((item, i) => (
              <div key={i} className="flex items-start gap-4 border border-white/10 bg-[#0A0A0A] px-6 py-5">
                <span className="text-accent font-bold text-lg mt-0.5">✓</span>
                <span className="text-bg-base font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Market Insight — only rendered when rich location data exists */}
      {location.marketContext && (
        <section className="py-24 px-4 sm:px-6 lg:px-8 border-b border-white/5">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-10">
              <span className="text-xs font-semibold tracking-widest text-accent uppercase">Local Market Intelligence</span>
              <div className="flex-1 h-px bg-white/10"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-syne font-bold text-bg-base mb-8">
              {service.name} in {location.city} — What You Need to Know
            </h2>

            {/* Market Context */}
            <p className="text-text-muted text-lg leading-relaxed mb-12">
              {location.marketContext}
            </p>

            {/* Business Districts */}
            {location.localDistricts && location.localDistricts.length > 0 && (
              <div className="mb-12">
                <h3 className="font-syne font-bold text-bg-base text-xl mb-5">Key Business Districts</h3>
                <div className="flex flex-wrap gap-3">
                  {location.localDistricts.map((district) => (
                    <span
                      key={district}
                      className="inline-flex items-center px-4 py-2 border border-white/10 bg-[#0A0A0A] text-sm text-text-muted rounded"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mr-2.5 flex-shrink-0"></span>
                      {district}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Platform Notes */}
            {location.platformNotes && (
              <div className="border border-white/10 bg-[#0A0A0A] p-8 mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <svg className="w-5 h-5 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <h3 className="font-syne font-bold text-bg-base text-lg">Platform & Channel Intelligence</h3>
                </div>
                <p className="text-text-muted leading-relaxed">{location.platformNotes}</p>
              </div>
            )}

            {/* Vision 2030 Note — Saudi cities only */}
            {location.vision2030Note && (
              <div className="border-l-2 border-accent pl-6 py-2">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-bold tracking-widest text-accent uppercase">Vision 2030 Context</span>
                </div>
                <p className="text-text-muted leading-relaxed">{location.vision2030Note}</p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* The Mohammad Difference */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-b border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-syne font-bold text-bg-base mb-8">
            The Mohammad Difference
          </h2>
          <div className="space-y-6 text-text-muted text-lg leading-relaxed">
            <p>
              Most {location.city} agencies will pitch you a senior team and hand you off to a junior. When you work with Mohammad, you work with Mohammad — on every call, every strategy session, every deliverable.
            </p>
            <p>
              This means faster decisions, no briefing loss, and a strategy that evolves in real-time as your market changes.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {["Zero Middlemen", "Direct Senior Access", "Full Accountability"].map((p) => (
              <div key={p} className="border border-white/10 p-6 bg-[#0A0A0A]">
                <span className="text-accent font-bold text-2xl">✓</span>
                <p className="text-bg-base font-syne font-bold mt-3">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#050505] border-b border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-syne font-bold text-bg-base mb-12">The Process</h2>
          <div className="space-y-0">
            {[
              { step: "Discovery & Audit", detail: `We start with a thorough review of your current ${service.name.toLowerCase()} position in the ${location.city} market.` },
              { step: "Strategy & Roadmap", detail: `A clear, prioritized plan tailored for ${location.city} — with timelines, targets, and KPIs.` },
              { step: "Execution", detail: `Mohammad executes the plan directly. No briefing chains. No delays.` },
              { step: "Reporting & Iteration", detail: "Regular reporting, honest conversations about what's working, and continuous optimization." },
            ].map(({ step, detail }, i) => (
              <div key={step} className="flex gap-8 pb-12 relative">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full border-2 border-accent flex items-center justify-center text-accent font-syne font-bold text-lg flex-shrink-0 bg-primary z-10">
                    {i + 1}
                  </div>
                  {i < 3 && <div className="flex-1 w-px bg-white/10 mt-2"></div>}
                </div>
                <div className="pt-2 pb-8">
                  <h3 className="text-xl font-syne font-bold text-bg-base mb-2">{step}</h3>
                  <p className="text-text-muted leading-relaxed">{detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-b border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-syne font-bold text-bg-base mb-12">
            FAQ — {service.name} in {location.city}
          </h2>
          <div className="space-y-4">
            {service.faqs.map((faq, i) => (
              <div key={i} className="border border-white/10 bg-[#0A0A0A] p-6">
                <h3 className="font-syne font-bold text-bg-base mb-3">{faq.question}</h3>
                <p className="text-text-muted leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#050505] border-b border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-syne font-bold text-bg-base mb-8">
            Other Services in {location.city}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedServices.map((s) => (
              <Link
                key={s.slug}
                href={`/${locationSlug}/${s.slug}`}
                className="group border border-white/10 bg-[#0A0A0A] p-6 hover:border-accent/40 transition-all duration-300 block"
              >
                <h3 className="font-syne font-bold text-bg-base mb-2 group-hover:text-accent transition-colors">{s.name}</h3>
                <p className="text-text-muted text-sm mb-4">{s.shortDescription}</p>
                <span className="text-accent text-sm font-medium">View →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 z-0 flex justify-center items-center opacity-10">
          <div className="w-[600px] h-[600px] rounded-full bg-accent blur-3xl"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-syne font-bold text-bg-base mb-6 leading-tight">
            Ready for {service.name} in {location.city}?
          </h2>
          <p className="text-xl text-text-muted mb-10 max-w-2xl mx-auto">
            Book a free 30-minute discovery call. Mohammad will review your current {service.name.toLowerCase()} position and tell you exactly where the opportunities are.
          </p>
          <Button href="/contact" className="text-lg px-10 py-5">Get Your Free 30-Min Digital Audit</Button>
          <p className="mt-6 text-text-muted text-sm tracking-wide">No agencies. No junior staff. Just Mohammad.</p>
        </div>
      </section>
    </>
  );
}
