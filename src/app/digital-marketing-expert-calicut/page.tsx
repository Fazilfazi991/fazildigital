import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ReviewForm } from "@/components/home/HomeInteractions";
import { ProblemExplorer, ProcessStepper } from "@/components/home/HomeExplorers";
import { JsonLd } from "@/components/site/PageElements";
import { calicutArticles } from "@/data/calicut-articles";
import "../home-reset.css";
import "./calicut.css";

const pageUrl = "https://www.fazildigital.com/digital-marketing-expert-calicut/";
const title = "Digital Marketing Expert in Calicut | Mohammad Fazil";
const description = "Meet Mohammad Fazil, a digital marketing and SEO consultant helping businesses in Calicut and Kerala with search visibility, organic growth and practical marketing strategy.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: pageUrl },
  openGraph: { title, description, url: pageUrl, siteName: "Fazil Digital", type: "website", locale: "en_IN" },
};

const faqs = [
  { question: "Do you work with businesses in Calicut and Kozhikode?", answer: "Yes. Calicut and Kozhikode are two names for the same city. I offer remote consultancy for businesses serving the city and wider Kerala." },
  { question: "What kind of marketing work can we discuss?", answer: "My focus is SEO and organic growth: technical review, on-page improvements, content strategy, local-search foundations and a practical roadmap. We agree the scope and who will implement each change before work begins." },
  { question: "Do you manage paid advertising or social media?", answer: "Paid advertising and social media management are not offered here as active services. This page focuses on SEO, digital strategy and organic growth." },
  { question: "Can you help with local search and Google Maps?", answer: "We can review local-search foundations and how your website and accurate business information support discovery. Any profile work depends on eligibility, access and agreed scope; no map placement is guaranteed." },
  { question: "How soon will SEO improve my visibility?", answer: "Timing depends on your starting point, competition, search demand and implementation pace. We review available data, set realistic priorities and learn from evidence over time. No ranking or timeline is guaranteed." },
  { question: "How does the enquiry form handle my details?", answer: "The form prepares a message in your browser. Nothing is stored or sent by the form; you review the draft, copy it and decide whether to send it through WhatsApp." },
];

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.7"><path d={diagonal ? "M6 18 18 6M6 6h12v12" : "M4 12h15m-6-6 6 6-6 6"} /></svg>;
}

