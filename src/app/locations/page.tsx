import Link from "next/link";
import { Metadata } from "next";
import { locations } from "@/data/locations";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "Locations | Digital Consulting Across UAE & Saudi Arabia | Mohammad Fazil",
  description: "Mohammad Fazil provides digital consulting services across Dubai, Riyadh, Jeddah, Abu Dhabi, Dammam, and Sharjah. Senior-level expertise for GCC mid-size businesses.",
  alternates: { canonical: "https://fazildigital.com/locations" },
};

const tierLabels: Record<number, string> = {
  1: "Primary Markets",
  2: "Secondary Markets",
};

export default function LocationsPage() {
  const tier1 = locations.filter((l) => l.tier === 1);
  const tier2 = locations.filter((l) => l.tier === 2);

  return (
    <div className="pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-syne font-bold text-bg-base mb-6">
            Serving Businesses Across the GCC
          </h1>
          <p className="text-xl text-text-muted max-w-2xl mx-auto">
            Based in Dubai, Mohammad works with mid-size companies across the UAE, Saudi Arabia, and wider GCC markets.
          </p>
        </div>

        {[{ tier: 1, list: tier1 }, { tier: 2, list: tier2 }].map(({ tier, list }) => (
          <div key={tier} className="mb-20">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-xs font-semibold tracking-widest text-accent uppercase">{tierLabels[tier]}</span>
              <div className="flex-1 h-px bg-white/10"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {list.map((l) => (
                <Link key={l.slug} href={`/locations/${l.slug}`} className="group border border-white/10 bg-[#0A0A0A] p-8 hover:border-accent/40 hover:-translate-y-0.5 transition-all duration-300 block">
                  <div className="flex items-start justify-between mb-6">
                    <h2 className="text-2xl font-syne font-bold text-bg-base group-hover:text-accent transition-colors">{l.city}</h2>
                    <span className="text-xs font-medium bg-white/5 border border-white/10 px-2 py-1 rounded text-text-muted">{l.country}</span>
                  </div>
                  <p className="text-text-muted mb-6 text-sm leading-relaxed">{l.localContext}</p>
                  <span className="text-accent text-sm font-medium inline-flex items-center">
                    See Services in {l.city} <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        ))}

        <div className="border border-white/10 bg-[#050505] p-12 text-center mt-8">
          <h2 className="text-3xl font-syne font-bold text-bg-base mb-4">Don't see your city?</h2>
          <p className="text-text-muted mb-8 max-w-xl mx-auto">Mohammad works with clients across the full GCC region — Bahrain, Kuwait, Qatar and beyond. Get in touch to discuss your location.</p>
          <Button href="/contact" className="text-lg px-8 py-4">Get in Touch</Button>
        </div>

      </div>
    </div>
  );
}
