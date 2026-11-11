import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";
import { ReviewForm } from "@/components/home/HomeInteractions";
import { SiteFooter } from "@/components/site/BrandChrome";
import { SiteHeader } from "@/components/site/BrandChrome";
import { saudiArticles } from "@/data/saudi-articles";
import "./home.css";

const manrope = localFont({ src: "./fonts/manrope-latin.woff2", variable: "--fd-sans", display: "swap", weight: "200 800" });
const editorial = localFont({ src: "./fonts/instrument-serif-latin.woff2", variable: "--fd-serif", display: "swap", weight: "400" });

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
  {
    title: "A foundation in digital marketing",
    label: "Marketing",
    copy: "Digital marketing work across strategy and execution shaped how I think about the full customer journey, from discovery to the next useful action.",
  },
  {
    title: "Co-founder at Fusion Ventures Global",
    label: "Technology & business development",
    copy: "My current role focuses on technical and business-development work. It keeps the business problem, the system and the people using it in view at the same time.",
  },
  {
    title: "A focused SEO practice for Saudi businesses",
    label: "Fazil Digital",
    copy: "I bring that wider perspective to technical SEO, local search and original content, with Riyadh as the primary market, followed by Jeddah and Dammam.",
  },
];

const problems = [
  {
    title: "Your business is hard to find on Google.",
    description: "Important pages may be difficult to crawl, unclear about their purpose or missing the searches your customers use.",
    response: "Start with an SEO review that identifies technical, content and local-search priorities in a useful order.",
  },
  {
    title: "Visits arrive, but the right enquiries do not.",
    description: "A page can attract attention without matching what a searcher needs or making the next step clear.",
    response: "Connect search intent to a relevant landing page, useful information and a clear, privacy-safe enquiry path.",
  },
  {
    title: "Content keeps getting published without a plan.",
    description: "Topics overlap, key questions go unanswered and each new page has to find its own way through the site.",
    response: "Use research, page ownership, editorial planning and internal links to give every piece of content a reason to exist.",
  },
];

const workExamples = [
  {
    title: "A technical review with owners and checks",
    challenge: "Important pages need a clearer path to discovery.",
    approach: "Review crawl and indexing signals, site structure, templates and page experience against the website’s actual priorities.",
    deliverable: "A prioritized review that records the finding, affected page, proposed change, implementation owner and validation check.",
  },
  {
    title: "A search-intent map for Saudi services",
    challenge: "Several services and cities can compete for similar searches.",
    approach: "Research the audience, service scope and search intent before assigning topics to existing or proposed pages.",
    deliverable: "A page map connecting service and city intent with a clear purpose and internal-link path.",
  },
  {
    title: "An editorial plan built around real questions",
    challenge: "A publishing calendar needs evidence and a useful role for each page.",
    approach: "Group customer questions, existing content and language needs into a manageable sequence.",
    deliverable: "Content briefs with audience, evidence, outline, links and an approval step for each planned page.",
  },
];

const expertise = [
  {
    title: "SEO services",
    href: "/services/seo/",
    problem: "Search work is split into disconnected tasks.",
    engagement: "Set a shared direction for technical foundations, local discovery, content and measurement.",
    deliverable: "A scoped SEO roadmap with priorities, responsibilities and review points.",
  },
  {
    title: "Technical SEO",
    href: "/services/technical-seo/",
    problem: "Important pages are difficult to crawl, understand or use.",
    engagement: "Review indexing, site structure, internal links, templates and page experience.",
    deliverable: "A prioritized technical review with evidence and validation checks.",
  },
  {
    title: "Local SEO",
    href: "/services/local-seo/",
    problem: "Nearby customers cannot easily connect a genuine service to a real business.",
    engagement: "Improve accurate service information, local relevance and eligible business profiles.",
    deliverable: "A local-search checklist grounded in how the business actually operates.",
  },
  {
    title: "SEO content strategy",
    href: "/services/content-marketing/",
    problem: "Pages miss customer questions or overlap with one another.",
    engagement: "Research intent, assign page roles and plan original content with internal links.",
    deliverable: "A content architecture and briefs your team can review and implement.",
  },
  {
    title: "Organic marketing",
    href: "/services/seo/",
    problem: "Organic activity is difficult to connect to a customer’s next step.",
    engagement: "Bring search visibility, useful content and the enquiry journey into one plan.",
    deliverable: "A connected set of page, content and measurement priorities.",
  },
  {
    title: "Arabic and English SEO planning",
    href: "/services/content-marketing/",
    problem: "A direct translation can miss how people search in each language.",
    engagement: "Research each language independently and agree qualified Arabic editorial review before publication.",
    deliverable: "A bilingual page plan with terminology, localization and approval requirements.",
  },
];

