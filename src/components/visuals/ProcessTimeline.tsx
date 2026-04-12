export default function ProcessTimeline() {
  const steps = [
    { num: 1, title: "Discovery", desc: "Audit your current setup, competitors & goals" },
    { num: 2, title: "Strategy", desc: "Custom roadmap with clear KPIs & timelines" },
    { num: 3, title: "Execution", desc: "Hands-on implementation & weekly optimisation" },
    { num: 4, title: "Review", desc: "Monthly reporting, insights & iterative scaling" },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      {/* Desktop: horizontal */}
      <div className="hidden md:flex items-start justify-between relative">
        {/* Connecting line */}
        <div className="absolute top-5 left-[10%] right-[10%] h-px bg-white/10" />
        {steps.map((step) => (
          <div key={step.num} className="flex flex-col items-center text-center w-1/4 px-4 relative">
            <div className="w-10 h-10 rounded-full bg-accent text-primary flex items-center justify-center font-syne font-bold text-base mb-4 z-10 shadow-[0_0_20px_rgba(200,151,58,0.3)]">
              {step.num}
            </div>
            <h4 className="font-syne font-bold text-bg-base mb-2">{step.title}</h4>
            <p className="text-sm text-text-muted leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>

      {/* Mobile: vertical */}
      <div className="flex flex-col gap-6 md:hidden">
        {steps.map((step, i) => (
          <div key={step.num} className="flex gap-5 items-start">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-accent text-primary flex items-center justify-center font-syne font-bold text-base flex-shrink-0">
                {step.num}
              </div>
              {i < steps.length - 1 && <div className="w-px flex-1 bg-white/10 mt-2 h-8" />}
            </div>
            <div className="pt-1.5">
              <h4 className="font-syne font-bold text-bg-base mb-1">{step.title}</h4>
              <p className="text-sm text-text-muted">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
