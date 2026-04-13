import { Button } from "@/components/Button";
import { services } from "@/data/services";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Fazil Approach | Senior Digital Strategy in Dubai & KSA",
  description: "How Mohammad Fazil executes senior-level digital strategy for mid-size businesses in the GCC. The direct-access methodology that solves the agency problem.",
  alternates: { canonical: "https://www.fazildigital.com/methodology/" },
};

export default function MethodologyPage() {
  const steps = [
    {
      step: "01",
      name: "Discovery Audit (Week 1)",
      desc: "Every engagement starts with a clean slate. We review your current presence, competitors, and historical data. No jargon, just a brutal look at the gaps and a clear view of the opportunities you are leaving on the table."
    },
    {
      step: "02",
      name: "Strategy Roadmap (Week 2)",
      desc: "You get a clear, prioritized plan. We don't do everything at once. We identify the 'Biggest Levers' — the 2 or 3 things that will move the revenue needle the fastest. You know exactly what we are doing, why, and what success looks like in 90 days."
    },
    {
      step: "03",
      name: "Execution With Direct Access (Ongoing)",
      desc: "This is where the agency model fails and we succeed. Mohammad implements, optimizes, and manages your campaigns directly. No account manager translating your needs to a junior team. No briefing loss. Just direct, senior execution."
    },
    {
      step: "04",
      name: "Review and Pivot (Monthly)",
      desc: "Marketing is not 'set and forget'. We review hard data together every month. If something isn't working as expected, we don't hide behind vanity metrics. We admit it, we explain why, and we pivot the strategy immediately."
    }
  ];

  return (
    <div className="pt-24 pb-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-20">
          <div className="inline-block border border-accent/30 bg-accent/10 px-4 py-1.5 rounded mb-6">
            <span className="text-xs font-semibold text-accent tracking-wider uppercase">Strategic Framework</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-syne font-bold text-bg-base mb-8 leading-tight">
            The Fazil Approach: How Senior Strategy Gets Executed.
          </h1>
          <p className="text-xl text-text-muted leading-relaxed font-dm-sans">
            The biggest problem in digital marketing today isn&apos;t a lack of tools — it&apos;s a lack of accountability. Mid-size businesses in Dubai and Riyadh are tired of paying for &quot;Senior Strategy&quot; and receiving &quot;Junior Execution.&quot;
          </p>
        </div>

        <section className="space-y-16">
          <div className="bg-[#0A0A0A] border border-white/10 p-10 md:p-16">
            <h2 className="text-2xl md:text-3xl font-syne font-bold text-bg-base mb-8">The Handoff Problem</h2>
            <div className="prose prose-invert prose-lg text-text-muted space-y-6">
              <p>
                In the traditional agency model, the person you meet in the pitch is rarely the person who does the work. Once the contract is signed, the &quot;senior experts&quot; move to the next pitch, and your business is handed to a junior account manager.
              </p>
              <p className="font-bold text-bg-base">
                This process creates &quot;Briefing Loss.&quot; Context is stripped away. Nuance is ignored. Results stagnate.
              </p>
            </div>
          </div>

          <div className="py-8">
            <h2 className="text-3xl md:text-4xl font-syne font-bold text-bg-base mb-12 text-center text-balance">Our 4-Step Implementation Roadmap</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {steps.map((s) => (
                <div key={s.step} className="p-8 border border-white/10 bg-[#050505] relative hover:border-accent/40 transition-colors h-full flex flex-col">
                  <span className="text-5xl font-syne font-bold text-accent/10 absolute top-4 right-6 leading-none">{s.step}</span>
                  <h3 className="text-xl font-syne font-bold text-bg-base mt-4 mb-6 pr-12">{s.name}</h3>
                  <p className="text-text-muted leading-relaxed flex-grow">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-accent/5 border border-accent/20 p-10 text-center">
            <h2 className="text-2xl md:text-3xl font-syne font-bold text-bg-base mb-6">Execution Across All Pillars</h2>
            <p className="text-text-muted mb-10 max-w-2xl mx-auto">
              This methodology is applied consistently across every service Mohammad offers, ensuring a unified strategy for your GCC growth.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {services.map((s) => (
                <Link key={s.slug} href={`/services/${s.slug}`} className="px-4 py-2 bg-primary border border-white/10 text-sm font-medium hover:border-accent transition-colors text-bg-base">
                  {s.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-32 text-center">
          <h2 className="text-3xl md:text-5xl font-syne font-bold text-bg-base mb-8">Ready for a different kind of partner?</h2>
          <p className="text-xl text-text-muted mb-12 max-w-2xl mx-auto">
            Book your free growth audit. No pitch. No junior staff. Just Mohammad and a clear look at your digital potential.
          </p>
          <div className="flex flex-col items-center gap-4">
            <Button href="/contact" className="text-xl px-12 py-5">Claim Your Free Growth Audit</Button>
            <p className="text-sm text-text-muted italic">30 minutes. No pitch. Just clarity on your biggest opportunity.</p>
          </div>
        </section>

      </div>
    </div>
  );
}
