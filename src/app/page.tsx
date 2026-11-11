import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ReviewForm } from "@/components/home/HomeInteractions";
import { SiteFooter, SiteHeader } from "@/components/site/BrandChrome";
import { saudiArticles } from "@/data/saudi-articles";
import "./home-reset.css";

const title = "SEO Consultant Saudi Arabia | Fazil Digital";
const description = "Work directly with Mohammad Fazil on technical SEO, local search and original content for Saudi businesses. Focused on Riyadh, Jeddah and Dammam.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "https://www.fazildigital.com/", languages: {}, types: {} },
  openGraph: { title, description, url: "https://www.fazildigital.com/", siteName: "Fazil Digital", type: "website", locale: "en_SA" },
  twitter: { card: "summary", title, description },
};

const faqs = [
  { question: "How long does SEO take to make a difference?", answer: "SEO is ongoing work. The timeline depends on your current website, competition, content and how quickly changes can be implemented. We establish a baseline first, agree realistic priorities and review progress through search visibility, relevant visits and enquiries. No ranking or timeline is guaranteed." },
  { question: "What determines the cost of SEO?", answer: "The scope depends on your website’s size and condition, your target markets, the competition and the amount of content and implementation needed. After an initial review, you receive a clear scope with priorities, responsibilities and pricing before any work begins." },
  { question: "Do I need local SEO for my Saudi business?", answer: "If customers search for services near them or in a particular city, local SEO can help connect your website and genuine business presence to that intent. Work may include Google Business Profile, consistent business details and useful location content. Profiles and office claims must reflect real, eligible operations." },
  { question: "Can the strategy cover both Arabic and English?", answer: "Yes. Search intent and keywords should be researched independently in each language. Arabic content requires genuine localization and review by a qualified Arabic-language editor. We agree the language scope and localization support before creating or publishing bilingual pages." },
  { question: "What is it like to work with Mohammad?", answer: "You work directly with Mohammad Fazil. We start with your business goals and current search performance, then agree a practical roadmap, implementation responsibilities and reporting cadence. Reporting explains what changed, what the evidence shows and what comes next." },
];

const milestones = [
  { label: "Digital marketing", title: "Strategy alongside execution", copy: "Work across digital marketing shaped a practical view of the full customer journey—from discovery to the next useful action." },
  { label: "ZORX · owner-confirmed, undated", title: "Marketing leadership", copy: "Marketing leadership at ZORX brought planning, communication and delivery together around the business’s priorities." },
  { label: "Fusion Ventures Global", title: "Co-Founder, Technical & Business Development", copy: "This work connects technical decisions and business development, keeping the problem, the system and the people using it in view." },
  { label: "Fazil Digital", title: "SEO for Saudi businesses", copy: "Today, I focus on technical SEO, local search and original content for businesses serving Saudi Arabia—with Riyadh as the primary market." },
];

const problems = [
  { title: "Your business is hard to find on Google.", reason: "Important pages may be difficult to crawl, unclear about their purpose or missing the searches your customers use.", response: "A structured SEO review identifies technical, content and local-search priorities in a practical order." },
  { title: "Visits arrive, but useful enquiries do not.", reason: "A page can attract attention without matching what a searcher needs or making the next step clear.", response: "Connect search intent to a relevant landing page, useful information and a clear enquiry path." },
  { title: "Content is published without a shared plan.", reason: "Topics overlap, key questions go unanswered and every new page has to find its own way through the site.", response: "Research customer questions, assign each page a purpose and plan internal links before publishing." },
];

const deliverables = [
  { title: "A technical review with owners and checks", challenge: "Important pages need a clearer path to discovery.", approach: "Review crawl and indexing signals, site structure, templates and page experience against the website’s priorities.", output: "A prioritized review recording each finding, affected page, owner and validation check." },
  { title: "A search-intent map for Saudi services", challenge: "Services and cities can compete for similar searches.", approach: "Research the audience, service scope and intent before assigning topics to current or proposed pages.", output: "A page map that connects service and city intent with a clear purpose and internal-link path." },
  { title: "An editorial plan built around real questions", challenge: "A publishing calendar needs evidence and a useful role for every page.", approach: "Group customer questions, existing content and language needs into a manageable sequence.", output: "Content briefs with audience, evidence, outline, links and an approval step." },
];

