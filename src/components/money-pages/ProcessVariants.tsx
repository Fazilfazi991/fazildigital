export interface ProcessProps {
  locationCity: string;
  serviceName: string;
}

export function StepsTimeline({ locationCity, serviceName }: ProcessProps) {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#050505] border-b border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-syne font-bold text-bg-base mb-12">The Process in {locationCity}</h2>
          <div className="space-y-0">
            {[
              { step: "Discovery & Audit", detail: `We start with a thorough review of your current ${serviceName.toLowerCase()} position in the ${locationCity} market.` },
              { step: "Strategy & Roadmap", detail: `A clear, prioritized plan tailored for ${locationCity} — with timelines, targets, and KPIs.` },
              { step: "Execution", detail: `Fazil executes the plan directly. No briefing chains. No delays.` },
              { step: "Reporting & Iteration", detail: "Regular reporting, honest conversations about what's working, and continuous optimization." },
            ].map(({ step, detail }, i) => (
              <div key={step} className="flex gap-8 pb-12 relative">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full border-2 border-accent flex items-center justify-center text-accent font-syne font-bold text-lg flex-shrink-0 bg-primary z-10">
                    {i + 1}
                  </div>
                  {i < 3 && <div className="flex-1 w-px bg-white/10 mt-2"></div>}
                </div>
                <div className="pt-2 pb-8">
                  <h3 className="text-xl font-syne font-bold text-bg-base mb-2">{step}</h3>
                  <p className="text-text-muted leading-relaxed">{detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  );
}

export function StepsGrid({ locationCity, serviceName }: ProcessProps) {
    return (
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-b border-white/5">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-syne font-bold text-bg-base mb-12 text-center">How We Roll Out {serviceName}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step: "01. Analyze", detail: `Auditing your ${locationCity} competition.` },
                { step: "02. Blueprint", detail: `Crafting the custom ${serviceName.toLowerCase()} strategy.` },
                { step: "03. Execute", detail: `Hands-on implementation by Fazil.` },
                { step: "04. Scale", detail: "Data-driven optimization." },
              ].map(({ step, detail }) => (
                <div key={step} className="bg-[#0A0A0A] p-8 border border-white/10 rounded-xl hover:border-accent/40 transition-all">
                    <h3 className="text-xl font-syne font-bold text-bg-base mb-3 text-accent">{step}</h3>
                    <p className="text-text-muted leading-relaxed">{detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
    );
  }
