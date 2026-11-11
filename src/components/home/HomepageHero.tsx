"use client";

import { useId, useState, type FormEvent } from "react";
import styles from "./homepage-hero.module.css";

function Arrow() {
  return <svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M4 12h15m-6-6 6 6-6 6" /></svg>;
}

export function HomepageHero() {
  const inputId = useId();
  const hintId = useId();
  const [status, setStatus] = useState("");

  function continueToEnquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const website = form.elements.namedItem("website") as HTMLInputElement | null;
    const value = website?.value.trim() ?? "";

    if (value && website && !website.checkValidity()) {
      website.reportValidity();
      return;
    }

    window.dispatchEvent(new CustomEvent("fazil:prefill-review", { detail: { website: value } }));
    document.getElementById("review")?.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
      block: "start",
    });
    setStatus(value
      ? "Your website is ready in the enquiry form below. Nothing has been sent."
      : "Continue in the enquiry form below. Nothing has been sent.");
  }

  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <h1 id="hero-title" className={styles.title}>
        <span>Your next customer</span>
        <span className={styles.searching}>is already searching.</span>
      </h1>
      <p className={styles.promise}>Be the business they find.</p>

      <div className={styles.details}>
        <p className={styles.intro}>Mohammad Fazil works directly on technical SEO, local search and useful content for Saudi businesses.</p>
        <form className={styles.entry} onSubmit={continueToEnquiry}>
          <label htmlFor={inputId}>Start with your business website <span>(optional)</span></label>
          <div className={styles.controls}>
            <input
              id={inputId}
              name="website"
              type="url"
              autoComplete="url"
              inputMode="url"
              maxLength={300}
              placeholder="https://yourbusiness.com"
              aria-describedby={hintId}
            />
            <button type="submit">Continue to SEO review form <Arrow /></button>
          </div>
          <p id={hintId} className={styles.note}>Optional. Your website stays on this page, prefills the form below and is not analyzed or sent.</p>
          <p className={styles.status} role="status" aria-live="polite">{status}</p>
        </form>
      </div>
      <a className={styles.workLink} href="#work">See how I approach the work <Arrow /></a>
    </section>
  );
}
