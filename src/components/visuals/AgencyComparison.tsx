export default function AgencyComparison() {
  return (
    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto my-12">
      {/* Typical Agency */}
      <div className="bg-white/[0.02] p-8 rounded-2xl border border-white/10 opacity-60">
        <h3 className="text-xl font-heading font-bold text-text-muted mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-sm font-bold">✕</span>
          Typical Agency Model
        </h3>
        <ul className="space-y-4 text-sm text-text-muted">
          {[
            'Senior pitch, junior execution',
            'Multiple handoffs & briefing loss',
            'Generic templates, slow pivots',
            'Vanity metrics & opaque reporting'
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="text-red-500/50 mt-1">•</span> {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Mohammad Fazil */}
      <div className="bg-[#0A0A0A] p-8 rounded-2xl border-2 border-accent shadow-[0_0_50px_rgba(200,151,58,0.15)] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 blur-3xl -mr-16 -mt-16"></div>
        <h3 className="text-xl font-heading font-bold text-bg-base mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-primary text-sm font-bold">✓</span>
          The Direct Access Model
        </h3>
        <ul className="space-y-4 text-sm text-bg-base font-medium">
          {[
            'Direct access to senior expert always',
            'Zero handoffs, full accountability',
            'GCC-optimized, fast iterations',
            'Revenue-focused transparent reporting'
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="text-accent mt-1">•</span> {item}
            </li>
          ))}
        </ul>
        <div className="mt-8 pt-6 border-t border-white/5 flex items-center gap-4">
           <div className="w-12 h-12 rounded-full border border-accent/30 bg-accent/10 flex items-center justify-center text-lg">🎯</div>
           <p className="text-xs text-text-muted italic leading-relaxed">Better for mid-size businesses needing results, not just slide decks.</p>
        </div>
      </div>
    </div>
  )
}