const expertise = [
  { title: "SEO services", href: "/services/seo/", problem: "Search work is split into disconnected tasks.", scope: "Align technical foundations, local discovery, content and measurement.", outcome: "A scoped roadmap with priorities and responsibilities." },
  { title: "Technical SEO", href: "/services/technical-seo/", problem: "Important pages are difficult to crawl, understand or use.", scope: "Review indexing, site structure, templates and page experience.", outcome: "A prioritized review with evidence and validation checks." },
  { title: "Local SEO", href: "/services/local-seo/", problem: "Nearby customers cannot connect a real service to a genuine business.", scope: "Improve accurate service information, local relevance and eligible profiles.", outcome: "A local-search checklist grounded in how the business operates." },
  { title: "SEO content strategy", href: "/services/content-marketing/", problem: "Pages miss customer questions or overlap with one another.", scope: "Research intent, assign page roles and plan original content and links.", outcome: "A content architecture and briefs for review and implementation." },
  { title: "Organic marketing", href: "/services/seo/", problem: "Organic activity is difficult to connect to a customer’s next step.", scope: "Bring visibility, useful information and the enquiry journey into one plan.", outcome: "A connected set of page, content and measurement priorities." },
  { title: "Arabic and English SEO planning", href: "/services/content-marketing/", problem: "Direct translation can miss how people search in each language.", scope: "Research both languages independently and agree qualified Arabic review.", outcome: "A bilingual page plan with localization and approval requirements." },
];

const process = [
  ["Initial conversation", "Talk through your business, customers and the search problem you want to solve."],
  ["Website and SEO review", "Understand the starting point, technical foundations and current pages."],
  ["Keyword and competitor research", "Explore customer intent and the search landscape for your market."],
  ["Prioritized strategy", "Agree the work, responsibilities and practical order of implementation."],
  ["Implementation", "Make changes with your team and any subject or language specialists."],
  ["Measurement and improvement", "Review visibility, relevant visits and enquiry signals, then decide what comes next."],
];

const audiences = [
  { title: "Saudi startups", context: "Your offer and pages are still taking shape.", need: "A clear first-page plan, sound technical basics and content direction your team can maintain." },
  { title: "Small and medium businesses", context: "You want organic enquiries that fit the real services and customers you can serve.", need: "Better alignment between local intent, service pages and the path to contact." },
  { title: "Established businesses", context: "Your website and search work need to keep pace with a broader offer or changing priorities.", need: "A careful review of page roles, technical constraints, content and measurement." },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Person", "@id": "https://www.fazildigital.com/#person", name: "Mohammad Fazil", url: "https://www.fazildigital.com/about/", sameAs: ["https://ae.linkedin.com/in/fazilfazi"], jobTitle: "SEO Consultant" },
    { "@type": "Organization", "@id": "https://www.fazildigital.com/#organization", name: "Fazil Digital", url: "https://www.fazildigital.com/", founder: { "@id": "https://www.fazildigital.com/#person" }, areaServed: { "@type": "Country", name: "Saudi Arabia" } },
    { "@type": "Service", name: "SEO & Organic Growth", provider: { "@id": "https://www.fazildigital.com/#organization" }, areaServed: { "@type": "Country", name: "Saudi Arabia" }, serviceType: ["Technical SEO", "Local SEO", "SEO Content Strategy"] },
    { "@type": "WebSite", "@id": "https://www.fazildigital.com/#website", name: "Fazil Digital", url: "https://www.fazildigital.com/", inLanguage: "en", publisher: { "@id": "https://www.fazildigital.com/#organization" } },
    { "@type": "FAQPage", mainEntity: faqs.map(faq => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) },
  ],
};

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" width="18" height="18"><path d={diagonal ? "M6 18 18 6M6 6h12v12" : "M4 12h15m-6-6 6 6-6 6"} /></svg>;
}

