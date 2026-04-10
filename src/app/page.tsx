import { Button } from "@/components/Button";
import { services } from "@/data/services";
import { locations } from "@/data/locations";
import Link from "next/link";
import Script from "next/script";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "name": "Mohammad Fazil",
        "url": "https://fazildigital.com",
        "sameAs": ["https://linkedin.com/in/fazilfazi"],
        "jobTitle": "Digital Consultant",
        "worksFor": {
          "@type": "Organization",
          "name": "Mohammad Fazil Consulting"
        }
      },
      {
        "@type": "LocalBusiness",
        "name": "Mohammad Fazil Digital Consulting",
        "image": "https://fazildigital.com/og-image.jpg",
        "url": "https://fazildigital.com",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Dubai",
          "addressRegion": "Dubai",
          "addressCountry": "AE"
        },
        "areaServed": [
          { "@type": "City", "name": "Dubai", "sameAs": "https://en.wikipedia.org/wiki/Dubai" },
          { "@type": "City", "name": "Abu Dhabi", "sameAs": "https://en.wikipedia.org/wiki/Abu_Dhabi" },
          { "@type": "City", "name": "Sharjah", "sameAs": "https://en.wikipedia.org/wiki/Sharjah" },
          { "@type": "City", "name": "Ajman", "sameAs": "https://en.wikipedia.org/wiki/Ajman" },
          { "@type": "City", "name": "Riyadh", "sameAs": "https://en.wikipedia.org/wiki/Riyadh" },
          { "@type": "City", "name": "Jeddah", "sameAs": "https://en.wikipedia.org/wiki/Jeddah" },
          { "@type": "City", "name": "Dammam", "sameAs": "https://en.wikipedia.org/wiki/Dammam" }
        ]
      }
    ]
  };

  return (
    <>
      <Script id="schema-structured-data" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 overflow-hidden bg-primary px-4 sm:px-6 lg:px-8 border-b border-white/5">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-block border border-accent/30 bg-accent/10 px-4 py-1.5 rounded-full">
            <span className="text-xs font-semibold text-accent tracking-wider uppercase">Dubai-Based · UAE & Saudi Arabia · GCC</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-syne font-bold text-bg-base tracking-tight leading-tight">
            The Digital Expert Mid-Size Businesses in Dubai Call First.
          </h1>
          <p className="text-lg md:text-xl text-text-muted max-w-3xl mx-auto leading-relaxed font-dm-sans">
            You&apos;ve been burned before. You paid for a senior strategist — and got a junior executor. Mohammad Fazil is different. When you hire him, you get him. On every call. Every strategy. Every result. Direct access. Zero middlemen. Just growth that actually moves the needle.
          </p>
          <div className="pt-8 flex flex-col items-center justify-center gap-4">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full">
              <Button href="/contact" className="w-full sm:w-auto text-lg px-8 py-4">Claim Your Free Growth Audit</Button>
              <Link href="/services" className="text-bg-base hover:text-accent font-medium text-lg transition-colors underline underline-offset-4">
                See My Services
              </Link>
            </div>
            
            {/* New Trust Strip */}
            <div className="pt-2 flex flex-wrap justify-center gap-x-6 gap-y-2 text-[11px] md:text-xs font-bold uppercase tracking-widest text-accent/80">
              <span className="flex items-center">✓ Based in Dubai</span>
              <span className="flex items-center">✓ 50+ GCC Businesses Served</span>
              <span className="flex items-center">✓ UAE & Saudi Arabia</span>
              <span className="flex items-center">✓ Direct Senior Access</span>
            </div>

            <p className="text-xs text-text-muted italic">30 minutes. No pitch. Just clarity on your biggest opportunity.</p>
          </div>
          <div className="pt-12 text-sm text-text-muted flex flex-wrap justify-center gap-x-8 gap-y-4">
            <span className="flex items-center"><span className="text-accent mr-2">✓</span> Based in Dubai</span>
            <span className="flex items-center"><span className="text-accent mr-2">✓</span> Working across UAE & KSA</span>
            <span className="flex items-center"><span className="text-accent mr-2">✓</span> 7 Core Services</span>
            <span className="flex items-center"><span className="text-accent mr-2">✓</span> Direct Access</span>
          </div>
        </div>
      </section>

      {/* Social Proof Bar */}
      <section className="bg-[#0f0f0f] border-b border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-4 text-xs md:text-sm font-semibold text-text-muted tracking-widest uppercase">
            <span>7 Services</span>
            <span className="w-1.5 h-1.5 rounded-full bg-accent/50 hidden sm:block"></span>
            <span>UAE & Saudi Arabia</span>
            <span className="w-1.5 h-1.5 rounded-full bg-accent/50 hidden sm:block"></span>
            <span>50+ Projects</span>
            <span className="w-1.5 h-1.5 rounded-full bg-accent/50 hidden sm:block"></span>
            <span>Direct Senior Access</span>
            <span className="w-1.5 h-1.5 rounded-full bg-accent/50 hidden sm:block"></span>
            <span>GCC Markets</span>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-primary px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-syne font-bold text-bg-base mb-4">What I Do</h2>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">End-to-end digital services for mid-size businesses in the UAE and Saudi Arabia.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.slug} className="group border border-white/10 bg-[#0A0A0A] p-8 hover:-translate-y-1 hover:border-accent/50 transition-all duration-300">
                <div className="w-12 h-12 mb-6 text-accent">
                  {/* Decorative Icon Box */}
                  <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-syne font-bold text-bg-base mb-3">{s.name}</h3>
                <p className="text-text-muted mb-6 line-clamp-2">{s.shortDescription}</p>
                <Link href={`/services/${s.slug}`} className="text-accent font-medium inline-flex items-center group-hover:underline underline-offset-4">
                  Learn More <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            ))}
            <div className="border border-dashed border-white/20 bg-transparent flex flex-col items-center justify-center p-8 text-center min-h-[300px]">
              <h3 className="text-xl font-syne font-bold text-bg-base mb-4">Not Sure What You Need?</h3>
              <p className="text-text-muted mb-6">Let&apos;s audit your current digital presence and find the biggest growth levers.</p>
              <div className="flex flex-col items-center gap-3">
                <Button href="/contact" variant="secondary">Claim Your Free Growth Audit</Button>
                <p className="text-[10px] text-text-muted italic leading-none">30 minutes. No pitch. Just clarity.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Signals Section */}
      <section className="py-24 bg-[#050505] border-y border-white/5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-syne font-bold text-bg-base mb-6">Serving Businesses Across the UAE & Saudi Arabia</h2>
          <p className="text-lg text-text-muted mb-12">
            Based in Dubai, Mohammad works with mid-size companies across the UAE, Saudi Arabia, and the wider GCC — from strategy through to execution.
          </p>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12">
            {locations.map((l) => (
              <Link key={l.slug} href={`/locations/${l.slug}`} className="px-5 py-2.5 rounded-full border border-white/10 hover:border-accent hover:bg-white/5 text-bg-base transition-colors bg-primary font-medium text-sm">
                {l.city}
              </Link>
            ))}
            <Link href="/locations/gcc" className="px-5 py-2.5 rounded-full border border-white/10 hover:border-accent hover:bg-white/5 text-bg-base transition-colors bg-primary font-medium text-sm">
              GCC
            </Link>
          </div>
          <p className="text-text-muted max-w-3xl mx-auto leading-relaxed">
            Whether you are a retail brand in Dubai Marina, a tech startup in DIFC, a manufacturing company in Dammam, or an e-commerce business in Riyadh — the strategy is always built for your specific market.
          </p>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-24 bg-[#080808] px-4 sm:px-6 lg:px-8 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-syne font-bold text-bg-base mb-4">How We Work</h2>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">A structured approach to senior-level digital consulting in the GCC.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                step: "01", 
                name: "Discovery Audit (Week 1)", 
                desc: "We review your current presence, competitors, and goals. No jargon, just honest gaps and opportunities." 
              },
              { 
                step: "02", 
                name: "Strategy Roadmap (Week 2)", 
                desc: "You get a clear prioritized plan — what to do first, what to pause, and what success looks like in 90 days." 
              },
              { 
                step: "03", 
                name: "Execution With Direct Access (Ongoing)", 
                desc: "Mohammad implements, optimizes, and reports. No handoffs, no briefing loss." 
              },
              { 
                step: "04", 
                name: "Review and Pivot (Monthly)", 
                desc: "We review results together. If something is not working, we adjust fast. No vanity metrics. Just revenue impact." 
              }
            ].map((s) => (
              <div key={s.step} className="relative p-8 border border-white/10 bg-primary h-full">
                <span className="text-4xl font-syne font-bold text-accent/20 absolute top-4 right-6">{s.step}</span>
                <h3 className="text-xl font-syne font-bold text-bg-base mt-4 mb-4 pr-12">{s.name}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Link href="/methodology" className="text-accent font-medium hover:underline underline-offset-4">
              Explore Our Full Methodology &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-24 bg-primary px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-syne font-bold text-bg-base">Why Work With Mohammad Directly?</h2>
            <div className="w-20 h-1 bg-accent"></div>
            <p className="text-xl text-bg-base leading-relaxed font-medium">
              Imagine this: You book a strategy call. The person who answers is the same person who built your roadmap, executes your campaigns, and reviews your results.
            </p>
            <p className="text-lg text-text-muted leading-relaxed">
              No account manager translating your needs. No junior learning on your budget. Just Mohammad — senior expertise, direct access, zero noise. This isn&apos;t how agencies work. This is how growth happens.
            </p>
            <div className="flex items-center gap-6">
              <Button href="/about" variant="primary">More About Mohammad &rarr;</Button>
              <a href="https://linkedin.com/in/fazilfazi" target="_blank" rel="noopener noreferrer" className="text-bg-base/70 hover:text-[#0A66C2] transition-colors">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>
          </div>
          <div className="relative aspect-square md:aspect-[4/5] bg-[#0A0A0A] border border-white/10 overflow-hidden shadow-2xl flex items-center justify-center">
             <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 to-transparent"></div>
             {/* Placeholder for Headshot */}
             <div className="text-center p-8 z-10">
               <h3 className="font-syne font-bold text-3xl text-bg-base mb-2">MOHAMMAD FAZIL</h3>
               <p className="text-accent tracking-widest uppercase text-sm font-semibold">Digital Consultant</p>
             </div>
          </div>
        </div>
      </section>

      {/* Case Studies Teaser */}
      <section className="py-24 bg-[#050505] border-t border-white/5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-syne font-bold text-bg-base mb-4">Results That Speak</h2>
              <p className="text-lg text-text-muted">Measurable outcomes for mid-size businesses in the GCC.</p>
            </div>
            <Link href="/case-studies" className="text-accent font-medium hover:underline underline-offset-4">
              View All Work &rarr;
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border border-white/10 p-8 bg-primary hover:border-accent/40 transition-colors">
              <span className="text-sm text-text-muted block mb-4">E-commerce Brand, Dubai</span>
              <h3 className="text-2xl font-syne font-bold text-bg-base mb-4">+180% Organic Traffic in 6 Months</h3>
              <p className="text-accent text-sm font-semibold mb-6">SEO + Content Strategy</p>
              <Link href="/case-studies/dubai-seo" className="text-bg-base/80 hover:text-accent border-b border-bg-base/30 hover:border-accent pb-1 inline-block">Read Case Study</Link>
            </div>
            <div className="border border-white/10 p-8 bg-primary hover:border-accent/40 transition-colors">
              <span className="text-sm text-text-muted block mb-4">Fintech Startup, Riyadh</span>
              <h3 className="text-2xl font-syne font-bold text-bg-base mb-4">3.2x ROAS in 90 Days</h3>
              <p className="text-accent text-sm font-semibold mb-6">Paid Ads + Landing Pages</p>
              <Link href="/case-studies/riyadh-paid-ads" className="text-bg-base/80 hover:text-accent border-b border-bg-base/30 hover:border-accent pb-1 inline-block">Read Case Study</Link>
            </div>
            <div className="border border-white/10 p-8 bg-primary hover:border-accent/40 transition-colors hidden lg:block">
              <span className="text-sm text-text-muted block mb-4">Manufacturing, Dammam</span>
              <h3 className="text-2xl font-syne font-bold text-bg-base mb-4">40% Decrease in CPL</h3>
              <p className="text-accent text-sm font-semibold mb-6">B2B Digital Marketing</p>
              <Link href="/case-studies/dammam-marketing" className="text-bg-base/80 hover:text-accent border-b border-bg-base/30 hover:border-accent pb-1 inline-block">Read Case Study</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-primary px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 z-0 flex justify-center items-center opacity-10">
          <div className="w-[800px] h-[800px] rounded-full bg-accent blur-3xl"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-syne font-bold text-bg-base mb-6 leading-tight">
            Ready to Grow Your Business in Dubai or Saudi Arabia?
          </h2>
          <p className="text-xl text-text-muted mb-10 max-w-2xl mx-auto">
            Book a free 30-minute discovery call. Mohammad will review your current digital presence and tell you exactly where the opportunities are — no pitch, no pressure.
          </p>
          <div className="flex flex-col items-center gap-4">
            <Button href="/contact" className="text-lg px-10 py-5">
              Claim Your Free Growth Audit
            </Button>
            <p className="text-sm text-text-muted italic">30 minutes. No pitch. Just clarity on your biggest opportunity.</p>
          </div>
          <p className="mt-6 text-text-muted text-sm tracking-wide">
            No agencies. No junior staff. Just Mohammad.
          </p>
        </div>
      </section>
    </>
  );
}
