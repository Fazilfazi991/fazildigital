"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Button } from "./Button";
import { services } from "@/data/services";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="block" aria-label="Fazil Digital home">
              <Image
                src="/images/brand/fazil-digital-logo.png"
                alt="Fazil Digital"
                width={400}
                height={190}
                priority
                className="h-12 w-auto sm:h-14"
              />
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <div className="relative group">
                <button className="text-bg-base/80 hover:text-accent px-3 py-2 text-sm font-medium transition-colors">
                  Services
                </button>
                <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 bg-primary border border-white/10 shadow-xl rounded-md pt-2 pb-2">
                  {services.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      className="block px-4 py-2 text-sm text-bg-base/80 hover:bg-white/5 hover:text-accent"
                    >
                      {s.name}
                    </Link>
                  ))}
                  <div className="border-t border-white/10 mt-2 pt-2">
                    <Link href="/services" className="block px-4 py-2 text-sm text-accent hover:bg-white/5 font-medium">
                      See All Services →
                    </Link>
                  </div>
                </div>
              </div>

              <Link href="/portfolio" className="text-bg-base/80 hover:text-accent px-3 py-2 text-sm font-medium transition-colors">
                Portfolio
              </Link>
              <Link href="/case-studies" className="text-bg-base/80 hover:text-accent px-3 py-2 text-sm font-medium transition-colors">
                Case Studies
              </Link>
              <Link href="/about" className="text-bg-base/80 hover:text-accent px-3 py-2 text-sm font-medium transition-colors">
                About
              </Link>
              <Link href="/blog" className="text-bg-base/80 hover:text-accent px-3 py-2 text-sm font-medium transition-colors">
                Blog
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <Button href="/contact">Contact</Button>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-bg-base hover:text-accent focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-primary border-b border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/services" className="text-bg-base/80 hover:text-accent block px-3 py-2 rounded-md text-base font-medium">Services</Link>
            <Link href="/portfolio" className="text-bg-base/80 hover:text-accent block px-3 py-2 rounded-md text-base font-medium">Portfolio</Link>
            <Link href="/case-studies" className="text-bg-base/80 hover:text-accent block px-3 py-2 rounded-md text-base font-medium">Case Studies</Link>
            <Link href="/about" className="text-bg-base/80 hover:text-accent block px-3 py-2 rounded-md text-base font-medium">About</Link>
            <Link href="/blog" className="text-bg-base/80 hover:text-accent block px-3 py-2 rounded-md text-base font-medium">Blog</Link>
            <Link href="/contact" className="text-bg-base/80 hover:text-accent block px-3 py-2 rounded-md text-base font-medium">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
