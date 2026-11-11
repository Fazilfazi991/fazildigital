import Image from "next/image";
import Link from "next/link";
import { JsonLd, pageMetadata } from "@/components/site/PageElements";
import "../home.css";
import "./about.css";

const title = "About Mohammad Fazil | SEO Consultant";
const description =
  "Meet Mohammad Fazil, a Dubai-based SEO consultant and Fusion Ventures co-founder working across technical and business development.";
const profileUrl = "https://ae.linkedin.com/in/fazilfazi";
const personId = "https://www.fazildigital.com/#person";

function ArrowIcon() {
  return <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" width="16" height="16"><path d="M4 10h11M10 5l5 5-5 5M11 4h5v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

export const metadata = pageMetadata({ title, description, path: "/about/" });

const profileSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": personId,
      name: "Mohammad Fazil",
      url: "https://www.fazildigital.com/about/",
      image: "https://www.fazildigital.com/images/about/mohammad-fazil.webp",
      sameAs: [profileUrl],
      jobTitle: "SEO Consultant",
      worksFor: { "@type": "Organization", name: "Fazil Digital", url: "https://www.fazildigital.com/" },
      affiliation: {
        "@type": "Organization",
        name: "Fusion Ventures Global",
        url: "https://www.fusionventuresglobal.com/",
      },
      knowsAbout: ["Search engine optimization", "Technical SEO", "Content strategy", "Business development"],
    },
    {
      "@type": "AboutPage",
      "@id": "https://www.fazildigital.com/about/#page",
      url: "https://www.fazildigital.com/about/",
      name: "About Mohammad Fazil",
      description,
      mainEntity: { "@id": personId },
    },
  ],
};

const chapters = [
  {
    label: "Marketing",
    title: "Learning how people find a business",
    text: "My professional foundation is in digital marketing. It taught me to start with the audience: what they need, how they search, and what will help them make a useful next decision.",
  },
  {
    label: "Marketing leadership · ZORX",
    title: "Bringing strategy and execution together",
    text: "I led marketing at ZORX. That experience brought planning, communication and day-to-day execution into one view of how a business meets its customers.",
    note: "Shared without dates or outcome claims.",
  },
  {
    label: "Technical & business development",
    title: "Co-founder at Fusion Ventures Global",
    text: "My publicly listed role is Co-Founder, Technical & Business Development. I work across technical direction and business development, keeping the business problem and the systems around it in view.",
    link: "https://www.fusionventuresglobal.com/",
  },
  {
    label: "Independent practice · Dubai",
    title: "Fazil Digital",
    text: "I work directly with businesses on SEO and organic growth. The Saudi focus starts with Riyadh, followed by Jeddah and Dammam, with each market approached through its own search context.",
    link: "/services/seo/",
  },
];

const workPrinciples = [
  ["Begin with evidence", "Understand the site, the audience and the available search data before recommending a change."],
  ["Make the next step clear", "Connect each finding to a practical action, an owner and a way to review it."],
  ["Keep the whole journey in view", "Search discovery matters when the information and enquiry path serve the people who arrive."],
];

const exampleDeliverables = [
  ["Technical review", "A prioritized list of crawl, indexation and structure checks for a real website."],
  ["Search-intent map", "A page plan that connects customer questions to a clear purpose and internal-link path."],
  ["Organic-growth roadmap", "A sequence of agreed changes with responsibilities and review points."],
];

