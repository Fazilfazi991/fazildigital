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

export function ReviewForm({ context = "saudi-seo" }: { context?: "saudi-seo" | "project" }) {
  const [draft, setDraft] = useState<string | null>(null);
  const [copyState, setCopyState] = useState<"idle" | "copied" | "manual">("idle");
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
    const message = context === "project"
      ? `Hello Mohammad, I'd like to discuss a project.\nName: ${name}${website ? `\nWebsite: ${website}` : ""}${goal ? `\nProject context: ${goal}` : ""}`
      : `Hello Mohammad, I'd like to request an SEO review for my Saudi business.\nName: ${name}\nWebsite: ${website}${goal ? `\nPriority: ${goal}` : ""}`;
    setDraft(message);
    setCopyState("idle");
    window.dispatchEvent(new CustomEvent("fazil:conversion", { detail: { event: "review_intent" } }));
  }
  async function copyMessage() {
    if (!draft) return;
    try { await navigator.clipboard.writeText(draft); setCopyState("copied"); }
    catch { setCopyState("manual"); }
  }
  return <form className="fd-review-form" onSubmit={prepareMessage} onChange={() => { setDraft(null); setCopyState("idle"); }} aria-describedby="review-form-help">
    <fieldset disabled={!ready}>
    <div className="fd-form-pair"><div><label htmlFor="review-name">Your name</label><input id="review-name" name="name" autoComplete="name" required maxLength={100} placeholder="How should I address you?" /></div><div><label htmlFor="review-website">{context === "project" ? <>Website <span>(optional)</span></> : "Business website"}</label><input id="review-website" name="website" type="url" autoComplete="url" required={context === "saudi-seo"} maxLength={300} placeholder={context === "project" ? "https://yourcompany.com (if available)" : "https://yourcompany.com"} /></div></div>
    <div><label htmlFor="review-goal">{context === "project" ? "What are you working on? " : "What would you like to improve? "}<span>(optional)</span></label><textarea id="review-goal" name="goal" rows={2} maxLength={800} placeholder={context === "project" ? "The problem, idea or desired outcome" : "Your market, visibility challenges or priorities"} /></div>
    <div className="fd-honeypot" aria-hidden="true"><label htmlFor="company-fax">Leave this field blank</label><input id="company-fax" name="company-fax" tabIndex={-1} autoComplete="off" /></div>
    <button type="submit" className="fd-button fd-button-light">{context === "project" ? "Prepare Project Enquiry" : "Prepare SEO Review Request"} <span aria-hidden="true">↗</span></button>
    </fieldset>
    <p className="fd-form-note" id="review-form-help">Prepare and copy your message, then paste it into WhatsApp and send it when you’re ready. Your details aren’t stored by this form.</p>
    <noscript><p className="fd-form-note">To prepare a message here, enable JavaScript. You can also <a href="https://wa.me/971542763828" target="_blank" rel="noopener noreferrer">contact Mohammad directly on WhatsApp</a>.</p></noscript>
    <div role="status" aria-live="polite">{draft && <div className="fd-draft"><strong>Your message is ready. Nothing has been sent.</strong><p>Copy your message, then open WhatsApp and paste it into the conversation.</p><button type="button" onClick={copyMessage}>Copy message</button>{copyState === "copied" && <p>Copied. Open WhatsApp and paste your message.</p>}{copyState === "manual" && <div><label htmlFor="review-draft">Copy this message manually</label><textarea id="review-draft" readOnly value={draft} rows={5} onFocus={event => event.currentTarget.select()} /></div>}<a href="https://wa.me/971542763828" target="_blank" rel="noopener noreferrer" onClick={() => window.dispatchEvent(new CustomEvent("fazil:conversion", { detail: { event: "form_submit" } }))}>Open WhatsApp <span aria-hidden="true">↗</span></a></div>}</div>
  </form>;
}
