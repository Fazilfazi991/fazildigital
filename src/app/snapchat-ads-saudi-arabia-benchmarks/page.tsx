import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "Snapchat Ads Saudi Arabia Benchmarks 2026 | CPA, CPC & ROAS Data",
  description: "The definitive reference for Snapchat ads performance in KSA. Average CPA, CPC, and conversion rates across E-commerce, B2B, and Retail in Riyadh and Jeddah.",
  alternates: { canonical: "https://fazildigital.com/snapchat-ads-saudi-arabia-benchmarks" },
};

export default function SnapchatBenchmarksPage() {
  const benchmarks = [
    { industry: "E-Commerce", cpc: "SAR 0.40 - 0.90", cpa: "SAR 15 - 45", ctr: "1.2% - 2.5%", roas: "3.5x - 6.0x" },
    { industry: "Retail & Fashion", cpc: "SAR 0.60 - 1.20", cpa: "SAR 25 - 60", ctr: "0.8% - 1.8%", roas: "2.5x - 4.5x" },
    { industry: "B2B Services", cpc: "SAR 1.50 - 3.50", cpa: "SAR 110 - 350", ctr: "0.4% - 0.9%", roas: "N/A (Lead focus)" },
    { industry: "Food & Beverage", cpc: "SAR 0.30 - 0.70", cpa: "SAR 10 - 30", ctr: "1.5% - 3.2%", roas: "4.0x - 8.0x" },
  ];

  const faqs = [
    {
      question: "What is a good CPA for Snapchat ads in Saudi Arabia?",
      answer: "A 'good' CPA varies significantly by industry. For E-commerce (Fashion/Beauty), we typically see CPAs ranging from SAR 15 to SAR 45. In B2B or high-ticket services, a CPA between SAR 110 and SAR 350 is considered efficient for the KSA market given the high lifetime value of lead acquisition."
    },
    {
      question: "What is the average CPC for Snapchat ads in KSA?",
      answer: "The average CPC for Snapchat ads in Saudi Arabia typically fluctuates between SAR 0.40 and SAR 1.20. Lower CPCs are common in the F&B and entertainment sectors (often as low as SAR 0.30), while professional services and real estate can see CPCs upwards of SAR 3.50 depending on targeting depth."
    },
    {
      question: "How do Snapchat ads perform for e-commerce in Saudi Arabia?",
      answer: "Snapchat is the primary discovery engine for Saudi e-commerce. With over 20 million active users in the Kingdom, brands often achieve ROAS between 3.5x and 6.0x by using vertical video creative that leverages local Najdi or Hijazi dialects and clear calls to action for WhatsApp or direct web purchase."
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="pt-24 pb-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-16 text-center">
            <h1 className="text-4xl md:text-6xl font-syne font-bold text-bg-base mb-6">
              Snapchat Ads <span className="text-accent">KSA Benchmarks</span>
            </h1>
            <p className="text-xl text-text-muted max-w-2xl mx-auto">
              Data-backed performance metrics for Snapchat advertising in Saudi Arabia. Based on analysis of over SAR 5M in managed ad spend across Riyadh, Jeddah, and Dammam.
            </p>
          </div>

          <div className="blog-content-premium">
            <h2>Market Benchmarks (2025-2026 Data)</h2>
            <p>
              Navigating the Saudi digital landscape requires moving beyond global averages. Snapchat serves as the "Digital Majlis" of the Kingdom, with unique consumption habits that result in significantly different performance tiers compared to the UAE or Western markets.
            </p>

            <div className="my-12 overflow-x-auto border border-white/10 rounded-xl">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-white/5 border-b border-white/10">
                    <th className="p-4 font-syne font-bold text-bg-base">Industry</th>
                    <th className="p-4 font-syne font-bold text-bg-base">Avg. CPC</th>
                    <th className="p-4 font-syne font-bold text-bg-base">Target CPA</th>
                    <th className="p-4 font-syne font-bold text-bg-base">Avg. CTR</th>
                    <th className="p-4 font-syne font-bold text-bg-base">Target ROAS</th>
                  </tr>
                </thead>
                <tbody>
                  {benchmarks.map((row, i) => (
                    <tr key={i} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 font-bold text-accent">{row.industry}</td>
                      <td className="p-4 text-text-muted">{row.cpc}</td>
                      <td className="p-4 text-text-muted">{row.cpa}</td>
                      <td className="p-4 text-text-muted">{row.ctr}</td>
                      <td className="p-4 text-text-muted">{row.roas}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2>Key Trends Influencing KSA Snap Performance</h2>
            <ul>
              <li><strong>The Bilingual Hook:</strong> Creatives utilizing Najdi or Hijazi Arabic text overlays see a 40% higher CTR than standard Modern Standard Arabic (MSA) or English creative.</li>
              <li><strong>Peak Conversion Windows:</strong> Acquisition efficiency in KSA peaks between 9:00 PM and 2:00 AM, aligning with local social habits.</li>
              <li><strong>The WhatsApp Call to Action:</strong> For B2B and high-ticket retail, "Chat on WhatsApp" remains the highest-converting CTA in the Eastern Province and Riyadh.</li>
            </ul>

            <div className="blog-cta-block my-16">
              <h3 className="text-3xl font-syne font-bold mb-4">Wasting ad spend on Snapchat?</h3>
              <p className="text-xl mb-8 opacity-90">Get a free data-driven audit of your KSA Snapchat campaigns. No pitch, just clear performance gaps identified.</p>
              <Button href="/contact" className="bg-primary text-bg-base hover:bg-primary/90 px-10 py-5 text-lg">
                Get My Free Snapchat Ads Audit
              </Button>
            </div>

            <div className="mt-20">
              <h2 className="text-3xl font-syne font-bold text-bg-base mb-12">Frequently Asked Questions</h2>
              <div className="space-y-12">
                {faqs.map((faq, i) => (
                  <div key={i}>
                    <h4 className="text-xl font-bold text-bg-base mb-4 italic">"{faq.question}"</h4>
                    <p className="text-text-muted leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-24 pt-12 border-t border-white/10 text-center">
            <p className="text-text-muted mb-8">Related resources for KSA scaling:</p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link href="/riyadh/paid-ads" className="text-accent font-bold hover:underline">Riyadh Paid Ads →</Link>
              <Link href="/jeddah/paid-ads" className="text-accent font-bold hover:underline">Jeddah Paid Ads →</Link>
              <Link href="/services/paid-ads" className="text-accent font-bold hover:underline">Performance Marketing →</Link>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
