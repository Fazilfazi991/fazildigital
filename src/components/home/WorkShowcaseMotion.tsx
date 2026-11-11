"use client";

import { useEffect, useRef, useState } from "react";
import "./work-showcase-motion.css";

type ArtKind = "audit" | "intent" | "roadmap";

const artTitles: Record<ArtKind, string> = {
  audit: "Technical SEO review",
  intent: "Search intent map",
  roadmap: "Organic growth roadmap",
};

function MotionArt({ kind }: { kind: ArtKind }) {
  const region = useRef<HTMLDivElement>(null);
  const enabled = useRef(true);
  const [isVisible, setIsVisible] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [isEnabled, setIsEnabled] = useState(true);
  const [run, setRun] = useState(0);

  useEffect(() => {
    const element = region.current;
    if (!element) return;

    if (!("IntersectionObserver" in window)) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        if (entry.isIntersecting && enabled.current) setHasStarted(true);
      },
      { rootMargin: "80px", threshold: 0.05 },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const className = `fr-work-art fr-${kind} fr-motion-art`;
  const animationState = !hasStarted ? "static" : isEnabled && isVisible ? "running" : "paused";

  return (
    <div className="fr-work-motion" ref={region} data-motion={animationState}>
      <div className={className} aria-hidden="true" key={run}>
        {kind === "audit" && <AuditArt />}
        {kind === "intent" && <IntentArt />}
        {kind === "roadmap" && <RoadmapArt />}
      </div>
      <button
        className="fr-motion-toggle"
        type="button"
        aria-label={`Toggle ${artTitles[kind]} animation`}
        aria-pressed={isEnabled}
        onClick={() => {
          if (isEnabled) {
            enabled.current = false;
            setIsEnabled(false);
          }
          else {
            enabled.current = true;
            if (isVisible) setHasStarted(true);
            setRun((value) => value + 1);
            setIsEnabled(true);
          }
        }}
      >
        <svg aria-hidden="true" viewBox="0 0 16 16" fill="currentColor">
          {isEnabled ? <path d="M4 3h3v10H4zm5 0h3v10H9z" /> : <path d="M5 3.8v8.4L12 8z" />}
        </svg>
        <span className="fr-sr-only">{isEnabled ? "Pause motion" : "Replay motion"}</span>
      </button>
    </div>
  );
}

function AuditArt() {
  return (
    <>
      <span>TECHNICAL REVIEW</span>
      <strong>Find the<br />friction.</strong>
      <svg className="fr-audit-graphic" viewBox="0 0 420 220" focusable="false">
        <path className="fr-audit-scan" d="M22 16v188" />
        <g className="fr-audit-bars">
          <rect className="fr-audit-bar fr-audit-bar-1" x="55" y="30" width="320" height="17" />
          <rect className="fr-audit-bar fr-audit-bar-2" x="96" y="72" width="230" height="17" />
          <rect className="fr-audit-bar fr-audit-bar-3" x="55" y="114" width="280" height="17" />
          <rect className="fr-audit-bar fr-audit-bar-4" x="126" y="156" width="190" height="17" />
        </g>
      </svg>
      <small>crawl · index · structure</small>
    </>
  );
}

function IntentArt() {
  return (
    <>
      <span>SEARCH INTENT MAP</span>
      <div className="fr-map-diagram">
        <div className="fr-map-node">Customer question</div>
        <svg className="fr-map-svg" viewBox="0 0 360 84" focusable="false">
          <path className="fr-map-trunk" pathLength="1" d="M180 0v30M60 30h240" />
          <path className="fr-map-branch fr-map-branch-1" pathLength="1" d="M60 30v54" />
          <path className="fr-map-branch fr-map-branch-2" pathLength="1" d="M180 30v54" />
          <path className="fr-map-branch fr-map-branch-3" pathLength="1" d="M300 30v54" />
          <circle className="fr-map-dot fr-map-dot-1" cx="60" cy="30" r="3" />
          <circle className="fr-map-dot fr-map-dot-2" cx="180" cy="30" r="3" />
          <circle className="fr-map-dot fr-map-dot-3" cx="300" cy="30" r="3" />
        </svg>
        <div className="fr-map-ends"><b>Useful page</b><b>Right next step</b><b>Clear answer</b></div>
      </div>
    </>
  );
}

function RoadmapArt() {
  return (
    <>
      <span>ORGANIC GROWTH ROADMAP</span>
      <span className="fr-roadmap-marker" />
      <div className="fr-roadmap-row"><b>01</b> Understand</div>
      <div className="fr-roadmap-row"><b>02</b> Prioritise</div>
      <div className="fr-roadmap-row"><b>03</b> Improve</div>
      <small>Sequence based on evidence and capacity</small>
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
