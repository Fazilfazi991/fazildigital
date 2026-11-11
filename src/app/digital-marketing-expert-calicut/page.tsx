import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/site/PageElements";
import "../home.css";
import "./calicut.css";

const pageUrl = "https://www.fazildigital.com/digital-marketing-expert-calicut/";
const title = "Digital Marketing Expert in Calicut | Mohammad Fazil";
const description = "Talk with Mohammad Fazil about SEO and organic growth for your Calicut or Kozhikode business. Remote consultancy, clear scope and a practical next step.";

function ArrowIcon() {
  return <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" width="16" height="16"><path d="M4 10h11M10 5l5 5-5 5M11 4h5v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: pageUrl },
  robots: { index: false, follow: true },
  openGraph: { title, description, url: pageUrl, siteName: "Fazil Digital", type: "website", locale: "en_IN" },
};

const faqs = [
  {
    question: "Do you work with businesses in Calicut and Kozhikode?",
    answer: "Yes. Calicut and Kozhikode are two names for the same city. I offer remote SEO and organic-growth consultancy for businesses serving the city and wider Kerala. I do not claim a local office.",
  },
  {
    question: "What kind of digital marketing work can I discuss with you?",
    answer: "My current focus is SEO and organic growth: technical review, on-page improvements, content strategy, local-search foundations and a practical roadmap. We agree the scope and who will implement each change before work begins.",
  },
  {
    question: "Do you manage paid advertising or social media?",
    answer: "This page describes SEO and organic-growth consultancy. Paid advertising and social media management are not offered here as active services.",
  },
  {
    question: "How soon will SEO improve my visibility?",
    answer: "Timing depends on your starting point, competition, search demand and implementation pace. We review available data, agree realistic priorities and learn from the evidence over time. No ranking or timeline is guaranteed.",
  },
];

const calicutSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://www.fazildigital.com/#person",
      name: "Mohammad Fazil",
      url: "https://www.fazildigital.com/about/",
      image: "https://www.fazildigital.com/images/about/mohammad-fazil.webp",
      jobTitle: "SEO Consultant",
      sameAs: ["https://ae.linkedin.com/in/fazilfazi"],
      knowsAbout: ["Search engine optimization", "Technical SEO", "Content strategy", "Organic growth"],
    },
    {
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: "SEO and organic-growth consultancy",
      description: "Remote consultancy covering technical SEO, on-page improvements, content strategy and organic-growth planning.",
      provider: { "@id": "https://www.fazildigital.com/#person" },
      areaServed: [
        { "@type": "City", name: "Kozhikode", alternateName: "Calicut" },
        { "@type": "AdministrativeArea", name: "Kerala" },
      ],
      serviceType: ["Search engine optimization consultancy", "Technical SEO review", "Content strategy"],
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map(({ question, answer }) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: { "@type": "Answer", text: answer },
      })),
    },
  ],
};

const services = [
  { title: "Technical SEO review", description: "Review crawlability, indexation, site structure and technical issues that can make useful pages harder to find.", href: "/services/technical-seo/" },
  { title: "On-page and content strategy", description: "Connect page purpose, customer questions and internal links to the search intent you want to serve.", href: "/services/content-marketing/" },
  { title: "Local-search foundations", description: "Check that location coverage and public business details are accurate and consistent across the search journey.", href: "/services/local-seo/" },
  { title: "Organic-growth roadmap", description: "Prioritize changes around your goals and resources, then agree who will implement and review each step.", href: "/services/seo/" },
];

const deliverables = [
  ["A technical review", "A prioritized record of findings, affected pages, proposed changes and validation checks."],
  ["A search-intent map", "A page plan that gives each service or topic a clear purpose and internal-link path."],
  ["An editorial brief", "A practical outline connecting an audience question to evidence, helpful content and review."],
];

