import type { Metadata } from "next";
import localFont from "next/font/local";
import Link from "next/link";
import { saudiArticles } from "@/data/saudi-articles";
import { MobileMenu, ProcessMotion, ReviewForm } from "@/components/home/HomeInteractions";
import "./home.css";

const manrope = localFont({ src: "./fonts/manrope-latin.woff2", variable: "--fd-sans", display: "swap", weight: "200 800" });
const editorial = localFont({ src: "./fonts/instrument-serif-latin.woff2", variable: "--fd-serif", display: "swap", weight: "400" });
const title = "SEO Consultant Saudi Arabia | Fazil Digital";
const description = "Work directly with Mohammad Fazil on technical SEO, local search and original content for Saudi businesses. Focused on Riyadh, Jeddah and Dammam.";

export const metadata: Metadata = {
  title: { absolute: title }, description,
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

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="20" height="20"><path d={diagonal ? "M6 18 18 6M6 6h12v12" : "M4 12h15m-6-6 6 6-6 6"} /></svg>;
}

function ServiceIcon({ type }: { type: "technical" | "local" | "content" }) {
  return <svg aria-hidden="true" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" width="48" height="48">{type === "technical" ? <><path d="m17 13-11 11 11 11m14-22 11 11-11 11M28 7l-8 34" /></> : type === "local" ? <><path d="M38 20c0 11-14 22-14 22S10 31 10 20a14 14 0 0 1 28 0Z" /><circle cx="24" cy="20" r="5" /></> : <><rect x="9" y="6" width="30" height="36" rx="2" /><path d="M16 15h16m-16 8h16m-16 8h9" /></>}</svg>;
}

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Person", "@id": "https://www.fazildigital.com/#person", name: "Mohammad Fazil", url: "https://www.fazildigital.com/about/", sameAs: ["https://linkedin.com/in/fazilfazi"], jobTitle: "SEO Consultant" },
    { "@type": "Organization", "@id": "https://www.fazildigital.com/#organization", name: "Fazil Digital", url: "https://www.fazildigital.com/", founder: { "@id": "https://www.fazildigital.com/#person" }, areaServed: { "@type": "Country", name: "Saudi Arabia" } },
    { "@type": "Service", name: "SEO & Organic Growth", provider: { "@id": "https://www.fazildigital.com/#organization" }, areaServed: { "@type": "Country", name: "Saudi Arabia" }, serviceType: ["Technical SEO", "Local SEO", "SEO Content Strategy"] },
    { "@type": "WebSite", "@id": "https://www.fazildigital.com/#website", name: "Fazil Digital", url: "https://www.fazildigital.com/", inLanguage: "en", publisher: { "@id": "https://www.fazildigital.com/#organization" } },
    { "@type": "FAQPage", mainEntity: faqs.map(faq => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) },
  ],
};

