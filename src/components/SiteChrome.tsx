"use client";

import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("./Navbar").then(module => module.Navbar));
const Footer = dynamic(() => import("./Footer").then(module => module.Footer));
const MobileStickyCTA = dynamic(() => import("./MobileStickyCTA").then(module => module.MobileStickyCTA));
const FloatingWhatsApp = dynamic(() => import("./FloatingWhatsApp").then(module => module.FloatingWhatsApp));

/** The new homepage owns its chrome; internal pages retain their existing UI. */
export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  if (pathname === "/") return children;
  return <><link rel="stylesheet" href="https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&f[]=satoshi@400,500,600,700&display=swap" precedence="legacy-fonts" /><Navbar /><main className="flex-grow">{children}</main><Footer /><MobileStickyCTA /><FloatingWhatsApp /></>;
}
