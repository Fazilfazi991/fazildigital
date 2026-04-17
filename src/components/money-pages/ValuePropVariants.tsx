export interface ValuePropProps {
  locationCity: string;
  serviceName: string;
  deliverables: string[];
}

export function ValuePropGrid({ locationCity, serviceName, deliverables }: ValuePropProps) {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#050505] border-b border-white/5">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-bg-base mb-12">
          What Fazil Delivers in {locationCity}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {deliverables.map((item, i) => (
            <div key={i} className="flex items-start gap-4 border border-white/10 bg-[#0A0A0A] px-6 py-5">
              <span className="text-accent font-bold text-lg mt-0.5"></span>
              <span className="text-bg-base font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ValuePropList({ locationCity, serviceName, deliverables }: ValuePropProps) {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 border-b border-white/5 relative">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-heading font-bold text-bg-base mb-8 text-center">
          {serviceName} Execution
        </h2>
        <p className="text-text-muted text-center mb-12 text-lg">
          Outcomes designed exclusively for {locationCity} market dynamics.
        </p>
        <ul className="space-y-6">
          {deliverables.map((item, i) => (
            <li key={i} className="flex items-center gap-6 pb-6 border-b border-white/10 last:border-0 hover:pl-2 transition-all">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent font-semibold shrink-0">
                 {String(i + 1).padStart(2, '0')}
              </div>
              <span className="text-bg-base text-lg font-medium">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
