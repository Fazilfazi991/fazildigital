import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { services } from "@/data/services";
import { locations } from "@/data/locations";
import { Button } from "@/components/Button";
import ProcessTimeline from "@/components/visuals/ProcessTimeline";
import PlatformMap from "@/components/visuals/PlatformMap";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};

  const title = `${service.name} Consultant Dubai | UAE & Saudi Arabia | Mohammad Fazil`;
  const description = `Mohammad Fazil offers ${service.name.toLowerCase()} for mid-size businesses in Dubai and Saudi Arabia. Direct senior expertise, measurable results, no agency middlemen.`;

  return {
    title,
    description,
    alternates: { canonical: `https://fazildigital.com/services/${slug}` },
    openGraph: {
      title,
      description,
      url: `https://fazildigital.com/services/${slug}`,
      siteName: "Mohammad Fazil",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const tier1Locations = locations.filter((l) => l.tier === 1);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.name,
    "description": service.fullDescription,
    "provider": {
      "@type": "Person",
      "name": "Mohammad Fazil",
      "url": "https://fazildigital.com",
      "sameAs": "https://linkedin.com/in/fazilfazi"
    },
    "areaServed": ["Dubai", "Riyadh", "Jeddah", "Abu Dhabi", "UAE", "Saudi Arabia"],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="relative pt-24 pb-20 border-b border-white/5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-text-muted mb-8 flex items-center gap-2">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-accent transition-colors">Services</Link>
            <span>/</span>
            <span className="text-accent">{service.name}</span>
          </nav>
          <h1 className="text-4xl md:text-6xl font-syne font-bold text-bg-base mb-6 leading-tight">
            {service.name} for Mid-Size Businesses in Dubai & Saudi Arabia
          </h1>
          <div className="text-xl text-text-muted mb-10 max-w-3xl leading-relaxed">
            {slug === "seo" ? (
              <p>
                If you are a mid-size business in Dubai or Riyadh and you are not on page 1 of Google for your core service and location keywords, you are invisible to 74% of potential customers. Mohammad does not do generic SEO. He builds search strategies for the GCC reality: bilingual search behavior, mobile-first users, Snapchat-driven discovery in KSA, and the unique commercial intent patterns of UAE consumers. This is not about rankings. It is about being found by the right people at the moment they are ready to buy.
              </p>
            ) : slug === "paid-ads" ? (
              <p>
                In Saudi Arabia, ignoring Snapchat means ignoring the majority of users under 35. In Dubai, platform mix matters — LinkedIn and Google for B2B, TikTok and Meta for consumer brands. Mohammad does not run generic ad campaigns. He builds platform-specific strategies for the GCC: Snapchat-first funnels for KSA consumer brands, LinkedIn and Google combinations for B2B in Dubai, and TikTok creative that actually resonates in Abu Dhabi. You will see ROAS, not just reports.
              </p>
            ) : (
              <p>{service.fullDescription}</p>
            )}
          </div>
          <div className="flex flex-col items-start gap-4">
            <Button href="/contact" className="text-lg px-8 py-4">Claim Your Free Growth Audit</Button>
            <p className="text-sm text-text-muted italic">30 minutes. No pitch. Just clarity on your biggest opportunity.</p>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-b border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-syne font-bold text-bg-base mb-12">What&apos;s Included</h2>
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

      {/* Who It's For */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-b border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-syne font-bold text-bg-base mb-8">Who This Is For</h2>
          <div className="border-l-2 border-accent pl-8 py-2">
            <p className="text-text-muted text-xl leading-relaxed">{service.whoItsFor}</p>
          </div>
        </div>
      </section>

      {/* Why Fazil */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#050505] border-b border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-syne font-bold text-bg-base mb-8">Why Fazil</h2>
          <div className="space-y-6 text-text-muted text-lg leading-relaxed">
            <p>
              Most agencies assign your account to a junior team member after the pitch. With Mohammad, you get the expert throughout — from the first strategy call to final delivery.
            </p>
            <p>
              Zero middlemen. Direct communication. Clear accountability. This is what mid-size businesses in the UAE and Saudi Arabia deserve but rarely get.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {["Senior-Level Access", "Direct Communication", "Measurable Results"].map((p) => (
              <div key={p} className="border border-white/10 p-6 bg-[#0A0A0A]">
                <span className="text-accent font-bold text-2xl">✓</span>
                <p className="text-bg-base font-syne font-bold mt-3">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-b border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-syne font-bold text-bg-base mb-12">The Process</h2>
          <ProcessTimeline />
        </div>
      </section>

      {/* Platform Map — paid-ads and social-media-management only */}
      {(slug === "paid-ads" || slug === "social-media-management") && (
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#050505] border-b border-white/5">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-syne font-bold text-bg-base mb-4">GCC Platform Strategy</h2>
            <p className="text-text-muted mb-10">Not every platform performs equally in every market. Here's how each channel stacks up for UAE vs Saudi Arabia audiences.</p>
            <PlatformMap />
          </div>
        </section>
      )}


      {/* Where I Work (Strategic Internal Linking) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#050505] border-b border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-syne font-bold text-bg-base mb-4">
            Where I Work
          </h2>
          <p className="text-text-muted mb-10 text-lg">
            Delivering high-performance {service.name.toLowerCase()} for mid-size businesses across the UAE and Saudi Arabia.
          </p>
          
          <div className="flex flex-wrap gap-3 mt-8">
            {[
              { name: "Dubai", slug: "dubai" },
              { name: "Abu Dhabi", slug: "abu-dhabi" },
              { name: "Sharjah", slug: "sharjah" },
              { name: "Ajman", slug: "ajman" },
              { name: "Riyadh", slug: "riyadh" },
              { name: "Jeddah", slug: "jeddah" },
              { name: "Dammam", slug: "dammam" }
            ].map((city) => (
              <Link
                key={city.slug}
                href={`/${city.slug}/${service.slug}`}
                className="px-6 py-3 rounded-full border border-white/10 hover:border-accent hover:bg-white/5 text-bg-base transition-all font-medium text-sm"
              >
                {city.name} · {service.name} →
              </Link>
            ))}
            <Link
              href="/markets"
              className="px-6 py-3 rounded-full border border-accent/30 bg-accent/5 hover:bg-accent/10 text-accent transition-all font-bold text-sm"
            >
              Pan-GCC Strategy →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-b border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-syne font-bold text-bg-base mb-12">
            Frequently Asked Questions
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

      {/* Final CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-syne font-bold text-bg-base mb-6">
            Ready to start with {service.name}?
          </h2>
          <p className="text-xl text-text-muted mb-10">
            Book a free 30-minute discovery call. No pitch, no pressure — just an honest assessment of where you stand.
          </p>
          <div className="flex flex-col items-center gap-4">
            <Button href="/contact" className="text-lg px-10 py-4">Claim Your Free Growth Audit</Button>
            <p className="text-sm text-text-muted italic">30 minutes. No pitch. Just clarity on your biggest opportunity.</p>
          </div>
        </div>
      </section>
    </>
  );
}
