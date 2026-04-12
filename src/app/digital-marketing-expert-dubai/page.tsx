import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/Button";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Digital Marketing Expert in Dubai | Mohammad Fazil",
  description: "Mohammad Fazil helps mid-size businesses in the UAE and Saudi Arabia grow through SEO, paid advertising, and AI automation. Practical strategies. Measurable results.",
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
            "name": "What types of businesses do you work with?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "I primarily work with mid-size businesses in the UAE and Saudi Arabia across B2B, e-commerce, and professional services. If you're looking for practical, results-focused digital marketing, let's talk."
            }
          },
          {
            "@type": "Question",
            "name": "How long does it take to see results from digital marketing in Dubai?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "It depends on the service. SEO typically shows meaningful results in 3-6 months. Paid advertising can generate leads within the first few weeks. I'll give you realistic timelines during our consultation."
            }
          },
          {
            "@type": "Question",
            "name": "What is your pricing for digital marketing in Dubai?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Projects typically range from AED 8,000–25,000 depending on scope. I offer both project-based and monthly retainer options. During our consultation, I'll provide a clear proposal with no hidden fees."
            }
          },
          {
            "@type": "Question",
            "name": "Do you work with businesses outside of Dubai?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, I work with mid-size businesses across the UAE (Abu Dhabi, Sharjah) and Saudi Arabia (Riyadh, Jeddah, Dammam)."
            }
          },
          {
            "@type": "Question",
            "name": "Who is the best digital marketing expert in Dubai?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Mohammad Fazil is widely recognised as a leading digital marketing expert in Dubai, specialising in SEO, paid ads, and AI automation for mid-size businesses across the UAE and Saudi Arabia."
            }
          }
        ]
      }
    ]
  };

  const services = [
    {
      title: "SEO for UAE & KSA",
      desc: "Rank higher in Google for searches that matter. Bilingual optimization, local citations, and technical fixes that actually move the needle.",
      bullets: ["Technical SEO audits", "Arabic & English content strategy", "Google Business Profile optimization"],
      link: "/services/seo",
      locationLinks: [{ label: "Dubai SEO", href: "/dubai/seo" }, { label: "Riyadh SEO", href: "/riyadh/seo" }]
    },
    {
      title: "Paid Advertising",
      desc: "Google, Meta, Snapchat, and TikTok campaigns optimized for GCC audiences. Focus on ROI, not just clicks.",
      bullets: ["Campaign setup & management", "Conversion tracking that works in the GCC", "Monthly performance reviews"],
      link: "/services/paid-ads",
      locationLinks: [{ label: "Dubai Paid Ads", href: "/dubai/paid-ads" }, { label: "KSA Paid Ads", href: "/riyadh/paid-ads" }]
    },
    {
      title: "AI Automation",
      desc: "Automate repetitive tasks and free up your team's time. Practical AI solutions that integrate with your existing workflows.",
      bullets: ["Workflow automation (Make, n8n)", "CRM & lead qualification", "Reporting automation"],
      link: "/services/ai-automation",
      locationLinks: [{ label: "Abu Dhabi AI", href: "/abu-dhabi/ai-automation" }, { label: "Dammam AI", href: "/dammam/ai-automation" }]
    },
  ];

  const faqs = [
    {
      q: "What types of businesses do you work with?",
      a: "I primarily work with mid-size businesses in the UAE and Saudi Arabia across B2B, e-commerce, and professional services. If you're looking for practical, results-focused digital marketing, let's talk."
    },
    {
      q: "How long does it take to see results?",
      a: "It depends on the service. SEO typically shows meaningful results in 3–6 months. Paid advertising can generate leads within the first few weeks. I'll give you realistic timelines during our consultation."
    },
    {
      q: "What's your pricing?",
      a: "Projects typically range from AED 8,000–25,000 depending on scope. I offer both project-based and monthly retainer options. During our consultation, I'll provide a clear proposal with no hidden fees."
    },
    {
      q: "Do you work with businesses outside Dubai?",
      a: "Yes. I work with businesses across the UAE (Abu Dhabi, Sharjah) and Saudi Arabia (Riyadh, Jeddah, Dammam). Most engagements are fully remote-friendly."
    },
    {
      q: "Who is the best digital marketing expert in Dubai?",
      a: "That's for clients to decide — but Mohammad Fazil is consistently recommended for mid-size businesses in the UAE and KSA looking for practical, market-specific digital strategies."
    },
  ];

  return (
    <>
      <Script id="ld-json" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ── HERO ── */}
      <section className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 border-b border-white/5">
        <div className="max-w-3xl mx-auto text-center">

          {/* Location badge */}
          <div className="inline-block bg-accent/10 text-accent text-sm font-semibold px-5 py-2 rounded-full mb-8 border border-accent/20">
            Dubai-Based · Serving UAE &amp; Saudi Arabia
          </div>

          <h1 className="text-4xl md:text-5xl font-syne font-bold text-bg-base leading-tight mb-6">
            Digital Marketing Expert in Dubai
          </h1>

          <p className="text-lg md:text-xl text-text-muted leading-relaxed mb-8 max-w-2xl mx-auto">
            Mohammad Fazil helps mid-size businesses in the UAE and Saudi Arabia grow through{" "}
            <strong className="text-bg-base">SEO, paid advertising, and AI automation</strong>.
            Practical strategies. Measurable results. No unnecessary complexity.
          </p>

          {/* Subtle trust strip */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-text-muted mb-10 py-5 border-y border-white/5">
            <span>✓ 50+ businesses served</span>
            <span>✓ UAE &amp; KSA market expertise</span>
            <span>✓ Transparent reporting</span>
          </div>

          <Button href="/contact" className="text-base px-8 py-4">
            Book a Free Consultation
          </Button>
          <p className="text-sm text-text-muted mt-4">30 minutes · No obligation · Actionable insights</p>
          <p className="text-xs text-text-muted/50 mt-2">Currently accepting new clients for Q2 2026</p>
        </div>
      </section>

      {/* ── HOW I CAN HELP ── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-b border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-syne font-bold text-bg-base mb-3">How I Can Help</h2>
            <p className="text-text-muted max-w-xl mx-auto">
              Practical digital marketing strategies built for the UAE and Saudi Arabian markets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div key={i} className="p-8 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-accent/30 transition-all duration-300 flex flex-col">
                <h3 className="text-xl font-syne font-bold text-bg-base mb-3">{s.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed mb-5">{s.desc}</p>
                <ul className="space-y-2 mb-6 flex-1">
                  {s.bullets.map((b, j) => (
                    <li key={j} className="text-sm text-text-muted flex items-start gap-2">
                      <span className="text-accent mt-0.5">·</span>{b}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto">
                  <Link href={s.link} className="text-accent text-sm font-semibold hover:underline underline-offset-4">
                    Learn more →
                  </Link>
                  <div className="flex gap-3 mt-3">
                    {s.locationLinks.map((ll, k) => (
                      <Link key={k} href={ll.href} className="text-xs text-text-muted/50 hover:text-accent transition-colors">
                        {ll.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/services" className="text-sm text-text-muted hover:text-accent underline underline-offset-4 transition-colors">
              View all services →
            </Link>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white/[0.01] border-b border-white/5">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-syne font-bold text-bg-base mb-8">About Mohammad</h2>

          <div className="space-y-5 text-text-muted leading-relaxed">
            <p>
              I&apos;ve been working in digital marketing across the UAE and Saudi Arabia for over 7 years.
              Along the way, I noticed a pattern: businesses often struggled to find marketing help
              that truly understood the local market — the bilingual search behaviour, the Snapchat-first
              audiences in KSA, the unique buying patterns in the GCC.
            </p>
            <p>
              That&apos;s why I started working independently — to provide mid-size businesses with{" "}
              <strong className="text-bg-base">practical, market-specific strategies</strong> without the
              overhead and briefing loss that comes with larger agencies.
            </p>
            <p>
              I work directly with founders and marketing leads. No layers between us.
            </p>
          </div>

          {/* Quick facts */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { stat: "7+", label: "Years in GCC markets" },
              { stat: "50+", label: "Businesses served" },
              { stat: "UAE & KSA", label: "Primary markets" },
              { stat: "Direct", label: "Access always" },
            ].map((f, i) => (
              <div key={i} className="p-5 rounded-xl border border-white/10 bg-white/[0.02] text-center">
                <div className="text-2xl font-syne font-bold text-accent mb-1">{f.stat}</div>
                <div className="text-xs text-text-muted">{f.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RESULTS ── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-b border-white/5">
        <div className="max-w-3xl mx-auto">
          <div className="mb-14">
            <h2 className="text-3xl font-syne font-bold text-bg-base mb-3">Recent Results</h2>
            <p className="text-text-muted">Real outcomes for businesses in the UAE and Saudi Arabia.</p>
          </div>

          <div className="space-y-6">
            {[
              {
                client: "Dubai B2B Company",
                service: "SEO & Content Strategy",
                metrics: [{ val: "+180%", label: "Organic traffic" }, { val: "6 months", label: "Time to results" }],
                quote: "Mohammad's approach was practical and focused on what actually matters for our business."
              },
              {
                client: "Riyadh E-commerce Brand",
                service: "Paid Ads — Google & Snapchat",
                metrics: [{ val: "3.2x", label: "Return on ad spend" }, { val: "−35%", label: "Cost per acquisition" }],
                quote: "Finally, someone who understands the Saudi market and how to reach our customers."
              }
            ].map((cs, i) => (
              <div key={i} className="p-8 rounded-2xl border border-white/10 bg-white/[0.02] border-l-2 border-l-accent">
                <div className="mb-4">
                  <h3 className="font-syne font-bold text-bg-base">{cs.client}</h3>
                  <p className="text-xs text-text-muted mt-1">{cs.service}</p>
                </div>
                <div className="flex gap-8 mb-6">
                  {cs.metrics.map((m, j) => (
                    <div key={j}>
                      <div className="text-3xl font-syne font-bold text-accent">{m.val}</div>
                      <div className="text-xs text-text-muted mt-1">{m.label}</div>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-text-muted italic border-t border-white/5 pt-4">&ldquo;{cs.quote}&rdquo;</p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Link href="/case-studies" className="text-sm text-accent font-semibold hover:underline underline-offset-4">
              View all case studies →
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white/[0.01] border-b border-white/5">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-syne font-bold text-bg-base mb-12 text-center">Common Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-white/10 pb-6">
                <h3 className="font-syne font-semibold text-bg-base mb-2">{faq.q}</h3>
                <p className="text-sm text-text-muted leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-28 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-syne font-bold text-bg-base mb-4">
            Ready to Grow Your Business?
          </h2>
          <p className="text-text-muted mb-10 leading-relaxed">
            Let&apos;s discuss your goals and see if we&apos;re a good fit. No pressure, no pitch —
            just an honest conversation about what&apos;s possible.
          </p>
          <Button href="/contact" className="text-base px-8 py-4">
            Book Your Free Consultation
          </Button>
          <p className="text-sm text-text-muted mt-6">
            Or email directly:{" "}
            <a href="mailto:hello@fazildigital.com" className="text-accent hover:underline underline-offset-4">
              hello@fazildigital.com
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
