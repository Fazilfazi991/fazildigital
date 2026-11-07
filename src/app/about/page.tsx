import Link from "next/link";
import { JsonLd, PageCTA, PageFAQ, PageHero, pageMetadata } from "@/components/site/PageElements";
import "../editorial-pages.css";

export const metadata = pageMetadata({ title: "About Mohammad Fazil | Saudi SEO Consultant", description: "Meet Mohammad Fazil and understand the direct, research-led approach behind Fazil Digital’s SEO and organic growth consultancy for Saudi businesses.", path: "/about/" });

const faqs = [
  { question: "Who will I work with?", answer: "You work directly with Mohammad Fazil on the strategy, priorities and review of the work. Implementation responsibilities are agreed at the start, including where your own developers or subject experts are involved." },
  { question: "Does serving Saudi Arabia mean you have a Saudi office?", answer: "Saudi Arabia is the service focus, with Riyadh first, followed by Jeddah and Dammam. The website does not claim a physical Saudi office or Saudi business registration. Consultancy can be delivered through direct remote collaboration." },
  { question: "How is Arabic content handled?", answer: "Arabic search planning needs its own research. Before Arabic content is commissioned, the language scope, subject input and qualified Arabic editorial review must be agreed. An English page is not automatically suitable for direct translation." },
];

export default function AboutPage() {
  return <>
    <JsonLd data={{ "@context": "https://schema.org", "@type": "AboutPage", "@id": "https://www.fazildigital.com/about/#page", url: "https://www.fazildigital.com/about/", name: "About Mohammad Fazil", mainEntity: { "@type": "Person", "@id": "https://www.fazildigital.com/#person", name: "Mohammad Fazil", jobTitle: "SEO Consultant", url: "https://www.fazildigital.com/about/", sameAs: ["https://linkedin.com/in/fazilfazi"] } }} />
    <PageHero eyebrow="Meet your consultant" title="A focused practice. A direct relationship." intro="Fazil Digital brings SEO, useful content and a considered approach to organic growth together. You work directly with Mohammad Fazil, with a clear view of the thinking behind the work." breadcrumbs={[{ label: "About" }]} />
    <section className="fd-container fd-section fd-support-about" aria-labelledby="about-practice">
      <aside className="fd-support-profile"><span className="fd-support-initials" aria-hidden="true">mf.</span><h2>Mohammad Fazil</h2><p>SEO &amp; organic growth consultant</p><a href="https://linkedin.com/in/fazilfazi" target="_blank" rel="noopener noreferrer" className="fd-text-link">View LinkedIn profile <span aria-hidden="true">↗</span></a></aside>
      <div className="fd-support-prose"><h2 id="about-practice">Strategy stays close to the business.</h2><p>Every business arrives with a different website, customer journey and set of constraints. The first job is to understand those details: what customers need, where search fits, and which changes your team can realistically deliver.</p><p>For Saudi businesses, that includes choosing the right balance of technical foundations, local discovery and original content. It also means treating Arabic and English as distinct research tasks and using genuine local signals.</p><p>The work is organized around a practical roadmap. Priorities, responsibilities and measurement are agreed together, so you can assess progress with context.</p><div className="fd-support-inline-links"><Link href="/services/seo/">Explore the SEO approach</Link><Link href="/riyadh/seo/">SEO for Riyadh businesses</Link></div></div>
    </section>
    <section className="fd-support-band fd-section"><div className="fd-container"><div className="fd-section-heading"><h2>What the working<br />relationship is built on.</h2><p>Clear decisions make useful work possible.</p></div><div className="fd-support-principles">{[
      ["Direct involvement", "A direct conversation with the person shaping your search strategy and reviewing its progress."],
      ["Research with context", "Customer questions, your actual site and available search data guide the recommendations."],
      ["Clear responsibilities", "Agree what Mohammad will handle, what your team will implement and where specialist input is needed."],
      ["Evidence before claims", "Reporting separates what was completed, what changed in the data and what still needs time or investigation."],
    ].map(([title, copy]) => <article key={title}><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>
    <section className="fd-container fd-section fd-support-reading"><h2>A Saudi focus,<br />with distinct city priorities.</h2><p>Riyadh leads the commercial focus. Jeddah and Dammam each need their own search considerations, customer language and useful local content. Service coverage describes the businesses we aim to help; it does not imply an office in each city.</p><div className="fd-support-inline-links"><Link href="/riyadh/seo/">Riyadh SEO</Link><Link href="/jeddah/seo/">Jeddah SEO</Link><Link href="/dammam/seo/">Dammam SEO</Link></div></section>
    <PageFAQ items={faqs} /><PageCTA />
  </>;
}
