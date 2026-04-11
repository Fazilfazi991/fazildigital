import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/Button";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Digital Marketing Expert in Dubai | Mohammad Fazil | Fazil Digital",
  description: "Looking for a digital marketing expert in Dubai? Mohammad Fazil delivers SEO, paid ads and AI automation directly to mid-size UAE businesses. No agencies. Free growth audit.",
  alternates: {
    canonical: "https://fazildigital.com/digital-marketing-expert-dubai",
  }
};

export default function DigitalMarketingExpertDubai() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://fazildigital.com/#person",
        "name": "Mohammad Fazil",
        "url": "https://fazildigital.com",
        "jobTitle": "Digital Marketing Expert",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Dubai",
          "addressCountry": "AE"
        }
      },
      {
        "@type": "ProfessionalService",
        "name": "Fazil Digital Consulting",
        "url": "https://fazildigital.com/digital-marketing-expert-dubai",
        "image": "https://fazildigital.com/og-image.jpg",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Dubai",
          "addressCountry": "AE"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What does a digital marketing expert in Dubai actually do?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A digital marketing expert in Dubai like Mohammad Fazil provides senior-level strategy across SEO, paid advertising, and AI automation. Unlike agencies, an expert works directly on your accounts to ensure zero briefing loss and maximum ROI."
            }
          },
          {
            "@type": "Question",
            "name": "How is Mohammad different from a digital marketing agency in Dubai?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Mohammad provides direct senior access. When you hire him, you get his personal expertise on every call and campaign—no junior account managers or offshore execution."
            }
          },
          {
            "@type": "Question",
            "name": "How much does a digital marketing expert cost in Dubai?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Costs vary based on scope, but working with a direct expert often provides better value than an agency by eliminating overhead costs and junior-staff inefficiencies. Mohammad offers transparent, value-based pricing."
            }
          },
          {
            "@type": "Question",
            "name": "How long before I see results from digital marketing in Dubai?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Paid ads can show results in days, while SEO typically takes 3-6 months to build authority. Mohammad focuses on quick-win optimizations alongside long-term growth."
            }
          },
          {
            "@type": "Question",
            "name": "Does Mohammad work with businesses outside Dubai in the UAE?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, Mohammad works with mid-size businesses across the UAE (Abu Dhabi, Sharjah) and Saudi Arabia (Riyadh, Jeddah, Dammam)."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <Script id="schema-structured-data" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-primary px-4 sm:px-6 lg:px-8 border-b border-white/5">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 blur-[120px] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-syne font-bold text-bg-base tracking-tight leading-tight mb-8">
            Digital Marketing Expert in Dubai — Senior Strategy, Direct Access
          </h1>
          <p className="text-xl md:text-2xl text-text-muted max-w-3xl mx-auto leading-relaxed mb-12">
            If you are searching for a digital marketing expert in Dubai who delivers senior strategy — not junior execution — you have found him. Mohammad Fazil partners directly with mid-size businesses across the UAE to grow revenue through SEO, paid ads, social media, web development, and AI automation. No account managers. No briefing loss. Just results.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button href="/contact" className="w-full sm:w-auto text-lg px-10 py-5">Claim Your Free Growth Audit</Button>
            <p className="text-sm text-text-muted italic sm:max-w-[200px] sm:text-left">
              30 minutes. No pitch. Just clarity on your biggest opportunity.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-24 bg-primary/50 px-4 sm:px-6 lg:px-8 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-syne font-bold text-bg-base">Why Mid-size Dubai Businesses Choose Mohammad</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Direct Senior Access", desc: "No junior account managers. You work directly with Mohammad on every strategic decision." },
              { title: "GCC-Specific Strategies", desc: "Native understanding of Dubai, Riyadh, and Jeddah market nuances and search behaviors." },
              { title: "Transparent Pricing", desc: "No hidden agency margins. Flat retainers or performance-based structures that align with your ROI." },
              { title: "Proven Revenue Impact", desc: "Focus on closed-won revenue and qualified pipeline, not vanity metrics like reach or likes." }
            ].map((prop, i) => (
              <div key={i} className="p-8 rounded-2xl border border-white/10 bg-white/5 hover:border-accent/40 transition-colors">
                <div className="text-accent text-2xl font-bold mb-4">0{i+1}</div>
                <h3 className="text-xl font-syne font-bold text-bg-base mb-3">{prop.title}</h3>
                <p className="text-text-muted leading-relaxed">{prop.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-24 bg-primary px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-syne font-bold text-bg-base mb-4">Core Specialist Services</h2>
            <p className="text-text-muted max-w-2xl mx-auto">Integrated performance marketing designed to scale business in the UAE.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-10 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
              <h3 className="text-2xl font-syne font-bold text-bg-base mb-4">SEO Dubai</h3>
              <p className="text-text-muted mb-6">Dominate commercial intent search terms in the UAE. From technical foundations to localized content clusters that rank for years.</p>
              <Link href="/services/seo" className="text-accent font-bold hover:underline underline-offset-4">Explore SEO Strategy &rarr;</Link>
              <div className="mt-4 flex gap-4 text-xs font-medium text-text-muted/60">
                <Link href="/dubai/seo" className="hover:text-accent">Dubai SEO</Link>
                <Link href="/riyadh/seo" className="hover:text-accent">Riyadh SEO</Link>
              </div>
            </div>
            <div className="p-10 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
              <h3 className="text-2xl font-syne font-bold text-bg-base mb-4">Paid Ads UAE</h3>
              <p className="text-text-muted mb-6">Performance-driven media buying on Google, Meta, and Snapchat. We optimize for CPL and ROAS, not just impressions.</p>
              <Link href="/services/paid-ads" className="text-accent font-bold hover:underline underline-offset-4">Explore Paid Ads &rarr;</Link>
              <div className="mt-4 flex gap-4 text-xs font-medium text-text-muted/60">
                <Link href="/dubai/paid-ads" className="hover:text-accent">Dubai Paid Ads</Link>
                <Link href="/riyadh/paid-ads" className="hover:text-accent">Riyadh Paid Ads</Link>
              </div>
            </div>
            <div className="p-10 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
              <h3 className="text-2xl font-syne font-bold text-bg-base mb-4">Social Media Management Dubai</h3>
              <p className="text-text-muted mb-6">Building brand authority through authentic content and community management across Instagram, TikTok, and LinkedIn.</p>
              <Link href="/services/social-media-management" className="text-accent font-bold hover:underline underline-offset-4">Explore Social Strategy &rarr;</Link>
            </div>
            <div className="p-10 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
              <h3 className="text-2xl font-syne font-bold text-bg-base mb-4">AI Automation UAE</h3>
              <p className="text-text-muted mb-6">Scale without increasing headcount. Custom workflows and LLM integrations that automate your most expensive manual tasks.</p>
              <Link href="/services/ai-automation" className="text-accent font-bold hover:underline underline-offset-4">Explore AI Automation &rarr;</Link>
            </div>
          </div>
          <div className="mt-12 text-center">
             <Link href="/services/digital-marketing" className="text-bg-base/80 hover:text-accent font-medium underline underline-offset-4">
               View Full Digital Marketing Strategy &rarr;
             </Link>
          </div>
        </div>
      </section>

      {/* Case Study Teaser */}
      <section className="py-24 bg-[#050505] border-y border-white/5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-syne font-bold text-bg-base mb-8">The Results of Direct Access Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 text-left">
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <span className="text-accent font-bold text-sm block mb-2">E-commerce, Dubai</span>
              <p className="text-xl font-bold text-bg-base mb-4">+180% Organic Traffic Growth</p>
              <p className="text-sm text-text-muted">Achieved within 6 months of re-engineering the SEO architecture and content strategy.</p>
            </div>
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <span className="text-accent font-bold text-sm block mb-2">Fintech, Riyadh</span>
              <p className="text-xl font-bold text-bg-base mb-4">3.2x ROAS in 90 Days</p>
              <p className="text-sm text-text-muted">Full-funnel campaign optimization and landing page re-development for the Saudi market.</p>
            </div>
          </div>
          <Button href="/case-studies" variant="secondary">View More Case Studies &rarr;</Button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-primary px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-syne font-bold text-bg-base mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              { q: "What does a digital marketing expert in Dubai actually do?", a: "A digital marketing expert like Mohammad Fazil provides senior-level strategy across SEO, paid advertising, and AI automation. Unlike agencies, an expert works directly on your accounts to ensure zero briefing loss and maximum ROI." },
              { q: "How is Mohammad different from a digital marketing agency in Dubai?", a: "Mohammad provides direct senior access. When you hire him, you get his personal expertise on every call and campaign—no junior account managers or offshore execution." },
              { q: "How much does a digital marketing expert cost in Dubai?", a: "Costs vary based on scope, but working with a direct expert often provides better value than an agency by eliminating overhead costs and junior-staff inefficiencies. Mohammad offers transparent, value-based pricing." },
              { q: "How long before I see results from digital marketing in Dubai?", a: "Paid ads can show results in days, while SEO typically takes 3-6 months to build authority. Mohammad focuses on quick-win optimizations alongside long-term growth." },
              { q: "Does Mohammad work with businesses outside Dubai in the UAE?", a: "Yes, Mohammad works with mid-size businesses across the UAE (Abu Dhabi, Sharjah) and Saudi Arabia (Riyadh, Jeddah, Dammam)." }
            ].map((faq, i) => (
              <div key={i} className="border-b border-white/10 pb-6">
                <h3 className="text-lg font-bold text-bg-base mb-2">{faq.q}</h3>
                <p className="text-text-muted leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-primary relative overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-accent/5 pointer-events-none"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-syne font-bold text-bg-base mb-8">Ready to Scale Your Digital Presence in Dubai?</h2>
          <p className="text-xl text-text-muted mb-12 max-w-2xl mx-auto">
            Book a free 30-minute discovery call. No pitch. Just clarity on your biggest untapped opportunity.
          </p>
          <div className="flex flex-col items-center gap-6">
            <Button href="/contact" className="text-lg px-12 py-5">Claim Your Free Growth Audit</Button>
            <p className="text-sm text-text-muted italic">30 minutes. No pitch. Just clarity on your biggest opportunity.</p>
          </div>
        </div>
      </section>

      {/* Trust Badges Strip */}
      <div className="bg-[#050505] border-t border-white/5 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-x-12 gap-y-6 text-[11px] md:text-xs font-bold uppercase tracking-widest text-accent/80">
          <span>Based in Dubai</span>
          <span>UAE & Saudi Arabia</span>
          <span>Direct Senior Access</span>
          <span>ROI Focus</span>
        </div>
      </div>
    </>
  );
}
