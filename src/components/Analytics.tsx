"use client";

import Script from "next/script";
import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

function sendEvent(name: string, parameters: Record<string, string> = {}) {
  window.gtag?.("event", name, parameters);
}

export function Analytics() {
  useEffect(() => {
    if (!measurementId) return;

    const onConversion = (event: Event) => {
      const conversion = event as CustomEvent<{ event?: string }>;
      if (conversion.detail?.event === "review_intent") {
        sendEvent("seo_review_intent", { method: "whatsapp" });
      }
      if (conversion.detail?.event === "form_submit") {
        sendEvent("contact_form_submit", { method: "whatsapp" });
      }
    };

    const onClick = (event: MouseEvent) => {
      const link = (event.target as Element | null)?.closest("a");
      const href = link?.getAttribute("href") || "";
      if (href.startsWith("https://wa.me/")) sendEvent("whatsapp_click");
      if (href.startsWith("mailto:")) sendEvent("email_click");
      if (href.startsWith("tel:")) sendEvent("phone_click");
    };

    const allowedEvents = new Set([
      "enquiry_started",
      "enquiry_step_completed",
      "enquiry_submitted_successfully",
      "enquiry_submission_failed",
    ]);
    const onEnquiry = (event: Event) => {
      const detail = (event as CustomEvent<{ event?: string; step?: number; service?: string }>).detail;
      if (!detail?.event || !allowedEvents.has(detail.event)) return;
      const parameters: Record<string, string> = {};
      if (Number.isInteger(detail.step) && detail.step! >= 1 && detail.step! <= 4) parameters.step = String(detail.step);
      const services = new Set(["SEO / Google rankings", "Digital marketing", "Website development", "Custom CRM / AI automation", "Getting more enquiries", "Not sure yet"]);
      if (detail.service && services.has(detail.service)) parameters.service_category = detail.service;
      sendEvent(detail.event, parameters);
    };

    window.addEventListener("fazil:conversion", onConversion);
    window.addEventListener("fazil:enquiry-analytics", onEnquiry);
    document.addEventListener("click", onClick);
    return () => {
      window.removeEventListener("fazil:conversion", onConversion);
      window.removeEventListener("fazil:enquiry-analytics", onEnquiry);
      document.removeEventListener("click", onClick);
    };
  }, []);

  if (!measurementId) return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`} strategy="afterInteractive" />
      <Script id="ga4-config" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}window.gtag=gtag;gtag('js',new Date());gtag('config','${measurementId}',{send_page_view:true});`}
      </Script>
    </>
  );
}
