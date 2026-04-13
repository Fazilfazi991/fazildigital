import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/Button";

interface Props {
  params: Promise<{ slug: string }>;
}

const caseStudies = [
  {
    slug: "dubai-seo",
    client: "E-commerce Brand",
    location: "Dubai, UAE",
    service: "SEO + Content Strategy",
    metric: "+180%",
    metricLabel: "Organic Traffic in 6 Months",
    fullStory: `
      <p>This mid-size UAE e-commerce brand faced a plateau in growth, relying heavily on expensive paid search traffic. We implemented a complete SEO overhaul to build a sustainable, long-term traffic channel.</p>
      <h2>The Challenge</h2>
      <p>The client had a wide product range but poor technical SEO health. Their site structure prevented Google from indexing key product categories effectively, and they lacked local content for the Dubai market.</p>
      <h2>The Strategy</h2>
      <p>We executed a multi-phased approach: a deep technical audit, page speed optimization, and a content roadmap targeting high-intent commercial keywords. We also optimized their Google Business Profile for local visibility across Dubai Marina and Downtown.</p>
      <h2>The Result</h2>
      <p>In just six months, organic sessions increased by 180%, and conversion rate from organic search surpassed direct traffic for the first time.</p>
    `
  },
  {
    slug: "riyadh-paid-ads",
    client: "Fintech Startup",
    location: "Riyadh, Saudi Arabia",
    service: "Paid Ads — Google + Snapchat",
    metric: "3.2×",
    metricLabel: "ROAS in 90 Days",
    fullStory: "<p>How we scaled a Saudi fintech's acquisition funnel using hyper-local targeting and Snapchat performance ads...</p>"
  },
  {
    slug: "dammam-marketing",
    client: "Manufacturing Company",
    location: "Dammam, Eastern Province",
    service: "B2B Digital Marketing",
    metric: "−40%",
    metricLabel: "Cost Per Lead in 4 Months",
    fullStory: "<p>Streamlining a B2B lead generation engine for an industrial client in the Eastern Province...</p>"
  },
  {
    slug: "jeddah-web-development",
    client: "Professional Services Firm",
    location: "Jeddah, Saudi Arabia",
    service: "Web Development + SEO",
    metric: "Page 1",
    metricLabel: "Google Rankings for 12 Target Keywords",
    fullStory: "<p>Building a high-performance Next.js site for a Jeddah-based legal consultancy...</p>"
  },
  {
    slug: "abu-dhabi-social-media",
    client: "Real Estate Developer",
    location: "Abu Dhabi, UAE",
    service: "Social Media Management",
    metric: "+320%",
    metricLabel: "LinkedIn Engagement & Qualified DM Leads",
    fullStory: "<p>Developing a thought-leadership pipeline for an Abu Dhabi property developer...</p>"
  },
  {
    slug: "sharjah-ai-automation",
    client: "Logistics Company",
    location: "Sharjah, UAE",
    service: "AI Automation",
    metric: "15 hrs/week",
    metricLabel: "Manual Work Eliminated Per Employee",
    fullStory: "<p>Automating complex logistics workflows to drive operational efficiency in Sharjah...</p>"
  }
];

export async function generateStaticParams() {
  return caseStudies.map((cs) => ({
    slug: cs.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) return {};

  return {
    title: `${cs.metricLabel} for ${cs.client} | Case Study | Mohammad Fazil`,
    description: `Case study: How Mohammad Fazil delivered ${cs.metricLabel} for a ${cs.client} in ${cs.location} through ${cs.service}.`,
    alternates: {
      canonical: `https://www.fazildigital.com/case-studies/${slug}/`,
    },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);

  if (!cs) notFound();

  return (
    <div className="pt-24 pb-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/case-studies" className="text-accent hover:underline mb-8 inline-block font-medium">
          ← Back to All Work
        </Link>
        
        <header className="mb-16">
          <p className="text-xs font-semibold tracking-widest text-accent uppercase mb-4">{cs.location} · {cs.service}</p>
          <h1 className="text-4xl md:text-6xl font-syne font-bold text-bg-base mb-8 leading-tight">
            {cs.metricLabel} for {cs.client}
          </h1>
          
          <div className="bg-[#0f0f0f] border border-white/10 p-10 flex flex-col md:flex-row items-center gap-10">
            <div className="text-center md:text-left">
              <p className="text-sm text-text-muted uppercase tracking-widest font-semibold mb-2">Outcome</p>
              <p className="text-6xl font-syne font-bold text-accent">{cs.metric}</p>
            </div>
            <div className="flex-1 border-white/10 border-t md:border-t-0 md:border-l pt-6 md:pt-0 md:pl-10">
              <p className="text-lg text-text-muted leading-relaxed">
                {cs.metricLabel} achieved through concentrated {cs.service.toLowerCase()} effort over a specific engagement period.
              </p>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 prose prose-invert prose-lg max-w-none text-text-muted font-dm-sans leading-relaxed
                         prose-headings:font-syne prose-headings:text-bg-base prose-headings:font-bold
                         prose-a:text-accent prose-strong:text-bg-base"
               dangerouslySetInnerHTML={{ __html: cs.fullStory }}
          />
          
          <aside className="space-y-8">
             <div className="border border-white/10 p-6 bg-[#080808]">
               <h3 className="font-syne font-bold text-bg-base mb-4">Project Details</h3>
               <dl className="space-y-4 text-sm">
                 <div>
                   <dt className="text-text-muted uppercase tracking-widest text-xs font-bold mb-1">Client</dt>
                   <dd className="text-bg-base font-medium">{cs.client}</dd>
                 </div>
                 <div>
                   <dt className="text-text-muted uppercase tracking-widest text-xs font-bold mb-1">Service</dt>
                   <dd className="text-bg-base font-medium">{cs.service}</dd>
                 </div>
                 <div>
                   <dt className="text-text-muted uppercase tracking-widest text-xs font-bold mb-1">Location</dt>
                   <dd className="text-bg-base font-medium">{cs.location}</dd>
                 </div>
               </dl>
             </div>
             
             <div className="bg-accent/5 border border-accent/20 p-6">
               <h3 className="font-syne font-bold text-bg-base mb-3 text-lg">Want similar results?</h3>
               <p className="text-text-muted text-sm mb-6 leading-relaxed">Let&apos;s discuss how to replicate this success for your business.</p>
               <Button href="/contact" className="w-full">Book Your Call</Button>
             </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
