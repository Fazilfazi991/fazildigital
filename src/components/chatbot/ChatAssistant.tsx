"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./chatbot.css";

type Message = { role: "assistant" | "user"; content: string };
type Availability = "checking" | "available" | "unavailable";

const saudigreeting = "Hi! I'm Fazil Digital's AI assistant. I can help with SEO, organic growth and services for Saudi businesses. What would you like to know?";
const calicutGreeting = "Hi! I can help you explore SEO and organic growth for a business serving Calicut or Kozhikode. Choose a quick question or prepare a message for Mohammad.";
const saudiSuggestions = ["Help with my website SEO", "SEO services in Riyadh", "How SEO pricing works", "Talk to Mohammad"];
const calicutSuggestions = ["Can I discuss SEO for a Calicut business?", "What SEO work can we discuss?", "Does Google Business Profile fit my business?", "Talk to Mohammad"];
const handoffLink = "https://wa.me/971542763828";

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
  const [heroInView, setHeroInView] = useState(true);
  const pageHasHero = normalizedPathname === "/" || normalizedPathname === "/about" || isCalicut;
  const launcherRef = useRef<HTMLButtonElement>(null);
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
    if (open) return;
    if (!pageHasHero) return;
    const hero = document.querySelector("[aria-labelledby='hero-title'], .fr-hero, .fd-about-hero, .fd-calicut-hero, .cr-hero");
    if (!hero) return;
    const observer = new IntersectionObserver(([entry]) => setHeroInView(entry.isIntersecting), { threshold: 0.08 });
    observer.observe(hero);
    return () => observer.disconnect();
  }, [open, pageHasHero, pathname]);

  useEffect(() => {
    if (open) {
      closeRef.current?.focus();
      document.body.classList.add("fazil-chat-open");
    } else {
      document.body.classList.remove("fazil-chat-open");
    }
    return () => document.body.classList.remove("fazil-chat-open");
  }, [open]);

  useEffect(() => {
    const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
    bottomRef.current?.scrollIntoView({ behavior, block: "end" });
  }, [messages, busy]);

  function close() {
    setOpen(false);
    requestAnimationFrame(() => launcherRef.current?.focus());
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

  function answerCalicutQuestion(question: string) {
    const answers: Record<string, string> = {
      [calicutSuggestions[0]]: "Yes. Remote SEO and organic-growth consultancy is available to discuss for businesses serving Calicut, Kozhikode and Kerala. This does not represent a local office.",
      [calicutSuggestions[1]]: "The current focus is SEO and organic growth: technical reviews, on-page and content strategy, local-search foundations and a practical roadmap. Paid ads and social media management are not listed as active services here.",
      [calicutSuggestions[2]]: "We can discuss accurate local-search foundations. Google Business Profile eligibility depends on in-person customer contact and how a business operates. Never add a fictitious address; no Maps placement is guaranteed.",
    };
    const answer = answers[question];
    if (answer) setMessages((current) => [...current, { role: "user", content: question }, { role: "assistant", content: answer }]);
    else setHandoff(true);
  }

  const suggestions = isCalicut ? calicutSuggestions : saudiSuggestions;
  const greeting = isCalicut ? calicutGreeting : saudigreeting;

  return (
    <>
      {!open && !(pageHasHero && heroInView) && <button
        ref={launcherRef}
        type="button"
        className="fazil-chat-launcher"
        aria-label={isCalicut ? "Open Calicut SEO assistant" : "Open Fazil Digital AI Assistant"}
        onClick={() => { setOpen(true); track("chat_open"); }}
      >
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none"><path d="M4 5.75A2.75 2.75 0 0 1 6.75 3h10.5A2.75 2.75 0 0 1 20 5.75v7.5A2.75 2.75 0 0 1 17.25 16H10l-5 4v-6.5a2.75 2.75 0 0 1-1-2.1v-5.65Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/><path d="M8 8h8M8 11.5h5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/></svg>
        <span>{isCalicut ? "Ask about Calicut SEO" : "Ask about SEO"}</span>
      </button>}

      {open && <div className="fazil-chat-scrim" onMouseDown={(event) => { if (event.target === event.currentTarget) close(); }}>
        <section className="fazil-chat-panel" role="dialog" aria-modal="true" aria-labelledby="fazil-chat-title" onKeyDown={onDialogKeyDown}>
          <header className="fazil-chat-header">
            <div className="fazil-chat-mark" aria-hidden="true">FD</div>
            <div className="fazil-chat-heading">
              <h2 id="fazil-chat-title">Fazil Digital</h2>
              <p><span className="fazil-chat-status-dot" /> AI assistant for SEO</p>
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
              <p>{isCalicut ? "Live AI replies are offline. Quick answers and useful Calicut guides are available below." : "Live chat is currently unavailable. You can browse the SEO services or contact Mohammad directly."}</p>
              <div className="fazil-chat-shortcuts">{isCalicut ? <><Link href="/blog/calicut-business-google-visibility-guide/">Calicut SEO guide</Link><Link href="/blog/google-business-profile-vs-website-seo-kozhikode/">Profile vs website SEO</Link><Link href="/digital-marketing-expert-calicut/#review">Contact Mohammad</Link></> : <><Link href="/services/seo/">SEO services</Link><Link href="/riyadh/seo/">Riyadh SEO</Link><Link href="/contact/">Contact</Link></>}</div>
            </div>}
            {messages.map((message, index) => <article key={`${index}-${message.role}`} className={`fazil-chat-message ${message.role}`}>
              <p>{message.content || (busy && index === messages.length - 1 ? <span className="fazil-chat-typing" aria-label="Assistant is replying"><i /><i /><i /></span> : "")}</p>
            </article>)}
            {messages.length === 0 && (availability === "available" || isCalicut) && <div className="fazil-chat-suggestions" aria-label="Suggested questions">
              {suggestions.map((suggestion) => <button key={suggestion} type="button" disabled={busy} onClick={() => isCalicut && availability !== "available" ? answerCalicutQuestion(suggestion) : suggestion === "Talk to Mohammad" ? setHandoff(true) : send(suggestion)}>{suggestion}</button>)}
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
