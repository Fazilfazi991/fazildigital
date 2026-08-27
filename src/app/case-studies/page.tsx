import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "Digital Project Case Studies | UAE & Saudi Arabia | Mohammad Fazil",
  description: "Selected UAE and Saudi digital projects covering SEO, paid media, websites and automation, with named project evidence where publication is approved.",
  alternates: { canonical: "https://www.fazildigital.com/case-studies/" },
};

const caseStudies = [
  {
    slug: "green-bags-uae",
    client: "Green Bags UAE",
    location: "Dubai, UAE",
    service: "SEO + Google Ads + Content Marketing",
    metric: "Named",
    metricLabel: "Public Portfolio Project",
    description:
      "A documented UAE portfolio engagement for an eco-friendly bags supplier. The available public evidence supports the client identity, live website and recorded service scope; no unsupported traffic, revenue or ROAS figure is claimed.",
  },
  {
    slug: "dubai-seo",
    client: "E-commerce Brand",
    location: "Dubai, UAE",
    service: "SEO + Content Strategy",
    metric: "+180%",
    metricLabel: "Organic Traffic in 6 Months",
    description:
      "A mid-size UAE e-commerce brand with strong product lines but virtually no organic search presence. Built a complete SEO foundation from scratch — technical audit, on-page optimization, and a content strategy targeting high-intent commercial keywords across Dubai and the UAE.",
  },
  {
    slug: "riyadh-paid-ads",
    client: "Fintech Startup",
    location: "Riyadh, Saudi Arabia",
    service: "Paid Ads — Google + Snapchat",
    metric: "3.2×",
    metricLabel: "ROAS in 90 Days",
    description:
      "A Series A fintech startup entering the Saudi consumer market needed rapid customer acquisition with tight unit economics. Rebuilt their entire paid media infrastructure, introduced Snapchat as a primary channel (previously ignored), and restructured the Google Ads account around intent-based targeting.",
  },
  {
    slug: "dammam-marketing",
    client: "Manufacturing Company",
    location: "Dammam, Eastern Province",
    service: "B2B Digital Marketing",
    metric: "−40%",
    metricLabel: "Cost Per Lead in 4 Months",
    description:
      "A B2B manufacturer in the Eastern Province was spending significantly on digital marketing with unclear returns. Consolidated fragmented campaigns, implemented proper conversion tracking, and shifted budget to the channels actually generating qualified leads — primarily LinkedIn and Google Search.",
  },
  {
    slug: "jeddah-web-development",
    client: "Professional Services Firm",
    location: "Jeddah, Saudi Arabia",
    service: "Web Development + SEO",
    metric: "Page 1",
    metricLabel: "Google Rankings for 12 Target Keywords",
    description:
      "A Jeddah-based professional services firm with an outdated, unindexed website rebuilt entirely on Next.js with full SEO architecture from day one. Within 5 months of launch, the site ranked on page 1 for all 12 primary service + location keyword combinations.",
  },
  {
    slug: "abu-dhabi-social-media",
    client: "Real Estate Developer",
    location: "Abu Dhabi, UAE",
    service: "Social Media Management",
    metric: "+320%",
    metricLabel: "LinkedIn Engagement & Qualified DM Leads",
    description:
      "A real estate development company in Abu Dhabi with a dormant LinkedIn presence and no social strategy. Built a 12-month content programme positioning the founder as a thought leader in UAE real estate — resulting in a pipeline of inbound qualified investor inquiries via LinkedIn DMs.",
  },
  {
    slug: "sharjah-ai-automation",
    client: "Logistics Company",
    location: "Sharjah, UAE",
    service: "AI Automation",
    metric: "15 hrs/week",
    metricLabel: "Manual Work Eliminated Per Employee",
    description:
      "A Sharjah logistics company with a heavily manual lead intake and reporting process. Automated the entire inbound lead flow using Make and OpenAI — automatic qualification, CRM logging, and weekly report generation. Eliminated approximately 15 hours per week of manual work across the operations team.",
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-bg-base mb-6">
            Results That Speak
          </h1>
          <p className="text-xl text-text-muted max-w-2xl mx-auto">
            Selected GCC engagements and project notes. Named work is supported by public project references; numerical outcomes are only treated as verified when the underlying report is available.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {caseStudies.map((cs) => (
            <article key={cs.slug} className="group border border-white/10 bg-[#0A0A0A] hover:border-accent/40 hover:-translate-y-0.5 transition-all duration-300">
              <div className="p-10">
                <div className="flex items-start justify-between mb-8 gap-4">
                  <div>
                    <p className="text-xs font-semibold tracking-widest text-text-muted uppercase mb-1">{cs.location}</p>
                    <h2 className="text-2xl font-heading font-bold text-bg-base">{cs.client}</h2>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="text-4xl font-heading font-bold text-accent leading-none">{cs.metric}</p>
                    <p className="text-xs text-text-muted mt-1 max-w-[140px] text-right">{cs.metricLabel}</p>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-accent/30 bg-accent/10 rounded mb-6">
                  <span className="text-xs font-semibold text-accent">{cs.service}</span>
                </div>

                <p className="text-text-muted leading-relaxed">{cs.description}</p>
                <Link
                  href={`/case-studies/${cs.slug}`}
                  className="inline-block mt-7 text-accent font-semibold hover:underline"
                >
                  Read project details →
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-24 border border-white/10 bg-[#050505] p-12 text-center">
          <h2 className="text-3xl font-heading font-bold text-bg-base mb-4">Want results like these for your business?</h2>
          <p className="text-text-muted mb-8 max-w-lg mx-auto">
            Book a free 30-minute discovery call. Mohammad will audit your digital presence and tell you exactly where the opportunities are.
          </p>
          <div className="flex flex-col items-center gap-4">
            <Button href="/contact" className="text-lg px-8 py-4">Claim Your Free Growth Audit</Button>
            <p className="text-sm text-text-muted italic">30 minutes. No pitch. Just clarity on your biggest opportunity.</p>
          </div>
        </div>

      </div>
    </div>
  );
}