export default function Home() {
  return <div className="fd-home fd-reset-home" id="top">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    <a className="fr-skip" href="#main-content">Skip to content</a>
    <SiteHeader />
    <main id="main-content" className="fr-main">
      <section className="fr-hero" aria-labelledby="hero-title">
        <div className="fr-hero-copy">
          <p className="fr-eyebrow"><span className="fr-marker" aria-hidden="true" />Mohammad Fazil <span className="fr-eyebrow-separator">/</span> SEO Consultant</p>
          <h1 id="hero-title">Helping Saudi businesses get found on Google.</h1>
          <p className="fr-hero-lead">I help businesses across Saudi Arabia improve search visibility, develop stronger organic content, and turn relevant Google searches into business opportunities.</p>
          <div className="fr-hero-actions"><a className="fr-button fr-button-primary" href="#review">Request an SEO review <Arrow diagonal /></a><a className="fr-link" href="#approach">Explore my approach <Arrow /></a></div>
          <p className="fr-location"><span aria-hidden="true" />Based in Dubai. Working with Saudi businesses.</p>
          <div className="fr-hero-route" aria-label="An illustrative search route: search, useful page, enquiry">
            <span>Search</span><i aria-hidden="true" /><span>Useful page</span><i aria-hidden="true" /><span>Enquiry</span>
          </div>
        </div>
        <figure className="fr-portrait">
          <Image src="/images/about/mohammad-fazil.webp" alt="Mohammad Fazil seated in a café" fill priority sizes="(max-width: 760px) 100vw, (max-width: 1100px) 45vw, 540px" />
          <figcaption><strong>Mohammad Fazil</strong><span>SEO &amp; organic growth consultant</span></figcaption>
        </figure>
      </section>

      <section className="fr-credibility" aria-label="Professional focus">
        <p>What you can expect</p>
        <ul><li>Direct consultant involvement</li><li>Marketing and technology experience</li><li>Research connected to implementation</li><li>Saudi market focus</li></ul>
      </section>

      <section className="fr-section fr-milestones" aria-labelledby="milestones-title">
        <div className="fr-section-heading fr-two-column-heading"><div><p className="fr-kicker">Professional milestones</p><h2 id="milestones-title">A career shaped by marketing, technology and business.</h2></div><p>Different roles have taught me to look beyond a channel or a tool. The useful question is what the business needs to make possible.</p></div>
        <ol className="fr-timeline">{milestones.map(item => <li key={item.title}><span className="fr-timeline-dot" aria-hidden="true" /><div className="fr-timeline-label">{item.label}</div><div className="fr-timeline-content"><h3>{item.title}</h3><p>{item.copy}</p></div></li>)}</ol>
        <Link className="fr-link" href="/about/">Read my professional story <Arrow diagonal /></Link>
      </section>

      <section className="fr-section fr-problems" aria-labelledby="problems-title">
        <div className="fr-section-heading"><p className="fr-kicker">Where search work starts</p><h2 id="problems-title">Start with what is getting in the way.</h2><p>SEO is more useful when the work addresses a real search barrier and a clear business need.</p></div>
        <div className="fr-problem-list">{problems.map(item => <article key={item.title} className="fr-problem-row"><span className="fr-problem-marker" aria-hidden="true" /><div className="fr-problem-statement"><h3>{item.title}</h3><p>{item.reason}</p></div><div className="fr-problem-response"><span>How I approach it</span><p>{item.response}</p></div></article>)}</div>
      </section>

      <section className="fr-section fr-deliverables" aria-labelledby="deliverables-title">
        <div className="fr-section-heading fr-two-column-heading"><div><p className="fr-kicker">Illustrative deliverables</p><h2 id="deliverables-title">What practical SEO work can produce.</h2></div><p>These are examples of deliverables, not customer case studies or claims about performance.</p></div>
        <div className="fr-deliverable-list">{deliverables.map((item, index) => <article key={item.title} className={`fr-deliverable fr-deliverable-${index + 1}`}><div className="fr-deliverable-heading"><span>Example deliverable</span><h3>{item.title}</h3></div><dl><div><dt>Challenge</dt><dd>{item.challenge}</dd></div><div><dt>Approach</dt><dd>{item.approach}</dd></div><div><dt>Output</dt><dd>{item.output}</dd></div></dl></article>)}</div>
      </section>

      <section id="services" className="fr-section fr-expertise" aria-labelledby="expertise-title">
        <div className="fr-section-heading fr-two-column-heading"><div><p className="fr-kicker">Areas of expertise</p><h2 id="expertise-title">Focused on the work that helps organic search.</h2></div><p>For businesses serving Saudi Arabia, from the technical foundations to useful information in the right language.</p></div>
        <div className="fr-expertise-list">{expertise.map(item => <article key={item.title} className="fr-expertise-item"><div className="fr-expertise-title"><h3>{item.title}</h3><p>{item.problem}</p></div><div className="fr-expertise-detail"><p><strong>Engagement</strong>{item.scope}</p><p><strong>Practical deliverable</strong>{item.outcome}</p></div><Link href={item.href} aria-label={`Explore ${item.title}`}><Arrow diagonal /></Link></article>)}</div>
        <details className="fr-guide-links"><summary>Explore practical Saudi SEO guides <span aria-hidden="true">+</span></summary><ul>{saudiArticles.map(article => <li key={article.slug}><Link href={`/blog/${article.slug}/`}>{article.title}<Arrow diagonal /></Link></li>)}</ul><Link className="fr-link" href="/blog/">Browse all insights <Arrow /></Link></details>
      </section>

      <section className="fr-section fr-journey" aria-labelledby="journey-title">
        <div className="fr-section-heading fr-two-column-heading"><div><p className="fr-kicker">From search to enquiry</p><h2 id="journey-title">Make each next step easier to understand.</h2></div><p>Search visibility works as part of a journey. Each page should help a person move toward the information or action they need.</p></div>
        <ol className="fr-route" aria-label="Illustrative path from a Google search to measurement">
          <li><span className="fr-route-node" aria-hidden="true">01</span><h3>Google search</h3><p>Understand what the person is looking for.</p></li>
          <li><span className="fr-route-node" aria-hidden="true">02</span><h3>Relevant page</h3><p>Match the search with a clear page purpose.</p></li>
          <li><span className="fr-route-node" aria-hidden="true">03</span><h3>Useful information</h3><p>Answer the question with relevant detail.</p></li>
          <li><span className="fr-route-node" aria-hidden="true">04</span><h3>Customer enquiry</h3><p>Make the next conversation easy to start.</p></li>
          <li><span className="fr-route-node" aria-hidden="true">05</span><h3>Measurement</h3><p>Review signals and decide what to improve.</p></li>
        </ol>
        <div className="fr-journey-links"><span>Useful references</span><Link href="/blog/local-seo-saudi-businesses-guide/">Local SEO for Saudi businesses</Link><Link href="/blog/google-search-console-seo-measurement-guide/">Measuring SEO with Search Console</Link><Link href="/contact/">Start a conversation <Arrow diagonal /></Link></div>
      </section>

      <section id="approach" className="fr-section fr-process" aria-labelledby="process-title">
        <div className="fr-section-heading fr-two-column-heading"><div><p className="fr-kicker">A clear way to begin</p><h2 id="process-title">From first conversation to steady improvement.</h2></div><p>Good work needs a shared view of the goal, the scope and what happens next. Open a stage to see what it involves.</p></div>
        <ol className="fr-process-route">{process.map(([name, copy], index) => <li key={name}><details name="home-process" open={index === 0}><summary><span className="fr-process-node" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span><span>{name}</span><span className="fr-process-toggle" aria-hidden="true" /></summary><p>{copy}</p></details></li>)}</ol>
      </section>

      <section className="fr-section fr-audiences" aria-labelledby="audience-title">
        <div className="fr-section-heading fr-two-column-heading"><div><p className="fr-kicker">Who I work with</p><h2 id="audience-title">Different businesses. A useful place to start.</h2></div><p>SEO work should fit the business, the website and the people responsible for putting changes into practice.</p></div>
        <div className="fr-audience-list">{audiences.map(item => <article key={item.title}><h3>{item.title}</h3><p>{item.context}</p><div><strong>A useful starting point</strong><p>{item.need}</p></div></article>)}</div>
      </section>

      <section id="review" className="fr-section fr-final" aria-labelledby="final-title">
        <div className="fr-final-heading"><p className="fr-kicker">Questions and next steps</p><h2 id="final-title">Let&apos;s make your business easier to find.</h2><p>Start with your website and what you want to improve. We can identify the questions worth asking and the priorities to consider.</p></div>
        <div className="fr-final-grid"><div className="fr-faq" aria-label="Frequently asked questions">{faqs.map(faq => <details key={faq.question}><summary>{faq.question}<span className="fr-faq-toggle" aria-hidden="true" /></summary><p>{faq.answer}</p></details>)}</div><div className="fr-review"><h3>Request an SEO review</h3><p>Prepare a message with your website and goals. Nothing is sent until you choose to open WhatsApp.</p><ReviewForm /><a href="https://wa.me/971542763828" target="_blank" rel="noopener noreferrer">Prefer a conversation? Contact Mohammad on WhatsApp <Arrow diagonal /></a><small>The link opens WhatsApp without adding anything entered here.</small></div></div>
      </section>
    </main>
    <SiteFooter />
  </div>;
}
