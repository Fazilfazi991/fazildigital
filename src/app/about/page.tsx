import Image from "next/image";
import Link from "next/link";
import { JsonLd, pageMetadata } from "@/components/site/PageElements";
import "../home.css";
import "../editorial-pages.css";
import "./about.css";

const title = "About Mohammad Fazil | SEO & Marketing";
const description =
  "Meet Mohammad Fazil in Dubai. Learn how his work across SEO, marketing, technology and business development shapes organic growth for Saudi businesses.";
const pageName = "About Mohammad Fazil | SEO, Marketing & Technology";

export const metadata = pageMetadata({
  title,
  description,
  path: "/about/",
});

const profileUrl = "https://ae.linkedin.com/in/fazilfazi";
const personId = "https://www.fazildigital.com/#person";

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
      worksFor: {
        "@type": "Organization",
        name: "Fazil Digital",
        url: "https://www.fazildigital.com/",
      },
      affiliation: {
        "@type": "Organization",
        name: "Fusion Ventures Global",
        url: "https://www.fusionventuresglobal.com/",
      },
      hasOccupation: {
        "@type": "Occupation",
        name: "Co-Founder, Technical & Business Development",
        occupationLocation: {
          "@type": "City",
          name: "Dubai",
        },
      },
      knowsAbout: [
        "Search engine optimization",
        "Technical SEO",
        "Organic content strategy",
        "Digital marketing",
        "Business development",
      ],
    },
    {
      "@type": "AboutPage",
      "@id": "https://www.fazildigital.com/about/#page",
      url: "https://www.fazildigital.com/about/",
      name: pageName,
      description,
      mainEntity: { "@id": personId },
    },
  ],
};

const seoLinks = [
  { label: "SEO services", href: "/services/seo/", note: "Set direction around your market and business priorities." },
  { label: "Technical SEO", href: "/services/technical-seo/", note: "Review the foundations that shape discovery and indexing." },
  { label: "SEO content strategy", href: "/services/content-marketing/", note: "Plan original pages around customer questions and intent." },
  { label: "SEO for Riyadh", href: "/riyadh/seo/", note: "Explore the primary Saudi market focus." },
];

