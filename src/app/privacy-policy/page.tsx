import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Fazil Digital handles information submitted through this website and its contact links.",
  alternates: { canonical: "https://www.fazildigital.com/privacy-policy/" },
};

export default function PrivacyPolicyPage() {
  return (
    <article className="pt-28 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <p className="text-accent text-sm font-bold uppercase tracking-widest mb-4">Last updated 27 August 2026</p>
        <h1 className="text-4xl md:text-6xl font-heading font-bold text-bg-base mb-8">Privacy Policy</h1>
        <div className="space-y-8 text-text-muted text-lg leading-relaxed">
          <section>
            <h2 className="text-2xl font-heading font-bold text-bg-base mb-3">Information you choose to share</h2>
            <p>The contact form prepares a WhatsApp message using the name, email address, preferred contact method, and business information you enter. The website does not submit or store that form data in its own database. You can review the message in WhatsApp before choosing whether to send it.</p>
          </section>
          <section>
            <h2 className="text-2xl font-heading font-bold text-bg-base mb-3">External services</h2>
            <p>Links to WhatsApp, email, and LinkedIn take you to third-party services. Information you send through those services is handled under their respective privacy terms. This website is hosted by an external hosting provider, which may process routine technical logs needed to deliver and secure the site.</p>
          </section>
          <section>
            <h2 className="text-2xl font-heading font-bold text-bg-base mb-3">Analytics and advertising</h2>
            <p>No website analytics or advertising tracker is currently implemented in this codebase. If measurement tools are introduced later, this notice should be updated to identify them and explain the choices available to visitors.</p>
          </section>
          <section>
            <h2 className="text-2xl font-heading font-bold text-bg-base mb-3">Questions or requests</h2>
            <p>To ask about information you previously sent to Fazil Digital, email <a className="text-accent hover:underline" href="mailto:hello@fazildigital.com">hello@fazildigital.com</a>. You can also use the <Link className="text-accent hover:underline" href="/contact/">contact page</Link>.</p>
          </section>
        </div>
      </div>
    </article>
  );
}
