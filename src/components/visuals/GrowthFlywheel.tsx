export default function GrowthFlywheel() {
  const nodes = [
    { label: "SEO & Content",    icon: "📈", pos: "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2" },
    { label: "Paid Acquisition", icon: "🎯", pos: "top-1/2 right-0 translate-x-1/2 -translate-y-1/2" },
    { label: "AI Automation",    icon: "⚡", pos: "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2" },
    { label: "Conversion Opt.",  icon: "🔄", pos: "top-1/2 left-0 -translate-x-1/2 -translate-y-1/2" },
  ];

  return (
    <div className="max-w-lg mx-auto text-center">
      <h3 className="text-2xl font-syne font-bold text-bg-base mb-3">The Compounding Growth Flywheel</h3>
      <p className="text-sm text-text-muted mb-12 max-w-sm mx-auto">
        Each channel feeds the next. SEO lowers CPA. Paid ads fund content.
        Automation scales output. Results compound over time.
      </p>

      {/* Flywheel diagram */}
      <div className="relative w-64 h-64 mx-auto mb-10">
        {/* Spinning dashed ring */}
        <div
          className="absolute inset-0 rounded-full border border-dashed border-accent/30"
          style={{ animation: "spin 20s linear infinite" }}
        />
        {/* Static inner ring */}
        <div className="absolute inset-6 rounded-full border border-white/5" />

        {/* Centre hub */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-24 h-24 rounded-full bg-accent flex flex-col items-center justify-center shadow-[0_0_40px_rgba(200,151,58,0.3)]">
            <span className="text-2xl">🚀</span>
            <span className="text-[10px] font-bold text-primary mt-1 uppercase tracking-wide">Revenue</span>
          </div>
        </div>

        {/* Orbital nodes */}
        {nodes.map((node) => (
          <div
            key={node.label}
            className={`absolute ${node.pos} w-24 bg-primary border border-white/10 rounded-xl p-2.5 text-center shadow-lg z-10`}
          >
            <span className="block text-lg mb-0.5">{node.icon}</span>
            <span className="text-[10px] font-medium text-text-muted leading-tight">{node.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
