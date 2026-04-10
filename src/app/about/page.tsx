import { Button } from "@/components/Button";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "About Mohammad Fazil | Dubai Digital Consultant | UAE & KSA",
  description: "Learn about Mohammad Fazil's hands-on approach to digital consulting for mid-size businesses in Dubai, Riyadh, and the GCC. No agencies. One expert.",
};

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "name": "Mohammad Fazil",
        "jobTitle": "Digital Consultant",
        "url": "https://fazildigital.com",
        "sameAs": ["https://linkedin.com/in/fazilfazi"],
        "description": "Dubai-based digital consultant helping mid-size businesses across the UAE and Saudi Arabia scale through SEO, digital marketing, and AI automation.",
        "worksFor": {
          "@type": "Organization",
          "name": "Mohammad Fazil Digital Consulting",
          "location": {
            "@type": "Place",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Dubai",
              "addressCountry": "AE"
            }
          }
        }
      },
      {
        "@type": "LocalBusiness",
        "name": "Mohammad Fazil Digital Consulting",
        "url": "https://fazildigital.com",
        "areaServed": [
          { "@type": "City", "name": "Dubai", "sameAs": "https://en.wikipedia.org/wiki/Dubai" },
          { "@type": "City", "name": "Abu Dhabi", "sameAs": "https://en.wikipedia.org/wiki/Abu_Dhabi" },
          { "@type": "City", "name": "Sharjah", "sameAs": "https://en.wikipedia.org/wiki/Sharjah" },
          { "@type": "City", "name": "Ajman", "sameAs": "https://en.wikipedia.org/wiki/Ajman" },
          { "@type": "City", "name": "Riyadh", "sameAs": "https://en.wikipedia.org/wiki/Riyadh" },
          { "@type": "City", "name": "Jeddah", "sameAs": "https://en.wikipedia.org/wiki/Jeddah" },
          { "@type": "City", "name": "Dammam", "sameAs": "https://en.wikipedia.org/wiki/Dammam" }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://fazildigital.com" },
          { "@type": "ListItem", "position": 2, "name": "About", "item": "https://fazildigital.com/about" }
        ]
      }
    ]
  };

  return (
    <div className="pt-24 pb-32">
      <Script id="about-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h1 className="text-4xl md:text-6xl font-syne font-bold text-bg-base mb-12">
          Direct Senior Expertise. <br className="hidden md:block" /> No Middlemen.
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
          <div className="lg:col-span-2 prose prose-invert prose-lg max-w-none font-dm-sans text-text-muted space-y-8">
            <p className="text-xl text-bg-base leading-relaxed">
              Mohammad Fazil is a Dubai-based digital consultant. He doesn&apos;t run an agency, and he doesn&apos;t use junior account managers. He works directly with a select group of mid-size businesses across the UAE, Saudi Arabia, and the GCC.
            </p>
            
            <section>
              <h2 className="text-2xl font-syne font-bold text-bg-base mt-12 mb-6 uppercase tracking-widest text-sm">The Story</h2>
              <p>
                I used to work inside the agency model. I saw the pitch: You&apos;ll work with our senior team. I saw the handoff: Your account manager will coordinate delivery. And I watched good businesses in Dubai and Riyadh pay premium fees for junior execution.
              </p>
              <p>
                It didn&apos;t sit right with me. So I left. Today, Mohammad Fazil Digital Consulting exists for one reason: to give mid-size businesses in the GCC what they deserve — senior expertise, direct access, and accountability that doesn&apos;t get lost in translation.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-syne font-bold text-bg-base mt-12 mb-6 uppercase tracking-widest text-sm">The GCC Advantage</h2>
              <p>
                Navigating the digital shift in Riyadh or competing for search visibility in Dubai requires more than just generic marketing knowledge. It requires an understanding of local consumer behavior, platform dominance (like Snapchat in KSA), and the economic context of Vision 2030.
              </p>
              <p>
                Mohammad brings deep experience in both the UAE and Saudi markets, helping businesses scale where it actually matters.
              </p>
            </section>

            <div className="bg-[#0f0f0f] border border-white/10 p-10 my-16 rounded shadow-lg">
              <h3 className="font-syne font-bold text-accent text-xl mb-6">Strategic Principles</h3>
              <ul className="space-y-6 list-none p-0 m-0 text-base">
                <li className="flex items-start">
                  <span className="text-accent mr-4 mt-1 font-bold">01</span>
                  <span><strong>Accountability:</strong> One point of contact. One expert responsible for your growth. Zero briefing loss.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-4 mt-1 font-bold">02</span>
                  <span><strong>Efficiency:</strong> No agency overheads. Faster decision-making and rapid implementation of strategies.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-4 mt-1 font-bold">03</span>
                  <span><strong>Results:</strong> We ignore vanity metrics. If the strategy doesn&apos;t lead to qualified leads or revenue, we pivot.</span>
                </li>
              </ul>
            </div>
            
            <section className="pt-8">
              <h2 className="text-2xl font-syne font-bold text-bg-base mb-6">Let&apos;s build your GCC digital roadmap.</h2>
              <p className="mb-10 text-lg">
                If you are a mid-size business in Dubai or Saudi Arabia looking for a reliable, senior digital partner, let&apos;s talk.
              </p>
              <div className="flex flex-col items-start gap-4">
                <Button href="/contact" className="text-lg px-10 py-5">Claim Your Free Growth Audit</Button>
                <p className="text-sm text-text-muted italic">30 minutes. No pitch. Just clarity on your biggest opportunity.</p>
              </div>
            </section>
          </div>

          <aside className="space-y-8">
            <div className="aspect-[3/4] bg-[#0A0A0A] border border-white/10 relative overflow-hidden flex items-center justify-center p-8 text-center group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="relative z-10">
                 <h3 className="font-syne font-bold text-bg-base text-2xl mb-1">Mohammad Fazil</h3>
                 <p className="text-accent text-xs font-bold tracking-widest uppercase mb-4">Principal Consultant</p>
              </div>
            </div>

            <div className="border border-white/10 p-8 space-y-6">
              <h4 className="font-syne font-bold text-bg-base text-lg">Trust Signals</h4>
              <div className="space-y-4">
                 <div className="flex items-center gap-3">
                    <span className="text-accent">✓</span>
                    <span className="text-sm">Based in Dubai</span>
                 </div>
                 <div className="flex items-center gap-3">
                    <span className="text-accent">✓</span>
                    <span className="text-sm">50+ Projects Delivered</span>
                 </div>
                 <div className="flex items-center gap-3">
                    <span className="text-accent">✓</span>
                    <span className="text-sm">UAE & KSA Market Expert</span>
                 </div>
              </div>
              <div className="pt-4 border-t border-white/10">
                <a href="https://linkedin.com/in/fazilfazi" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline text-sm font-medium">Verified on LinkedIn →</a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
