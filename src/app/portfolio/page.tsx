"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/Button";
import { portfolioServices, clients } from "@/data/portfolio";

export default function PortfolioPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const featuredWebProjects = [
    {
      name: "BWMC",
      location: "B2B Services • Abu Dhabi, UAE",
      description: "Corporate website with lead generation focus, optimized for B2B clients in Abu Dhabi. Features service pages, contact forms, and bilingual support.",
      tech: ["WordPress", "Elementor", "SEO Optimized"],
      url: "https://bwmc.ae",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop",
      features: ["Responsive design optimized for mobile", "Fast loading speed (under 2s)", "SEO-optimized structure", "Contact form integration"]
    },
    {
      name: "Ayisha Muneer",
      location: "Personal Portfolio • UAE",
      description: "Personal branding website showcasing professional portfolio, services, and contact information with clean, modern design.",
      tech: ["WordPress", "Personal Brand"],
      url: "https://ayishamuneer.com",
      image: "https://ayishamuneer.com/assets/portfolio_bwmc_real-Dxd7uxXt.webp",
      features: ["Clean, minimalist design", "Portfolio gallery", "Contact form", "Social media integration"]
    },
    {
      name: "Desert GP",
      location: "Corporate • UAE",
      description: "Professional corporate website with modern design, service showcases, and optimized user experience for B2B engagement.",
      tech: ["WordPress", "Corporate"],
      url: "https://desertgp.com",
      image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600&q=80",
      features: ["Service showcases", "B2B engagement", "Modern design"]
    },
    {
      name: "Stepvision Hotel Supplies",
      location: "E-commerce • Hospitality",
      description: "E-commerce platform for hotel supplies with product catalog, inquiry system, and streamlined ordering process.",
      tech: ["E-commerce", "Product Catalog"],
      url: "https://stepvisionhotelsupplies.com",
      image: "https://stepvisionhotelsupplies.com/images/hero-banner-main.png",
      features: ["Product catalog", "Inquiry system", "Streamlined ordering"]
    },
    {
      name: "N Universal Yoga",
      location: "Wellness & Fitness • UAE",
      description: "Yoga studio website with class schedules, instructor profiles, booking system, and serene design reflecting wellness values.",
      tech: ["Booking System", "Wellness"],
      url: "https://nuniversalyoga.ae",
      image: "https://nuniversalyoga.ae/yoga-pose-1.png",
      features: ["Class schedules", "Instructor profiles", "Booking system"]
    },
    {
      name: "Payyoli Mixture",
      location: "Food & Beverage • India",
      description: "Food brand website showcasing traditional Kerala snacks with product catalog, brand story, and e-commerce integration.",
      tech: ["E-commerce", "F&B"],
      url: "https://www.payyolimixture.co.in",
      image: "https://www.payyolimixture.co.in/wp-content/uploads/2023/03/payyoli-mixture-psd7.png",
      features: ["Product catalog", "Brand story", "E-commerce integration"]
    }
  ];

  const otherPlatforms = [
    { name: "Al DuZ Trading", url: "https://www.alduztrading.com", industry: "Trading Company • UAE" },
    { name: "Aurora Souq", url: "https://www.aurorasouq.com", industry: "E-commerce • Marketplace" },
    { name: "Al Rizq", url: "https://www.alrizq.sa", industry: "Business • Saudi Arabia" },
    { name: "Jaypee Dent", url: "https://jaypeedent.com", industry: "Dental Clinic • Healthcare" },
    { name: "Pixel & Pepper", url: "https://pixelandpepper.com", industry: "Creative Agency" },
    { name: "Larnix Education", url: "https://learnixeducation.com", industry: "EdTech • Online Learning" },
    { name: "Suntools Engineering", url: "https://suntoolsengineering.com", industry: "Engineering • UAE" },
    { name: "Ahalia Group", url: "https://ahaliagroup.com", industry: "Healthcare Healthcare • UAE" },
    { name: "BHNOE Hyundai", url: "https://bhnoe-hyundai.com", industry: "Automotive • UAE" },
    { name: "Dua College", url: "https://duacollege.in", industry: "Education • India" }
  ];

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
    <div className="pt-24 pb-32 overflow-hidden bg-primary text-white">
      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 cursor-zoom-out"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full h-full max-w-6xl max-h-[90vh]">
            <Image 
              src={selectedImage} 
              alt="Project Showcase" 
              fill 
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 80vw"
            />
            <button 
              className="absolute -top-12 right-0 text-white hover:text-accent p-2 transition-colors flex items-center gap-2 font-bold"
              onClick={() => setSelectedImage(null)}
            >
              CLOSE <span className="text-2xl">×</span>
            </button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 mb-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-bg-base mb-8 tracking-tighter">
            Portfolio & <span className="text-accent">Recent Work</span>
          </h1>
          <p className="text-xl text-text-muted leading-relaxed max-w-2xl mx-auto mb-12">
            Helping brands in the UAE and Saudi Arabia scale through precision SEO, 
            data-driven ads, and intelligent AI automation. From strategy to execution.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-b border-white/10 py-10">
            <div className="text-center">
              <span className="block text-4xl font-heading font-bold text-accent mb-1">9+</span>
              <span className="text-sm text-text-muted uppercase tracking-widest font-bold">Years Experience</span>
            </div>
            <div className="text-center md:border-x border-white/10 px-4">
              <span className="block text-4xl font-heading font-bold text-accent mb-1">100+</span>
              <span className="text-sm text-text-muted uppercase tracking-widest font-bold">Projects Complete</span>
            </div>
            <div className="text-center">
              <span className="block text-4xl font-heading font-bold text-accent mb-1">10+</span>
              <span className="text-sm text-text-muted uppercase tracking-widest font-bold">Industries Served</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section (Core Expertise) */}
      <section className="px-4 sm:px-6 lg:px-8 py-32 bg-primary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-bg-base mb-4 italic">Core Expertise</h2>
            <p className="text-text-muted">End-to-end digital solutions tailored for the GCC market.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioServices.map((service) => (
              <div 
                key={service.slug}
                className="group p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300"
              >
                <div className="text-4xl mb-6">{service.icon}</div>
                <h3 className="text-xl font-heading font-bold text-bg-base mb-4 italic group-hover:text-accent transition-colors">
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

      {/* Clients Section (Trusted by Leading GCC Brands) */}
      <section className="bg-[#050505] py-32 border-y border-white/5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-bg-base mb-6 italic tracking-tighter">
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
                      <div className="text-6xl font-heading font-bold text-white/5 tracking-tighter uppercase mb-2 select-none">
                        {client.name.split(' ').map(w => w[0]).join('')}
                      </div>
                      <div className="text-xs font-heading font-bold text-accent tracking-[0.2em] uppercase opacity-40">
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
                      <h3 className="text-2xl font-heading font-bold text-bg-base leading-none mb-2">
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

      {/* Web Development Projects Section */}
      <section className="bg-[#f8f9fa] py-24 px-4 sm:px-6 lg:px-8 text-gray-900 border-y border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-4">
              Web Development Projects
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto font-medium">
              Custom websites built for performance, conversion, and user experience.
            </p>
            <p className="text-slate-500 italic mt-2">
              From e-commerce to corporate sites — fast, responsive, and SEO-optimized.
            </p>
          </div>

          <div className="space-y-20">
            {featuredWebProjects.map((project, idx) => (
              <div 
                key={project.name}
                className="group bg-white rounded-[2rem] overflow-hidden shadow-2xl border border-gray-100 flex flex-col lg:flex-row hover:shadow-blue-900/10 transition-shadow duration-500"
              >
                {/* Visual Area */}
                <div 
                  className="relative w-full lg:w-1/2 min-h-[400px] cursor-zoom-in overflow-hidden"
                  onClick={() => setSelectedImage(project.image)}
                >
                  <Image 
                    src={project.image} 
                    alt={project.name} 
                    fill 
                    className="object-top object-cover transition-transform duration-700 group-hover:scale-105"
                    priority={idx < 2}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
                  
                  {/* Tech Stack Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map(t => (
                        <span key={t} className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[10px] uppercase font-bold text-white tracking-widest">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Info Area */}
                <div className="p-8 lg:p-12 lg:w-1/2 flex flex-col justify-center">
                  <div className="mb-6">
                    <h3 className="text-3xl font-heading font-bold text-slate-900 mb-2">{project.name}</h3>
                    <p className="text-blue-600 font-bold text-sm uppercase tracking-widest italic">{project.location}</p>
                  </div>
                  
                  <p className="text-slate-600 leading-relaxed mb-8 text-lg">
                    {project.description}
                  </p>
                  
                  <div className="mb-10">
                    <h4 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-4">Key Deliverables</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {project.features.map(f => (
                        <li key={f} className="flex items-center text-sm text-slate-700 font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mr-3 shrink-0"></span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link 
                    href={project.url} 
                    target="_blank"
                    className="inline-flex items-center justify-center bg-blue-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-slate-900 transition-all shadow-lg shadow-blue-600/20 group-hover:translate-x-1"
                  >
                    Visit Website <span className="ml-2 group-hover:ml-4 transition-all">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* More Projects Section */}
          <div className="mt-32">
            <h3 className="text-3xl font-heading font-bold text-slate-900 text-center mb-12">More Successful Launches</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {otherPlatforms.map((platform) => (
                <div key={platform.name} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group">
                  <h4 className="text-lg font-bold text-slate-900 mb-1">{platform.name}</h4>
                  <p className="text-xs text-slate-500 font-medium mb-4">{platform.industry}</p>
                  <Link 
                    href={platform.url} 
                    target="_blank"
                    className="text-blue-600 font-bold text-xs uppercase tracking-widest flex items-center group-hover:text-slate-900"
                  >
                    Launch Site <span className="ml-2 transition-all group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Behance Portfolio Section */}
      <section className="bg-white py-24 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4">
              Latest Design Work
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Branding, packaging, and visual design projects from Zorx Media
            </p>
          </div>

          {/* Project 1: MALABAR GOLDEN TRITH */}
          <div className="mb-20">
            <h3 className="text-2xl font-heading font-bold text-gray-800 mb-8 border-b-4 border-blue-600 pb-2 inline-block">
              MALABAR GOLDEN TRITH
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {behanceProjects[0].images.map((src, i) => (
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
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Project 2: Package Designing */}
          <div className="mb-20">
            <h3 className="text-2xl font-heading font-bold text-gray-800 mb-8 border-b-4 border-blue-600 pb-2 inline-block">
              Package Designing
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {behanceProjects[1].images.map((src, i) => (
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
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link
                href={behanceProjects[1].link || "#"}
                target="_blank"
                className="inline-block bg-blue-600 text-white font-bold py-4 px-8 rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20"
              >
                View All 18 Package Designs on Behance →
              </Link>
            </div>
          </div>

          {/* Project 3: FILLI TEA */}
          <div className="mb-20">
            <h3 className="text-2xl font-heading font-bold text-gray-800 mb-8 border-b-4 border-blue-600 pb-2 inline-block">
              FILLI TEA
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {behanceProjects[2].images.map((src, i) => (
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
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* View Full Portfolio CTA */}
          <div className="bg-gray-50 rounded-[2.5rem] p-12 text-center border border-gray-100">
            <h3 className="text-3xl font-heading font-bold text-gray-900 mb-4">
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
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-bg-base mb-6">
            Ready to become my next <span className="text-accent underline underline-offset-8">Success Story?</span>
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto mb-10 leading-relaxed font-body">
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
