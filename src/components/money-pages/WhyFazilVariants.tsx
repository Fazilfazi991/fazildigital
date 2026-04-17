export interface WhyFazilProps {
  locationCity: string;
}

export function WhyFazilA({ locationCity }: WhyFazilProps) {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#050505] border-b border-white/5">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-bg-base mb-8">
          The Fazil Difference in {locationCity}
        </h2>
        <div className="space-y-6 text-text-muted text-lg leading-relaxed">
          <p>
            Most {locationCity} agencies will pitch you a senior team and hand you off to a junior. When you work with Fazil, you work with Fazil — on every call, every strategy session, every deliverable.
          </p>
          <p>
            This means faster decisions, no briefing loss, and a strategy that evolves in real-time as your market changes.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {["Zero Middlemen", "Direct Senior Access", "Full Accountability"].map((p) => (
            <div key={p} className="border border-white/10 p-6 bg-[#0A0A0A]">
              <span className="text-accent font-bold text-2xl"></span>
              <p className="text-bg-base font-heading font-bold mt-3">{p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhyFazilB({ locationCity }: WhyFazilProps) {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 border-b border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
        <div className="flex-1">
          <h2 className="text-4xl font-heading font-bold text-bg-base mb-6">
            Why {locationCity} Businesses Choose Fazil
          </h2>
          <div className="w-16 h-1 bg-accent mb-8"></div>
          <p className="text-xl text-text-muted mb-8 leading-relaxed">
            Forget agency overhead. You are hiring a strategic partner who operates inside your business, moving faster and delivering higher ROI than traditional agencies in {locationCity}.
          </p>
          <ul className="space-y-4 text-text-muted text-lg border-l-2 border-accent pl-6">
            <li><strong>Direct Communication:</strong> No account managers.</li>
            <li><strong>GCC Expertise:</strong> Tailored for local markets.</li>
            <li><strong>Revenue Focused:</strong> We track sales, not just clicks.</li>
          </ul>
        </div>
        <div className="flex-1 relative aspect-square bg-gradient-to-br from-[#111] to-[#050505] border border-white/10 rounded-2xl flex items-center justify-center p-8 text-center group transition-all shrink-0">
          <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
          <div>
             <span className="block text-6xl mb-4"></span>
             <h3 className="text-2xl font-bold font-heading text-bg-base mb-2">Unmatched Agility</h3>
             <p className="text-text-muted">Built for ambitious mid-size companies in {locationCity}.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
