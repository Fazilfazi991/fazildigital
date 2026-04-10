"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export function MobileStickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after 400px scroll
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:hidden animate-in slide-in-from-bottom duration-300">
      <Link
        href="/contact"
        className="flex items-center justify-center w-full py-4 bg-accent text-primary font-syne font-bold rounded-lg shadow-2xl hover:bg-accent/90 transition-all active:scale-[0.98]"
      >
        Get Your Free Audit →
      </Link>
    </div>
  );
}
