"use client";

import { useEffect, useRef, useState, useSyncExternalStore, type FormEvent } from "react";
import Link from "next/link";

const subscribeToHydration = () => () => {};

export function MobileMenu() {
  const menu = useRef<HTMLDetailsElement>(null);
  useEffect(() => {
    function onEscape(event: KeyboardEvent) {
      if (event.key === "Escape" && menu.current?.open) {
        menu.current.open = false;
        menu.current.querySelector("summary")?.focus();
      }
    }
    document.addEventListener("keydown", onEscape);
    return () => document.removeEventListener("keydown", onEscape);
  }, []);
  return <details ref={menu} className="fd-mobile-menu">
    <summary aria-label="Toggle main navigation"><span>Menu</span><svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 8h16M4 16h16" /></svg></summary>
    <nav aria-label="Mobile navigation" onClick={(event) => { if ((event.target as Element).closest("a") && menu.current) menu.current.open = false; }}>
      <Link href="/" aria-current="page">Home</Link><a href="#services">SEO Services</a><a href="#locations">Locations</a><a href="#insights">Insights</a><Link href="/about/">About</Link><a href="#review">Contact</a><a href="#review" className="fd-button">Request an SEO Review</a>
    </nav>
  </details>;
}

export function ProcessMotion() {
  const marker = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = marker.current;
    if (!element || !('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { element.dataset.visible = "true"; observer.disconnect(); }
    }, { threshold: 0.5 });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  return <div ref={marker} className="fd-process-rule" aria-hidden="true" />;
}

export function ReviewForm() {
  const [draft, setDraft] = useState<string | null>(null);
  const ready = useSyncExternalStore(subscribeToHydration, () => true, () => false);
  function prepareMessage(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    if (data.get("company-fax")) return;
    const name = String(data.get("name") || "").trim();
    const website = String(data.get("website") || "").trim();
    const goal = String(data.get("goal") || "").trim();
    const message = `Hello Mohammad, I'd like to request an SEO review for my Saudi business.\nName: ${name}\nWebsite: ${website}${goal ? `\nPriority: ${goal}` : ""}`;
    setDraft(`https://wa.me/971542763828?text=${encodeURIComponent(message)}`);
  }
  return <form className="fd-review-form" onSubmit={prepareMessage} onChange={() => setDraft(null)} aria-describedby="review-form-help">
    <fieldset disabled={!ready}>
    <div className="fd-form-pair"><div><label htmlFor="review-name">Your name</label><input id="review-name" name="name" autoComplete="name" required maxLength={100} placeholder="How should I address you?" /></div><div><label htmlFor="review-website">Business website</label><input id="review-website" name="website" type="url" autoComplete="url" required maxLength={300} placeholder="https://yourcompany.com" /></div></div>
    <div><label htmlFor="review-goal">What would you like to improve? <span>(optional)</span></label><textarea id="review-goal" name="goal" rows={2} maxLength={800} placeholder="Your market, visibility challenges or priorities" /></div>
    <div className="fd-honeypot" aria-hidden="true"><label htmlFor="company-fax">Leave this field blank</label><input id="company-fax" name="company-fax" tabIndex={-1} autoComplete="off" /></div>
    <button type="submit" className="fd-button fd-button-light">Prepare SEO Review Request <span aria-hidden="true">↗</span></button>
    </fieldset>
    <p className="fd-form-note" id="review-form-help">This prepares a WhatsApp message. Review it there and send when you’re ready. Your details aren’t stored by this form.</p>
    <noscript><p className="fd-form-note">To prepare a message here, enable JavaScript. You can also <a href="https://wa.me/971542763828" target="_blank" rel="noopener noreferrer">contact Mohammad directly on WhatsApp</a>.</p></noscript>
    <div role="status" aria-live="polite">{draft && <div className="fd-draft"><strong>Your message is ready. Nothing has been sent.</strong><a href={draft} target="_blank" rel="noopener noreferrer" onClick={() => window.dispatchEvent(new CustomEvent("fazil:conversion", { detail: { event: "form_submit" } }))}>Review in WhatsApp <span aria-hidden="true">↗</span></a></div>}</div>
  </form>;
}
