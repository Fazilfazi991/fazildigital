import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "Markets We Serve — UAE & Saudi Arabia Digital Consulting | Mohammad Fazil",
  description: "Senior-level digital consulting across the GCC. Specializing in growth strategies for mid-size businesses in Dubai, Riyadh, Abu Dhabi, Jeddah, and more.",
  alternates: { canonical: "https://www.fazildigital.com/markets/" },
};

export default function MarketsPage() {
  return (
    <main className="pt-24 pb-32 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-bg-base mb-6">GCC Markets We Serve</h1>
          <p className="text-xl text-text-muted max-w-3xl mx-auto leading-relaxed">
            We partner with mid-size businesses across the GCC. Each market has unique consumer behavior, platform preferences, and commercial realities. We build strategies that respect those differences.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* UAE Section */}
          <div className="space-y-8">
            <div className="p-8 border border-white/10 bg-[#0A0A0A]">
              <h2 className="text-3xl font-heading font-bold text-bg-base mb-6 flex items-center gap-4">
                <span className="text-4xl text-accent"></span> United Arab Emirates
              </h2>
              <p className="text-text-muted mb-8 text-lg leading-relaxed">
                The UAE is one of the world&apos;s most mature digital markets. With high mobile penetration and a diverse expatriate population, businesses here require sophisticated, multilingual search strategies and platform-specific social funnels.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { name: "Dubai", slug: "dubai" },
                  { name: "Abu Dhabi", slug: "abu-dhabi" },
                  { name: "Sharjah", slug: "sharjah" },
                  { name: "Ajman", slug: "ajman" }
                ].map((city) => (
                  <Link 
                    key={city.slug} 
                    href={`/locations/${city.slug}`}
                    className="p-4 border border-white/5 hover:border-accent/40 bg-white/[0.02] hover:bg-white/[0.05] transition-all group"
                  >
                    <span className="text-bg-base font-bold group-hover:text-accent">{city.name}</span>
                    <span className="text-text-muted block text-xs mt-1">Growth Audit Available &rarr;</span>
                  </Link>
                ))}
              </div>
            </div>
            
            <div className="p-8 border border-dashed border-white/10">
              <h3 className="font-heading font-bold text-bg-base mb-4">UAE Market Focus</h3>
              <ul className="space-y-2 text-sm text-text-muted">
                <li>• Bifocal Search strategies (English & Arabic)</li>
                <li>• High-intent DIFC & Business Bay targeting</li>
                <li>• Performance-driven Retail & E-commerce</li>
              </ul>
            </div>
          </div>

          {/* Saudi Arabia Section */}
          <div className="space-y-8">
            <div className="p-8 border border-white/10 bg-[#0A0A0A]">
              <h2 className="text-3xl font-heading font-bold text-bg-base mb-6 flex items-center gap-4">
                <span className="text-4xl text-accent"></span> Saudi Arabia
              </h2>
              <p className="text-text-muted mb-8 text-lg leading-relaxed">
                Under Vision 2030, the Kingdom is transforming at light speed. Digital behavior in KSA is distinct — with Snapchat, TikTok, and X dominating consumer engagement. We help brands build the right local resonance for Riyadh, Jeddah, and beyond.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { name: "Riyadh", slug: "riyadh" },
                  { name: "Jeddah", slug: "jeddah" },
                  { name: "Dammam", slug: "dammam" }
                ].map((city) => (
                  <Link 
                    key={city.slug} 
                    href={`/locations/${city.slug}`}
                    className="p-4 border border-white/5 hover:border-accent/40 bg-white/[0.02] hover:bg-white/[0.05] transition-all group"
                  >
                    <span className="text-bg-base font-bold group-hover:text-accent">{city.name}</span>
                    <span className="text-text-muted block text-xs mt-1">Growth Audit Available &rarr;</span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="p-8 border border-dashed border-white/10">
              <h3 className="font-heading font-bold text-bg-base mb-4">KSA Market Focus</h3>
              <ul className="space-y-2 text-sm text-text-muted">
                <li>• Snapchat-first conversion funnels</li>
                <li>• Arabic dialect-native content strategy</li>
                <li>• Vision 2030 sector alignment</li>
              </ul>
            </div>
          </div>

        </div>

        {/* Pan-GCC Section */}
        <div className="mt-20 p-12 bg-[#050505] border border-white/5 text-center">
            <h2 className="text-3xl font-heading font-bold text-bg-base mb-6">Wider GCC Coverage</h2>
            <p className="text-text-muted max-w-2xl mx-auto mb-10">
              We also support mid-size businesses in <strong>Bahrain, Kuwait, and Oman</strong>. Our strategies scale across borders while maintaining local relevance.
            </p>
            <Button href="/contact">Claim Your Free Regional Audit</Button>
        </div>

      </div>
    </main>
  );
}
