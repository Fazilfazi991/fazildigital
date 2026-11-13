"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

const links: { label: string; href: string; homeHref?: string; current: (path: string) => boolean }[] = [
  { label: "Home", href: "/", current: (path: string) => path === "/" },
  { label: "SEO Services", homeHref: "#services", href: "/services/seo/", current: () => false },
  { label: "Saudi Locations", href: "/locations/", current: path => path.startsWith("/riyadh/") || path.startsWith("/jeddah/") || path.startsWith("/dammam/") || path === "/locations/" },
  { label: "About Me", href: "/about/", current: path => path === "/about" || path === "/about/" },
  { label: "Insights", href: "/blog/", current: path => path === "/blog/" || path === "/blog" || path.startsWith("/blog/") },
  { label: "Contact", homeHref: "#enquiry-wizard", href: "/contact/", current: path => path === "/contact" || path === "/contact/" },
];

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="17" height="17"><path d={diagonal ? "M6 18 18 6M6 6h12v12" : "M4 12h15m-6-6 6 6-6 6"} /></svg>;
}

export function SiteHeader() {
  const pathname = usePathname() || "/";
  const mobileMenu = useRef<HTMLDetailsElement>(null);
  const isHome = pathname === "/";
  const isCalicut = pathname === "/digital-marketing-expert-calicut" || pathname === "/digital-marketing-expert-calicut/";
  const calicutContact = "/contact/?market=calicut#contact-prepare";
  const reviewHref = isHome ? "#enquiry-wizard" : isCalicut ? calicutContact : "/contact/";
  const navLinks = links.map(link => ({ ...link, href: link.homeHref && isHome ? link.homeHref : isCalicut && link.label === "Contact" ? calicutContact : link.href }));

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && mobileMenu.current?.open) {
        mobileMenu.current.open = false;
        mobileMenu.current.querySelector("summary")?.focus();
      }
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, []);

  function closeMenu(event: React.MouseEvent<HTMLElement>) {
    if ((event.target as Element).closest("a")) mobileMenu.current?.removeAttribute("open");
  }

  return <header className="fd-header fd-container">
    <Link href="/" aria-label="Fazil Digital home" className="fd-wordmark">fazil<span className="fd-wordmark-dot">.</span><span className="fd-wordmark-digital">digital</span></Link>
    <nav className="fd-desktop-nav" aria-label="Main navigation">
      {navLinks.map(link => <Link key={link.label} href={link.href} aria-current={link.current(pathname) ? "page" : undefined}>{link.label}</Link>)}
    </nav>
    <Link href={reviewHref} className="fd-button fd-header-cta">Request an SEO Review <Arrow diagonal /></Link>
    <details className="fd-mobile-menu" ref={mobileMenu}>
      <summary aria-label="Open main menu"><span>Menu</span><svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M4 8h16M4 16h16" /></svg></summary>
      <nav aria-label="Mobile navigation" onClick={closeMenu}>
        {navLinks.map(link => <Link key={link.label} href={link.href} aria-current={link.current(pathname) ? "page" : undefined}>{link.label}</Link>)}
        <Link href={reviewHref} className="fd-button">Request an SEO Review <Arrow diagonal /></Link>
      </nav>
    </details>
  </header>;
}

export function SiteFooter() {
  const pathname = usePathname() || "/";
  const isCalicut = pathname === "/digital-marketing-expert-calicut" || pathname === "/digital-marketing-expert-calicut/";
  return <footer className="fd-footer fd-container">
    <div className="fd-footer-top">
      <div className="fd-footer-identity"><Link href="/" aria-label="Fazil Digital home" className="fd-wordmark">fazil<span className="fd-wordmark-dot">.</span><span className="fd-wordmark-digital">digital</span></Link><p>SEO and organic growth<br />for Saudi businesses.</p></div>
      <nav aria-label="Footer navigation">
        <Link href="/services/seo/">SEO Services</Link><Link href="/services/technical-seo/">Technical SEO</Link>
        <Link href="/services/local-seo/">Local SEO</Link><Link href="/services/content-marketing/">Content Strategy</Link>
        <Link href="/riyadh/seo/">Riyadh SEO</Link><Link href="/jeddah/seo/">Jeddah SEO</Link>
        <Link href="/dammam/seo/">Dammam SEO</Link><Link href="/about/">About Me</Link>
        <Link href="/case-studies/">Project Notes</Link><Link href="/blog/">Insights</Link><Link href={isCalicut ? "/contact/?market=calicut#contact-prepare" : "/contact/"}>Contact</Link>
      </nav>
      <a className="fd-back-top" href="#top">Back to top <span aria-hidden="true">↑</span></a>
    </div>
    <div className="fd-footer-bottom"><span>© {new Date().getFullYear()} Fazil Digital</span><span>Riyadh · Jeddah · Dammam</span><Link href="/privacy-policy/">Privacy policy</Link></div>
  </footer>;
}
