export default function PlatformMap() {
  const platforms = [
    { name: "Google Ads",    uae: "High",     ksa: "High"     },
    { name: "Meta (FB/IG)",  uae: "High",     ksa: "Medium"   },
    { name: "Snapchat",      uae: "Medium",   ksa: "Critical" },
    { name: "TikTok",        uae: "High",     ksa: "High"     },
    { name: "LinkedIn",      uae: "Critical", ksa: "Medium"   },
    { name: "X (Twitter)",   uae: "Medium",   ksa: "High"     },
  ];

  const badge = (level: string) => {
    if (level === "Critical") return "bg-accent text-primary font-bold";
    if (level === "High")     return "bg-white/10 text-bg-base font-semibold";
    return "bg-white/[0.03] text-text-muted";
  };

  return (
    <div className="max-w-2xl mx-auto border border-white/10 rounded-2xl overflow-hidden">
      <div className="px-6 py-5 border-b border-white/10 bg-white/[0.02]">
        <h3 className="font-syne font-bold text-bg-base">GCC Platform Effectiveness</h3>
        <p className="text-xs text-text-muted mt-1">Based on campaign performance data across 40+ mid-size GCC brands (2024–2026)</p>
      </div>

      <div className="divide-y divide-white/5">
        {/* Header */}
        <div className="grid grid-cols-3 px-6 py-3 text-xs font-bold text-text-muted uppercase tracking-widest bg-white/[0.01]">
          <span>Platform</span>
          <span className="text-center">🇦🇪 UAE</span>
          <span className="text-center">🇸🇦 KSA</span>
        </div>

        {platforms.map((p) => (
          <div key={p.name} className="grid grid-cols-3 items-center px-6 py-4 hover:bg-white/[0.02] transition-colors">
            <span className="text-sm font-medium text-bg-base">{p.name}</span>
            <div className="flex justify-center">
              <span className={`text-xs px-3 py-1 rounded-full ${badge(p.uae)}`}>{p.uae}</span>
            </div>
            <div className="flex justify-center">
              <span className={`text-xs px-3 py-1 rounded-full ${badge(p.ksa)}`}>{p.ksa}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="px-6 py-3 border-t border-white/5 flex items-center gap-4 text-xs text-text-muted bg-white/[0.01]">
        <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-accent inline-block" />Critical</span>
        <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-white/30 inline-block" />High</span>
        <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-white/10 inline-block" />Medium</span>
      </div>
    </div>
  );
}
