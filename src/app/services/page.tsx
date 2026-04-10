import Link from "next/link";
import { Metadata } from "next";
import { services } from "@/data/services";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "Digital Services | SEO, Marketing, Web Dev & More | Mohammad Fazil",
  description: "Explore Mohammad Fazil's 7 core digital services for mid-size businesses in Dubai, UAE and Saudi Arabia — SEO, digital marketing, paid ads, web development, AI automation, and SaaS.",
  alternates: { canonical: "https://fazildigital.com/services" },
};

export default function ServicesPage() {
  return (
    <div className="pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-syne font-bold text-bg-base mb-6">
            7 Core Digital Services
          </h1>
          <p className="text-xl text-text-muted max-w-2xl mx-auto">
            End-to-end digital services for mid-size businesses in the UAE and Saudi Arabia. Senior strategy. Direct execution. Measurable results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((s, i) => (
            <div key={s.slug} className="group border border-white/10 bg-[#0A0A0A] p-10 hover:border-accent/40 hover:-translate-y-0.5 transition-all duration-300">
              <div className="flex items-start justify-between mb-6">
                <span className="text-5xl font-syne font-bold text-accent/20">0{i + 1}</span>
                <span className="text-xs font-semibold tracking-widest text-text-muted uppercase">{s.name}</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-syne font-bold text-bg-base mb-4">{s.name}</h2>
              <p className="text-text-muted mb-8 leading-relaxed">{s.fullDescription}</p>
              <div className="flex gap-4">
                <Button href={`/services/${s.slug}`} variant="primary">Learn More →</Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 border border-white/10 bg-[#050505] p-12 text-center">
          <h2 className="text-3xl font-syne font-bold text-bg-base mb-4">Not sure which service you need?</h2>
          <p className="text-text-muted mb-8 max-w-xl mx-auto">Get your free 30-minute digital audit. Mohammad will review your digital presence and give you a clear, prioritized roadmap — no commitment required.</p>
          <Button href="/contact" className="text-lg px-8 py-4">Get Your Free 30-Min Digital Audit</Button>
        </div>

      </div>
    </div>
  );
}
