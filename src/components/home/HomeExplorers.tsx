"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

function useMobileOrientation() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => { const media = window.matchMedia("(max-width: 760px)"); const update = () => setIsMobile(media.matches); update(); media.addEventListener("change", update); return () => media.removeEventListener("change", update); }, []);
  return isMobile;
}

const problems = [
  { title: "My website isn’t ranking", detail: "Start by checking whether important pages can be crawled, indexed and understood—and whether they match the searches your customers use.", checks: ["Indexing and crawl signals", "Page intent and structure", "Technical blockers"], next: "A focused technical review can separate urgent fixes from longer-term opportunities." },
  { title: "People visit, but don’t enquire", detail: "Look at whether the landing page answers the visitor’s question, explains the offer clearly and makes the next step easy to take.", checks: ["Search intent to landing page", "Offer clarity and page content", "Enquiry path and friction"], next: "A page and search-intent review can show where visitors lose confidence." },
  { title: "I don’t know where to start", detail: "Build a baseline from your website, market and capacity, then choose the few actions most useful to tackle first.", checks: ["Business goals and market", "Current site and visibility", "Team implementation capacity"], next: "A first conversation can define a sensible scope before you commit to work." },
];
const steps = [
  { title: "Let’s talk", copy: "Tell me about your business, market and what you want search to do. We’ll check that the work is a useful fit." },
  { title: "Understand your website", copy: "Review the site, search context, current signals and practical constraints before setting priorities." },
  { title: "Build a strategy", copy: "Agree the scope, sequence, responsibilities and measures that make sense for your goals." },
  { title: "Implement & improve", copy: "Put agreed changes into practice, review what happens and refine the next priorities." },
];

const destinations = [
  { name: "Riyadh", href: "/riyadh/seo/", description: "Explore SEO support for businesses targeting Riyadh.", action: "Explore Riyadh SEO" },
  { name: "Jeddah", href: "/jeddah/seo/", description: "Connect your services with customers searching across Jeddah and the Western Region.", action: "Explore Jeddah SEO" },
  { name: "Dammam", href: "/dammam/seo/", description: "Support discovery across Dammam and Saudi Arabia’s Eastern Region.", action: "Explore Dammam SEO" },
  { name: "Saudi Arabia", href: "/services/seo/", description: "Plan organic growth for a wider Saudi audience, from local priorities to national demand.", action: "Explore SEO services" },
];

export function DestinationSelector() {
  const [selected, setSelected] = useState(0);
  const destination = destinations[selected];
  function selectDestination(index: number) {
    setSelected(index);
    document.getElementById(`destination-${index}`)?.focus();
  }
  return <aside className="fr-destination" aria-labelledby="destination-title">
    <div className="fr-destination-heading"><span>01 — 04 <i aria-hidden="true" /></span><p className="fr-eyebrow">Your next opportunity</p><h2 id="destination-title">Where do you want to grow?</h2></div>
    <div className="fr-destination-options" role="radiogroup" aria-labelledby="destination-title">
      {destinations.map((item, index) => <button type="button" role="radio" id={`destination-${index}`} aria-checked={selected === index} tabIndex={selected === index ? 0 : -1} key={item.name} onClick={() => setSelected(index)} onKeyDown={event => {
        const forward = ["ArrowRight", "ArrowDown"];
        const backward = ["ArrowLeft", "ArrowUp"];
        const next = forward.includes(event.key) ? (selected + 1) % destinations.length : backward.includes(event.key) ? (selected + destinations.length - 1) % destinations.length : event.key === "Home" ? 0 : event.key === "End" ? destinations.length - 1 : selected;
        if (next !== selected) { event.preventDefault(); selectDestination(next); }
      }}><span className="fr-destination-radio" aria-hidden="true" /><span>{item.name}</span><span className="fr-destination-arrow" aria-hidden="true">↗</span></button>)}
    </div>
    <div className="fr-destination-result" id="destination-result" aria-live="polite" aria-atomic="true" key={destination.name}>
      <p>{destination.description}</p><Link href={destination.href}>{destination.action}<span aria-hidden="true">↗</span></Link>
    </div>
  </aside>;
}

export function ProblemExplorer() {
  const [selected, setSelected] = useState(0);
  const isMobile = useMobileOrientation();
  const item = problems[selected];
  return <div className="fr-problem-explorer"><div className="fr-problem-tabs" role="tablist" aria-label="Choose a search challenge" aria-orientation={isMobile ? "vertical" : "horizontal"}>{problems.map((problem, index) => <button key={problem.title} role="tab" id={`problem-tab-${index}`} aria-selected={selected === index} aria-controls="problem-panel" tabIndex={selected === index ? 0 : -1} onClick={() => setSelected(index)} onKeyDown={event => { const forward = isMobile ? ["ArrowDown", "ArrowRight"] : ["ArrowRight", "ArrowDown"]; const backward = isMobile ? ["ArrowUp", "ArrowLeft"] : ["ArrowLeft", "ArrowUp"]; const next = forward.includes(event.key) ? (selected + 1) % problems.length : backward.includes(event.key) ? (selected + problems.length - 1) % problems.length : selected; if (next !== selected) { event.preventDefault(); setSelected(next); document.getElementById(`problem-tab-${next}`)?.focus(); } }}>{problem.title}<span aria-hidden="true">↗</span></button>)}</div><div className="fr-problem-panel" role="tabpanel" id="problem-panel" aria-labelledby={`problem-tab-${selected}`}><div><span className="fr-panel-index">0{selected + 1} / A PLACE TO START</span><h3>{item.title}</h3><p>{item.detail}</p><strong>{item.next}</strong><a href="#review">Talk through this challenge <span aria-hidden="true">↗</span></a></div><div className="fr-problem-checks"><span>First, I’d look at</span>{item.checks.map((check, index) => <p key={check}><b>0{index + 1}</b>{check}</p>)}</div></div></div>;
}

export function ProcessStepper() {
  const [selected, setSelected] = useState(0);
  const isMobile = useMobileOrientation();
  return <div className="fr-stepper"><div className="fr-step-tabs" role="tablist" aria-label="Engagement steps" aria-orientation={isMobile ? "vertical" : "horizontal"}>{steps.map((step, index) => <button key={step.title} id={`step-tab-${index}`} role="tab" aria-selected={selected === index} aria-controls="step-panel" tabIndex={selected === index ? 0 : -1} onClick={() => setSelected(index)} onKeyDown={event => { const forward = isMobile ? ["ArrowDown", "ArrowRight"] : ["ArrowRight", "ArrowDown"]; const backward = isMobile ? ["ArrowUp", "ArrowLeft"] : ["ArrowLeft", "ArrowUp"]; const next = forward.includes(event.key) ? (selected + 1) % steps.length : backward.includes(event.key) ? (selected + steps.length - 1) % steps.length : selected; if (next !== selected) { event.preventDefault(); setSelected(next); document.getElementById(`step-tab-${next}`)?.focus(); } }}><span>0{index + 1}</span><strong>{step.title}</strong><i aria-hidden="true"/></button>)}</div><div className="fr-step-panel" role="tabpanel" id="step-panel" aria-labelledby={`step-tab-${selected}`}><span>STEP 0{selected + 1}</span><h3>{steps[selected].title}</h3><p>{steps[selected].copy}</p><a href="#review">Start a conversation <span aria-hidden="true">↗</span></a></div></div>;
}
