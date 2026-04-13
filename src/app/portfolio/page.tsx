"use client";

import { useState } from "react";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/Button";
import { portfolioServices, clients } from "@/data/portfolio";

export default function PortfolioPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const behanceProjects = [
    {
      title: "MALABAR GOLDEN TRITH",
      images: [
        "https://mir-s3-cdn-cf.behance.net/project_modules/max_3840_webp/1dc45e203130197.6691858f52b4e.jpg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/max_3840_webp/df3aa8203130197.6691858f53248.jpg"
      ]
    },
    {
      title: "Package Designing",
      images: [
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400/eaf401225320887.681b2d0b883a3.jpeg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400/80434d225320887.681b2d0b877b6.jpeg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400/8ea13b225320887.681b2d0b87e6b.jpeg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400/179f34225320887.681b2d0b8722e.jpg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400/85679f225320887.681b2d0b88efa.jpg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400/d11afd225320887.681b2d0b8b29f.png"
      ],
      link: "https://www.behance.net/gallery/210712151/Branding"
    },
    {
      title: "FILLI TEA",
      images: [
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/4a97fc221758311.67d9fe4c99f15.jpg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/2d248b221758311.67d9fe4c99842.jpg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/0e1962221758311.67d9fe4c9acd6.jpg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/8464f0221758311.67d9fe4c9a6da.jpg"
      ]
    }
  ];

  return (
    <div className="pt-24 pb-32 overflow-hidden">
      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 cursor-zoom-out"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full h-full max-w-6xl max-h-[90vh]">
            <Image 
              src={selectedImage} 
              alt="Project Showcase" 
              fill 
              className="object-contain"
              priority
            />
            <button 
              className="absolute top-4 right-4 text-white hover:text-accent p-2 bg-white/10 rounded-full transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 mb-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-syne font-bold text-bg-base mb-8 tracking-tighter">
            Portfolio & <span className="text-accent">Recent Work</span>
          </h1>
          <p className="text-xl text-text-muted leading-relaxed max-w-2xl mx-auto mb-12">
            Helping brands in the UAE and Saudi Arabia scale through precision SEO, 
            data-driven ads, and intelligent AI automation. From strategy to execution.
          </p>

          <div className="grid grid-cols-3 gap-4 md:gap-8 border-t border-b border-white/10 py-8">
            <div className="text-center">
              <span className="block text-3xl font-syne font-bold text-bg-base">6+</span>
              <span className="text-xs text-text-muted uppercase tracking-widest font-bold">Active Clients</span>
            </div>
            <div className="text-center border-x border-white/10 px-4">
              <span className="block text-3xl font-syne font-bold text-bg-base">15+</span>
              <span className="text-xs text-text-muted uppercase tracking-widest font-bold">Projects</span>
            </div>
            <div className="text-center">
              <span className="block text-3xl font-syne font-bold text-bg-base">5+</span>
              <span className="text-xs text-text-muted uppercase tracking-widest font-bold">Industries</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-syne font-bold text-bg-base mb-4">Core Expertise</h2>
            <p className="text-text-muted">End-to-end digital solutions tailored for the GCC market.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioServices.map((service) => (
              <div 
                key={service.slug}
                className="group p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300"
              >
                <div className="text-4xl mb-6">{service.icon}</div>
                <h3 className="text-xl font-syne font-bold text-bg-base mb-4 italic group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-text-muted mb-8 text-sm leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-xs text-bg-base/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="bg-[#050505] py-32 border-y border-white/5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-syne font-bold text-bg-base mb-6 italic tracking-tighter">
              Trusted by Leading <span className="text-accent">GCC Brands</span>
            </h2>
            <p className="text-text-muted max-w-xl mx-auto">
              Collaborating with businesses in Dubai, Abu Dhabi, Riyadh, and Jeddah 
              to dominate their digital footprint.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {clients.map((client) => (
              <div 
                key={client.name}
                className="relative flex flex-col bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-[2rem] p-6 hover:border-accent/40 transition-all duration-500 shadow-2xl overflow-hidden group"
              >
                {/* Visual Header / Screenshot Area */}
                <div className="relative aspect-[16/10] mb-8 rounded-2xl overflow-hidden bg-primary border border-white/5">
                  {client.logoUrl ? (
                    <div className="relative w-full h-full transform group-hover:scale-105 transition-transform duration-700">
                       <Image 
                        src={client.logoUrl} 
                        alt={`${client.name} Website Screenshot`} 
                        fill 
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
                    </div>
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-white/[0.05] to-transparent p-12">
                      <div className="text-6xl font-syne font-bold text-white/5 tracking-tighter uppercase mb-2 select-none">
                        {client.name.split(' ').map(w => w[0]).join('')}
                      </div>
                      <div className="text-xs font-syne font-bold text-accent tracking-[0.2em] uppercase opacity-40">
                        Visualizing Growth
                      </div>
                    </div>
                  )}
                  
                  {/* Floating Brand Tag */}
                  <div className="absolute top-4 left-4 bg-primary/90 backdrop-blur-md border border-white/10 px-4 py-1.5 rounded-full text-[10px] font-bold text-accent uppercase tracking-widest shadow-xl">
                    {client.industry.split(' • ')[0]}
                  </div>
                </div>

                <div className="px-2 space-y-4">
                  <div className="flex items-end justify-between">
                    <div>
                      <h3 className="text-2xl font-syne font-bold text-bg-base leading-none mb-2">
                        {client.name}
                      </h3>
                      <p className="text-[10px] font-bold text-text-muted uppercase tracking-widest">
                        {client.industry}
                      </p>
                    </div>
                    {client.websiteUrl && (
                       <Link 
                        href={client.websiteUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent transition-all group/btn"
                      >
                        <svg className="w-4 h-4 text-bg-base transition-transform group-hover/btn:-rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </Link>
                    )}
                  </div>
                  
                  <div className="flex flex-wrap gap-2 pt-2">
                    {client.services.map((service) => (
                      <span 
                        key={service} 
                        className="text-[9px] bg-accent/10 border border-accent/20 px-3 py-1 rounded-full text-accent uppercase font-bold tracking-tighter"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/5 px-2 flex justify-between items-center opacity-60 group-hover:opacity-100 transition-opacity">
                  <div className="flex gap-4">
                    {client.instagramUrl && (
                      <Link 
                        href={client.instagramUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[10px] text-text-muted font-bold hover:text-accent tracking-widest uppercase"
                      >
                        Instagram
                      </Link>
                    )}
                  </div>
                  <span className="text-[10px] text-accent/40 font-bold uppercase tracking-widest">
                    Case Study Phase II
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Behance Portfolio Section */}
      <section className="bg-white py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-syne font-bold text-gray-900 mb-4">
              Latest Design Work
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Branding, packaging, and visual design projects from Zorx Media
            </p>
          </div>

          {/* Project 1: MALABAR GOLDEN TRITH */}
          <div className="mb-20">
            <h3 className="text-2xl font-syne font-bold text-gray-800 mb-8 border-b-4 border-blue-600 pb-2 inline-block">
              MALABAR GOLDEN TRITH
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                "https://mir-s3-cdn-cf.behance.net/project_modules/max_3840_webp/1dc45e203130197.6691858f52b4e.jpg",
                "https://mir-s3-cdn-cf.behance.net/project_modules/max_3840_webp/df3aa8203130197.6691858f53248.jpg"
              ].map((src, i) => (
                <div 
                  key={i} 
                  className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl transition-transform duration-500 hover:-translate-y-2 cursor-zoom-in"
                  onClick={() => setSelectedImage(src)}
                >
                  <Image 
                    src={src} 
                    alt={`MALABAR GOLDEN TRITH - Design ${i+1}`} 
                    fill 
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Project 2: Package Designing */}
          <div className="mb-20">
            <h3 className="text-2xl font-syne font-bold text-gray-800 mb-8 border-b-4 border-blue-600 pb-2 inline-block">
              Package Designing
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "https://mir-s3-cdn-cf.behance.net/project_modules/1400/eaf401225320887.681b2d0b883a3.jpeg",
                "https://mir-s3-cdn-cf.behance.net/project_modules/1400/80434d225320887.681b2d0b877b6.jpeg",
                "https://mir-s3-cdn-cf.behance.net/project_modules/1400/8ea13b225320887.681b2d0b87e6b.jpeg",
                "https://mir-s3-cdn-cf.behance.net/project_modules/1400/179f34225320887.681b2d0b8722e.jpg",
                "https://mir-s3-cdn-cf.behance.net/project_modules/1400/85679f225320887.681b2d0b88efa.jpg",
                "https://mir-s3-cdn-cf.behance.net/project_modules/1400/d11afd225320887.681b2d0b8b29f.png"
              ].map((src, i) => (
                <div 
                  key={i} 
                  className="group relative h-[400px] rounded-2xl overflow-hidden shadow-xl transition-transform duration-500 hover:-translate-y-2 cursor-zoom-in"
                  onClick={() => setSelectedImage(src)}
                >
                  <Image 
                    src={src} 
                    alt={`Package Design ${i+1}`} 
                    fill 
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link
                href="https://www.behance.net/gallery/210712151/Branding"
                target="_blank"
                className="inline-block bg-blue-600 text-white font-bold py-4 px-8 rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20"
              >
                View All 18 Package Designs on Behance →
              </Link>
            </div>
          </div>

          {/* Project 3: FILLI TEA */}
          <div className="mb-20">
            <h3 className="text-2xl font-syne font-bold text-gray-800 mb-8 border-b-4 border-blue-600 pb-2 inline-block">
              FILLI TEA
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/4a97fc221758311.67d9fe4c99f15.jpg",
                "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/2d248b221758311.67d9fe4c99842.jpg",
                "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/0e1962221758311.67d9fe4c9acd6.jpg",
                "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/8464f0221758311.67d9fe4c9a6da.jpg"
              ].map((src, i) => (
                <div 
                  key={i} 
                  className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl transition-transform duration-500 hover:-translate-y-2 cursor-zoom-in"
                  onClick={() => setSelectedImage(src)}
                >
                  <Image 
                    src={src} 
                    alt={`FILLI TEA - Design ${i+1}`} 
                    fill 
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* View Full Portfolio CTA */}
          <div className="bg-gray-50 rounded-[2.5rem] p-12 text-center border border-gray-100">
            <h3 className="text-3xl font-syne font-bold text-gray-900 mb-4">
              Want to See More Work?
            </h3>
            <p className="text-gray-500 text-lg mb-8 max-w-2xl mx-auto">
              Visit our Behance profile to explore complete case studies, process breakdowns, and additional projects.
            </p>
            
            <Link
              href="https://www.behance.net/16645c70"
              target="_blank"
              className="inline-block bg-blue-600 text-white font-bold py-5 px-10 rounded-xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/30 hover:-translate-y-1"
            >
              View Full Behance Portfolio →
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-accent/20 to-transparent border border-accent/20 rounded-[2rem] p-12 text-center">
          <h2 className="text-3xl md:text-5xl font-syne font-bold text-bg-base mb-6">
            Ready to become my next <span className="text-accent underline underline-offset-8">Success Story?</span>
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto mb-10 leading-relaxed font-dm-sans">
            Whether you are looking to dominate Google search or automate your lead generation, 
            let&apos;s build the roadmap for your growth.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button href="/contact" className="w-full sm:w-auto text-lg px-10 py-5">
              Book a Free Audit
            </Button>
            <a 
              href="https://wa.me/971542763828" 
              className="text-bg-base font-bold text-lg hover:text-accent transition-colors flex items-center gap-2"
            >
              Chat on WhatsApp →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
