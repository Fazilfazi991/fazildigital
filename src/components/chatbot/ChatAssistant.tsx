"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import "./chatbot.css";

type Message = { role: "assistant" | "user"; content: string };
type Availability = "checking" | "available" | "unavailable";
type LeadRequirement = "SEO / Google rankings" | "Digital marketing" | "Website development" | "Custom CRM" | "AI automation" | "Something else";
type LeadStage = "offer" | "name" | "requirement" | "contact" | "review" | "success" | null;
type LeadContactMethod = "whatsapp" | "email";
type ChatLead = {
  name: string;
  requirement: LeadRequirement | "";
  details: string;
  contactMethod: LeadContactMethod | "";
  countryCode: string;
  phone: string;
  email: string;
  consent: boolean;
};

const leadRequirements: LeadRequirement[] = [
  "SEO / Google rankings",
  "Digital marketing",
  "Website development",
  "Custom CRM",
  "AI automation",
  "Something else",
];
const countryCodes = [["+966", "Saudi Arabia (+966)"], ["+91", "India (+91)"], ["+971", "United Arab Emirates (+971)"], ["+1", "United States / Canada (+1)"], ["+44", "United Kingdom (+44)"]];
const initialLead: ChatLead = { name: "", requirement: "", details: "", contactMethod: "", countryCode: "+966", phone: "", email: "", consent: false };

const saudigreeting = "Hi! I'm Fazil Digital's AI assistant. I can help with SEO, organic growth and services for Saudi businesses. What would you like to know?";
const calicutGreeting = "Hi! I can help you explore SEO and organic growth for a business serving Calicut or Kozhikode. Choose a quick question or prepare a message for Mohammad.";
const suggestions = [
  "Improve my website SEO",
  "I need digital marketing help",
  "I want a website or CRM",
  "I want to talk to Mohammad",
  "I run a business in Saudi Arabia",
  "I run a business in Calicut",
];
const handoffLink = "https://wa.me/918086191325";

function inferLeadRequirement(text: string): LeadRequirement | "" {
  const message = text.toLowerCase();
  if (/\b(crm|customer relationship|sales pipeline)\b/.test(message)) return "Custom CRM";
  if (/\b(ai automation|automation|ai agent)\b/.test(message)) return "AI automation";
  if (/\b(seo|search engine|google ranking|organic traffic|organic search)\b/.test(message)) return "SEO / Google rankings";
  if (/\b(digital marketing|marketing campaign|social media marketing|paid ads|advertising)\b/.test(message)) return "Digital marketing";
  if (/\b(website|web development|website development|web design)\b/.test(message)) return "Website development";
  return "";
}

function hasServiceIntent(text: string) {
  const message = text.trim().toLowerCase();
  return /\b(i need (?:help|support|seo|digital marketing|a website|a crm)|i want (?:help|seo|digital marketing|a website|a crm|to hire|to work with|support)|i(?:'m| am) looking for (?:help|an? (?:seo|marketing|website|crm)|someone)|please (?:contact|call|message) me|can you help (?:my business|me with)|we need (?:seo|digital marketing|a website|a crm)|i(?:'d| would) like to (?:work with|hire|get help))\b/.test(message);
}

function track(name: "chat_open" | "chat_message_sent" | "chat_handoff_intent" | "chat_error") {
  window.gtag?.("event", name);
}

declare global {
  interface Window { gtag?: (...args: unknown[]) => void }
}

