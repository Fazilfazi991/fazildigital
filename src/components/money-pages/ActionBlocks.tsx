import { Button } from "@/components/Button";
import { Accordion } from "@/components/Accordion";

export interface ActionBlockProps {
  locationCity: string;
  locationCountry: string;
  serviceName: string;
  faqs?: { question: string; answer: string }[];
  marketContext?: string;
  localDistricts?: string[];
  platformNotes?: string;
  vision2030Note?: string;
}

export function MarketInsightBlock({ locationCity, serviceName, marketContext, localDistricts, platformNotes, vision2030Note }: ActionBlockProps) {
  if (!marketContext) return null;
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 border-b border-white/5">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-10">
          <span className="text-xs font-semibold tracking-widest text-accent uppercase">Local Market Intelligence</span>
          <div className="flex-1 h-px bg-white/10"></div>
        </div>
        <h2 className="text-3xl md:text-4xl font-syne font-bold text-bg-base mb-8">
          {serviceName} in {locationCity} — What You Need to Know
        </h2>

        <p className="text-text-muted text-lg leading-relaxed mb-12">
          {marketContext}
        </p>

        {localDistricts && localDistricts.length > 0 && (
          <div className="mb-12">
            <h3 className="font-syne font-bold text-bg-base text-xl mb-5">Key Business Districts</h3>
            <div className="flex flex-wrap gap-3">
              {localDistricts.map((district) => (
                <span key={district} className="inline-flex items-center px-4 py-2 border border-white/10 bg-[#0A0A0A] text-sm text-text-muted rounded cursor-default hover:border-accent/40 transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mr-2.5 flex-shrink-0"></span>
                  {district}
                </span>
              ))}
            </div>
          </div>
        )}

        {platformNotes && (
          <div className="border border-white/10 bg-[#0A0A0A] p-8 mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl text-accent">📱</span>
              <h3 className="font-syne font-bold text-bg-base text-lg">Platform & Channel Intelligence</h3>
            </div>
            <p className="text-text-muted leading-relaxed">{platformNotes}</p>
          </div>
        )}

        {vision2030Note && (
          <div className="border-l-2 border-accent pl-6 py-2 bg-gradient-to-r from-accent/5 to-transparent">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-bold tracking-widest text-accent uppercase">Vision 2030 Context</span>
            </div>
            <p className="text-text-muted leading-relaxed">{vision2030Note}</p>
          </div>
        )}
      </div>
    </section>
  );
}

export function FAQBlock({ locationCity, serviceName, faqs }: ActionBlockProps) {
  if (!faqs || faqs.length === 0) return null;
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 border-b border-white/5 bg-[#050505]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-syne font-bold text-bg-base mb-12">
          FAQ — {serviceName} in {locationCity}
        </h2>
        <Accordion items={faqs} />
      </div>
    </section>
  );
}

export function FinalCTABlock({ locationCity, serviceName }: ActionBlockProps) {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-[#0A0A0A]">
      <div className="absolute inset-0 z-0 flex justify-center items-center opacity-10">
        <div className="w-[600px] h-[600px] rounded-full bg-accent blur-3xl"></div>
      </div>
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-syne font-bold text-bg-base mb-6 leading-tight">
          Ready for {serviceName} in {locationCity}?
        </h2>
        <p className="text-xl text-text-muted mb-10 max-w-2xl mx-auto">
          Book a free 30-minute discovery call. Fazil will review your current {serviceName.toLowerCase()} position and tell you exactly where the opportunities are.
        </p>
        <Button href="/contact" className="text-lg px-10 py-5">Get Your Free 30-Min Digital Audit</Button>
        <p className="mt-6 text-text-muted text-sm tracking-wide text-accent font-semibold">No agencies. No junior staff. Just Fazil.</p>
      </div>
    </section>
  );
}