const process = [
  ["Initial conversation", "Talk through your business, customers and the search problem you want to solve."],
  ["Website and SEO review", "Understand the starting point, technical foundations and current pages."],
  ["Keyword and competitor research", "Explore customer intent and the search landscape for your market."],
  ["Prioritized strategy", "Agree the work, responsibilities and practical order of implementation."],
  ["Implementation", "Make the changes together with your team and any subject or language specialists."],
  ["Measurement and improvement", "Review visibility, relevant visits and enquiry signals, then decide what comes next."],
];

const audiences = [
  {
    title: "Saudi startups",
    copy: "You are establishing search visibility while your offer and pages are still taking shape.",
    need: "A clear first page plan, sound technical basics and a content direction you can maintain.",
  },
  {
    title: "Small and medium businesses",
    copy: "You want organic enquiries that fit your real services and the customers you can serve.",
    need: "Better alignment between local intent, service pages and the path to contact.",
  },
  {
    title: "Established businesses",
    copy: "Your website and search strategy need to keep pace with a broader offer or changing priorities.",
    need: "A careful review of page ownership, technical constraints, content and measurement.",
  },
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
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="18" height="18"><path d={diagonal ? "M6 18 18 6M6 6h12v12" : "M4 12h15m-6-6 6 6-6 6"} /></svg>;
}

function SectionHeading({ title: heading, intro, id }: { title: string; intro?: string; id?: string }) {
  return <div className="fd-redesign-heading"><h2 id={id}>{heading}</h2>{intro && <p>{intro}</p>}</div>;
}

