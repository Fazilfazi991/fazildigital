import { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Mohammad Fazil | Get Your Free 30-Min Digital Audit",
  description: "Get in touch with Mohammad Fazil for digital consulting in Dubai, UAE, and Saudi Arabia. Get your free 30-minute digital audit.",
  alternates: { canonical: "https://www.fazildigital.com/contact/" },
};

export default function ContactPage() {
  return (
    <div className="pt-24 pb-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Contact Info */}
        <div>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-bg-base mb-6">
            Let&apos;s talk about your business.
          </h1>
          <p className="text-lg text-text-muted font-body mb-12">
            Get your free 30-minute digital audit. I will review your current digital presence and tell you exactly where the opportunities are — no pitch, no pressure.
          </p>
          
          <div className="space-y-8">
            <div>
              <h3 className="font-heading font-bold text-bg-base text-lg mb-2">Location</h3>
              <p className="text-text-muted">Dubai, United Arab Emirates<br/>Serving UAE, Saudi Arabia, and GCC</p>
            </div>
            
            <div>
              <h3 className="font-heading font-bold text-bg-base text-lg mb-2">Direct Contact</h3>
              <ul className="space-y-4 text-text-muted">
                <li>
                  <a href="https://linkedin.com/in/fazilfazi" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline underline-offset-4">Connect on LinkedIn</a>
                </li>
                <li>
                  <a href="https://wa.me/971542763828" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline underline-offset-4 flex items-center gap-2">
                    Message on WhatsApp
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Form / Calendly Placeholder */}
        <div className="bg-[#0f0f0f] border border-white/10 p-8 rounded-xl shadow-2xl">
          <h2 className="font-heading font-bold text-2xl text-bg-base mb-6">Send a Message</h2>
          <ContactForm />
        </div>

      </div>
    </div>
  );
}
