import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { locations } from "@/data/locations";
import { services } from "@/data/services";
import { Button } from "@/components/Button";

interface Props {
  params: Promise<{ city: string }>;
}

export async function generateStaticParams() {
  return locations.map((l) => ({ city: l.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await params;
  const location = locations.find((l) => l.slug === city);
  if (!location) return {};

  const title = `Digital Consultant in ${location.city} | SEO, Marketing & Web Development | Mohammad Fazil`;
  const description = `Mohammad Fazil is a digital consultant offering SEO, digital marketing, paid ads, web development, AI automation and SaaS development for mid-size businesses in ${location.city}, ${location.country}.`;

  const isUAE = ["dubai", "abu-dhabi", "sharjah", "ajman"].includes(city);
  const isSA = ["riyadh", "jeddah", "dammam"].includes(city);
  const canonical = `https://www.fazildigital.com/locations/${city}/`;

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
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function LocationHubPage({ params }: Props) {
  const { city } = await params;
  const location = locations.find((l) => l.slug === city);
  if (!location) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Mohammad Fazil Digital Consulting",
    "url": `https://www.fazildigital.com/locations/${city}/`,
    "areaServed": {
      "@type": "City",
      "name": location.city,
      "addressCountry": location.country === "UAE" ? "AE" : "SA",
    },
    "employee": {
      "@type": "Person",
      "name": "Mohammad Fazil",
      "sameAs": "https://linkedin.com/in/fazilfazi"
    }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="pt-24 pb-20 border-b border-white/5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-text-muted mb-8 flex items-center gap-2">
            <Link href="/" className="hover:text-accent">Home</Link>
            <span>/</span>
            <Link href="/locations" className="hover:text-accent">Locations</Link>
            <span>/</span>
            <span className="text-accent">{location.city}</span>
          </nav>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-bg-base mb-6 leading-tight">
            Digital Consultant in {location.city} — Services for Mid-Size Businesses
          </h1>
          <p className="text-xl text-text-muted mb-10 max-w-3xl leading-relaxed">
            Mohammad Fazil delivers senior-level digital strategy and execution for companies in {location.city}, {location.country}. {location.localContext}
          </p>
          <Button href="/contact" className="text-lg px-8 py-4">Book a Call in {location.city}</Button>
        </div>
      </section>

      {/* Services in This City */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-bg-base mb-12">
            Services in {location.city}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/${location.slug}/${s.slug}`}
                className="group border border-white/10 bg-[#0A0A0A] p-8 hover:border-accent/40 hover:-translate-y-0.5 transition-all duration-300 block"
              >
                <h3 className="text-xl font-heading font-bold text-bg-base mb-3 group-hover:text-accent transition-colors">{s.name}</h3>
                <p className="text-text-muted mb-6 text-sm leading-relaxed">{s.shortDescription}</p>
                <span className="text-accent text-sm font-medium inline-flex items-center">
                  {s.name} in {location.city} <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About City Market */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#050505] border-b border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-bg-base mb-8">
            The {location.city} Digital Market
          </h2>
          <div className="space-y-6 text-text-muted text-lg leading-relaxed">
            <p>
              {location.city} is one of the most competitive and digitally advanced markets in the {location.country === "UAE" ? "UAE" : "Kingdom of Saudi Arabia"}. Businesses here are increasingly investing in digital channels to capture a growing, tech-savvy audience.
            </p>
            <p>
              {location.localContext} With deep knowledge of how local consumers and B2B buyers behave in {location.city}, Mohammad crafts strategies that actually convert — not just strategies that look good in a report.
            </p>
          </div>
        </div>
      </section>

      {/* Why Businesses Choose Fazil */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-b border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-bg-base mb-12">
            Why {location.city} Businesses Choose Fazil
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "No Agency Layers", desc: "Direct access to Mohammad — your strategist and executor are the same person." },
              { title: "GCC Market Expertise", desc: `Deep understanding of the ${location.city} digital landscape, consumer behavior, and competitive dynamics.` },
              { title: "Full-Service Coverage", desc: "7 core services under one roof — from SEO to AI automation, so your strategy is always coherent." },
              { title: "Measurable Outcomes", desc: "Every engagement is tied to real business metrics: leads, revenue, ROI — not vanity numbers." },
            ].map((item) => (
              <div key={item.title} className="border border-white/10 bg-[#0A0A0A] p-8">
                <span className="text-accent font-bold text-xl mb-4 block"></span>
                <h3 className="font-heading font-bold text-bg-base text-xl mb-3">{item.title}</h3>
                <p className="text-text-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-bg-base mb-6">
            Ready to grow your business in {location.city}?
          </h2>
          <p className="text-xl text-text-muted mb-10">
            Book a free 30-minute discovery call. No pitch, no pressure.
          </p>
          <Button href="/contact" className="text-lg px-10 py-4">Book Your Free Call</Button>
        </div>
      </section>
    </>
  );
}
