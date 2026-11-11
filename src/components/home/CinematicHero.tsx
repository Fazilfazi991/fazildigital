"use client";

import Link from "next/link";
import { useCallback } from "react";
import { CinematicScrollSection, type CinematicProgress } from "./CinematicScrollSection";
import "./cinematic-hero.css";

const chapters = [
  {
    eyebrow: "Mohammad Fazil · SEO consultant",
    greeting: "Hey, I’m Fazil.",
    title: "Helping Saudi businesses get found on Google.",
    copy: "I help businesses across Saudi Arabia improve search visibility, develop stronger organic content, and turn relevant Google searches into business opportunities.",
  },
  {
    eyebrow: "The customer question",
    title: "Your customers are searching.",
    copy: "Are they finding your business? I work across Riyadh, Jeddah and Dammam to connect customer intent with useful pages and clear next steps.",
  },
  {
    eyebrow: "A useful path from search",
    title: "Let’s make your business easier to find.",
    copy: "Bring technical foundations, relevant content and local search into one practical plan—from the first query to a useful enquiry.",
  },
  {
    eyebrow: "A clear next step",
    title: "Ready to grow your organic visibility?",
    copy: "Start with your goals, the current search picture and a clear set of priorities for your Saudi audience.",
  },
] as const;

function CinematicOverlay({ chapter }: CinematicProgress) {
  return (
    <div className="fd-cinematic-copy-wrap">
      <div className="fd-cinematic-copy-stack" aria-label="Mohammad Fazil and SEO services for Saudi businesses">
        {chapters.map((item, index) => (
          <article className="fd-cinematic-copy" key={item.title} data-active={chapter === index} aria-hidden={chapter !== index}>
            <p className="fd-cinematic-eyebrow"><span aria-hidden="true" />{item.eyebrow}</p>
            {"greeting" in item && <p className="fd-cinematic-greeting">{item.greeting}</p>}
            {index === 0 ? <h1 id="hero-title">{item.title}</h1> : <h2>{item.title}</h2>}
            <p className="fd-cinematic-description">{item.copy}</p>
            {index === 1 && <ul className="fd-cinematic-search-terms" aria-label="Example Saudi SEO searches"><li>SEO Riyadh</li><li>SEO services Saudi Arabia</li><li>Local SEO</li><li>Organic growth</li></ul>}
            {index === 2 && <ol className="fd-cinematic-route" aria-label="Illustrative search-to-enquiry path"><li>Google search</li><li>Relevant website</li><li>Useful content</li><li>Enquiry</li></ol>}
            <div className="fd-cinematic-actions">
              <a className="fd-cinematic-primary" href="#review">Request an SEO review <span aria-hidden="true">↗</span></a>
              <Link className="fd-cinematic-secondary" href={index === 3 ? "/about/" : "#approach"}>{index === 3 ? "Meet Mohammad" : "Explore my approach"}<span aria-hidden="true">→</span></Link>
            </div>
          </article>
        ))}
      </div>
      <p className="fd-cinematic-location">Based in Dubai · Working with Saudi businesses</p>
      <span className="fd-cinematic-scroll-hint" aria-hidden="true">Scroll to explore <span>↓</span></span>
    </div>
  );
}

export function CinematicHero() {
  const renderOverlay = useCallback((state: CinematicProgress) => <CinematicOverlay {...state} />, []);

  return (
    <section className="fd-cinematic-intro" id="cinematic-intro" aria-labelledby="hero-title">
      <div className="fd-cinematic-heading">
        <p className="fd-cinematic-section-label">SEO &amp; organic growth · Saudi Arabia</p>
        <p>Search should help the right customers take their next step.</p>
      </div>
      <CinematicScrollSection renderOverlay={renderOverlay} />
      <p className="fd-cinematic-caption">Mohammad Fazil · SEO consultant for businesses serving Saudi Arabia</p>
    </section>
  );
}
