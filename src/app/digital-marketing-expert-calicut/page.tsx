import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/site/PageElements";
import "../editorial-pages.css";
import "./calicut.css";

const pageUrl = "https://www.fazildigital.com/digital-marketing-expert-calicut/";
const title = "Digital Marketing Expert in Calicut | Mohammad Fazil";
const description = "Meet Mohammad Fazil, a digital marketing and SEO consultant helping businesses in Calicut and Kerala with search visibility, organic growth and practical marketing strategy.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: pageUrl },
  robots: { index: false, follow: true },
  openGraph: { title, description, url: pageUrl, siteName: "Fazil Digital", type: "website", locale: "en_IN" },
};

const faqs = [
  { question: "Do you work with businesses in Calicut and Kozhikode?", answer: "Yes. Calicut and Kozhikode refer to the same city. I can discuss remote SEO and organic-growth consultancy for businesses serving the city and wider Kerala. This page does not represent a local office." },
  { question: "What digital marketing services can I discuss with you?", answer: "The current focus is SEO and organic growth: technical SEO review, on-page and content strategy, local-search considerations and a practical roadmap. We will agree scope and implementation responsibilities before work begins." },
  { question: "Do you manage Google or social media ads?", answer: "Paid advertising and social media management are not presented as active Fazil Digital services on this page. If those are your main requirement, I will clarify that before proposing any work." },
  { question: "Can you improve my Google Business Profile or Maps visibility?", answer: "We can discuss local-search foundations and how your website and business information support local discovery. Any profile work depends on your eligibility, access and the agreed scope; no map placement is guaranteed." },
  { question: "How soon will SEO bring results?", answer: "Timing depends on your website, competition, search demand and how quickly agreed changes can be implemented. We establish a baseline and review available data over time; no fixed ranking or traffic outcome is promised." },
  { question: "How do I enquire without sending private information?", answer: "Use the contact page to prepare a short WhatsApp message on your device. You review and choose whether to send it. Please do not include passwords or sensitive customer information." },
];

function CalicutArrow({ direction = "diagonal" }: { direction?: "diagonal" | "down" }) {
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="16" height="16"><path d={direction === "down" ? "M12 4v15m-6-6 6 6 6-6" : "M6 18 18 6M6 6h12v12"} /></svg>;
}