export default function AboutPage() {
  return (
    <div className="fd-about-page">
      <JsonLd data={profileSchema} />

      <section className="fd-about-hero fd-about-container" aria-labelledby="about-title">
        <div className="fd-about-hero-copy">
          <p className="fd-about-eyebrow">About Mohammad Fazil</p>
          <h1 id="about-title">I work where marketing, technology and business growth meet.</h1>
          <p className="fd-about-lead">
            I’m Mohammad Fazil. My work has moved from digital marketing and growth strategy toward
            building products, business systems and technology-led solutions. I believe useful growth
            starts with understanding the business problem, then choosing the right work to address it.
          </p>
          <div className="fd-about-actions">
            <Link className="fd-about-button" href="/contact/">Talk about your goals <span aria-hidden="true">↗</span></Link>
            <a className="fd-about-text-link" href={profileUrl} target="_blank" rel="noopener noreferrer">
              Connect on LinkedIn <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="fd-about-facts" aria-label="Professional details">
            <div><span>Based in</span><strong>Dubai, UAE</strong></div>
            <div><span>Current focus</span><strong>SEO for Saudi businesses</strong></div>
          </div>
        </div>
        <figure className="fd-about-portrait">
          <Image
            src="/images/about/mohammad-fazil.webp"
            alt="Mohammad Fazil seated in a café"
            width={1126}
            height={1376}
            preload
            sizes="(max-width: 820px) 100vw, 42vw"
          />
          <figcaption>Mohammad Fazil · Dubai</figcaption>
        </figure>
      </section>

      <section className="fd-about-story fd-about-container" aria-labelledby="story-title">
        <div className="fd-about-sidehead">
          <p className="fd-about-eyebrow">My story</p>
          <h2 id="story-title">Start with the problem, then build the right response.</h2>
        </div>
        <div className="fd-about-prose">
          <p>
            I began in digital marketing, working close to the practical questions behind a campaign:
            who needs to find a business, what they need to understand, and how a website can help them
            take the next step.
          </p>
          <p>
            As my work expanded into strategy and business development, I became more interested in
            what happens after someone arrives. A good customer journey depends on useful information,
            clear processes and teams that can respond to new opportunities.
          </p>
          <p>
            Technology brought another part of that picture into focus. At Fusion Ventures Global, I
            work as a co-founder in technical and business development. That role connects product
            thinking with the systems and decisions that help a business operate.
          </p>
          <p>
            Today, through Fazil Digital, I bring that combined perspective to SEO and organic growth
            for Saudi businesses. The work begins with search intent and the website a business
            already has, then turns evidence into a practical set of priorities.
          </p>
          <blockquote>
            <p>Marketing taught me how customers find businesses. Technology taught me to ask what happens after they arrive.</p>
          </blockquote>
        </div>
      </section>

      <section className="fd-about-career" aria-labelledby="career-title">
        <div className="fd-about-container">
          <div className="fd-about-section-head">
            <div>
              <p className="fd-about-eyebrow">Career journey</p>
              <h2 id="career-title">A practice shaped across disciplines.</h2>
            </div>
            <p>
              My experience connects hands-on marketing with technical and business-development
              work. I share public role details here where they can be checked.
            </p>
          </div>
          <ol className="fd-about-timeline">
            <li>
              <span className="fd-about-timeline-mark" aria-hidden="true" />
              <div className="fd-about-timeline-meta"><span>Professional foundation</span><span>Marketing</span></div>
              <div className="fd-about-timeline-copy">
                <h3>Digital marketing and growth strategy</h3>
                <p>
                  My earlier work in digital marketing gave me a practical grounding in content,
                  customer discovery and the role a website plays in a buying decision.
                </p>
              </div>
            </li>
            <li>
              <span className="fd-about-timeline-mark" aria-hidden="true" />
              <div className="fd-about-timeline-meta"><span>Co-founder</span><span>Current role</span></div>
              <div className="fd-about-timeline-copy">
                <h3>Fusion Ventures Global</h3>
                <p>
                  My public role is Co-Founder, Technical &amp; Business Development. I work at the
                  intersection of technical direction and business development.
                </p>
                <a href="https://www.fusionventuresglobal.com/" target="_blank" rel="noopener noreferrer">
                  Visit Fusion Ventures Global <span aria-hidden="true">↗</span>
                </a>
              </div>
            </li>
            <li>
              <span className="fd-about-timeline-mark" aria-hidden="true" />
              <div className="fd-about-timeline-meta"><span>Independent practice</span><span>Saudi Arabia</span></div>
              <div className="fd-about-timeline-copy">
                <h3>Fazil Digital</h3>
                <p>
                  I work directly with businesses on SEO, technical foundations, local search and
                  original content, with Riyadh as the primary market focus followed by Jeddah and Dammam.
                </p>
                <Link href="/services/seo/">Explore SEO services <span aria-hidden="true">↗</span></Link>
              </div>
            </li>
          </ol>
          <p className="fd-about-timeline-note">
            Earlier employer names and dates are not listed here because the available public sources
            do not confirm them.
          </p>
        </div>
      </section>

      <section className="fd-about-container fd-about-capabilities" aria-labelledby="capabilities-title">
        <div className="fd-about-section-head">
          <div>
            <p className="fd-about-eyebrow">What I work across</p>
            <h2 id="capabilities-title">Three perspectives. One business problem.</h2>
          </div>
          <p>
            Marketing, technology and business development are useful together when each is connected
            to a real need.
          </p>
        </div>
        <div className="fd-about-pillars">
          <article>
            <span className="fd-about-pillar-label">Marketing &amp; organic growth</span>
            <h3>Help the right people discover and understand an offer.</h3>
            <p>
              SEO, search intent, content planning and digital strategy can clarify how a business
              meets customer needs.
            </p>
          </article>
          <article>
            <span className="fd-about-pillar-label">Technology &amp; business systems</span>
            <h3>Make the work behind a customer journey easier to follow.</h3>
            <p>
              My technical and business-development role informs how I think about workflows,
              operational systems and the information a team needs to act.
            </p>
          </article>
          <article>
            <span className="fd-about-pillar-label">Business &amp; product development</span>
            <h3>Understand what is being built and why it matters.</h3>
            <p>
              Start with the problem, consider the people and process involved, and scope a response
              that can be evaluated.
            </p>
          </article>
        </div>
      </section>

      <section className="fd-about-work" aria-labelledby="work-title">
        <div className="fd-about-container">
          <div className="fd-about-section-head">
            <div>
              <p className="fd-about-eyebrow">How the work takes shape</p>
              <h2 id="work-title">Useful work should be clear enough to review.</h2>
            </div>
            <p>
              These are examples of SEO deliverables, not client case studies or claims about
              completed customer outcomes.
            </p>
          </div>
          <div className="fd-about-work-list">
            <article>
              <span className="fd-about-work-index">A</span>
              <div><h3>Technical review</h3><p>Identify important discovery or indexing barriers, document the evidence, agree an owner for each action and define how a change will be checked.</p></div>
              <span className="fd-about-work-type">Illustrative deliverable</span>
            </article>
            <article>
              <span className="fd-about-work-index">B</span>
              <div><h3>Search-intent map</h3><p>Connect customer questions and service intent to the right existing pages, including the Saudi city pages that deserve a distinct purpose.</p></div>
              <span className="fd-about-work-type">Illustrative deliverable</span>
            </article>
            <article>
              <span className="fd-about-work-index">C</span>
              <div><h3>Content architecture</h3><p>Plan useful original pages, supporting guides and internal links around what a business can substantiate and maintain.</p></div>
              <span className="fd-about-work-type">Illustrative deliverable</span>
            </article>
          </div>
          <p className="fd-about-work-note">
            No private client records, unapproved project names or unverified performance figures are shown.
          </p>
        </div>
      </section>

      <section className="fd-about-container fd-about-principles" aria-labelledby="principles-title">
        <div className="fd-about-sidehead">
          <p className="fd-about-eyebrow">How I think</p>
          <h2 id="principles-title">A few principles I return to.</h2>
        </div>
        <dl>
          <div><dt>Understand before building</dt><dd>Start with the business problem and the people affected by it.</dd></div>
          <div><dt>Execution matters</dt><dd>Make the recommendation specific enough for someone to act on and review.</dd></div>
          <div><dt>Connect marketing and operations</dt><dd>Discovery is one part of the journey; teams also need to handle the interest it creates.</dd></div>
          <div><dt>Measure what matters</dt><dd>Keep search visibility, relevant visits and business enquiries distinct and explain what each can show.</dd></div>
          <div><dt>Stay curious</dt><dd>New tools can help, but they do not replace research or a clear understanding of the work.</dd></div>
        </dl>
      </section>

      <section className="fd-about-seo">
        <div className="fd-about-container fd-about-seo-grid">
          <div>
            <p className="fd-about-eyebrow">My approach to SEO</p>
            <h2>Search should connect to the business behind the website.</h2>
          </div>
          <div className="fd-about-prose">
            <p>
              Technical understanding helps me ask how a page is discovered and maintained. Marketing
              helps me start with what people are searching for. Business development keeps the
              enquiry journey and the team's ability to respond in view.
            </p>
            <p>
              For Saudi businesses, I bring those questions together through technical SEO, local
              search, original content and measurement. Riyadh leads the market focus, with Jeddah
              and Dammam considered through their own customer and service context.
            </p>
            <p>
              Arabic and English require independent search research. Any Arabic content should be
              localized and reviewed by a qualified Arabic-language editor before publication.
            </p>
            <ul className="fd-about-seo-links">
              {seoLinks.map((item) => (
                <li key={item.href + item.label}>
                  <Link href={item.href}><span>{item.label}</span><span aria-hidden="true">↗</span></Link>
                  <p>{item.note}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="fd-about-container fd-about-education" aria-labelledby="education-title">
        <div>
          <p className="fd-about-eyebrow">Education &amp; development</p>
          <h2 id="education-title">Learning stays part of the work.</h2>
        </div>
        <div>
          <p><strong>AvivDigital</strong></p>
          <p>
            AvivDigital appears in the education section of my public LinkedIn profile, which lists
            2017–2018. The profile does not name a specific qualification, so I do not describe a
            diploma or certificate here.
          </p>
          <a href={profileUrl} target="_blank" rel="noopener noreferrer">View the public profile <span aria-hidden="true">↗</span></a>
        </div>
      </section>

      <section className="fd-about-beyond">
        <div className="fd-about-container fd-about-beyond-grid">
          <p className="fd-about-eyebrow">Beyond job titles</p>
          <div>
            <h2>I’m interested in making complicated work more useful.</h2>
            <p>
              That might mean making a search recommendation easier to implement, making a product
              problem easier to explain or helping a team see where information gets lost between
              discovery and action. I like work that turns a good question into a clear next step.
            </p>
          </div>
        </div>
      </section>

      <section className="fd-about-contact" aria-labelledby="connect-title">
        <div className="fd-about-container fd-about-contact-grid">
          <div>
            <p className="fd-about-eyebrow">Connect with me</p>
            <h2 id="connect-title">Let’s talk about what you’re building.</h2>
            <p>If you’re exploring SEO or a business problem that touches marketing and technology, tell me what you’re working on.</p>
          </div>
          <div className="fd-about-contact-actions">
            <Link className="fd-about-button fd-about-button-light" href="/contact/">Discuss SEO goals <span aria-hidden="true">↗</span></Link>
            <a href="https://wa.me/971542763828" target="_blank" rel="noopener noreferrer">Contact Mohammad on WhatsApp <span aria-hidden="true">↗</span></a>
            <a href={profileUrl} target="_blank" rel="noopener noreferrer">Connect on LinkedIn <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </section>
    </div>
  );
}
