"use client";

import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import "./work-showcase-motion.css";

type ArtKind = "audit" | "intent" | "roadmap";

const artTitles: Record<ArtKind, string> = {
  audit: "Illustrative technical audit sequence",
  intent: "Illustrative search intent map",
  roadmap: "Illustrative organic growth roadmap",
};

function MotionArt({ kind }: { kind: ArtKind }) {
  const region = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [run, setRun] = useState(0);

  useEffect(() => {
    const element = region.current;
    if (!element || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        if (entry.isIntersecting) setHasStarted(true);
      },
      { rootMargin: "0px", threshold: 0 },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const animationState = !hasStarted ? "idle" : isVisible ? "playing" : "paused";

  return (
    <div className="fr-work-motion" ref={region} data-motion={animationState}>
      <div className={`fr-work-art fr-${kind} fr-motion-art`} key={run}>
        {kind === "audit" && <AuditArt />}
        {kind === "intent" && <IntentArt />}
        {kind === "roadmap" && <RoadmapArt />}
      </div>
      <button
        className="fr-motion-toggle"
        type="button"
        aria-label={`Replay ${artTitles[kind]}`}
        title={`Replay ${artTitles[kind]}`}
        onClick={() => {
          setHasStarted(isVisible);
          setRun((value) => value + 1);
        }}
      >
        <svg aria-hidden="true" viewBox="0 0 16 16" fill="currentColor">
          <path d="M8 2.1a5.9 5.9 0 1 0 5.72 7.33.8.8 0 0 0-1.55-.4A4.3 4.3 0 1 1 8 3.7c.9 0 1.74.27 2.44.75H8.6a.8.8 0 1 0 0 1.6h3.8a.8.8 0 0 0 .8-.8v-3.8a.8.8 0 1 0-1.6 0v1.32A5.85 5.85 0 0 0 8 2.1Z" />
        </svg>
        <span>Replay</span>
      </button>
    </div>
  );
}

function AuditArt() {
  return (
    <>
      <span className="fr-art-overline">Illustrative review workflow</span>
      <h4 className="fr-audit-title">Find the next useful fix.</h4>
      <div className="fr-audit-board" aria-label="Example technical audit checklist">
        <div className="fr-audit-head"><span>Review area</span><span>Next action</span></div>
        <div className="fr-audit-row">
          <span className="fr-audit-mark" aria-hidden="true">01</span>
          <span className="fr-audit-copy"><b>Crawlability</b><small>Can important pages be reached?</small></span>
          <span className="fr-audit-state">Check</span>
        </div>
        <div className="fr-audit-row">
          <span className="fr-audit-mark" aria-hidden="true">02</span>
          <span className="fr-audit-copy"><b>Indexing</b><small>Are priority pages eligible?</small></span>
          <span className="fr-audit-state">Review</span>
        </div>
        <div className="fr-audit-row">
          <span className="fr-audit-mark" aria-hidden="true">03</span>
          <span className="fr-audit-copy"><b>Internal links</b><small>Do useful paths connect?</small></span>
          <span className="fr-audit-state">Map</span>
        </div>
        <div className="fr-audit-priority">
          <span className="fr-priority-dot" aria-hidden="true" />
          <span><b>Prioritized action</b><small>Fix the blocker before refining the detail.</small></span>
        </div>
      </div>
      <p className="fr-art-disclaimer">Example format · no live site data</p>
    </>
  );
}

function IntentArt() {
  return (
    <>
      <span className="fr-art-overline">Illustrative planning map</span>
      <div className="fr-intent-flow" aria-label="Example path from search intent to enquiry">
        <div className="fr-intent-node fr-intent-query"><span>Search intent</span><b>SEO services Riyadh</b></div>
        <svg className="fr-intent-connector" viewBox="0 0 600 44" aria-hidden="true" focusable="false">
          <defs><marker id="fr-intent-arrow" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0 0 8 4 0 8" fill="none" stroke="currentColor" strokeWidth="1.4" /></marker></defs>
          <path className="fr-intent-path" pathLength="1" d="M20 22H580" markerEnd="url(#fr-intent-arrow)" />
        </svg>
        <div className="fr-intent-steps">
          <div className="fr-intent-node"><span>Useful destination</span><b>Relevant service page</b></div>
          <div className="fr-intent-node"><span>Answer the question</span><b>Useful information</b></div>
          <div className="fr-intent-node"><span>Clear next step</span><b>Customer enquiry</b></div>
        </div>
      </div>
      <p className="fr-art-disclaimer">Example journey · not a live result</p>
    </>
  );
}

const roadmapSteps = [
  { name: "Audit", detail: "Understand the site, search demand and practical constraints." },
  { name: "Prioritize", detail: "Choose the changes with the clearest value and a realistic path to delivery." },
  { name: "Implement", detail: "Make and verify improvements with the people who own the work." },
  { name: "Measure", detail: "Review what changed, learn from it and adjust the next steps." },
];

function RoadmapArt() {
  const [activeStep, setActiveStep] = useState(0);
  const tabsRef = useRef<Array<HTMLButtonElement | null>>([]);

  function focusStep(event: KeyboardEvent<HTMLDivElement>) {
    const currentIndex = roadmapSteps.findIndex((_, index) => tabsRef.current[index] === document.activeElement);
    let nextIndex = currentIndex;
    if (event.key === "ArrowRight" || event.key === "ArrowDown") nextIndex = (currentIndex + 1) % roadmapSteps.length;
    else if (event.key === "ArrowLeft" || event.key === "ArrowUp") nextIndex = (currentIndex - 1 + roadmapSteps.length) % roadmapSteps.length;
    else if (event.key === "Home") nextIndex = 0;
    else if (event.key === "End") nextIndex = roadmapSteps.length - 1;
    else return;
    event.preventDefault();
    setActiveStep(nextIndex);
    tabsRef.current[nextIndex]?.focus();
  }

  return (
    <>
      <span className="fr-art-overline">A practical sequence</span>
      <div className="fr-roadmap-tabs" role="tablist" aria-label="Organic growth roadmap steps" onKeyDown={focusStep}>
        {roadmapSteps.map((step, index) => (
          <button
            key={step.name}
            ref={(element) => { tabsRef.current[index] = element; }}
            className="fr-roadmap-tab"
            id={`fr-roadmap-tab-${index}`}
            type="button"
            role="tab"
            aria-selected={activeStep === index}
            aria-controls="fr-roadmap-panel"
            tabIndex={activeStep === index ? 0 : -1}
            onClick={() => setActiveStep(index)}
          >
            <span className="fr-roadmap-tab-number">0{index + 1}</span>
            <span>{step.name}</span>
          </button>
        ))}
      </div>
      <div className="fr-roadmap-track" aria-hidden="true"><span style={{ width: "100%", transform: `scaleX(${activeStep / (roadmapSteps.length - 1)})` }} /></div>
      <div className="fr-roadmap-panel" id="fr-roadmap-panel" role="tabpanel" aria-labelledby={`fr-roadmap-tab-${activeStep}`}>
        <h4>{roadmapSteps[activeStep].name}</h4>
        <p>{roadmapSteps[activeStep].detail}</p>
      </div>
      <p className="fr-art-disclaimer">Select a step to see what it involves</p>
    </>
  );
}

export function TechnicalReviewArt() {
  return <MotionArt kind="audit" />;
}

export function SearchIntentArt() {
  return <MotionArt kind="intent" />;
}

export function GrowthRoadmapArt() {
  return <MotionArt kind="roadmap" />;
}
