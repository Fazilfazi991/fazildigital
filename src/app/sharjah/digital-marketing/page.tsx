import React from "react";
import { Metadata } from "next";
import Script from "next/script";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Button";
import { clients } from "@/data/portfolio";
import { Accordion } from "@/components/Accordion";

export const metadata: Metadata = {
  title: "Sharjah Digital Marketing | Top 3 Rankings & AI-First Strategy",
  description: "Scale your Sharjah business with expert SEO, Snapchat ads, and Agentic AI automation. Specialized hubs for Shams, SAIF Zone, and Northern Emirates growth. Rank Top 3 guaranteed.",
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
        "name": "Fazil Digital Consulting - Sharjah SEO Hub",
        "description": "High-performance digital consultancy specialized in Northern Emirates market dominance.",
        "url": "https://www.fazildigital.com/sharjah/digital-marketing",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Sharjah",
          "addressCountry": "AE"
        },
        "areaServed": ["Sharjah", "Ajman", "Umm Al Quwain", "Ras Al Khaimah"]
      },
      {
        "@type": "Service",
        "name": "Sharjah SEO & Performance Lead Gen",
        "provider": {
          "@type": "Person",
          "name": "Mohammad Fazil"
        },
        "areaServed": "Sharjah"
      }
    ]
  };

  const sharjahFaqs = [
    {
      question: "How does Sharjah SEO differ from Dubai's algorithmic landscape?",
      answer: "Sharjah search intent is heavily driven by industrial procurement (Industrial Area 1-17), free-zone logistics (Shams, SAIF), and a business culture that rewards bilingual authoritative content. While Dubai is highly competitive for generic tech terms, Sharjah allows for 'Top 3' dominance through hyper-localized entity mapping and Northern Emirates citation clusters."
    },
    {
      question: "Can Agentic AI improve lead quality for Sharjah SMEs?",
      answer: "Absolutely. By deploying 'Agentic Workflows'—AI systems that don't just chat but act—we automate lead triage from WhatsApp and social ads. This ensures 24/7 responsiveness for Sharjah consumers who expect instant feedback during non-traditional hours, particularly in the Muwaileh and Al Majaz sectors."
    },
    {
      question: "What is the fastest way to rank for Sharjah-specific keywords?",
      answer: "The 'Direct Access' methodology. Instead of generic backlinking, we focus on building topical authority through long-form Arabic/English guides tailored to Sharjah's economic sectors (Logistics, Education, and Manufacturing). This typically yields Page 1 movement within 45-60 days."
    }
  ];

  return (
    <>
      <Script
        id="sharjah-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="bg-[#050505] pt-24 min-h-screen text-bg-base font-dm-sans selection:bg-accent selection:text-primary overflow-hidden">
        
        {/* BACKGROUND GLOWS - AI AESTHETIC */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-accent/10 blur-[150px] rounded-full"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[150px] rounded-full"></div>
        </div>

        {/* SECTION 1: HERO - AGENTIC DESIGN */}
        <section className="relative py-24 px-4 border-b border-white/5 overflow-hidden">
          <div className="max-w-7xl mx-auto relative z-10 text-center">
            <div className="inline-flex items-center gap-2 group border border-accent/30 bg-accent/5 px-4 py-1.5 rounded-full mb-8 hover:bg-accent/10 transition-all duration-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              <span className="text-[10px] font-bold text-accent tracking-[0.2em] uppercase">Sovereign AI &amp; SEO Domination</span>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-syne font-bold leading-[0.9] tracking-tighter mb-10">
              SHARJAH <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-[#D9B66F] to-accent italic">MARKET</span> <br />
              DOMINANCE
            </h1>

            <p className="text-xl md:text-2xl text-text-muted max-w-3xl mx-auto mb-12 leading-relaxed font-light">
              We don't build websites. We deploy <span className="text-bg-base font-bold">Revenue Engines</span> customized for Sharjah’s unique economic architecture. From <span className="text-accent italic">Shams</span> innovation to <span className="text-accent italic">SAIF Zone</span> logistics.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button href="/contact" variant="primary" className="px-12 py-5 text-lg">
                Initiate Performance Audit
              </Button>
              <Link href="#methodology" className="text-sm font-bold uppercase tracking-widest text-[#666] hover:text-accent transition-colors">
                View Methodology &darr;
              </Link>
            </div>
          </div>
          
          {/* Futuristic Grid Line */}
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        </section>

        {/* SECTION 2: THE PORTFOLIO - "KEEPING IT REAL" */}
        <section className="py-32 px-4 relative">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
              <div className="max-w-xl">
                <h2 className="text-4xl md:text-6xl font-syne font-bold mb-6 tracking-tighter leading-none">
                  CLIENTS I <br />
                  <span className="text-accent uppercase italic">WORKED WITH</span>
                </h2>
                <p className="text-text-muted text-lg border-l-2 border-accent pl-6">
                  Verified growth metrics across GCC E-commerce, B2B, and Industrial sectors. Real data. Real authority.
                </p>
              </div>
              <div className="hidden md:block">
                <span className="text-[100px] font-syne font-black text-white/5 select-none leading-none">TRUST</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {clients.map((client, idx) => (
                <div key={idx} className="group relative p-8 backdrop-blur-xl bg-white/[0.02] border border-white/5 rounded-3xl hover:border-accent/40 transition-all duration-500 overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 scale-150 transition-all duration-500">
                    <span className="text-6xl font-syne font-black opacity-10">{idx + 1}</span>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="mb-6 opacity-60 grayscale group-hover:grayscale-0 transition-all duration-500">
                      <span className="text-xs font-bold uppercase tracking-widest text-accent mb-2 block">{client.industry}</span>
                      <h3 className="text-2xl font-syne font-bold text-bg-base">{client.name}</h3>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-8">
                      {client.services.map(s => (
                        <span key={s} className="text-[10px] font-bold border border-white/10 bg-white/5 px-3 py-1 rounded-full text-[#999]">
                          {s}
                        </span>
                      ))}
                    </div>

                    <Link href={client.websiteUrl || "#"} className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#666] group-hover:text-accent transition-colors">
                      Live Project <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3: INDUSTRY DEEP DIVE - "TOP 3 RANKING SEO CONTENT" */}
        <section className="py-32 px-4 bg-[#080808]">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div className="space-y-12">
                <h2 className="text-4xl md:text-6xl font-syne font-bold leading-[1.1] tracking-tighter">
                  SHARJAH: THE <br />
                  <span className="text-accent underline decoration-white/10 underline-offset-8">BILINGUAL</span> BRIDGE.
                </h2>
                <p className="text-xl text-text-muted leading-relaxed font-light">
                  Ranking for "Digital Marketing Sharjah" requires more than just content—it requires <span className="text-bg-base font-bold italic">Entity Authority</span>. Sharjah's economy is distinctively split between established family-owned industrial fleets and high-velocity digital free zones. 
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="p-6 border-l-2 border-white/10 hover:border-accent transition-colors">
                    <h4 className="text-lg font-bold mb-3">Shams & SAIF Acquisition</h4>
                    <p className="text-sm text-text-muted leading-relaxed">We target the high-intent keywords used by expat entrepreneurs and industrial procurers within Sharjah’s primary free zones.</p>
                  </div>
                  <div className="p-6 border-l-2 border-white/10 hover:border-accent transition-colors">
                    <h4 className="text-lg font-bold mb-3">Northern Emirates Logistics</h4>
                    <p className="text-sm text-text-muted leading-relaxed">Dominating search results for logistics, supply chain, and B2B industrial queries across Ajman, RAK, and Fujairah.</p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-square bg-white/[0.02] border border-white/5 rounded-[60px] p-12 flex items-center justify-center overflow-hidden">
                  <div className="text-center">
                    <div className="text-7xl font-syne font-bold text-accent mb-4 animate-pulse">ROI</div>
                    <div className="text-sm font-bold uppercase tracking-[0.3em] text-[#666]">Data Calibrated</div>
                  </div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute top-10 left-10 w-20 h-20 border border-accent/20 rounded-full"></div>
                  <div className="absolute bottom-20 right-10 w-40 h-40 border border-white/5 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: AGENTIC METHODOLOGY */}
        <section id="methodology" className="py-32 px-4 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl aspect-square bg-accent/5 blur-[150px] rounded-full pointer-events-none"></div>
          
          <div className="max-w-4xl mx-auto relative z-10 text-center">
            <h2 className="text-4xl md:text-7xl font-syne font-bold mb-20 tracking-tighter">THE EXECUTION <span className="text-accent underline underline-offset-8 decoration-white/20">LOOP</span></h2>
            
            <div className="space-y-12 text-left">
              {[
                { step: "01", title: "Topical Authority Audit", desc: "We map your current domain footprint against Sharjah's specific industry search volume. We identify the 'Content Gaps' where your competitors are weak." },
                { step: "02", title: "Agentic Workflow Deployment", desc: "Deployment of AI triage systems across your digital touchpoints. We turn cold traffic into warm leads via automated multi-lingual engagement." },
                { step: "03", title: "Blended ROI Calibration", desc: "Monthly performance recalibration. We don't just report clicks; we report revenue pipeline contribution and CAC optimization." }
              ].map((m, idx) => (
                <div key={idx} className="flex gap-8 items-start group">
                  <span className="text-3xl font-syne font-black text-accent/30 group-hover:text-accent transition-colors duration-500">{m.step}</span>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">{m.title}</h3>
                    <p className="text-text-muted leading-relaxed max-w-2xl">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5: FAQ - EXPERT MODE */}
        <section className="py-32 px-4 border-t border-white/5">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-syne font-bold mb-20 uppercase tracking-tighter">Strategic <span className="text-accent italic">Intelligence</span></h2>
            <div className="text-left">
              <Accordion items={sharjahFaqs} />
            </div>
            
            <div className="mt-24 p-12 backdrop-blur-3xl bg-white/[0.01] border border-white/5 rounded-[40px] relative overflow-hidden group">
              <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <p className="text-2xl font-syne font-medium mb-10 text-bg-base/80">Ready to initiate the Top 3 ranking sequence for your Sharjah business?</p>
              <Button href="/contact" className="px-10 py-5">Request Professional Consultation</Button>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
