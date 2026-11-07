import Link from "next/link";
import { ReviewForm } from "@/components/home/HomeInteractions";
import { JsonLd, PageFAQ, PageHero, pageMetadata } from "@/components/site/PageElements";
import "../editorial-pages.css";

export const metadata = pageMetadata({ title: "Request a Saudi SEO Review", description: "Discuss your Saudi SEO goals directly with Mohammad Fazil. Prepare an SEO review request for WhatsApp and review the message before sending.", path: "/contact/" });
const faqs = [
  { question: "What should I include in the first message?", answer: "Share your website, the Saudi market you serve and the search problem you want to understand. If you already have an internal marketing or development team, mention how implementation is handled. You do not need to send passwords or confidential customer data." },
  { question: "Does this form send an enquiry automatically?", answer: "No. It prepares a message on your device. You copy it, open WhatsApp, paste it into the conversation and choose whether to send it. The website does not store a form submission or confirm that a message has been delivered." },
  { question: "Will an SEO review include a fixed price?", answer: "A useful scope depends on the website, priorities and implementation needs. The initial conversation helps determine what needs reviewing. Any proposed work, pricing and responsibilities should be agreed before an engagement starts." },
];

export default function ContactPage() {
  return <>
    <JsonLd data={{ "@context": "https://schema.org", "@type": "ContactPage", url: "https://www.fazildigital.com/contact/", name: "Contact Fazil Digital", about: { "@id": "https://www.fazildigital.com/#organization" } }} />
    <PageHero eyebrow="Start a conversation" title="Let’s understand your search opportunity." intro="Tell Mohammad about your website, your Saudi market and what you would like to improve. A useful first conversation starts with the right context." breadcrumbs={[{ label: "Contact" }]} />
    <section className="fd-container fd-section fd-support-contact" aria-labelledby="contact-start">
      <div><h2 id="contact-start">A few details.<br />A clear starting point.</h2><p className="fd-support-lead">Share your priorities, copy your message and paste it into WhatsApp. Nothing is sent until you choose to send it there.</p><dl className="fd-support-contact-facts"><div><dt>Saudi service focus</dt><dd>Riyadh, followed by Jeddah and Dammam. Direct consultancy without an asserted Saudi office.</dd></div><div><dt>Direct WhatsApp</dt><dd><a href="https://wa.me/971542763828" target="_blank" rel="noopener noreferrer">+971 54 276 3828 <span aria-hidden="true">↗</span></a><span>Review your draft before sending.</span></dd></div><div><dt>Professional profile</dt><dd><a href="https://linkedin.com/in/fazilfazi" target="_blank" rel="noopener noreferrer">Mohammad Fazil on LinkedIn <span aria-hidden="true">↗</span></a></dd></div></dl><p className="fd-support-privacy-note">Please keep passwords and sensitive customer information out of your message. <Link href="/privacy-policy/">Read the privacy policy.</Link></p></div>
      <div className="fd-review fd-support-contact-panel"><h2 id="contact-prepare">Request an SEO Review</h2><ReviewForm /></div>
    </section>
    <section className="fd-support-band fd-section"><div className="fd-container"><div className="fd-section-heading"><h2>What happens next.</h2><p>A simple path from context to an agreed scope.</p></div><ol className="fd-support-steps"><li><span>01</span><h3>Share the starting point</h3><p>Your website, customer market and the problem you want to understand.</p></li><li><span>02</span><h3>Discuss the priorities</h3><p>Clarify the questions, available evidence and who can implement changes.</p></li><li><span>03</span><h3>Agree the next step</h3><p>Define an appropriate review or engagement with clear scope and responsibilities.</p></li></ol></div></section>
    <PageFAQ items={faqs} />
  </>;
}
