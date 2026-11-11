import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ReviewForm } from "@/components/home/HomeInteractions";
import { ProblemExplorer, ProcessStepper } from "@/components/home/HomeExplorers";
import { HomepageHero } from "@/components/home/HomepageHero";
import { GrowthRoadmapArt, SearchIntentArt, TechnicalReviewArt } from "@/components/home/WorkShowcaseMotion";
import { SiteFooter, SiteHeader } from "@/components/site/BrandChrome";
import { saudiArticles } from "@/data/saudi-articles";
import "./home-reset.css";

const title = "SEO Consultant Saudi Arabia | Fazil Digital";
const description = "Work directly with Mohammad Fazil on technical SEO, local search and useful content for Saudi businesses in Riyadh, Jeddah and Dammam.";
export const metadata: Metadata = {
  title: { absolute: title }, description,
  alternates: { canonical: "https://www.fazildigital.com/", languages: {}, types: {} },
  openGraph: { title, description, url: "https://www.fazildigital.com/", siteName: "Fazil Digital", type: "website", locale: "en_SA" },
  twitter: { card: "summary", title, description },
};

const faqs = [
  { question: "How long does SEO take to make a difference?", answer: "Timing depends on your website, competition, content and implementation. We establish a baseline, agree priorities and review visibility, relevant visits and enquiry signals. No ranking or timeline is guaranteed." },
  { question: "What determines the cost of SEO?", answer: "Scope depends on your website’s size and condition, target markets, competition, content needs and implementation responsibilities. After an initial review, you receive a clear scope and pricing before work begins." },
  { question: "Can you support businesses across Saudi Arabia?", answer: "Yes. My focus is Saudi Arabia, with Riyadh as the primary market followed by Jeddah and Dammam. Local search work reflects real services and eligible locations; I do not imply a local office where one does not exist." },
];
const articles = ["seo-services-saudi-arabia-guide", "local-seo-saudi-businesses-guide", "google-search-console-seo-measurement-guide"].map(slug => saudiArticles.find(article => article.slug === slug)).filter((article): article is (typeof saudiArticles)[number] => Boolean(article));
const schema = { "@context": "https://schema.org", "@graph": [
  { "@type": "Person", "@id": "https://www.fazildigital.com/#person", name: "Mohammad Fazil", url: "https://www.fazildigital.com/about/", sameAs: ["https://ae.linkedin.com/in/fazilfazi"], jobTitle: "SEO Consultant" },
  { "@type": "Organization", "@id": "https://www.fazildigital.com/#organization", name: "Fazil Digital", url: "https://www.fazildigital.com/", founder: { "@id": "https://www.fazildigital.com/#person" }, areaServed: { "@type": "Country", name: "Saudi Arabia" } },
  { "@type": "Service", name: "SEO & Organic Growth", provider: { "@id": "https://www.fazildigital.com/#organization" }, areaServed: { "@type": "Country", name: "Saudi Arabia" }, serviceType: ["Technical SEO", "Local SEO", "SEO Content Strategy"] },
  { "@type": "WebSite", "@id": "https://www.fazildigital.com/#website", name: "Fazil Digital", url: "https://www.fazildigital.com/", inLanguage: "en", publisher: { "@id": "https://www.fazildigital.com/#organization" } },
  { "@type": "FAQPage", mainEntity: faqs.map(faq => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) },
] };
function Arrow({ diagonal = false }: { diagonal?: boolean }) { return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" width="18" height="18"><path d={diagonal ? "M6 18 18 6M6 6h12v12" : "M4 12h15m-6-6 6 6-6 6"} /></svg>; }

export default function HomePage() {
  return <div className="fd-home fd-reset-home" id="top">
    <a className="fr-skip" href="#main-content">Skip to content</a><SiteHeader />
    <main id="main-content" className="fr-main">
      <HomepageHero />

      <section className="fr-signature" aria-label="How I approach SEO"><span>Marketing mindset</span><b>✳</b><span>Technology perspective</span><b>✳</b><span>Business focus</span></section>

      <section className="fr-about-band" aria-labelledby="about-band-title"><div className="fr-about-photo"><Image src="/images/about/mohammad-fazil.webp" alt="Mohammad Fazil holding a coffee at a café" fill sizes="(max-width:760px) 100vw, 42vw" /></div><div className="fr-about-copy"><p className="fr-eyebrow">The person behind the work</p><h2 id="about-band-title">Clear thinking. Thoughtful execution.</h2><p>I bring marketing, technology and business perspectives together to help teams make better decisions about search. You work directly with me—from first review through implementation and improvement.</p><Link href="/about/" className="fr-light-link">Meet Mohammad <Arrow diagonal /></Link></div><span className="fr-band-mark" aria-hidden="true">F.</span></section>

      <section className="fr-section fr-problems" aria-labelledby="problems-title"><div className="fr-section-heading"><p className="fr-eyebrow">Start with what’s getting in the way</p><h2 id="problems-title">What would you like to change?</h2><p>Choose the closest match. I’ll show you a useful place to start.</p></div><ProblemExplorer /></section>

      <section id="work" className="fr-work" aria-labelledby="work-title"><div className="fr-work-heading"><div><p className="fr-eyebrow">A look at the work</p><h2 id="work-title">Make the next move easier to see.</h2></div><p>Examples of the practical thinking behind SEO work. These are illustrative formats, not client results.</p></div>
        <div className="fr-work-grid">
          <article className="fr-work-item fr-work-large"><TechnicalReviewArt /><p className="fr-art-label">Illustrative review format</p><h3>Technical SEO review</h3><p>Turn site signals into a clear, ordered set of checks.</p><Link href="/services/technical-seo/">Technical SEO <Arrow diagonal /></Link></article>
          <article className="fr-work-item"><SearchIntentArt /><p className="fr-art-label">Illustrative planning format</p><h3>Search intent map</h3><p>Connect real questions to pages with a clear purpose.</p><Link href="/services/content-marketing/">Content strategy <Arrow diagonal /></Link></article>
          <article className="fr-work-item"><GrowthRoadmapArt /><p className="fr-art-label">Illustrative planning format</p><h3>Organic growth roadmap</h3><p>A sequence the team can act on and revisit.</p><Link href="/services/">Explore services <Arrow diagonal /></Link></article>
        </div>
      </section>

      <section id="services" className="fr-section fr-services" aria-labelledby="services-title"><div className="fr-section-heading fr-two-column-heading"><div><p className="fr-eyebrow">Ways we can work together</p><h2 id="services-title">Focused support, built around your priorities.</h2></div><p>Start with the constraint that matters most to your business—not a preset package.</p></div>
          <div className="fr-service-bento"><Link href="/services/technical-seo/" className="fr-service-card fr-service-primary"><span>01 / FOUNDATION</span><h3>Technical SEO</h3><p>Improve the crawl, indexing, structure and page experience that help search engines understand your site.</p><div className="fr-review-lens" aria-label="Illustrative areas in a technical SEO review"><p>What a focused review considers</p><ul><li><strong>Crawlability</strong><span>Can search engines reach important pages?</span></li><li><strong>Indexing</strong><span>Are priority pages eligible to appear?</span></li><li><strong>Internal links</strong><span>Can people and crawlers find key pages?</span></li><li><strong>Next actions</strong><span>Which fixes should the team prioritize?</span></li></ul></div><b>Explore technical SEO <Arrow diagonal /></b></Link><Link href="/services/local-seo/" className="fr-service-card fr-service-local"><span>02 / RELEVANCE</span><h3>Local search</h3><p>Make your services and eligible locations easier to find and understand.</p><b>Explore local SEO <Arrow diagonal /></b></Link><Link href="/services/content-marketing/" className="fr-service-card fr-service-content"><span>03 / USEFULNESS</span><h3>Content strategy</h3><p>Build pages around customer questions, search intent and clear business purpose.</p><b>Explore content strategy <Arrow diagonal /></b></Link><Link href="/services/" className="fr-service-card fr-service-growth"><span>04 / DIRECTION</span><h3>Organic growth</h3><p>Bring technical, local and content priorities into one practical plan.</p><b>View all services <Arrow diagonal /></b></Link></div>
      </section>

      <section className="fr-process" id="approach" aria-labelledby="process-title"><div className="fr-process-intro"><p className="fr-eyebrow">The engagement</p><h2 id="process-title">A clear path from question to action.</h2><p>We agree priorities, responsibilities and how progress will be reviewed before work begins.</p></div><ProcessStepper /></section>

      <section id="locations" className="fr-locations" aria-labelledby="locations-title"><div className="fr-location-intro"><p className="fr-eyebrow">Saudi Arabia, served remotely</p><h2 id="locations-title">Local context. Wider reach.</h2><p>Dubai-based support for Saudi businesses, with Riyadh as the primary market and work across the Kingdom.</p></div><nav aria-label="SEO services by Saudi city"><Link href="/riyadh/seo/"><span>01</span><strong>Riyadh</strong><small>Primary market</small><Arrow diagonal /></Link><Link href="/jeddah/seo/"><span>02</span><strong>Jeddah</strong><small>Western region</small><Arrow diagonal /></Link><Link href="/dammam/seo/"><span>03</span><strong>Dammam</strong><small>Eastern region</small><Arrow diagonal /></Link></nav></section>

      {articles.length > 0 && <section id="insights" className="fr-section fr-insights" aria-labelledby="insights-title"><div className="fr-section-heading fr-two-column-heading"><div><p className="fr-eyebrow">Notes on search</p><h2 id="insights-title">Useful reading for your next decision.</h2></div><Link className="fr-link" href="/blog/">All insights <Arrow diagonal /></Link></div><div className="fr-article-list">{articles.map((article, index) => <Link href={`/blog/${article.slug}/`} key={article.slug} className={index === 0 ? "fr-article-feature" : "fr-article-row"}><span>{index === 0 ? "FEATURED GUIDE" : `0${index + 1} / SEO NOTES`}</span><strong>{article.title}</strong><small>{article.excerpt}</small><Arrow diagonal /></Link>)}</div></section>}

      <section id="review" className="fr-contact" aria-labelledby="contact-title"><div className="fr-contact-intro"><p className="fr-eyebrow">A good place to begin</p><h2 id="contact-title">Let’s talk about the search problem you need to solve.</h2><p>Share your website and one priority. I’ll use that context to prepare a focused first conversation. Review your draft before choosing to copy it or continue in WhatsApp.</p><div className="fr-faq" aria-label="Frequently asked questions">{faqs.map(faq => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</div></div><div className="fr-review"><h3>Request an SEO review</h3><p>Prepare a message with your website and goals. Nothing is sent until you choose to open WhatsApp.</p><ReviewForm/><a className="fr-whatsapp-action" href="https://wa.me/971542763828" target="_blank" rel="noopener noreferrer">Prefer a direct message? Open WhatsApp <Arrow diagonal /></a><small>The link opens WhatsApp without adding anything entered here.</small></div></section>
    </main><SiteFooter/><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
  </div>;
}
