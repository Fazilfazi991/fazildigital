import Link from "next/link";
import { services } from "@/data/services";
import { locations } from "@/data/locations";

export function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Services Col */}
          <div>
            <h4 className="font-syne font-bold text-bg-base mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="text-sm text-text-muted hover:text-accent transition-colors">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Col */}
          <div>
             <h4 className="font-syne font-bold text-bg-base mb-6">Quick Links</h4>
             <ul className="space-y-3">
               <li>
                 <Link href="/digital-marketing-expert-dubai" className="text-sm text-text-muted hover:text-accent transition-colors font-bold">
                   Digital Marketing Expert Dubai
                 </Link>
               </li>
               <li>
                 <Link href="/dubai/seo" className="text-sm text-text-muted hover:text-accent transition-colors">
                   SEO Dubai
                 </Link>
               </li>
               <li>
                 <Link href="/riyadh/paid-ads" className="text-sm text-text-muted hover:text-accent transition-colors">
                   Paid Ads Riyadh
                 </Link>
               </li>
               <li>
                 <Link href="/abu-dhabi/ai-automation" className="text-sm text-text-muted hover:text-accent transition-colors">
                   AI Automation Abu Dhabi
                 </Link>
               </li>
             </ul>
          </div>

          {/* Markets Col (Preserving SEO with Smart Links) */}
          <div>
            <h4 className="font-syne font-bold text-bg-base mb-6">Markets</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/markets" className="text-sm text-text-muted hover:text-accent transition-colors font-bold">
                  All GCC Markets →
                </Link>
              </li>
              <li>
                <Link href="/locations/dubai" className="text-sm text-text-muted hover:text-accent transition-colors">
                  Dubai, UAE
                </Link>
              </li>
              <li>
                <Link href="/locations/riyadh" className="text-sm text-text-muted hover:text-accent transition-colors">
                  Riyadh, KSA
                </Link>
              </li>
              <li>
                <Link href="/locations/abu-dhabi" className="text-sm text-text-muted hover:text-accent transition-colors">
                  Abu Dhabi, UAE
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect Col */}
          <div>
            <h4 className="font-syne font-bold text-bg-base mb-6">Connect</h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:hello@fazildigital.com" className="text-sm text-text-muted hover:text-accent transition-colors">
                  hello@fazildigital.com
                </a>
              </li>
              <li>
                <a href="https://wa.me/971542763828" target="_blank" rel="noopener noreferrer" className="text-sm text-text-muted hover:text-accent transition-colors">
                  WhatsApp Support
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/in/fazilfazi" target="_blank" rel="noopener noreferrer" className="text-sm text-text-muted hover:text-accent transition-colors">
                  LinkedIn Profile
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-text-muted">
            © {new Date().getFullYear()} Mohammad Fazil. All rights reserved.
          </p>
          <div className="flex space-x-6 text-xs text-text-muted">
            <Link href="/privacy-policy" className="hover:text-accent">Privacy Policy</Link>
            <Link href="/sitemap.xml" className="hover:text-accent">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
