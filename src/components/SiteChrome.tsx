"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "@/components/site/BrandChrome";
import { ChatAssistant } from "@/components/chatbot/ChatAssistant";

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() || "/";
  if (pathname === "/") return <>{children}<ChatAssistant /></>;

  const legacyOffer = /^(\/services|\/locations|\/markets|\/methodology|\/digital-marketing-expert-dubai|\/portfolio|\/case-studies\/|\/(dubai|abu-dhabi|sharjah|riyadh|jeddah|dammam)\/)/.test(pathname);
  const modern = ["/about", "/contact", "/case-studies", "/blog", "/services/seo", "/services/local-seo", "/services/technical-seo", "/services/content-marketing", "/riyadh/seo", "/jeddah/seo", "/dammam/seo", "/digital-marketing-expert-calicut"].some(route => pathname === route || pathname === `${route}/` || (route === "/blog" && pathname.startsWith("/blog/")));

  return <div className="fd-home" id="top">
    <a className="fd-skip" href="#main-content">Skip to content</a>
    <SiteHeader />
    <main id="main-content" className={modern ? "" : "fd-legacy"}>
      {!modern && legacyOffer && <div className="fd-legacy-notice"><span>This earlier resource remains available for reference.</span><Link href="/services/seo/">Explore our current Saudi SEO focus <span aria-hidden="true">↗</span></Link></div>}
      {children}
    </main>
    <SiteFooter />
    <ChatAssistant />
  </div>;
}