export default function CalicutDigitalMarketingPage() {
  return (
    <div className="fd-calicut-page">
      <JsonLd data={calicutSchema} />

      <section className="fd-calicut-hero fd-calicut-wrap" aria-labelledby="calicut-title">
        <div className="fd-calicut-hero-copy">
          <nav aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><span aria-current="page">Calicut SEO</span></nav>
          <h1 id="calicut-title">Digital marketing expert in Calicut <span>(Kozhikode)</span></h1>
          <p className="fd-calicut-lead">Practical SEO and organic-growth guidance for businesses that want to be found, understood and chosen.</p>
          <p className="fd-calicut-sublead">I’m Mohammad Fazil, a Dubai-based consultant. We can work remotely with your business in Calicut, Kozhikode or elsewhere in Kerala.</p>
          <div className="fd-calicut-actions"><Link className="fd-calicut-button" href="/contact/">Prepare a private enquiry <ArrowIcon /></Link><Link className="fd-calicut-inline-link" href="/about/">About Mohammad <ArrowIcon /></Link></div>
          <p className="fd-calicut-location-note"><span aria-hidden="true" />Remote consultancy <i aria-hidden="true">·</i> No local office is claimed</p>
        </div>
        <figure className="fd-calicut-portrait">
          <Image src="/images/about/mohammad-fazil.webp" alt="Mohammad Fazil, SEO consultant" width={1126} height={1376} preload sizes="(max-width: 760px) 100vw, 38vw" />
          <figcaption>Mohammad Fazil <span>SEO &amp; organic growth</span></figcaption>
        </figure>
      </section>

      <section className="fd-calicut-route" aria-label="Illustrative route from search to enquiry">
        <div className="fd-calicut-wrap">
          <p>This is the kind of path we want to make clearer:</p>
          <ol><li><span>01</span><strong>Search</strong></li><li><span>02</span><strong>Useful page</strong></li><li><span>03</span><strong>Clear enquiry</strong></li></ol>
          <small>Illustrative journey, not a performance claim.</small>
        </div>
      </section>

      <section className="fd-calicut-intro fd-calicut-wrap" aria-labelledby="calicut-about-title">
        <div><span className="fd-calicut-section-label">A direct working relationship</span><h2 id="calicut-about-title">The work starts with your business and the people it serves.</h2></div>
        <div><p>I work directly with business owners and marketing teams on search visibility and organic growth. We begin with your website, your customers and the changes your team can realistically make.</p><p>Calicut and Kozhikode refer to the same city. This route is for businesses serving that market and the wider Kerala region. It describes remote consultancy; it does not imply a local office or local client roster.</p></div>
      </section>

      <section className="fd-calicut-services" aria-labelledby="calicut-services-title">
        <div className="fd-calicut-wrap">
          <div className="fd-calicut-heading-row"><div><span className="fd-calicut-section-label">Where I can help</span><h2 id="calicut-services-title">Search work with a practical next step.</h2></div><p>Each engagement is scoped around your site, priorities and team. These are consultancy areas—not a promise that every task is included in every project.</p></div>
          <ul className="fd-calicut-service-list">{services.map((service, index) => <li key={service.title}><span className="fd-calicut-service-index">{String(index + 1).padStart(2, "0")}</span><div><h3>{service.title}</h3><p>{service.description}</p></div><Link href={service.href} aria-label={`Explore ${service.title}`}>Explore <ArrowIcon /></Link></li>)}</ul>
        </div>
      </section>

      <section className="fd-calicut-deliverables fd-calicut-wrap" aria-labelledby="calicut-deliverables-title">
        <div className="fd-calicut-deliverable-intro"><span className="fd-calicut-section-label">Examples, clearly labelled</span><h2 id="calicut-deliverables-title">Useful work you can review and act on.</h2><p>The examples below describe possible working documents. They are not client projects, local case studies or reported outcomes.</p></div>
        <div className="fd-calicut-deliverable-list">{deliverables.map(([name, text], index) => <article key={name}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{name}</h3><p>{text}</p></div><span className="fd-calicut-example-tag">Example deliverable</span></article>)}</div>
      </section>

      <section className="fd-calicut-process" aria-labelledby="calicut-process-title">
        <div className="fd-calicut-wrap fd-calicut-process-inner"><div><span className="fd-calicut-section-label">How I work</span><h2 id="calicut-process-title">A plan you can understand and move forward.</h2><p>SEO depends on the starting point, competition and implementation pace. The aim is to make the next decision clearer, then learn from evidence.</p></div>
          <ol><li><span>Listen</span><p>Understand your offer, audience and constraints.</p></li><li><span>Review</span><p>Look at your website, intent and available data.</p></li><li><span>Prioritize</span><p>Agree a manageable scope, owners and baseline.</p></li><li><span>Learn</span><p>Review what changed and choose the next step.</p></li></ol>
        </div>
      </section>

      <section className="fd-calicut-faq" aria-labelledby="calicut-faq-title">
        <div className="fd-calicut-wrap fd-calicut-faq-inner"><div><span className="fd-calicut-section-label">Before you get in touch</span><h2 id="calicut-faq-title">A few useful answers.</h2><p>Start with your website and the question you are trying to solve.</p></div><div>{faqs.map(({ question, answer }) => <details key={question}><summary>{question}<span aria-hidden="true" /></summary><p>{answer}</p></details>)}</div></div>
      </section>

      <section className="fd-calicut-cta" aria-labelledby="calicut-contact-title">
        <div className="fd-calicut-wrap fd-calicut-cta-inner"><div><span className="fd-calicut-section-label">Calicut · Kozhikode · Kerala</span><h2 id="calicut-contact-title">Start with the question you need answered.</h2><p>Share your website and what you hope to improve. The contact page prepares a WhatsApp message on your device so you can review it before deciding whether to send it.</p></div><Link className="fd-calicut-button fd-calicut-button-lime" href="/contact/">Prepare a WhatsApp enquiry <ArrowIcon /></Link></div>
      </section>
    </div>
  );
}