export default function AboutPage() {
  return (
    <div className="fd-about-page">
      <JsonLd data={profileSchema} />

      <section className="fd-about-hero fd-about-wrap" aria-labelledby="about-title">
        <div className="fd-about-copy">
          <p className="fd-about-overline">Mohammad Fazil <span aria-hidden="true">/</span> SEO consultant</p>
          <h1 id="about-title">I connect search visibility to the business behind it.</h1>
          <p className="fd-about-intro">
            I’m a Dubai-based consultant working across SEO, marketing and business development. Through Fazil Digital,
            I help Saudi businesses turn search questions into a clear, practical growth plan.
          </p>
          <div className="fd-about-hero-actions">
            <Link className="fd-about-button" href="/contact/">Talk about your goals <ArrowIcon /></Link>
            <a className="fd-about-link" href={profileUrl} target="_blank" rel="noopener noreferrer">View my LinkedIn profile <ArrowIcon /></a>
          </div>
          <div className="fd-about-place"><span className="fd-about-place-mark" aria-hidden="true" />Dubai based <span aria-hidden="true">·</span> Serving Saudi businesses</div>
        </div>
        <figure className="fd-about-photo">
          <Image src="/images/about/mohammad-fazil.webp" alt="Mohammad Fazil seated in a café" width={1126} height={1376} preload sizes="(max-width: 760px) 100vw, 46vw" />
          <figcaption><span>Mohammad Fazil</span><span>Dubai, UAE</span></figcaption>
        </figure>
      </section>

      <section className="fd-about-route" aria-label="Professional profile at a glance">
        <div className="fd-about-wrap fd-about-route-inner">
          <span>Marketing</span><i aria-hidden="true" /><span>Technical &amp; business development</span><i aria-hidden="true" /><span>SEO &amp; organic growth</span>
        </div>
      </section>

      <section className="fd-about-story fd-about-wrap" aria-labelledby="story-title">
        <div className="fd-about-section-title">
          <span className="fd-about-index" aria-hidden="true">A</span>
          <h2 id="story-title">A career built around useful questions.</h2>
        </div>
        <div className="fd-about-story-copy">
          <p>My work has moved through different parts of the same business conversation: how people discover an offer, what helps them understand it, and how a team can respond when interest turns into an enquiry.</p>
          <p>Marketing gave me the customer perspective. Technical and business-development work widened that view to include the systems, decisions and people behind the experience. I bring those perspectives together in SEO: research first, then a focused set of changes a business can put into practice.</p>
        </div>
      </section>

      <section className="fd-about-career" aria-labelledby="career-title">
        <div className="fd-about-wrap">
          <div className="fd-about-section-heading">
            <div><span className="fd-about-overline">Experience</span><h2 id="career-title">Different roles. A connected point of view.</h2></div>
            <p>Selected parts of my professional path, shared without unsupported dates or outcome claims.</p>
          </div>
          <ol className="fd-about-timeline">
            {chapters.map((chapter, index) => (
              <li key={chapter.title}>
                <span className="fd-about-timeline-node" aria-hidden="true"><span>{index + 1}</span></span>
                <div className="fd-about-timeline-meta"><span>{chapter.label}</span><span>Chapter {String(index + 1).padStart(2, "0")}</span></div>
                <div className="fd-about-timeline-content">
                  <h3>{chapter.title}</h3>
                  <p>{chapter.text}</p>
                  {chapter.note && <small>{chapter.note}</small>}
                  {chapter.link && (chapter.link.startsWith("/")
                  ? <Link href={chapter.link}>Explore SEO services <ArrowIcon /></Link>
                    : <a href={chapter.link} target="_blank" rel="noopener noreferrer">Fusion Ventures Global <ArrowIcon /></a>)}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="fd-about-practice fd-about-wrap" aria-labelledby="practice-title">
        <div className="fd-about-practice-intro">
          <span className="fd-about-overline">How I work</span>
          <h2 id="practice-title">Clear thinking should lead to work people can use.</h2>
          <p>My approach combines research, technical understanding and business context. These are examples of the artifacts that can make the next decision easier—not client case studies or promised outcomes.</p>
        </div>
        <div className="fd-about-practice-lists">
          <div>
            <h3>Illustrative deliverables</h3>
            <ul className="fd-about-deliverables">{exampleDeliverables.map(([name, text], index) => <li key={name}><span>{String(index + 1).padStart(2, "0")}</span><div><strong>{name}</strong><p>{text}</p></div></li>)}</ul>
          </div>
          <div className="fd-about-principles">
            <h3>Working principles</h3>
            <dl>{workPrinciples.map(([term, description]) => <div key={term}><dt>{term}</dt><dd>{description}</dd></div>)}</dl>
          </div>
        </div>
      </section>

      <section className="fd-about-learning" aria-labelledby="learning-title">
        <div className="fd-about-wrap fd-about-learning-inner">
          <div><span className="fd-about-overline">Learning</span><h2 id="learning-title">A clear record matters.</h2></div>
          <div><p>AvivDigital appears in the education section of my public LinkedIn profile, which lists 2017–2018. It does not name a qualification, so I do not describe a diploma or certificate.</p><a href={profileUrl} target="_blank" rel="noopener noreferrer">See the public profile <ArrowIcon /></a></div>
        </div>
      </section>

      <section className="fd-about-contact" aria-labelledby="contact-title">
        <div className="fd-about-wrap fd-about-contact-inner">
          <div><span className="fd-about-overline">Get in touch</span><h2 id="contact-title">Let’s find the useful next step.</h2><p>If you’re considering SEO or want to talk through a business challenge, tell me what you’re working on.</p></div>
          <div className="fd-about-contact-actions"><Link className="fd-about-button fd-about-button-lime" href="/contact/">Start a conversation <ArrowIcon /></Link><a href="https://wa.me/971542763828" target="_blank" rel="noopener noreferrer">WhatsApp <ArrowIcon /></a></div>
        </div>
      </section>
    </div>
  );
}
