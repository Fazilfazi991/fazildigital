"use client";

import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import Link from "next/link";
import styles from "./homepage-hero.module.css";

const services = ["SEO / Google rankings", "Digital marketing", "Website development", "Custom CRM / AI automation", "Getting more enquiries", "Not sure yet"];
const challenges = ["People cannot find my business", "My website gets visits but few enquiries", "I need a clearer SEO plan", "My website needs improvement", "Something else"];
const countryCodes = [["+966", "Saudi Arabia (+966)"], ["+91", "India (+91)"], ["+971", "United Arab Emirates (+971)"], ["+1", "United States / Canada (+1)"], ["+44", "United Kingdom (+44)"]];
type FormState = { name: string; service: string; challenge: string; details: string; website: string; contactMethod: "whatsapp" | "email"; countryCode: string; phone: string; email: string; consent: boolean; honeypot: string };
const initial: FormState = { name: "", service: "", challenge: "", details: "", website: "", contactMethod: "whatsapp", countryCode: "+966", phone: "", email: "", consent: false, honeypot: "" };

function Arrow() { return <svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M4 12h15m-6-6 6 6-6 6" /></svg>; }

export function HomepageHero() {
  const [form, setForm] = useState(initial);
  const [step, setStep] = useState(1);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const started = useRef(false);
  const uid = useId();
  const id = (field: string) => `${uid}-${field}`;

  useEffect(() => {
    if (step > 1) headingRef.current?.focus({ preventScroll: true });
  }, [step]);
  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    if (!started.current && value) {
      started.current = true;
      window.dispatchEvent(new CustomEvent("fazil:enquiry-analytics", { detail: { event: "enquiry_started", step: 1 } }));
    }
    setForm(current => ({ ...current, [key]: value }));
    if (error) setError("");
  }
  function next(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!event.currentTarget.reportValidity()) return;
    if (step < 4) {
      window.dispatchEvent(new CustomEvent("fazil:enquiry-analytics", { detail: { event: "enquiry_step_completed", step, service: form.service || undefined } }));
      setStep(step + 1);
    }
  }
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!event.currentTarget.reportValidity() || busy) return;
    setBusy(true); setError("");
    try {
      const response = await fetch("/api/enquiries", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...form, sourcePage: window.location.pathname }) });
      const result = await response.json().catch(() => null);
      if (!response.ok || !result?.ok) throw new Error(result?.error || "We couldn’t submit your enquiry. Your answers are still here—please try again.");
      setSubmitted(true);
      window.dispatchEvent(new CustomEvent("fazil:enquiry-analytics", { detail: { event: "enquiry_submitted_successfully", service: form.service } }));
    } catch (cause) {
      const message = cause instanceof Error ? cause.message : "We couldn’t submit your enquiry. Please try again.";
      setError(message);
      window.dispatchEvent(new CustomEvent("fazil:enquiry-analytics", { detail: { event: "enquiry_submission_failed", step, service: form.service || undefined } }));
    } finally { setBusy(false); }
  }

  return <section className={styles.hero} aria-labelledby="hero-title">
    <div className={styles.pitch}>
      <p className={styles.eyebrow}>MOHAMMAD FAZIL <span aria-hidden="true">·</span> SEO CONSULTANT</p>
      <h1 id="hero-title" className={styles.title}>I help businesses get found on <span>Google.</span></h1>
      <p className={styles.intro}>SEO and organic growth for Saudi businesses. Let’s connect your website with the people already searching for your services.</p>
      <div className={styles.actions}><a className={styles.primary} href="#enquiry-wizard">Request an SEO Review <Arrow /></a><a className={styles.secondary} href="#work">Explore My Work <span aria-hidden="true">↘</span></a></div>
      <p className={styles.trust}><span aria-hidden="true">●</span> Direct, practical support from first review through implementation.</p>
    </div>

    <div className={styles.panel} id="enquiry-wizard">
      <div className={styles.panelHead}><div><p className={styles.panelEyebrow}>A GOOD PLACE TO BEGIN</p><h2>Tell me what you need.</h2></div><span className={styles.stepCount}>0{step} <i>/ 04</i></span></div>
      <ol className={styles.progress} aria-label={`Step ${step} of 4`}>
        {["Your name", "Service", "Priority", "Contact"].map((label, position) => <li key={label} className={position + 1 === step ? styles.current : position + 1 < step ? styles.complete : ""}><span>{position + 1 < step ? "✓" : `0${position + 1}`}</span><small>{label}</small></li>)}
      </ol>
      {submitted ? <div className={styles.success} role="status"><span aria-hidden="true">✓</span><h3>Thanks, {form.name.trim().split(/\s+/)[0]}.</h3><p>Your enquiry has been submitted. I’ll get back to you via {form.contactMethod === "email" ? "email" : "WhatsApp"}.</p><Link href="/">Back to Fazil Digital <Arrow /></Link></div> : <form onSubmit={step === 4 ? submit : next}>
        <h3 className={styles.question} tabIndex={-1} ref={headingRef}>{["What should I call you?", "What would you like help with?", "What is the main thing you want to improve?", "How should I get back to you?"][step - 1]}</h3>
        {step === 1 && <div className={styles.field}><label htmlFor={id("name")}>Your name</label><input id={id("name")} autoComplete="name" required maxLength={100} value={form.name} onChange={event => update("name", event.target.value)} placeholder="Your name" /></div>}
        {step === 2 && <fieldset className={styles.choices}><legend className={styles.srOnly}>Choose a service</legend>{services.map(option => <label key={option} className={form.service === option ? styles.selected : ""}><input type="radio" name={id("service")} required value={option} checked={form.service === option} onChange={() => update("service", option)} /><span>{option}</span><b aria-hidden="true">{form.service === option ? "✓" : "↗"}</b></label>)}</fieldset>}
        {step === 3 && <><fieldset className={styles.choices}><legend className={styles.srOnly}>Choose your main priority</legend>{challenges.map(option => <label key={option} className={form.challenge === option ? styles.selected : ""}><input type="radio" name={id("challenge")} required value={option} checked={form.challenge === option} onChange={() => update("challenge", option)} /><span>{option}</span><b aria-hidden="true">{form.challenge === option ? "✓" : "↗"}</b></label>)}</fieldset><div className={styles.optionalFields}><label htmlFor={id("details")}>Anything else I should know? <span>Optional</span></label><textarea id={id("details")} rows={2} maxLength={1200} value={form.details} onChange={event => update("details", event.target.value)} placeholder="A sentence or two is enough."/><label htmlFor={id("website")}>Business website <span>Optional</span></label><input id={id("website")} type="url" autoComplete="url" maxLength={300} value={form.website} onChange={event => update("website", event.target.value)} placeholder="https://yourbusiness.com" /></div></>}
        {step === 4 && <><fieldset className={styles.contactChoice}><legend className={styles.srOnly}>Preferred contact method</legend><label className={form.contactMethod === "whatsapp" ? styles.selected : ""}><input type="radio" name={id("method")} checked={form.contactMethod === "whatsapp"} onChange={() => update("contactMethod", "whatsapp" as const)} /><span>WhatsApp</span></label><label className={form.contactMethod === "email" ? styles.selected : ""}><input type="radio" name={id("method")} checked={form.contactMethod === "email"} onChange={() => update("contactMethod", "email" as const)} /><span>Email</span></label></fieldset>{form.contactMethod === "whatsapp" ? <div className={styles.field}><label htmlFor={id("phone")}>WhatsApp number</label><div className={styles.phone}><select aria-label="Country calling code" value={form.countryCode} onChange={event => update("countryCode", event.target.value)}>{countryCodes.map(([code, label]) => <option value={code} key={code}>{label}</option>)}</select><input id={id("phone")} type="tel" inputMode="tel" autoComplete="tel-national" required minLength={5} maxLength={24} pattern="[0-9\s().-]+" value={form.phone} onChange={event => update("phone", event.target.value)} placeholder="Mobile number" /></div></div> : <div className={styles.field}><label htmlFor={id("email")}>Email address</label><input id={id("email")} type="email" autoComplete="email" required maxLength={254} value={form.email} onChange={event => update("email", event.target.value)} placeholder="you@company.com" /></div>}<label className={styles.consent}><input type="checkbox" required checked={form.consent} onChange={event => update("consent", event.target.checked)} /><span>I agree to be contacted about this enquiry. <Link href="/privacy-policy/">Privacy policy</Link></span></label><div className={styles.honeypot} aria-hidden="true"><label htmlFor={id("fax")}>Company fax</label><input id={id("fax")} tabIndex={-1} autoComplete="off" value={form.honeypot} onChange={event => update("honeypot", event.target.value)} /></div><div className={styles.summary}><p><strong>{form.name}</strong> · {form.service} · {form.challenge}</p><button type="button" onClick={() => setStep(1)}>Edit answers</button></div></>}
        {error && <p className={styles.error} role="alert">{error} <a href="https://wa.me/918086191325" target="_blank" rel="noopener noreferrer">Message on WhatsApp</a></p>}
        <div className={styles.controls}>{step > 1 && <button type="button" className={styles.back} onClick={() => { setError(""); setStep(step - 1); }}>Back</button>}<button className={styles.continue} type="submit" disabled={busy}>{busy ? "Sending…" : step === 4 ? "Send My Enquiry" : "Continue"}<Arrow /></button></div>
        <p className={styles.privacyNote}>Your answers are sent securely to Fazil Digital to respond to this enquiry. No account is created.</p>
      </form>}
    </div>
  </section>;
}
