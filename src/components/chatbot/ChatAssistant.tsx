"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { getChatbotGreeting } from "@/lib/chatbot/greetings";
import "./chatbot.css";

type Message = { role: "assistant" | "user"; content: string };
type Availability = "checking" | "available" | "unavailable";

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
const greetingStorageKey = "fazil-digital-assistant-greeting-seen:v2";

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
  const [handoff, setHandoff] = useState(false);
  const [website, setWebsite] = useState("");
  const [city, setCity] = useState("");
  const [goal, setGoal] = useState("");
  const [copied, setCopied] = useState(false);
  const [dockVisible, setDockVisible] = useState(false);
  const [dockSafe, setDockSafe] = useState(true);
  const [greetingVisible, setGreetingVisible] = useState(false);
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
    if (!dockVisible) return;
    const assessDockSpace = () => {
      if (window.innerWidth > 640) { setDockSafe(true); return; }
      const dock = document.querySelector<HTMLElement>(".fazil-contact-dock");
      if (!dock) { setDockSafe(true); return; }
      const bounds = dock.getBoundingClientRect();
      const overlapsContent = Array.from(document.querySelectorAll<HTMLElement>("main h1, main h2, main h3, main p, main a, main button, main li, main form input, main form textarea, main form select, main form label"))
        .some((element) => {
          if (element.closest(".fazil-contact-dock")) return false;
          const rect = element.getBoundingClientRect();
          return rect.bottom > 0 && rect.top < window.innerHeight && rect.right > bounds.left && rect.left < bounds.right && rect.bottom > bounds.top && rect.top < bounds.bottom;
        });
      setDockSafe(!overlapsContent);
    };
    assessDockSpace();
    window.addEventListener("scroll", assessDockSpace, { passive: true });
    window.addEventListener("resize", assessDockSpace);
    return () => {
      window.removeEventListener("scroll", assessDockSpace);
      window.removeEventListener("resize", assessDockSpace);
    };
  }, [dockVisible]);

  useEffect(() => {
    let mounted = false;
    const updateDockVisibility = () => {
      const visible = window.scrollY > 120;
      setDockVisible(visible);
      if (mounted && !visible) setGreetingVisible(false);
    };
    updateDockVisibility();
    mounted = true;
    window.addEventListener("scroll", updateDockVisibility, { passive: true });
    return () => window.removeEventListener("scroll", updateDockVisibility);
  }, []);

  useEffect(() => {
    if (!dockVisible || open) return;

    try {
      if (window.sessionStorage.getItem(greetingStorageKey)) {
        greetingSeenRef.current = true;
        return;
      }
    } catch {
      // Keep the greeting limited to one appearance during this component session.
    }

    if (greetingSeenRef.current) return;
    const timer = window.setTimeout(() => {
      greetingSeenRef.current = true;
      setGreetingVisible(true);
      try { window.sessionStorage.setItem(greetingStorageKey, "shown"); } catch { /* Session-only fallback is held in the ref. */ }
    }, 900);
    return () => window.clearTimeout(timer);
  }, [dockVisible, open]);

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

  function close() {
    restoreFocusRef.current = true;
    setOpen(false);
  }

  function openAssistant() {
    greetingSeenRef.current = true;
    setGreetingVisible(false);
    try { window.sessionStorage.setItem(greetingStorageKey, "shown"); } catch { /* The greeting stays dismissed for this component session. */ }
    setOpen(true);
    track("chat_open");
  }

  function dismissGreeting() {
    greetingSeenRef.current = true;
    setGreetingVisible(false);
    try { window.sessionStorage.setItem(greetingStorageKey, "shown"); } catch { /* The greeting stays dismissed for this component session. */ }
  }

  function onDialogKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Escape") { event.preventDefault(); close(); }
    if (event.key !== "Tab") return;
    const items = Array.from(document.querySelectorAll<HTMLElement>(".fazil-chat-panel button:not(:disabled), .fazil-chat-panel input:not(:disabled), .fazil-chat-panel textarea:not(:disabled), .fazil-chat-panel a[href]"));
    const enabled = items.filter((item) => item.offsetParent !== null);
    if (!enabled.length) return;
    const first = enabled[0];
    const last = enabled[enabled.length - 1];
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  }

  async function send(text = draft) {
    const content = text.trim();
    if (!content || busy || availability !== "available" || content.length > 1400) return;
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
    } finally {
      setBusy(false);
      inputRef.current?.focus();
    }
  }

  async function copyHandoff() {
    const opening = isCalicut
      ? "Hello Mohammad, I'd like to discuss SEO and digital marketing for my business in Calicut/Kozhikode."
      : "Hi Mohammad, I'd like to discuss SEO support.";
    const parts = [opening, website.trim() && `Website: ${website.trim()}`, city.trim() && `Target city: ${city.trim()}`, goal.trim() && `Goal or challenge: ${goal.trim()}`].filter(Boolean);
    try {
      await navigator.clipboard.writeText(parts.join("\n"));
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setError("Clipboard access is unavailable. You can still open WhatsApp and write your message there.");
    }
  }

  function handleSuggestion(suggestion: string) {
    if (suggestion === "I want to talk to Mohammad" || availability !== "available") {
      if (suggestion !== "I want to talk to Mohammad") setGoal(suggestion);
      setHandoff(true);
      return;
    }
    void send(suggestion);
  }

  const greeting = isCalicut ? calicutGreeting : saudigreeting;
  const floatingGreeting = getChatbotGreeting(normalizedPathname);

  return (
    <>
      {!open && dockVisible && <div className={`fazil-contact-dock${greetingVisible ? " is-greeting" : ""}${dockSafe ? "" : " is-content-overlap"}`} role="group" aria-label="AI assistant and WhatsApp contact">
        {greetingVisible && <div className="fazil-character-greeting" role="status" aria-live="polite">
          <button type="button" className="fazil-greeting-open" onClick={openAssistant}>
            <span>{floatingGreeting}</span>
            <span className="fazil-greeting-cta">Ask my AI assistant</span>
          </button>
          <button type="button" className="fazil-greeting-dismiss" aria-label="Dismiss greeting" onClick={dismissGreeting}>
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none"><path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
          </button>
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
              className="fazil-cutout-character"
              src="/images/chatbot/fazil-mini-cutout.webp"
              width={520}
              height={688}
              sizes="(max-width: 360px) 116px, (max-width: 640px) 136px, 164px"
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
            {handoff && <div className="fazil-chat-handoff">
              <div><h3>Prepare a WhatsApp message</h3><p>Share only the context you want Mohammad to see. Nothing is sent automatically.</p></div>
              <label>Website (optional)<input value={website} onChange={(event) => setWebsite(event.target.value.slice(0, 200))} maxLength={200} placeholder="example.com" /></label>
              <label>{isCalicut ? "Target city or area (optional)" : "Saudi target city (optional)"}<input value={city} onChange={(event) => setCity(event.target.value.slice(0, 80))} maxLength={80} placeholder={isCalicut ? "Calicut, Kozhikode or Kerala" : "Riyadh, Jeddah or Dammam"} /></label>
              <label>Main goal or challenge (optional)<textarea value={goal} onChange={(event) => setGoal(event.target.value.slice(0, 360))} maxLength={360} rows={2} placeholder="What would you like to improve?" /></label>
              <div className="fazil-chat-handoff-actions"><button type="button" onClick={copyHandoff}>{copied ? "Message copied" : "Copy message"}</button><a href={handoffLink} target="_blank" rel="noreferrer" onClick={() => track("chat_handoff_intent")}>Open WhatsApp</a></div>
            </div>}
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