export default function Home() {
  return <div className={`fd-home ${manrope.variable} ${editorial.variable}`} id="top">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    <a className="fd-skip" href="#main-content">Skip to content</a>
    <header className="fd-header fd-container">
      <Link href="/" aria-label="Fazil Digital home" className="fd-wordmark">fazil<span className="fd-wordmark-dot">.</span><span className="fd-wordmark-digital">digital</span></Link>
      <nav className="fd-desktop-nav" aria-label="Main navigation"><Link href="/" aria-current="page">Home</Link><a href="#services">SEO Services</a><a href="#locations">Locations</a><a href="#insights">Insights</a><Link href="/about/">About</Link><a href="#review">Contact</a></nav>
      <a className="fd-button fd-header-cta" href="#review">Request an SEO Review <Arrow diagonal /></a>
      <MobileMenu />
    </header>

    <main id="main-content">
      <section className="fd-hero fd-container" aria-labelledby="hero-heading">
        <div className="fd-hero-copy">
          <p className="fd-eyebrow"><span className="fd-status-dot" />SEO CONSULTANT · SAUDI ARABIA</p>
          <h1 id="hero-heading">SEO &amp; Organic<br className="fd-desktop-break" /> Growth for<br className="fd-desktop-break" /> Saudi Businesses.</h1>
          <p className="fd-hero-description">Improve your Google visibility, reach customers searching for your services, and build lasting organic traffic through SEO and original content.</p>
          <div className="fd-actions"><a href="#review" className="fd-button">Request an SEO Review <Arrow diagonal /></a><a href="#services" className="fd-text-link">Explore SEO Services <Arrow /></a></div>
          <p className="fd-hero-person">Independent thinking. Direct work with <Link href="/about/">Mohammad Fazil.</Link></p>
        </div>
        <aside className="fd-search-art" aria-label="Focused on the connection between search, useful content and customer discovery">
          <div className="fd-art-top"><span>A clearer path to discovery</span><svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path d="M12 2v20M2 12h20m-17-7 14 14M5 19 19 5" /></svg></div>
          <div className="fd-aperture" aria-hidden="true"><svg viewBox="0 0 400 400" fill="none"><circle cx="200" cy="200" r="172" stroke="currentColor" strokeOpacity=".19" /><circle cx="200" cy="200" r="134" stroke="currentColor" strokeOpacity=".32" /><circle cx="200" cy="200" r="96" stroke="currentColor" strokeOpacity=".5" /><circle cx="200" cy="200" r="58" stroke="currentColor" strokeOpacity=".8" /><path d="M200 12v376M12 200h376" stroke="currentColor" strokeOpacity=".15" /><path d="M78 322 322 78" stroke="currentColor" strokeOpacity=".35" /><circle cx="268" cy="132" r="8" fill="#C8B38B" /><path d="m185 200 11 11 22-25" stroke="#F5F3ED" strokeWidth="2" /></svg><span className="fd-aperture-caption">Be found.<br />For the right reasons.</span></div>
          <div className="fd-art-bottom"><span>Technical clarity<br />Local relevance<br />Original content</span><span className="fd-art-seal">Built around<br />your business.</span></div>
        </aside>
      </section>

      <div className="fd-focus-strip fd-container"><span>One market. A considered approach.</span><p>Riyadh <span aria-hidden="true">/</span> Jeddah <span aria-hidden="true">/</span> Dammam</p><a href="#methodology">Discover the approach <Arrow /></a></div>

      <section className="fd-problem fd-section fd-container" aria-labelledby="problem-heading">
        <div><h2 id="problem-heading">Your next customer<br />is already searching.</h2><p className="fd-section-intro">The question is whether they find you. Organic growth starts by understanding what stands between your business and the right search.</p></div>
        <ul className="fd-problem-list">{[
          ["Relevant searches. Missing visibility.", "Your services need to appear where real customer demand exists."],
          ["Your competitors get the first click.", "A clearer search strategy helps you compete for the right opportunities."],
          ["Local customers can’t find you.", "Your website and genuine business presence need consistent local signals."],
          ["Technical issues hold the site back.", "Crawling, indexing and page experience need a sound foundation."],
          ["Content misses the intent.", "Useful answers connect what people search for with what you offer."],
        ].map(([heading, copy]) => <li key={heading}><span className="fd-list-mark" aria-hidden="true" /><div><h3>{heading}</h3><p>{copy}</p></div></li>)}</ul>
      </section>

      <section id="services" className="fd-services fd-section" aria-labelledby="services-heading"><div className="fd-container">
        <div className="fd-section-heading"><h2 id="services-heading">The foundations of<br />sustainable search growth.</h2><p>A focused SEO practice.<br />The right work, in the right order.</p></div>
        <div className="fd-service-grid">{[
          { type: "technical" as const, id: "technical-seo", href: "/services/technical-seo/", title: "Technical SEO", copy: "Give search engines a clear path through your website. Resolve the issues affecting discovery, indexing and page experience.", tags: "Site audits · Indexing · Site structure", action: "Discuss technical SEO" },
          { type: "local" as const, id: "local-seo", href: "/services/local-seo/", title: "Local SEO", copy: "Connect with people searching in your market. Build accurate local signals around your real locations and the services you provide.", tags: "Local search · Business profiles · Relevance", action: "Discuss local SEO" },
          { type: "content" as const, id: "content-strategy", href: "/services/content-marketing/", title: "SEO Content Strategy", copy: "Turn customer questions into useful, original content. Plan for Arabic and English search intent, with genuine localization.", tags: "Search intent · Content planning · Localization", action: "Discuss content strategy" },
        ].map(service => <article className="fd-service-card" key={service.id} id={service.id}><ServiceIcon type={service.type} /><h3>{service.title}</h3><p>{service.copy}</p><p className="fd-service-tags">{service.tags}</p><Link href={service.href}>{service.action}<Arrow diagonal /></Link></article>)}</div>
        <div className="fd-service-footnote"><span>One connected strategy, from technical foundations to content-led organic marketing.</span><Link className="fd-text-link" href="/services/seo/">SEO service overview <Arrow /></Link></div>
      </div></section>

      <section id="locations" className="fd-section fd-container" aria-labelledby="locations-heading">
        <div className="fd-section-heading"><h2 id="locations-heading">Saudi focus.<br />Local understanding.</h2><p>Different cities. Different search journeys.<br />A strategy shaped around your customers.</p></div>
        <div className="fd-market-grid"><Link href="/riyadh/seo/" className="fd-market-primary"><div className="fd-market-label"><span>Our primary focus</span><Arrow diagonal /></div><h3>Riyadh</h3><p>SEO for businesses competing in the Saudi capital. Connect technical foundations, local discovery and content that supports considered buying decisions.</p><span className="fd-market-link">Explore SEO in Riyadh <Arrow /></span><svg className="fd-market-lines" aria-hidden="true" viewBox="0 0 230 180" fill="none"><path d="M5 180V50l50-25v155m10 0V90l35-15v105m12 0V30l48-24v174m15 0V65l45-20v135" stroke="currentColor" strokeWidth="1" /><path d="M112 78h48m-48 25h48m-48 25h48m-48 25h48M5 75h50M5 100h50M5 125h50M5 150h50" stroke="currentColor" strokeOpacity=".45" /></svg></Link>
          <div className="fd-market-secondary">{[{ city: "Jeddah", href: "/jeddah/seo/", copy: "Search visibility for the Red Sea city. Local relevance and useful content that reflect how your customers choose." }, { city: "Dammam", href: "/dammam/seo/", copy: "A focused approach for the Eastern Province, from nearby service searches to detailed B2B supplier research." }].map(city => <Link key={city.city} href={city.href}><div><h3>{city.city}</h3><Arrow diagonal /></div><p>{city.copy}</p><span>Explore SEO in {city.city}</span></Link>)}</div></div>
        <p className="fd-location-note">Serving Saudi businesses through direct consultancy. Service areas describe our focus, not office locations.</p>
      </section>

      <section id="methodology" className="fd-method fd-section" aria-labelledby="method-heading"><div className="fd-container"><div className="fd-section-heading"><h2 id="method-heading">A clear process.<br />A shared direction.</h2><p>Thoughtful strategy is only useful<br />when it becomes practical work.</p></div><ProcessMotion /><ol className="fd-process-grid">{[
        ["Audit", "Understand the starting point.", "Review your website, search performance, competitors and business priorities."], ["Strategy", "Decide what matters most.", "Map search intent, define page ownership and build a prioritized roadmap."], ["Implementation", "Put the plan into practice.", "Improve technical foundations, local signals and content with clear responsibilities."], ["Measurement", "Learn. Refine. Keep building.", "Track visibility, relevant visits and enquiries against the baseline. Report what comes next."],
      ].map(([name, lead, copy], i) => <li key={name}><span className="fd-step">0{i + 1}</span><h3>{name}</h3><p className="fd-process-lead">{lead}</p><p>{copy}</p></li>)}</ol></div></section>

      <section className="fd-about fd-section fd-container" aria-labelledby="about-heading"><div className="fd-consultant-note"><span className="fd-consultant-monogram" aria-hidden="true">mf.</span><p>Independent by choice.<br />Involved by design.</p><div><strong>Mohammad Fazil</strong><span>SEO &amp; organic growth consultant</span></div><Link href="/about/" className="fd-text-link">Meet your consultant <Arrow diagonal /></Link></div><div><h2 id="about-heading">A direct line to the person<br />doing the thinking.</h2><p className="fd-section-intro">You work with Mohammad, from the first conversation to the next set of priorities. Clear advice, researched decisions and a shared understanding of the work.</p><dl className="fd-principles"><div><dt>Direct involvement</dt><dd>One consultant connecting your goals, strategy and implementation.</dd></div><div><dt>Transparent communication</dt><dd>Clear scope, responsibilities and explanations without unnecessary jargon.</dd></div><div><dt>Research before assumptions</dt><dd>Recommendations grounded in your customers, website and search data.</dd></div><div><dt>Consistent reporting</dt><dd>Agreed reporting that connects the work to meaningful business signals.</dd></div></dl></div></section>

      <section className="fd-work fd-section" aria-labelledby="work-heading"><div className="fd-container fd-work-grid"><div><h2 id="work-heading">Evidence belongs<br />at the centre.</h2><p className="fd-section-intro">Good SEO work should be explained with context, a clear scope and evidence you can assess.</p></div><div className="fd-work-placeholder"><svg aria-hidden="true" width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M8 5h17l7 7v23H8zM25 5v8h7M14 21h12m-12 6h8" /></svg><h3>Selected Saudi SEO work</h3><p>Case studies will be added when project evidence and permission to publish are available.</p><span>No unverified results. No borrowed credibility.</span></div></div></section>

      <section id="insights" className="fd-section fd-container" aria-labelledby="insights-heading">
        <div className="fd-section-heading"><h2 id="insights-heading">Saudi search.<br />A closer look.</h2><Link className="fd-text-link" href="/blog/">Explore the insights archive <Arrow /></Link></div>
        <div className="fd-insight-grid">{["arabic-vs-english-seo-saudi-arabia", "local-seo-saudi-businesses-guide", "technical-seo-audit-saudi-websites"].map((slug, index) => {
          const post = saudiArticles.find(article => article.slug === slug);
          if (!post) return null;
          const motif = ["circles", "arches", "lines"][index];
          return <article key={post.slug} className="fd-insight"><div className={`fd-insight-art fd-art-${motif}`} aria-hidden="true"><svg viewBox="0 0 360 180" fill="none" stroke="currentColor" strokeWidth="1">{motif === "circles" ? <>{[36,60,84,108,132].map(r => <circle key={r} cx="180" cy="135" r={r} />)}</> : motif === "arches" ? <>{[0,26,52,78,104].map(x => <path key={x} d={`M${75+x} 180V90a${105-x} ${105-x} 0 0 1 ${210-2*x} 0v90`} />)}</> : <>{[0,24,48,72,96,120,144].map(x => <path key={x} d={`m${80+x} 180 100-180`} />)}</>}</svg></div><p className="fd-insight-topic">{post.category}</p><h3><Link href={`/blog/${post.slug}/`}>{post.title}</Link></h3><p>{post.excerpt}</p><Link className="fd-text-link" href={`/blog/${post.slug}/`}>Read the guide <Arrow diagonal /></Link></article>;
        })}</div>
        <div className="fd-more-insights"><h3>More Saudi SEO guides</h3><ul>{saudiArticles.filter(post => !["arabic-vs-english-seo-saudi-arabia", "local-seo-saudi-businesses-guide", "technical-seo-audit-saudi-websites"].includes(post.slug)).map(post => <li key={post.slug}><Link href={`/blog/${post.slug}/`}>{post.title}<Arrow diagonal /></Link></li>)}</ul></div>
      </section>
      <section className="fd-faq fd-section fd-container" aria-labelledby="faq-heading"><div><h2 id="faq-heading">A few things<br />you might be asking.</h2><p>Have a question about your website?<br /><a href="#review" className="fd-text-link">Let’s talk it through <Arrow /></a></p></div><div>{faqs.map(faq => <details key={faq.question}><summary>{faq.question}<span aria-hidden="true" className="fd-faq-toggle" /></summary><p>{faq.answer}</p></details>)}</div></section>

      <section id="review" className="fd-review fd-section" aria-labelledby="review-heading"><div className="fd-container fd-review-grid"><div><h2 id="review-heading">Ready to Improve Your Visibility in Saudi Arabia?</h2><p>Start with your website and what you want to achieve. Let’s find the right questions to ask, and the priorities worth pursuing.</p><a className="fd-text-link" href="https://wa.me/971542763828" target="_blank" rel="noopener noreferrer">Prefer a conversation? WhatsApp Mohammad <Arrow diagonal /></a></div><ReviewForm /></div></section>
    </main>

    <footer className="fd-footer fd-container"><div className="fd-footer-top"><Link href="/" aria-label="Fazil Digital home" className="fd-wordmark">fazil<span className="fd-wordmark-dot">.</span><span className="fd-wordmark-digital">digital</span></Link><p>SEO &amp; organic growth<br />for Saudi businesses.</p><nav aria-label="Footer navigation"><Link href="/services/seo/">SEO Services</Link><Link href="/about/">About</Link><Link href="/blog/">Insights</Link><a href="#review">Contact</a></nav><a className="fd-back-top" href="#top">Back to top <span aria-hidden="true">↑</span></a></div><div className="fd-footer-bottom"><span>© {new Date().getFullYear()} Fazil Digital</span><span>Riyadh · Jeddah · Dammam</span><Link href="/privacy-policy/">Privacy policy</Link></div></footer>
  </div>;
}