export default function Home() {
  return <div className={`fd-home ${manrope.variable} ${editorial.variable} fd-redesign`} id="top">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    <a className="fd-skip" href="#main-content">Skip to content</a>
    <SiteHeader />

    <main id="main-content">
      <section className="fd-personal-hero fd-container" aria-labelledby="hero-heading">
        <div className="fd-personal-copy">
          <p className="fd-personal-eyebrow">MOHAMMAD FAZIL <span aria-hidden="true">·</span> SEO CONSULTANT</p>
          <h1 id="hero-heading">Helping Saudi Businesses Get Found on Google.</h1>
          <p className="fd-personal-intro">I&apos;m Mohammad Fazil. I help businesses across Saudi Arabia improve search visibility, develop stronger organic content, and turn relevant Google searches into business opportunities.</p>
          <div className="fd-personal-actions">
            <a className="fd-button" href="#review">Request an SEO Review <Arrow diagonal /></a>
            <a className="fd-text-link" href="#approach">Explore My Approach <Arrow /></a>
          </div>
          <p className="fd-personal-location">Based in Dubai <span aria-hidden="true">/</span> Working with Saudi businesses</p>
        </div>
        <figure className="fd-personal-portrait">
          <Image src="/images/about/mohammad-fazil.webp" alt="Mohammad Fazil seated in a café, holding a coffee mug" fill priority sizes="(max-width: 760px) 100vw, (max-width: 1100px) 44vw, 520px" />
          <figcaption><span>Mohammad Fazil</span><span>Dubai, United Arab Emirates</span></figcaption>
        </figure>
      </section>

      <section className="fd-credibility fd-container" aria-label="Professional focus">
        <p className="fd-credibility-lead">A considered practice, shaped by</p>
        <ul>
          <li>Direct consultant involvement</li>
          <li>Marketing and technology experience</li>
          <li>SEO research and implementation</li>
          <li>Saudi market focus</li>
        </ul>
      </section>

      <section className="fd-milestones fd-section" aria-labelledby="milestone-heading">
        <div className="fd-container">
          <div className="fd-milestone-intro">
            <div><p className="fd-redesign-kicker">THE WORK BEHIND THE PRACTICE</p><SectionHeading id="milestone-heading" title="A career across marketing, technology and business." /></div>
            <p className="fd-milestone-note">Different roles have taught me to look beyond a channel or a tool. The useful question is what the business needs to make possible.</p>
          </div>
          <div className="fd-milestone-list">{milestones.map((item, index) => <article key={item.title} className={`fd-milestone fd-milestone-${index + 1}`}>
            <span className="fd-milestone-label">{item.label}</span><div><h3>{item.title}</h3><p>{item.copy}</p></div>
          </article>)}</div>
          <Link className="fd-text-link" href="/about/">Read my professional story <Arrow diagonal /></Link>
        </div>
      </section>

      <section className="fd-problems fd-section" aria-labelledby="problems-heading">
        <div className="fd-container">
          <div className="fd-problems-top"><div><p className="fd-redesign-kicker">WHERE SEARCH WORK STARTS</p><SectionHeading id="problems-heading" title="The problem is the starting point." /></div><p>Good SEO begins with the reason a customer is not finding the answer, page or next step they need.</p></div>
          <div className="fd-problem-stories">{problems.map((item, index) => <article key={item.title} className="fd-problem-story">
            <span className="fd-story-index" aria-hidden="true">0{index + 1}</span>
            <div className="fd-story-problem"><p>THE PROBLEM</p><h3>{item.title}</h3><span>{item.description}</span></div>
            <div className="fd-story-response"><p>HOW I APPROACH IT</p><span>{item.response}</span></div>
          </article>)}</div>
        </div>
      </section>

      <section className="fd-work fd-section" aria-labelledby="work-heading">
        <div className="fd-container">
          <div className="fd-work-heading"><div><p className="fd-redesign-kicker">EXAMPLE DELIVERABLES</p><SectionHeading id="work-heading" title="What the work can look like." intro="Illustrative examples of practical SEO deliverables, not customer case studies or performance claims." /></div><p>Each recommendation should show its evidence, its owner and how the change will be checked.</p></div>
          <div className="fd-work-list">{workExamples.map((item, index) => <article className="fd-work-example" key={item.title}>
            <div className="fd-work-example-title"><span>DELIVERABLE EXAMPLE · 0{index + 1}</span><h3>{item.title}</h3></div>
            <dl><div><dt>Challenge</dt><dd>{item.challenge}</dd></div><div><dt>Approach</dt><dd>{item.approach}</dd></div><div><dt>Deliverable</dt><dd>{item.deliverable}</dd></div></dl>
          </article>)}</div>
        </div>
      </section>

      <section id="services" className="fd-expertise fd-section" aria-labelledby="expertise-heading">
        <div className="fd-container">
          <div className="fd-expertise-intro"><div><p className="fd-redesign-kicker">AREAS OF EXPERTISE</p><SectionHeading id="expertise-heading" title="Focused on the work that helps organic search." /></div><p>For businesses serving Saudi Arabia, from the technical foundations to useful information in the right language.</p></div>
          <div className="fd-expertise-list">{expertise.map((item, index) => <article className="fd-expertise-item" key={item.title}>
            <span className="fd-expertise-index" aria-hidden="true">0{index + 1}</span><div className="fd-expertise-name"><h3>{item.title}</h3><p>{item.problem}</p></div><div className="fd-expertise-scope"><p><strong>Engagement</strong> {item.engagement}</p><p><strong>Deliverable</strong> {item.deliverable}</p></div><Link href={item.href} aria-label={`Explore ${item.title}`}><Arrow diagonal /></Link>
          </article>)}</div>
          <p className="fd-expertise-footnote">Arabic content planning includes qualified language review before any publication is agreed.</p>
        </div>
      </section>

      <section id="approach" className="fd-onboarding fd-section" aria-labelledby="onboarding-heading">
        <div className="fd-container">
          <div className="fd-onboarding-heading"><div><p className="fd-redesign-kicker">A CLEAR WAY TO BEGIN</p><SectionHeading id="onboarding-heading" title="From first conversation to steady improvement." /></div><p>Good work needs a shared view of the goal, the scope and what happens next.</p></div>
          <ol className="fd-onboarding-list">{process.map(([titleText, copy], index) => <li key={titleText}><span className="fd-onboarding-number">0{index + 1}</span><div><h3>{titleText}</h3><p>{copy}</p></div></li>)}</ol>
        </div>
      </section>

      <section className="fd-audience fd-section" aria-labelledby="audience-heading">
        <div className="fd-container">
          <div className="fd-audience-heading"><div><p className="fd-redesign-kicker">WHO I WORK WITH</p><SectionHeading id="audience-heading" title="Different businesses. A useful place to start." /></div><p>SEO work should fit the business, the website and the people responsible for putting changes into practice.</p></div>
          <div className="fd-audience-list">{audiences.map((item, index) => <article className={`fd-audience-item fd-audience-item-${index + 1}`} key={item.title}><h3>{item.title}</h3><p>{item.copy}</p><div><strong>The SEO need</strong><p>{item.need}</p></div></article>)}</div>
        </div>
      </section>

      <section className="fd-insights fd-section" id="insights" aria-labelledby="insights-heading">
        <div className="fd-container">
          <div className="fd-insights-heading"><div><p className="fd-redesign-kicker">SAUDI SEARCH INSIGHTS</p><SectionHeading id="insights-heading" title="Research for the questions behind search." /></div><Link className="fd-text-link" href="/blog/">Browse all insights <Arrow /></Link></div>
          <div className="fd-insights-list">{["arabic-vs-english-seo-saudi-arabia", "local-seo-saudi-businesses-guide", "technical-seo-audit-saudi-websites"].map((slug, index) => {
            const post = saudiArticles.find(article => article.slug === slug);
            if (!post) return null;
            return <article key={post.slug}><span>GUIDE · 0{index + 1}</span><p>{post.category}</p><h3><Link href={`/blog/${post.slug}/`}>{post.title}</Link></h3><p>{post.excerpt}</p><Link className="fd-text-link" href={`/blog/${post.slug}/`}>Read the guide <Arrow diagonal /></Link></article>;
          })}</div>
        </div>
      </section>

      <section className="fd-faq fd-section fd-container" aria-labelledby="faq-heading">
        <div><p className="fd-redesign-kicker">QUESTIONS ABOUT SEO</p><SectionHeading id="faq-heading" title="A few things you may want to know." /><p className="fd-faq-lead">Want to talk through your own website? <a href="#review">Request an SEO review <Arrow /></a></p></div>
        <div className="fd-faq-list">{faqs.map(faq => <details key={faq.question}><summary>{faq.question}<span aria-hidden="true" className="fd-faq-toggle" /></summary><p>{faq.answer}</p></details>)}</div>
      </section>

      <section id="review" className="fd-review fd-section" aria-labelledby="review-heading"><div className="fd-container fd-review-grid"><div><p className="fd-redesign-kicker">A GOOD PLACE TO START</p><h2 id="review-heading">Let&apos;s Make Your Business Easier to Find.</h2><p>Share your website and what you want to improve. I&apos;ll help you identify the questions worth asking and the priorities to consider.</p><a className="fd-review-whatsapp" href="https://wa.me/971542763828" target="_blank" rel="noopener noreferrer">Contact Mohammad on WhatsApp <Arrow diagonal /></a><p className="fd-review-direct">The link opens WhatsApp without adding anything you entered here.</p></div><div className="fd-review-panel"><h3>Request an SEO Review</h3><p>Prepare a message with your website and goals. Nothing is sent until you choose to open WhatsApp.</p><ReviewForm /></div></div></section>
    </main>

    <SiteFooter />
  </div>;
}