export default function CalicutDigitalMarketingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Person", "@id": "https://www.fazildigital.com/#person", name: "Mohammad Fazil", url: "https://www.fazildigital.com/about/", jobTitle: "Digital Marketing and SEO Consultant", sameAs: ["https://linkedin.com/in/fazilfazi"], knowsAbout: ["Search engine optimization", "Technical SEO", "Content strategy", "Organic growth"] },
      { "@type": "Service", "@id": `${pageUrl}#service`, name: "SEO and organic-growth consultancy", description: "Direct consultancy covering technical SEO, on-page search improvements, content strategy and organic-growth planning.", provider: { "@id": "https://www.fazildigital.com/#person" }, areaServed: [{ "@type": "City", name: "Kozhikode", alternateName: "Calicut" }, { "@type": "AdministrativeArea", name: "Kerala" }], serviceType: ["Search engine optimization consultancy", "Technical SEO review", "Content strategy"] },
      { "@type": "FAQPage", mainEntity: faqs.map(({ question, answer }) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) },
    ],
  };

  return <>
    <JsonLd data={jsonLd} />
    <div className="fd-calicut">
      <section className="fd-calicut-hero fd-container" aria-labelledby="calicut-title">
        <nav aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true"> / </span><Link href="/about/">About</Link><span aria-hidden="true"> / </span><span aria-current="page">Calicut</span></nav>
        <div className="fd-calicut-hero-grid">
          <div>
            <p className="fd-calicut-overline">Independent SEO &amp; growth consultancy</p>
            <h1 id="calicut-title">Digital Marketing Consultant in <em>Calicut</em> <span>(Kozhikode)</span></h1>
            <p className="fd-calicut-deck">Thoughtful search strategy for businesses that want to be found, understood and chosen.</p>
            <div className="fd-calicut-actions"><Link className="fd-button" href="/contact/?market=calicut#contact-prepare">Prepare a private enquiry <CalicutArrow /></Link><a className="fd-text-link" href="#approach">See how I work <CalicutArrow direction="down" /></a></div>
          </div>
          <aside className="fd-calicut-note" aria-label="A note on service coverage"><span className="fd-calicut-note-mark" aria-hidden="true">mf.</span><p>Direct work with Mohammad Fazil</p><span>Remote consultancy for Calicut, Kozhikode &amp; Kerala</span><i aria-hidden="true" /></aside>
        </div>
        <div className="fd-calicut-hero-foot"><span>Calicut is also known as Kozhikode</span><span>SEO · Technical foundations · Content strategy</span></div>
      </section>

      <section className="fd-container fd-calicut-intro fd-section" aria-labelledby="calicut-about">
        <div className="fd-calicut-aside"><span>Independent practice</span><span>Direct · Remote · Search-led</span></div>
        <div className="fd-calicut-intro-copy"><h2 id="calicut-about">A clear view of the work.<br /><em>A direct conversation.</em></h2><div><p>I’m Mohammad Fazil. I work directly with business owners and marketing teams on search visibility and organic growth. The work starts with your website, your customers and what your team can realistically change.</p><p>Fazil Digital’s established consultancy serves Saudi Arabia. This page is a separate, focused route for businesses in Calicut and Kerala that want to discuss SEO remotely. It does not imply a local office or a roster of Calicut clients.</p><Link className="fd-text-link" href="/about/">More about Mohammad and the practice <CalicutArrow /></Link></div></div>
      </section>

      <section className="fd-calicut-challenges" aria-labelledby="calicut-context">
        <div className="fd-container fd-calicut-challenge-grid"><div><p className="fd-calicut-overline">Local context, real foundations</p><h2 id="calicut-context">Good marketing begins by seeing the whole journey.</h2><p className="fd-calicut-lead">A search visit only helps when the next step is clear and the business information is trustworthy.</p></div><div className="fd-calicut-context-list">
          <article><span>Search language</span><p>People may search for Calicut or Kozhikode. We look at the language your customers actually use instead of assuming one spelling tells the whole story.</p></article>
          <article><span>Local discovery</span><p>For location-based businesses, website content and accurate public business details need to support each other. A real address or profile is never invented to pursue a ranking.</p></article>
          <article><span>Useful next steps</span><p>Visibility is only part of the job. The service page, contact route and mobile experience should help visitors understand what to do next.</p></article>
        </div></div>
      </section>

      <section className="fd-container fd-section fd-calicut-services" aria-labelledby="calicut-services">
        <div className="fd-calicut-section-head"><div><p className="fd-calicut-overline">A focused scope</p><h2 id="calicut-services">Search work with a practical next step.</h2></div><p>We agree the work around your website and team. Each item below is a consultancy focus, with implementation responsibilities made clear before we start.</p></div>
        <div className="fd-calicut-service-list">
          <article><span>01</span><div><h3>Technical SEO review</h3><p>Understand crawlability, indexation, site structure and technical issues that could make useful pages harder to find.</p></div><Link href="/services/technical-seo/" aria-label="Explore technical SEO"><CalicutArrow /></Link></article>
          <article><span>02</span><div><h3>On-page SEO &amp; content strategy</h3><p>Align page purpose, customer questions, internal links and content priorities with the search intent your business wants to serve.</p></div><Link href="/services/content-marketing/" aria-label="Explore content strategy"><CalicutArrow /></Link></article>
          <article><span>03</span><div><h3>Local-search foundations</h3><p>Review how location, service coverage and accurate business information appear across the website and the search journey.</p></div><Link href="/services/local-seo/" aria-label="Explore local SEO"><CalicutArrow /></Link></article>
          <article><span>04</span><div><h3>Organic-growth roadmap</h3><p>Prioritise the changes that fit your goals, resources and baseline data, then agree who will implement and review each step.</p></div><Link href="/services/seo/" aria-label="Explore SEO consultancy"><CalicutArrow /></Link></article>
        </div>
      </section>

      <section className="fd-calicut-proof" aria-labelledby="calicut-work"><div className="fd-container fd-calicut-proof-grid"><div className="fd-calicut-proof-stamp"><span>Selected work</span><strong>Scope<br />before<br /><em>claims.</em></strong><small>Fazil Digital · Project archive</small></div><div><p className="fd-calicut-overline">Experience, shown with context</p><h2 id="calicut-work">Relevant work is available to review.</h2><p>The portfolio and case-study archive describe work across Gulf markets. They are not Calicut client results. Numerical outcomes are withheld where dated source reports are unavailable.</p><Link className="fd-text-link" href="/case-studies/">Review documented project notes <CalicutArrow /></Link><p className="fd-calicut-proof-caption">No local testimonials, office claims or performance figures are added here.</p></div></div></section>

      <section className="fd-container fd-section fd-calicut-approach" id="approach" aria-labelledby="calicut-method">
        <div><p className="fd-calicut-overline">Method, not a magic formula</p><h2 id="calicut-method">A plan you can understand and act on.</h2><p>SEO is ongoing work shaped by your starting point, competition and implementation pace. The aim is to make the next decision clearer, then learn from evidence.</p></div>
        <ol><li><span>Listen</span><p>Understand your offer, audience, priorities and constraints.</p></li><li><span>Review</span><p>Look at your site, search intent and available data before recommending changes.</p></li><li><span>Prioritise</span><p>Agree a manageable roadmap, responsibilities and a measurement baseline.</p></li><li><span>Learn</span><p>Review what was implemented and what the evidence says about the next step.</p></li></ol>
      </section>

      <section className="fd-calicut-faq" aria-labelledby="calicut-faq-title"><div className="fd-container fd-faq fd-section"><div><p className="fd-calicut-overline">Before you get in touch</p><h2 id="calicut-faq-title">A few useful answers.</h2><p>Not sure what fits? Start with your website and the question you are trying to solve.</p></div><div>{faqs.map(({ question, answer }) => <details key={question}><summary>{question}<span className="fd-faq-toggle" aria-hidden="true" /></summary><p>{answer}</p></details>)}</div></div></section>

      <section className="fd-calicut-cta" aria-labelledby="calicut-contact"><div className="fd-container"><p className="fd-calicut-overline">Calicut · Kozhikode · Kerala</p><h2 id="calicut-contact">Start with the question<br /><em>you need answered.</em></h2><p>Share your website and what you hope to improve. You’ll prepare the message on your device and decide whether to send it through WhatsApp.</p><Link className="fd-button fd-button-light" href="/contact/?market=calicut#contact-prepare">Prepare a WhatsApp enquiry <CalicutArrow /></Link><p className="fd-calicut-cta-foot">No passwords or confidential customer data needed. <Link href="/privacy-policy/">Privacy policy</Link></p></div></section>
    </div>
  </>;
}
