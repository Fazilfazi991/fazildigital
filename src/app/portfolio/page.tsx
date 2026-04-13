import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/Button";
import { portfolioServices, clients } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Portfolio & Clients | Mohammad Fazil - Digital Consultant in Dubai",
  description: "Browse the digital marketing, SEO, and AI automation work Mohammad Fazil has delivered for leading businesses in the UAE and Saudi Arabia.",
};

export default function PortfolioPage() {
  return (
    <div className="pt-24 pb-32 overflow-hidden">
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
                className="relative flex flex-col bg-primary border border-white/10 rounded-3xl p-8 hover:border-accent/40 transition-colors shadow-2xl overflow-hidden group"
              >
                {/* Logo Area */}
                <div className="relative h-24 mb-10 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-500">
                  {client.logoUrl ? (
                    <div className="relative w-full h-full">
                       <Image 
                        src={`/images/portfolio/clients/logos_set_2.png`} 
                        alt={client.name} 
                        fill 
                        className="object-contain"
                      />
                    </div>
                  ) : (
                    <div className="text-3xl font-syne font-bold text-white/20 tracking-tighter uppercase opacity-50 group-hover:text-accent group-hover:opacity-100 transition-all">
                      {client.name}
                    </div>
                  )}
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-syne font-bold text-bg-base leading-none">
                    {client.name}
                  </h3>
                  <p className="text-xs font-bold text-accent uppercase tracking-widest">
                    {client.industry}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 pt-2">
                    {client.services.map((service) => (
                      <span 
                        key={service} 
                        className="text-[10px] bg-white/5 border border-white/10 px-3 py-1 rounded-full text-text-muted uppercase font-bold"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-white/5 flex gap-4">
                  {client.websiteUrl && (
                    <a 
                      href={client.websiteUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xs text-accent font-bold hover:underline"
                    >
                      Visit Website →
                    </a>
                  )}
                  {client.instagramUrl && (
                    <a 
                      href={client.instagramUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xs text-text-muted font-bold hover:text-bg-base"
                    >
                      Instagram
                    </a>
                  )}
                </div>
              </div>
            ))}
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
