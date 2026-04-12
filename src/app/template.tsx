"use client";

import { useEffect, useState } from "react";

export default function RootTemplate({ children }: { children: React.ReactNode }) {
  const [isMounting, setIsMounting] = useState(true);

  useEffect(() => {
    // Small delay to ensure the animation triggers and is visible
    const timer = setTimeout(() => setIsMounting(false), 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Top progress bar that triggers on every page mount (navigation) */}
      <div 
        id="top-progress-bar" 
        className="animate-progress fixed top-0 left-0 h-[3px] bg-accent z-[9999] w-0"
        aria-hidden="true"
      />
      
      <div className="page-fade-in">
        {children}
      </div>
    </>
  );
}
