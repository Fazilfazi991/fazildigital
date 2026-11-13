import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Fazil Digital handles information submitted through this website, including AI chat and contact links.",
  alternates: { canonical: "https://www.fazildigital.com/privacy-policy/" },
};

export default function PrivacyPolicyPage() {
  return (
    <article className="pt-28 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <p className="text-accent text-sm font-bold uppercase tracking-widest mb-4">Last updated 11 November 2026</p>
        <h1 className="text-4xl md:text-6xl font-heading font-bold text-bg-base mb-8">Privacy Policy</h1>
        <div className="space-y-8 text-text-muted text-lg leading-relaxed">
          <section>
            <h2 className="text-2xl font-heading font-bold text-bg-base mb-3">Information you choose to share</h2>
            <p>If you submit an enquiry, Fazil Digital receives the name, service and priority you select, any optional details or website you provide, and your chosen reply contact. The site sends this information through Resend, an email delivery provider, to Fazil Digital’s enquiry inbox so Mohammad can respond. The website does not store enquiry content in its own database. The email provider and receiving mailbox may retain the message under their own terms and retention settings. Do not include passwords, payment details, or sensitive personal information.</p>
          </section>
          <section>
            <h2 className="text-2xl font-heading font-bold text-bg-base mb-3">External services</h2>
            <p>Enquiry emails are delivered through Resend and sent to the Fazil Digital enquiry inbox. The site also uses Upstash Redis for abuse prevention: it processes a keyed, pseudonymous IP identifier and a keyed duplicate-submission fingerprint with short-lived counters and locks (up to ten minutes). The raw IP and enquiry text are not stored in those Redis keys. WhatsApp, email, and LinkedIn links open third-party services that handle information you send under their own terms. The hosting provider may process routine technical logs needed to deliver and secure the site.</p>
          </section>
          <section>
            <h2 className="text-2xl font-heading font-bold text-bg-base mb-3">AI chat</h2>
            <p>The Fazil Digital AI Assistant is available only when the site’s chat service has been enabled and configured. When enabled, the messages you submit and the limited recent conversation needed to answer your question are sent to DeepSeek for processing. DeepSeek processes that information under its own <a className="text-accent hover:underline" href="https://platform.deepseek.com/downloads/DeepSeek%20Privacy%20Policy.pdf" target="_blank" rel="noreferrer">Privacy Policy</a>. Review that policy before using chat. Do not enter passwords, payment details, sensitive personal information, or information you are not comfortable sending to an AI provider.</p>
            <p className="mt-3">Fazil Digital does not retain chat transcripts on its own site systems by default. The service uses Upstash Redis to enforce rate limits; for this, the request IP is processed transiently by the site and a keyed pseudonymous identifier and request counters are sent to the configured rate-limit service. Rate-limit counters expire automatically. Site hosting providers may also process routine technical request logs. If you choose to copy a WhatsApp draft and send it, the information in that draft is handled by WhatsApp under its privacy terms.</p>
          </section>
          <section>
            <h2 className="text-2xl font-heading font-bold text-bg-base mb-3">Analytics and advertising</h2>
            <p>Google Analytics support is built into the site but only activates when a valid measurement ID is configured. When active, it records page views and interaction events such as enquiry steps, the selected service category, successful or failed submission, WhatsApp clicks, email clicks and chatbot interaction counts. Enquiry analytics do not include your name, phone number, email address, website, selected priority or free-text details. Chat analytics do not include message text, pasted website addresses or other message contents.</p>
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
