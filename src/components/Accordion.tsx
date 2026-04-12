"use client";

import { useState } from "react";

interface FAQItem {
  question?: string;
  q?: string;
  answer?: string;
  a?: string;
}

interface AccordionProps {
  items: FAQItem[];
}

export function Accordion({ items }: AccordionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const question = item.question || item.q;
        const answer = item.answer || item.a;
        const isOpen = activeIndex === index;

        return (
          <div key={index} className="blog-faq-item rounded-xl overflow-hidden shadow-sm">
            <button
              onClick={() => toggleItem(index)}
              className="blog-faq-question group flex items-center justify-between transition-all duration-300"
              aria-expanded={isOpen}
            >
              <span className="pr-8 text-left text-lg">{question}</span>
              <span className={`flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full border border-white/10 group-hover:border-accent/40 transition-colors ${isOpen ? 'bg-accent text-primary' : ''}`}>
                <span className="text-xl font-light leading-none">
                  {isOpen ? "−" : "+"}
                </span>
              </span>
            </button>
            <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
              <div className="accordion-inner">
                <div className="blog-faq-answer text-text-muted leading-relaxed pb-6 px-6">
                  {answer}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
