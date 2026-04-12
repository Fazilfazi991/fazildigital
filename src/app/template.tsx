"use client";

import { useEffect, useState } from "react";

export default function RootTemplate({ children }: { children: React.ReactNode }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Artificial staggering: Show progress bar first, then fade content in.
    // This solves the "instant open" feel on fast Next.js sites.
    const timer = setTimeout(() => setVisible(true), 150);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div 
        id="top-progress-bar" 
        className="animate-progress fixed top-0 left-0 h-[3px] bg-accent z-[9999] pointer-events-none"
        aria-hidden="true"
      />
      
      <div 
        className={`transition-opacity duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
        style={{ transitionProperty: "opacity, transform" }}
      >
        {children}
      </div>
    </>
  );
}
