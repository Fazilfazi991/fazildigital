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
      if (conversion.detail?.event === "form_submit") {
        sendEvent("contact_form_submit", { method: "whatsapp" });
        sendEvent("generate_lead", { method: "whatsapp" });
      }
    };

    const onClick = (event: MouseEvent) => {
      const link = (event.target as Element | null)?.closest("a");
      const href = link?.getAttribute("href") || "";
      if (href.startsWith("https://wa.me/")) sendEvent("whatsapp_click");
      if (href.startsWith("mailto:")) sendEvent("email_click");
      if (href.startsWith("tel:")) sendEvent("phone_click");
    };

    window.addEventListener("fazil:conversion", onConversion);
    document.addEventListener("click", onClick);
    return () => {
      window.removeEventListener("fazil:conversion", onConversion);
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
