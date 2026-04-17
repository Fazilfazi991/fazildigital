import Link from "next/link";
import { Button } from "@/components/Button";

// Common props for Hero variants
export interface HeroProps {
  locationCity: string;
  locationCountry: string;
  locationSlug: string;
  serviceName: string;
  serviceSlug: string;
  longOpening?: string;
  headingText?: string;
  paragraphText?: string;
}

export function HeroA({ locationCity, locationCountry, locationSlug, serviceName, serviceSlug, longOpening, headingText, paragraphText }: HeroProps) {
  return (
    <section className="pt-24 pb-20 border-b border-white/5 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <nav className="text-sm text-text-muted mb-8 flex items-center justify-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-accent transition-colors">Home</Link>
          <span>/</span>
          <Link href={`/locations/${locationSlug}`} className="hover:text-accent transition-colors">{locationCity}</Link>
          <span>/</span>
          <span className="text-accent">{serviceName}</span>
        </nav>
        <div className="inline-block border border-accent/30 bg-accent/10 px-4 py-1.5 rounded-full mb-6">
          <span className="text-xs font-semibold text-accent tracking-wider uppercase">{locationCity} · {locationCountry}</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-heading font-bold text-bg-base mb-6 leading-tight">
          {headingText || `${serviceName} Expert in ${locationCity} — Direct Senior Access`}
        </h1>
        <p className="text-lg md:text-xl text-text-muted mb-10 max-w-3xl mx-auto leading-relaxed">
          {paragraphText || longOpening || `Mohammad Fazil is a ${serviceName.toLowerCase()} consultant delivering measurable results for mid-size businesses in ${locationCity}.`}
        </p>
        <Button href="/contact" className="text-lg px-8 py-4">Get Your Free Digital Audit</Button>
      </div>
    </section>
  );
}

export function HeroB({ locationCity, locationCountry, locationSlug, serviceName, serviceSlug, longOpening, headingText, paragraphText }: HeroProps) {
  return (
    <section className="pt-32 pb-24 border-b border-white/5 px-4 sm:px-6 lg:px-8 bg-[#050505] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/5 to-transparent pointer-events-none"></div>
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-12 relative z-10">
        <div className="flex-1">
          <nav className="text-sm text-text-muted mb-6 flex items-center gap-2 flex-wrap">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link href={`/locations/${locationSlug}`} className="hover:text-accent transition-colors">{locationCity}</Link>
            <span>/</span>
            <span className="text-accent">{serviceName}</span>
          </nav>
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-bg-base mb-6 leading-tight border-l-4 border-accent pl-6">
            {headingText || `Leading ${serviceName} Services for ${locationCity} Brands`}
          </h1>
          <p className="text-xl text-text-muted mb-10 leading-relaxed">
             {paragraphText || longOpening || `Partner directly with Fazil to scale your ${locationCity} business through proven ${serviceName.toLowerCase()} strategies.`}
          </p>
          <div className="flex flex-wrap gap-4">
            <Button href="/contact" className="text-lg px-8 py-4">Book a Strategy Call</Button>
            <span className="text-sm text-text-muted flex items-center">✓ Results-driven across {locationCountry}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HeroC({ locationCity, locationCountry, locationSlug, serviceName, serviceSlug, longOpening, headingText, paragraphText }: HeroProps) {
  return (
    <section className="pt-24 pb-20 border-b border-white/5 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-left">
          <h1 className="text-4xl md:text-7xl font-heading font-bold text-bg-base mb-6 leading-[1.1]">
            <span className="text-accent block text-2xl font-semibold mb-4 tracking-wider uppercase">{locationCity} {serviceName}</span>
            {headingText || `Scale Your Revenue in ${locationCity}`}
          </h1>
          <p className="text-xl md:text-2xl text-text-muted mb-10 max-w-2xl leading-relaxed font-light">
             {paragraphText || longOpening || `Direct execution. No agency bloat. Full accountability in ${locationCountry}.`}
          </p>
          <Button href="/contact" className="text-lg px-8 py-4 bg-transparent border-2 border-accent hover:bg-accent text-accent hover:text-primary transition-all">Start the Conversation →</Button>
        </div>
      </div>
    </section>
  );
}
