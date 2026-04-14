import React from "react";
import { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "Digital Marketing Sharjah | Top Results for SMEs & Family Fleets",
  description: "Scale your Sharjah business with expert SEO, Ads, and AI automation. Localized strategies for Shams, SAIF Zone, and Al Majaz. Rank Top 3 in the Northern Emirates.",
  alternates: {
    canonical: "https://www.fazildigital.com/sharjah/digital-marketing",
  },
};

export default function SharjahDigitalMarketing() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "name": "Fazil Digital Consulting - Sharjah Office",
        "description": "Premium digital marketing consultancy serving Sharjah and the Northern Emirates.",
        "url": "https://www.fazildigital.com/sharjah/digital-marketing",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Sharjah",
          "addressCountry": "AE"
        },
        "areaServed": ["Sharjah", "Ajman", "Umm Al Quwain"]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Why is Sharjah digital marketing different from Dubai?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sharjah marketing requires a focus on Northern Emirates logistics, free zone-specific targeting (Shams, SAIF), and a business culture that prioritizes long-term trust and family-owned legacy scaling."
            }
          },
          {
            "@type": "Question",
            "name": "How long does it take to rank #1 in Sharjah?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "For localized Sharjah keywords, we typically see Page 1 results within 60-90 days due to lower competition compared to Dubai, provided we use high-authority Northern Emirates content clusters."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <Script
        id="sharjah-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="bg-primary pt-24 min-h-screen">
        {/* SECTION 1: HERO */}
        <section className="relative py-20 px-4 overflow-hidden bg-gradient-to-br from-[#1e3a8a] to-[#3b82f6]">
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
            <svg viewBox="0 0 100 100" className="w-full h-full text-white">
              <path d="M0 100 L50 0 L100 100 Z" fill="currentColor" />
            </svg>
          </div>
          <div className="max-w-7xl mx-auto relative z-10 text-center md:text-left">
            <div className="inline-block border border-white/30 bg-white/10 px-4 py-1.5 rounded-full mb-6">
              <span className="text-xs font-bold text-white tracking-widest uppercase">Northern Emirates Hub</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-syne font-bold text-white mb-6 leading-tight">
              Dominating the Sharjah Market <br />
              <span className="text-accent underline decoration-white/30 underline-offset-8">Through Data-First Marketing.</span>
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mb-10 leading-relaxed font-dm-sans">
              Stop competing for Dubai leftovers. Sharjah is the growth engine of the Northern Emirates. Scale your presence in <span className="font-bold text-white">Al Majaz, University City, and SAIF Zone</span> with a strategy built for Sharjah business culture.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Button href="/contact" variant="primary" className="bg-white text-primary border-transparent">
                Claim Your Sharjah Audit
              </Button>
              <div className="flex items-center gap-2 text-white/80">
                <span className="w-10 h-0.5 bg-accent"></span>
                <span className="text-sm font-bold uppercase tracking-wider">Rank #1 in 90 Days</span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: STATS STRIP */}
        <section className="bg-[#f9fafb] border-b border-gray-200 py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { label: "SHARJAH CLIENTS", val: "12+" },
                { label: "AVG. ROI IN Q1", val: "310%" },
                { label: "LOCAL CITATIONS", val: "100%" },
                { label: "SENIOR ACCESS", val: "DIRECT" },
              ].map((stat) => (
                <div key={stat.label} className="text-center md:text-left">
                  <p className="text-2xl font-bold text-primary font-syne">{stat.val}</p>
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3: LOCAL CONTEXT */}
        <section className="py-24 px-4 bg-primary text-bg-base">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-5xl font-syne font-bold leading-tight">
                Why Sharjah is the <br />
                <span className="text-accent">Missing Link</span> In Your Growth.
              </h2>
              <div className="w-24 h-1 bg-accent"></div>
              <p className="text-lg text-text-muted leading-relaxed font-dm-sans">
                Most agencies treat Sharjah as a suburb of Dubai. Huge mistake. Sharjah has a distinct economic identity—from the heavy industry of <span className="text-bg-base font-semibold">Industrial Area 13</span> to the innovation hub of <span className="text-bg-base font-semibold">Sharjah Media City (Shams)</span>.
              </p>
              <ul className="space-y-4">
                {[
                  "Optimized for Shams & SAIF Zone Free Zone Licensing",
                  "Cultural alignment with Al Majaz and University City demographics",
                  "Northern Emirates logistics and supply chain SEO targeting",
                  "Direct capture of the 800,000+ mobile-first Sharjah consumers",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-accent mt-1">✓</span>
                    <span className="text-text-muted">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-square bg-white/[0.03] border border-white/10 rounded-3xl overflow-hidden flex items-center justify-center">
                <div className="text-center p-8">
                  <span className="text-6xl mb-6 block">📍</span>
                  <p className="text-2xl font-bold font-syne mb-2">Sharjah Targeted</p>
                  <p className="text-text-muted text-sm uppercase tracking-widest">Al Majaz | Shams | SAIF | Muwaileh</p>
                </div>
              </div>
              <div className="absolute -bottom-8 -left-8 bg-accent p-8 rounded-2xl shadow-2xl hidden md:block">
                <p className="text-primary font-bold text-4xl font-syne">+140%</p>
                <p className="text-primary/70 text-xs font-bold uppercase tracking-widest">Lead Volume Spike</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: COMPARISON */}
        <section className="py-24 bg-[#050505] border-y border-white/5 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-syne font-bold text-bg-base mb-12 italic">Dubai Strategy &ne; Sharjah Results</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div className="p-8 border border-white/10 rounded-2xl bg-white/[0.01]">
                <h3 className="text-xl font-bold mb-4 text-red-400">The "Dubai Mirror" (Fail)</h3>
                <p className="text-sm text-text-muted leading-relaxed">Most agencies just copy-paste your Dubai ads and change the label. Result? High CPAs and zero resonance with the local Sharjah family business culture.</p>
              </div>
              <div className="p-8 border border-accent/40 rounded-2xl bg-accent/5">
                <h3 className="text-xl font-bold mb-4 text-accent">The Sharjah Specialist (Win)</h3>
                <p className="text-sm text-text-muted leading-relaxed">We build separate Northern Emirates funnels that respect the logistics, pricing sensitivity, and loyalty-first buying patterns of Sharjah consumers.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: PRICING TIERS */}
        <section className="py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-syne font-bold text-bg-base mb-4 tracking-tight">Sharjah Market Entry Tiers</h2>
              <p className="text-text-muted">Direct expertise. No hidden fees. Billed in AED for local Sharjah entities.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  tier: "SME Hub",
                  price: "AED 4,500",
                  desc: "Ideal for Al Majaz retail & Muwaileh startups.",
                  items: ["Local SEO Foundation", "Shams/SAIF Lead Gen", "WhatsApp Automation Prep"],
                },
                {
                  tier: "Growth Pilot",
                  price: "AED 8,500",
                  desc: "Dominate Sharjah search and Northern Emirates delivery.",
                  items: ["Comprehensive Digital Funnel", "Aggressive Competitor Gap Audit", "Bi-Weekly Strategy Calls"],
                  highlight: true,
                },
                {
                  tier: "Enterprise",
                  price: "Custom",
                  desc: "For family fleets and industrial conglomerates.",
                  items: ["Multi-Market Domination (GCC)", "Full Stack AI Implementation", "Quarterly Market Research"],
                },
              ].map((p) => (
                <div key={p.tier} className={`p-10 rounded-3xl border transition-all duration-500 ${p.highlight ? "border-accent bg-accent/5 -translate-y-2 shadow-2xl" : "border-white/5 bg-white/[0.02] hover:border-white/20"}`}>
                  <h3 className="text-2xl font-syne font-bold text-bg-base mb-2">{p.tier}</h3>
                  <p className="text-text-muted text-sm mb-6">{p.desc}</p>
                  <div className="text-3xl font-bold font-syne text-accent mb-8">{p.price}<span className="text-sm text-text-muted font-normal">/mo</span></div>
                  <ul className="space-y-4 mb-10">
                    {p.items.map(i => (
                      <li key={i} className="flex items-center gap-3 text-sm text-bg-base/80">
                        <span className="text-accent font-bold">✓</span> {i}
                      </li>
                    ))}
                  </ul>
                  <Button href="/contact" variant={p.highlight ? "primary" : "secondary"} className="w-full">
                    Start My Sharjah Audit
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 6: FAQ (Schema-Ready) */}
        <section className="py-24 px-4 bg-[#080808] border-t border-white/5">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-syne font-bold text-bg-base mb-12">Sharjah Marketing Insights (FAQ)</h2>
            <div className="space-y-12">
              <div>
                <h4 className="text-xl font-bold text-bg-base mb-3 italic">Why is Sharjah digital marketing different from Dubai?</h4>
                <p className="text-text-muted leading-relaxed">Sharjah marketing requires a focus on Northern Emirates logistics, free zone-specific targeting (Shams, SAIF), and a business culture that prioritizes long-term trust and family-owned legacy scaling. It's not just about "showing an ad"—it's about building authority in the local community hubs.</p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-bg-base mb-3 italic">How long does it take to rank #1 in Sharjah?</h4>
                <p className="text-text-muted leading-relaxed">For localized Sharjah keywords, we typically see Page 1 results within 60-90 days due to lower competition compared to Dubai, provided we use high-authority Northern Emirates content clusters. This creates a high-ROI "Inbound Engine" that captures leads while your competitors are still focused on the expensive Dubai market.</p>
              </div>
            </div>
            <div className="mt-16 p-8 border border-white/10 rounded-2xl bg-white/[0.02] text-center">
              <p className="text-text-muted text-lg mb-6">Need a custom strategy for your Sharjah business?</p>
              <Button href="/contact">Book a Free 30-Min Audit</Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