export default function CalicutDigitalMarketingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Person", "@id": "https://www.fazildigital.com/#person", name: "Mohammad Fazil", url: "https://www.fazildigital.com/about/", jobTitle: "SEO Consultant", sameAs: ["https://ae.linkedin.com/in/fazilfazi"], knowsAbout: ["Search engine optimization", "Technical SEO", "Content strategy", "Organic growth"] },
      { "@type": "Service", "@id": `${pageUrl}#service`, name: "SEO and organic-growth consultancy", description: "Remote consultancy covering technical SEO, on-page improvements, content strategy and organic-growth planning.", provider: { "@id": "https://www.fazildigital.com/#person" }, areaServed: [{ "@type": "City", name: "Kozhikode", alternateName: "Calicut" }, { "@type": "AdministrativeArea", name: "Kerala" }], serviceType: ["Search engine optimization consultancy", "Technical SEO review", "Content strategy"] },
      { "@type": "FAQPage", mainEntity: faqs.map(({ question, answer }) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) },
    ],
  };

  return <div className="fd-home fd-reset-home cr-page">
    <JsonLd data={jsonLd} />
      <section className="cr-hero" aria-labelledby="calicut-title">
        <div className="cr-hero-copy">
          <nav aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true"> / </span><span aria-current="page">Calicut</span></nav>
          <h1 id="calicut-title"><span>Digital Marketing</span><span>Expert in</span><span className="cr-orange-word">Calicut</span></h1>
          <p className="cr-hero-lead">I’m Mohammad Fazil. I help businesses in Calicut bring digital marketing strategy, SEO and organic growth into focus.</p>
          <div className="cr-hero-actions"><a className="fd-button cr-button-orange" href="#review">Discuss Your Marketing Goals <Arrow /></a><Link className="cr-meet-link" href="#meet">Meet Mohammad <Arrow diagonal /></Link></div>
          <p className="cr-hero-note">Direct, remote consultancy for Calicut and the wider Kerala market.</p>
        </div>
        <figure className="cr-portrait"><div className="cr-photo-frame"><Image src="/images/about/mohammad-fazil.webp" alt="Mohammad Fazil holding a coffee at a café" fill priority sizes="(max-width: 760px) 88vw, 44vw" /></div><figcaption><strong>Mohammad Fazil</strong><span>Marketing · Technology · Business</span></figcaption><span className="cr-photo-index" aria-hidden="true">MF.</span></figure>
      </section>

      <section className="cr-meet" id="meet" aria-labelledby="meet-title">
        <div className="cr-meet-inner"><p className="cr-meet-signature" aria-hidden="true">MF<span>.</span></p><div className="cr-meet-copy"><h2 id="meet-title">A clear strategy.<br /><span>A real person to work with.</span></h2><p>I bring marketing, technology and business perspectives together to help teams make better decisions about search. You work directly with me—from the first review through implementation and improvement.</p><p>Fazil Digital’s established consultancy focuses on Saudi Arabia. This page is a separate route for Calicut and Kerala businesses looking for remote SEO and organic-growth support.</p><Link href="/about/" className="cr-light-link">More about Mohammad <Arrow diagonal /></Link></div></div>
      </section>

      <section className="cr-problems fr-section" aria-labelledby="problems-title">
        <div className="cr-section-heading"><h2 id="problems-title">What would you like to change?</h2><p>Start with the challenge that feels closest. I’ll suggest a useful place to look.</p></div>
        <ProblemExplorer />
      </section>

      <section className="cr-services" aria-labelledby="services-title">
        <div className="cr-services-inner"><div className="cr-services-heading"><h2 id="services-title">What I can help with.</h2><p>Clear priorities across the search work that supports discovery and growth.</p></div>
          <div className="cr-service-layout"><article className="cr-service-feature"><span>Strategy through execution</span><h3>SEO that fits the business behind the website.</h3><p>Connect technical foundations, useful content and customer intent to a focused organic-growth plan.</p><Link href="/services/seo/">Explore SEO consultancy <Arrow /></Link><div className="cr-search-map" aria-hidden="true"><span>Search intent</span><i></i><div><b>Useful page</b><b>Clear next step</b><b>Organic growth</b></div></div></article>
            <div className="cr-service-list"><article><span>01</span><div><h3>Digital marketing strategy</h3><p>Set priorities that connect business goals, customer questions and the work your team can deliver.</p></div><Link href="/services/digital-marketing/" aria-label="Explore digital marketing strategy"><Arrow diagonal /></Link></article><article><span>02</span><div><h3>Local search foundations</h3><p>Improve how your service coverage and accurate business details support local discovery.</p></div><Link href="/services/local-seo/" aria-label="Explore local search"><Arrow diagonal /></Link></article><article><span>03</span><div><h3>Content and on-page SEO</h3><p>Clarify page purpose, useful information and internal paths around what customers are looking for.</p></div><Link href="/services/content-marketing/" aria-label="Explore content strategy"><Arrow diagonal /></Link></article></div>
          </div>
        </div>
      </section>

      <section className="cr-work" aria-labelledby="work-title"><div className="cr-work-inner"><div className="cr-work-heading"><div><h2 id="work-title">Useful work you can see and act on.</h2><p>Illustrative deliverables</p></div><p>Examples of the thinking and working documents an engagement may involve. They are not client results or Calicut case studies.</p></div>
        <div className="cr-work-grid"><article className="cr-work-item cr-work-main"><div className="cr-art cr-art-review"><span>TECHNICAL REVIEW</span><strong>Find the<br />right fixes.</strong><div className="cr-audit-sheet" aria-hidden="true"><i></i><i></i><i></i><i></i><b>Priority</b><b>Action</b></div><small>Example deliverable · findings &amp; next steps</small></div><h3>A prioritized technical review</h3><p>Findings, affected pages, recommended changes and validation checks.</p></article><article className="cr-work-item"><div className="cr-art cr-art-map"><span>SEARCH INTENT</span><strong>Make each page<br />do its job.</strong><div className="cr-intent-map" aria-hidden="true"><i></i><b>Service</b><b>Answer</b><b>Enquiry</b></div><small>Example deliverable · page purpose</small></div><h3>A page and intent map</h3><p>A simple structure joining audience questions to useful pages and internal links.</p></article><article className="cr-work-item"><div className="cr-art cr-art-roadmap"><span>ORGANIC GROWTH</span><strong>Know what<br />comes next.</strong><div className="cr-roadmap-lines" aria-hidden="true"><i>Review</i><i>Prioritise</i><i>Implement</i><i>Learn</i></div><small>Example deliverable · practical roadmap</small></div><h3>A workable growth plan</h3><p>Priorities, responsibilities and a baseline to guide the next review.</p></article></div>
        <Link className="cr-project-link" href="/case-studies/">See documented project notes <Arrow diagonal /></Link>
      </div></section>

      <section className="cr-reading" aria-labelledby="reading-title"><div className="cr-reading-inner"><div className="cr-reading-heading"><p>Calicut &amp; Kerala · useful guides</p><h2 id="reading-title">Clearer answers for local search.</h2></div><div className="cr-reading-grid">{calicutArticles.map((article, index) => <article key={article.slug}><span>0{index + 1} / {index === 0 ? "SEARCH VISIBILITY" : "LOCAL DISCOVERY"}</span><h3><Link href={`/blog/${article.slug}/`}>{article.title}</Link></h3><p>{article.excerpt}</p><Link className="cr-reading-link" href={`/blog/${article.slug}/`}>Read the guide <Arrow diagonal /></Link></article>)}</div></div></section>

      <section className="cr-process" aria-labelledby="process-title"><div className="cr-process-intro"><h2 id="process-title">How we work together.</h2><p>A straightforward path from first conversation to a considered next step.</p></div><ProcessStepper /></section>

      <section className="cr-faq" aria-labelledby="faq-title"><div className="cr-faq-heading"><h2 id="faq-title">Questions, answered.</h2><p>Good work starts with a clear understanding of what’s included.</p></div><div className="cr-faq-list">{faqs.map(({ question, answer }) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div></section>

      <section className="cr-enquiry" id="review" aria-labelledby="enquiry-title"><div className="cr-enquiry-inner"><div className="cr-enquiry-copy"><h2 id="enquiry-title">Let’s talk about your goals.</h2><p>Tell me a little about your business and what you want marketing to do. Your message stays in your browser until you choose to copy it.</p><a className="cr-direct-whatsapp" href="https://wa.me/918086191325" target="_blank" rel="noopener noreferrer">Open WhatsApp directly <Arrow diagonal /></a><span className="cr-whatsapp-note">A clean WhatsApp link. No message is sent automatically.</span></div><div className="fr-review cr-review"><h3>Discuss your marketing goals</h3><p>Prepare a private enquiry for Calicut or Kozhikode.</p><ReviewForm market="calicut" /></div></div></section>
  </div>;
}