export function ChatAssistant() {
  const pathname = usePathname() || "/";
  const normalizedPathname = pathname.length > 1 ? pathname.replace(/\/$/, "") : pathname;
  const isCalicut = normalizedPathname === "/digital-marketing-expert-calicut";
  const [open, setOpen] = useState(false);
  const [availability, setAvailability] = useState<Availability>("checking");
  const [messages, setMessages] = useState<Message[]>([]);
  const [draft, setDraft] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [leadStage, setLeadStage] = useState<LeadStage>(null);
  const [lead, setLead] = useState<ChatLead>(initialLead);
  const [leadFeedback, setLeadFeedback] = useState("");
  const [leadSubmitting, setLeadSubmitting] = useState(false);
  const [dockReduced, setDockReduced] = useState(false);
  const [dockOverlap, setDockOverlap] = useState(false);
  const [greetingVisible, setGreetingVisible] = useState(false);
  const leadPromptedRef = useRef(false);
  const greetingSeenRef = useRef(false);
  const characterTriggerRef = useRef<HTMLButtonElement>(null);
  const restoreFocusRef = useRef(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let active = true;
    fetch("/api/chat", { cache: "no-store" })
      .then((response) => response.ok ? response.json() : Promise.reject())
      .then((data: { available?: boolean }) => { if (active) setAvailability(data.available ? "available" : "unavailable"); })
      .catch(() => { if (active) setAvailability("unavailable"); });
    return () => { active = false; };
  }, []);

  useEffect(() => {
    try {
      if (window.sessionStorage.getItem("fazil-digital-assistant-greeting-seen:v3")) return;
    } catch {
      if (greetingSeenRef.current) return;
    }
    const showTimer = window.setTimeout(() => {
      if (!greetingSeenRef.current) {
        greetingSeenRef.current = true;
        setGreetingVisible(true);
        try { window.sessionStorage.setItem("fazil-digital-assistant-greeting-seen:v3", "shown"); } catch { /* The ref limits this to one appearance for the current mount. */ }
      }
    }, 700);
    const hideTimer = window.setTimeout(() => setGreetingVisible(false), 6200);
    return () => { window.clearTimeout(showTimer); window.clearTimeout(hideTimer); };
  }, []);

  useEffect(() => {
    if (!open) return;
    const targetId = leadStage === "offer" ? "fazil-lead-offer-title"
      : leadStage === "name" ? "fazil-lead-name"
        : leadStage === "requirement" ? "fazil-lead-requirement-first"
          : leadStage === "contact" ? "fazil-lead-contact-title"
            : leadStage === "review" ? "fazil-lead-review-title"
              : leadStage === "success" ? "fazil-lead-success-title" : null;
    if (targetId) document.getElementById(targetId)?.focus({ preventScroll: true });
  }, [leadStage, open]);

  useEffect(() => {
    if (open) {
      closeRef.current?.focus();
      document.body.classList.add("fazil-chat-open");
    } else {
      document.body.classList.remove("fazil-chat-open");
      if (restoreFocusRef.current) {
        restoreFocusRef.current = false;
        characterTriggerRef.current?.focus();
      }
    }
    return () => document.body.classList.remove("fazil-chat-open");
  }, [open]);

  useEffect(() => {
    const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
    bottomRef.current?.scrollIntoView({ behavior, block: "end" });
  }, [messages, busy]);

  useEffect(() => {
    if (open) return;
    const dock = document.querySelector<HTMLElement>(".fazil-contact-dock");
    if (!dock) return;

    const targets = Array.from(document.querySelectorAll<HTMLElement>("main form, main #enquiry-wizard, main #review, main [data-primary-cta], main a[href*='#enquiry-wizard'], main a[href*='/contact'], body > footer, body footer"))
      .filter((element) => !element.closest(".fazil-chat-panel, .fazil-contact-dock"));
    if (!targets.length) return;

    const intersects = (left: DOMRect, right: DOMRect) =>
      left.right > right.left && left.left < right.right && left.bottom > right.top && left.top < right.bottom;
    const measure = () => {
      const dockBounds = dock.getBoundingClientRect();
      const visibleTargets = targets.filter((element) => {
        const bounds = element.getBoundingClientRect();
        return bounds.bottom > 0 && bounds.top < window.innerHeight && bounds.right > 0 && bounds.left < window.innerWidth;
      });
      setDockReduced(visibleTargets.some((element) => {
        const bounds = element.getBoundingClientRect();
        const expandedDock = new DOMRect(dockBounds.left - 10, dockBounds.top - 14, dockBounds.width + 20, dockBounds.height + 28);
        return intersects(expandedDock, bounds);
      }));
      setDockOverlap(visibleTargets.some((element) => intersects(dockBounds, element.getBoundingClientRect())));
    };
    const observer = new IntersectionObserver(measure, { threshold: [0, 0.05, 0.25, 0.5, 1] });
    targets.forEach((element) => observer.observe(element));
    measure();
    window.addEventListener("scroll", measure, { passive: true });
    window.addEventListener("resize", measure);
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", measure);
      window.removeEventListener("resize", measure);
    };
  }, [open]);

  function close() {
    restoreFocusRef.current = true;
    setOpen(false);
  }

  function openAssistant() {
    setGreetingVisible(false);
    setOpen(true);
    track("chat_open");
  }

  function dismissGreeting() {
    greetingSeenRef.current = true;
    setGreetingVisible(false);
    try { window.sessionStorage.setItem("fazil-digital-assistant-greeting-seen:v3", "dismissed"); } catch { /* The ref is enough for this mount. */ }
  }

  function onDialogKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Escape") { event.preventDefault(); close(); }
    if (event.key !== "Tab") return;
    const items = Array.from(document.querySelectorAll<HTMLElement>(".fazil-chat-panel button:not(:disabled), .fazil-chat-panel input:not(:disabled), .fazil-chat-panel textarea:not(:disabled), .fazil-chat-panel select:not(:disabled), .fazil-chat-panel a[href]"));
    const enabled = items.filter((item) => item.offsetParent !== null);
    if (!enabled.length) return;
    const first = enabled[0];
    const last = enabled[enabled.length - 1];
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  }

  function offerLead(context = "") {
    leadPromptedRef.current = true;
    const requirement = inferLeadRequirement(context);
    if (requirement) setLead((current) => ({ ...current, requirement }));
    setLeadFeedback("");
    setLeadStage("offer");
  }

  async function send(text = draft, contactOffer = false) {
    const content = text.trim();
    if (!content || busy || content.length > 1400) return;
    if (/\b(?:talk|speak) to mohammad|contact mohammad|have mohammad contact me\b/i.test(content)) {
      setMessages((current) => [...current, { role: "user", content }]);
      setDraft("");
      offerLead(content);
      return;
    }
    if (availability !== "available") return;
    const shouldOfferContact = (contactOffer || hasServiceIntent(content)) && !leadPromptedRef.current;
    const next: Message[] = [...messages, { role: "user", content }];
    setMessages([...next, { role: "assistant", content: "" }]);
    setDraft("");
    setError("");
    setBusy(true);
    track("chat_message_sent");
    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next.slice(-10), market: isCalicut ? "calicut" : "saudi" }),
      });
      if (!response.ok || !response.body) {
        const payload = await response.json().catch(() => ({})) as { error?: string };
        throw new Error(payload.error === "rate_limited" ? "You've reached the chat limit for now. Please try again later or use the contact page." : "The assistant is temporarily unavailable. Please try again later or use the contact page.");
      }
      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let answer = "";
      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        answer += decoder.decode(value, { stream: true });
        setMessages([...next, { role: "assistant", content: answer }]);
      }
      if (!answer.trim()) throw new Error("The assistant returned an empty reply. Please try once more.");
      setMessages([...next, { role: "assistant", content: answer }]);
      if (shouldOfferContact) offerLead(content);
    } catch (cause) {
      const safeMessages = [
        "You've reached the chat limit for now. Please try again later or use the contact page.",
        "The assistant is temporarily unavailable. Please try again later or use the contact page.",
        "The assistant returned an empty reply. Please try once more.",
      ];
      const message = cause instanceof Error && safeMessages.includes(cause.message)
        ? cause.message
        : "The reply was interrupted. Please try again or use the contact page.";
      setMessages(next);
      setError(message);
      track("chat_error");
      if (shouldOfferContact) offerLead(content);
    } finally {
      setBusy(false);
      inputRef.current?.focus();
    }
  }

  function setLeadField<Key extends keyof ChatLead>(key: Key, value: ChatLead[Key]) {
    setLead((current) => ({ ...current, [key]: value }));
    setLeadFeedback("");
  }

  async function submitLead() {
    if (leadSubmitting) return;
    setLeadFeedback("");
    const service = lead.requirement === "Custom CRM" || lead.requirement === "AI automation"
      ? "Custom CRM / AI automation"
      : lead.requirement === "Something else" ? "Not sure yet" : lead.requirement;
    if (!lead.name.trim() || !lead.requirement || !lead.contactMethod || !lead.consent) {
      setLeadFeedback("Complete your name, requirement and consent before sending.");
      return;
    }
    if (!service) {
      setLeadFeedback("Choose what you need help with.");
      return;
    }
    if (lead.contactMethod === "whatsapp") {
      const digits = lead.phone.replace(/\D/g, "");
      const countryDigits = lead.countryCode.slice(1);
      if (!/^\+[1-9]\d{0,3}$/.test(lead.countryCode) || !/^[0-9\s().-]+$/.test(lead.phone)
        || digits.length < 5 || digits.length > 15 || digits.length + countryDigits.length < 8 || digits.length + countryDigits.length > 15) {
        setLeadFeedback("Enter a valid WhatsApp number with its country code.");
        setLeadStage("contact");
        return;
      }
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email) || lead.email.length > 254) {
      setLeadFeedback("Enter a valid email address.");
      setLeadStage("contact");
      return;
    }

    const payload = {
      name: lead.name.trim(),
      service,
      challenge: lead.requirement,
      details: lead.details.trim(),
      website: "",
      contactMethod: lead.contactMethod,
      countryCode: lead.contactMethod === "whatsapp" ? lead.countryCode : "",
      phone: lead.contactMethod === "whatsapp" ? lead.phone.trim() : "",
      email: lead.contactMethod === "email" ? lead.email.trim() : "",
      consent: true,
      sourcePage: normalizedPathname,
      honeypot: "",
    };
    setLeadSubmitting(true);
    try {
      const response = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json().catch(() => ({})) as { accepted?: boolean; error?: string };
      if (!response.ok || !result.accepted) throw new Error(result.error || "We couldn't confirm your enquiry submission. Your answers are still here—please try again.");
      setLeadStage("success");
    } catch (cause) {
      setLeadFeedback(cause instanceof Error ? cause.message : "We couldn't submit your enquiry just now. Your answers are still here—please try again.");
    } finally {
      setLeadSubmitting(false);
    }
  }

  function handleSuggestion(suggestion: string) {
    if (suggestion === "I want to talk to Mohammad") {
      offerLead();
      return;
    }
    const serviceInterest = ["Improve my website SEO", "I need digital marketing help", "I want a website or CRM"].includes(suggestion);
    if (availability !== "available") {
      if (serviceInterest) offerLead(suggestion);
      else setError("The assistant is temporarily unavailable. Please try again later or use WhatsApp.");
      return;
    }
    void send(suggestion, serviceInterest);
  }

  const greeting = isCalicut ? calicutGreeting : saudigreeting;
  return (
    <>
      {!open && <div className={`fazil-contact-dock${dockReduced ? " is-dock-reduced" : ""}${dockOverlap ? " is-content-overlap" : ""}`} role="group" aria-label="AI assistant and WhatsApp contact">
        {greetingVisible && <div className="fazil-character-greeting">
          <button type="button" className="fazil-greeting-open" onClick={openAssistant}>
            <span>Hey! Need a hand?</span>
            <span className="fazil-greeting-cta">Chat with Fazil Digital</span>
          </button>
          <button type="button" className="fazil-greeting-dismiss" aria-label="Dismiss greeting" onClick={dismissGreeting}>×</button>
        </div>}
        <div className="fazil-character-stage">
          <button
            type="button"
            className="fazil-character-trigger"
            ref={characterTriggerRef}
            aria-label={isCalicut ? "Open Calicut AI SEO assistant" : "Open Fazil Digital AI Assistant"}
            onClick={openAssistant}
          >
            <Image
              className="fazil-cutout-character fazil-cutout-character-motion"
              src="/images/chatbot/fazil-waving-slow.gif"
              width={362}
              height={362}
              sizes="(max-width: 360px) 88px, (max-width: 640px) 98px, 164px"
              alt=""
              aria-hidden="true"
              unoptimized
              priority={false}
            />
            <Image
              className="fazil-cutout-character fazil-cutout-character-static"
              src="/images/chatbot/fazil-waving-static.webp"
              width={362}
              height={362}
              sizes="(max-width: 360px) 88px, (max-width: 640px) 98px, 164px"
              alt=""
              aria-hidden="true"
              priority={false}
            />
          </button>
        </div>
        <div className="fazil-contact-actions">
          <FloatingWhatsApp />
        </div>
      </div>}

      {open && <div className="fazil-chat-scrim" onMouseDown={(event) => { if (event.target === event.currentTarget) close(); }}>
        <section className="fazil-chat-panel" role="dialog" aria-modal="true" aria-labelledby="fazil-chat-title" onKeyDown={onDialogKeyDown}>
          <header className="fazil-chat-header">
            <div className="fazil-chat-mark" aria-hidden="true">FD</div>
            <div className="fazil-chat-heading">
              <h2 id="fazil-chat-title">Fazil’s AI Assistant</h2>
              <p>Here to help with SEO, digital marketing, websites, CRM and AI automation.</p>
            </div>
            <button ref={closeRef} className="fazil-chat-close" type="button" aria-label="Close chat" onClick={close}>
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none"><path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
            </button>
          </header>

          <div className="fazil-chat-disclosure">AI-generated guidance. Don’t share passwords, payment details or sensitive personal information. When enabled, messages are processed by DeepSeek. <a href="https://platform.deepseek.com/downloads/DeepSeek%20Privacy%20Policy.pdf" target="_blank" rel="noreferrer">Privacy details</a>.</div>

          <div className="fazil-chat-messages" aria-live="polite" aria-relevant="additions text">
            <article className="fazil-chat-message assistant"><p>{greeting}</p></article>
            {availability === "checking" && <p className="fazil-chat-state">Checking assistant availability…</p>}
            {availability === "unavailable" && <div className="fazil-chat-unavailable" role="status">
              <p>Live AI replies are offline. Choose a prompt to prepare a WhatsApp message, or browse a useful page below.</p>
              <div className="fazil-chat-shortcuts">{isCalicut ? <><Link href="/blog/calicut-business-google-visibility-guide/">Calicut SEO guide</Link><Link href="/blog/google-business-profile-vs-website-seo-kozhikode/">Profile vs website SEO</Link><Link href="/digital-marketing-expert-calicut/#review">Contact Mohammad</Link></> : <><Link href="/services/seo/">SEO services</Link><Link href="/riyadh/seo/">Riyadh SEO</Link><Link href="/contact/">Contact</Link></>}</div>
            </div>}
            {messages.map((message, index) => <article key={`${index}-${message.role}`} className={`fazil-chat-message ${message.role}`}>
              <p>{message.content || (busy && index === messages.length - 1 ? <span className="fazil-chat-typing" aria-label="Assistant is replying"><i /><i /><i /></span> : "")}</p>
            </article>)}
            {messages.length === 0 && availability !== "checking" && <div className="fazil-chat-suggestions" aria-label="Suggested questions">
              {suggestions.map((suggestion) => <button key={suggestion} type="button" disabled={busy} onClick={() => handleSuggestion(suggestion)}>{suggestion}</button>)}
            </div>}
            {error && <p className="fazil-chat-error" role="alert">{error}</p>}
            {leadStage === "offer" && <section className="fazil-chat-handoff fazil-chat-lead" aria-labelledby="fazil-lead-offer-title">
              <h3 id="fazil-lead-offer-title" tabIndex={-1}>Would you like Mohammad to contact you about this?</h3>
              <p>Share a few details and choose how you’d like to hear back.</p>
              <div className="fazil-chat-handoff-actions">
                <button type="button" onClick={() => { setLeadFeedback(""); setLeadStage("name"); }}>Yes, contact me</button>
                <button type="button" onClick={() => setLeadStage(null)}>Continue chatting</button>
              </div>
            </section>}

            {leadStage === "name" && <section className="fazil-chat-handoff fazil-chat-lead" aria-labelledby="fazil-lead-name-title">
              <h3 id="fazil-lead-name-title">What’s your name?</h3>
              <label htmlFor="fazil-lead-name">Your name (required)</label>
              <input id="fazil-lead-name" autoComplete="name" aria-required="true" maxLength={100} value={lead.name} onChange={(event) => setLeadField("name", event.target.value.slice(0, 100))} placeholder="Your name" />
              <div className="fazil-chat-handoff-actions"><button type="button" onClick={() => { if (!lead.name.trim()) setLeadFeedback("Please enter your name to continue."); else { setLeadFeedback(""); setLeadStage("requirement"); } }}>Continue</button></div>
            </section>}

            {leadStage === "requirement" && <section className="fazil-chat-handoff fazil-chat-lead" aria-labelledby="fazil-lead-requirement-title">
              <h3 id="fazil-lead-requirement-title">What do you need help with?</h3>
              <fieldset className="fazil-chat-lead-options" aria-required="true"><legend>Choose a service (required)</legend>
                {leadRequirements.map((requirement, index) => <label key={requirement} className={lead.requirement === requirement ? "selected" : ""}>
                  <input id={index === 0 ? "fazil-lead-requirement-first" : undefined} type="radio" name="fazil-lead-requirement" value={requirement} checked={lead.requirement === requirement} onChange={() => setLeadField("requirement", requirement)} />
                  <span>{requirement}</span>
                </label>)}
              </fieldset>
              <label htmlFor="fazil-lead-details">A little context (optional)</label>
              <textarea id="fazil-lead-details" value={lead.details} onChange={(event) => setLeadField("details", event.target.value.slice(0, 1200))} maxLength={1200} rows={3} placeholder="Anything useful Mohammad should know?" />
              <div className="fazil-chat-handoff-actions"><button type="button" onClick={() => { if (!lead.requirement) setLeadFeedback("Choose what you need help with."); else { setLeadFeedback(""); setLeadStage("contact"); } }}>Continue</button><button type="button" onClick={() => setLeadStage("name")}>Back</button></div>
            </section>}

            {leadStage === "contact" && <section className="fazil-chat-handoff fazil-chat-lead" aria-labelledby="fazil-lead-contact-title">
              <h3 id="fazil-lead-contact-title" tabIndex={-1}>How should Mohammad contact you?</h3>
              <fieldset className="fazil-chat-lead-options" aria-required="true"><legend>Choose one (required)</legend>
                {(["whatsapp", "email"] as const).map((method) => <label key={method} className={lead.contactMethod === method ? "selected" : ""}>
                  <input type="radio" name="fazil-lead-contact-method" value={method} checked={lead.contactMethod === method} onChange={() => setLeadField("contactMethod", method)} />
                  <span>{method === "whatsapp" ? "WhatsApp" : "Email"}</span>
                </label>)}
              </fieldset>
              {lead.contactMethod === "whatsapp" ? <div className="fazil-chat-lead-phone">
                <label htmlFor="fazil-lead-country-code">Country code</label>
                <select id="fazil-lead-country-code" autoComplete="tel-country-code" value={lead.countryCode} onChange={(event) => setLeadField("countryCode", event.target.value)}>{countryCodes.map(([code, label]) => <option key={code} value={code}>{label}</option>)}</select>
                <label htmlFor="fazil-lead-phone">WhatsApp number</label>
                <input id="fazil-lead-phone" type="tel" inputMode="tel" autoComplete="tel-national" maxLength={24} value={lead.phone} onChange={(event) => setLeadField("phone", event.target.value.slice(0, 24))} placeholder="Phone number" />
              </div> : lead.contactMethod === "email" ? <>
                <label htmlFor="fazil-lead-email">Email address</label>
                <input id="fazil-lead-email" type="email" inputMode="email" autoComplete="email" maxLength={254} value={lead.email} onChange={(event) => setLeadField("email", event.target.value.slice(0, 254))} placeholder="you@example.com" />
              </> : <p className="fazil-chat-lead-hint">Choose a contact method to enter your details.</p>}
              <div className="fazil-chat-handoff-actions"><button type="button" onClick={() => {
                const valid = lead.contactMethod === "whatsapp"
                  ? /^\+[1-9]\d{0,3}$/.test(lead.countryCode) && lead.phone.replace(/\D/g, "").length >= 5 && lead.phone.replace(/\D/g, "").length + lead.countryCode.slice(1).length >= 8 && lead.phone.replace(/\D/g, "").length + lead.countryCode.slice(1).length <= 15
                  : lead.contactMethod === "email" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email);
                if (!valid) setLeadFeedback(!lead.contactMethod ? "Choose WhatsApp or email." : lead.contactMethod === "whatsapp" ? "Enter a valid WhatsApp number with its country code." : "Enter a valid email address.");
                else { setLeadFeedback(""); setLeadStage("review"); }
              }} disabled={!lead.contactMethod}>Review enquiry</button><button type="button" onClick={() => setLeadStage("requirement")}>Back</button></div>
            </section>}

            {leadStage === "review" && <section className="fazil-chat-handoff fazil-chat-lead" aria-labelledby="fazil-lead-review-title">
              <h3 id="fazil-lead-review-title" tabIndex={-1}>Review your enquiry</h3>
              <dl className="fazil-chat-lead-summary">
                <div><dt>Name</dt><dd>{lead.name} <button type="button" onClick={() => setLeadStage("name")}>Edit</button></dd></div>
                <div><dt>What you need</dt><dd>{lead.requirement}{lead.details.trim() ? ` — ${lead.details.trim()}` : ""} <button type="button" onClick={() => setLeadStage("requirement")}>Edit</button></dd></div>
                <div><dt>Contact by</dt><dd>{lead.contactMethod === "whatsapp" ? `${lead.countryCode} ${lead.phone}` : lead.email} <button type="button" onClick={() => setLeadStage("contact")}>Edit</button></dd></div>
              </dl>
              <label className="fazil-chat-lead-consent"><input type="checkbox" aria-required="true" checked={lead.consent} onChange={(event) => setLeadField("consent", event.target.checked)} />
                <span>I agree that Mohammad may use these details to respond to my enquiry. See the <Link href="/privacy-policy/" target="_blank">privacy policy</Link>.</span>
              </label>
              {leadFeedback && <p className="fazil-chat-error" role="alert">{leadFeedback}</p>}
              <div className="fazil-chat-handoff-actions"><button type="button" onClick={() => void submitLead()} disabled={leadSubmitting}>{leadSubmitting ? "Sending…" : "Send My Enquiry"}</button><button type="button" onClick={() => setLeadStage("contact")} disabled={leadSubmitting}>Back</button></div>
              <p className="fazil-chat-lead-alternative">Prefer WhatsApp? <a href={handoffLink} target="_blank" rel="noreferrer" onClick={() => track("chat_handoff_intent")}>Message Mohammad directly</a>.</p>
            </section>}

            {leadStage === "success" && <div className="fazil-chat-lead-success" role="status"><h3 id="fazil-lead-success-title" tabIndex={-1}>Thanks, {lead.name.trim()}.</h3><p>Your enquiry has been received. Mohammad can reply by {lead.contactMethod === "whatsapp" ? "WhatsApp" : "email"}.</p></div>}
            {leadFeedback && leadStage && leadStage !== "review" && <p className="fazil-chat-error" role="alert">{leadFeedback}</p>}
            <div ref={bottomRef} />
          </div>

          <footer className="fazil-chat-footer">
            <form onSubmit={(event) => { event.preventDefault(); void send(); }}>
              <label className="fazil-chat-sr-only" htmlFor="fazil-chat-input">Your SEO question</label>
              <textarea ref={inputRef} id="fazil-chat-input" value={draft} onChange={(event) => setDraft(event.target.value.slice(0, 1400))} onKeyDown={(event) => { if (event.key === "Enter" && !event.shiftKey) { event.preventDefault(); void send(); } }} maxLength={1400} rows={1} placeholder={availability === "available" ? "Ask an SEO question…" : "Chat is unavailable"} disabled={availability !== "available" || busy} />
              <button type="submit" aria-label="Send message" disabled={availability !== "available" || busy || !draft.trim()}>
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none"><path d="M4 12h15m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
            </form>
            <p>Replies are general information, not a completed website audit.</p>
          </footer>
        </section>
      </div>}
    </>
  );
}
