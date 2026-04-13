import { Button } from "@/components/Button";
import { Metadata } from "next";

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
          <h1 className="text-4xl md:text-5xl font-syne font-bold text-bg-base mb-6">
            Let&apos;s talk about your business.
          </h1>
          <p className="text-lg text-text-muted font-dm-sans mb-12">
            Get your free 30-minute digital audit. I will review your current digital presence and tell you exactly where the opportunities are — no pitch, no pressure.
          </p>
          
          <div className="space-y-8">
            <div>
              <h3 className="font-syne font-bold text-bg-base text-lg mb-2">Location</h3>
              <p className="text-text-muted">Dubai, United Arab Emirates<br/>Serving UAE, Saudi Arabia, and GCC</p>
            </div>
            
            <div>
              <h3 className="font-syne font-bold text-bg-base text-lg mb-2">Direct Contact</h3>
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
          <h2 className="font-syne font-bold text-2xl text-bg-base mb-6">Send a Message</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-bg-base/80 mb-2">Name</label>
              <input type="text" id="name" className="w-full bg-[#1a1a1a] border border-white/10 rounded-md px-4 py-3 text-bg-base focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors" placeholder="John Doe" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-bg-base/80 mb-2">Work Email</label>
              <input type="email" id="email" className="w-full bg-[#1a1a1a] border border-white/10 rounded-md px-4 py-3 text-bg-base focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors" placeholder="john@company.com" />
            </div>
            <div>
              <label htmlFor="method" className="block text-sm font-medium text-bg-base/80 mb-2">Preferred Contact Method</label>
              <select id="method" className="w-full bg-[#1a1a1a] border border-white/10 rounded-md px-4 py-3 text-bg-base focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors appearance-none">
                <option value="email">Email</option>
                <option value="whatsapp">WhatsApp</option>
                <option value="phone">Phone Call</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-bg-base/80 mb-2">How can I help? (Optional)</label>
              <textarea id="message" rows={5} className="w-full bg-[#1a1a1a] border border-white/10 rounded-md px-4 py-3 text-bg-base focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors" placeholder="Tell me about your business goals..."></textarea>
            </div>
            <Button type="button" className="w-full text-lg py-4 border-none">
              Get Your Free Audit
            </Button>
            <p className="text-xs text-text-muted text-center mt-4">
              Alternatively, I will embed my Calendly here for direct scheduling.
            </p>
          </form>
        </div>

      </div>
    </div>
  );
}
