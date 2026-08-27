"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/Button";

const WHATSAPP_NUMBER = "971542763828";

type FormStatus =
  | { type: "idle" }
  | { type: "success"; whatsappUrl: string }
  | { type: "error"; message: string; whatsappUrl?: string };

function trackConversion(eventName: string) {
  window.dispatchEvent(new CustomEvent("fazil:conversion", { detail: { event: eventName } }));
}

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>({ type: "idle" });

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.reportValidity()) return;

    const data = new FormData(form);
    if (data.get("website")) return;

    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const method = String(data.get("method") || "WhatsApp");
    const message = String(data.get("message") || "").trim();

    const enquiry = [
      "Hello Mohammad, I'd like to request a free digital audit.",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      `Preferred contact method: ${method}`,
      message ? `Business goal: ${message}` : "",
      `Page: ${window.location.href}`,
    ]
      .filter(Boolean)
      .join("\n");

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(enquiry)}`;
    try {
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
      trackConversion("form_submit");
      setStatus({ type: "success", whatsappUrl });
    } catch {
      setStatus({
        type: "error",
        message: "WhatsApp could not be opened. Use the direct link below to continue.",
        whatsappUrl,
      });
    }
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit} noValidate={false}>
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-bg-base/80 mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          autoComplete="name"
          className="w-full bg-[#1a1a1a] border border-white/10 rounded-md px-4 py-3 text-bg-base focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-bg-base/80 mb-2">
          Work email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          autoComplete="email"
          className="w-full bg-[#1a1a1a] border border-white/10 rounded-md px-4 py-3 text-bg-base focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
          placeholder="you@company.com"
        />
      </div>

      <div>
        <label htmlFor="method" className="block text-sm font-medium text-bg-base/80 mb-2">
          Preferred contact method
        </label>
        <select
          id="method"
          name="method"
          className="w-full bg-[#1a1a1a] border border-white/10 rounded-md px-4 py-3 text-bg-base focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors appearance-none"
          defaultValue="WhatsApp"
        >
          <option>WhatsApp</option>
          <option>Email</option>
          <option>Phone call</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-bg-base/80 mb-2">
          What would you like to improve? <span className="text-text-muted">(optional)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          maxLength={1000}
          className="w-full bg-[#1a1a1a] border border-white/10 rounded-md px-4 py-3 text-bg-base focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
          placeholder="For example: increase qualified leads from Google in the UAE"
        />
      </div>

      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <Button type="submit" className="w-full text-lg py-4 border-none">
        Continue on WhatsApp
      </Button>

      <p className="text-xs text-text-muted text-center">
        Your details are only placed into a WhatsApp message. You can review them before sending.
      </p>

      <div aria-live="polite">
        {status.type === "success" && (
          <div className="rounded-md border border-emerald-400/30 bg-emerald-400/10 p-4 text-sm text-emerald-200">
            WhatsApp opened with your enquiry. Review the message there and tap send. If it did not open, {" "}
            <a className="font-bold underline" href={status.whatsappUrl} target="_blank" rel="noopener noreferrer">
              continue directly
            </a>.
          </div>
        )}
        {status.type === "error" && (
          <div role="alert" className="rounded-md border border-red-400/30 bg-red-400/10 p-4 text-sm text-red-200">
            {status.message}{" "}
            {status.whatsappUrl && (
              <a className="font-bold underline" href={status.whatsappUrl} target="_blank" rel="noopener noreferrer">
                Open WhatsApp
              </a>
            )}
          </div>
        )}
      </div>
    </form>
  );
}
