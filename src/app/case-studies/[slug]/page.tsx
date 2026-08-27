import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/Button";

interface Props {
  params: Promise<{ slug: string }>;
}

interface CaseStudy {
  slug: string;
  client: string;
  location: string;
  service: string;
  metric: string;
  metricLabel: string;
  fullStory: string;
  image?: string;
  website?: string;
  evidenceNote?: string;
  relatedServices?: { label: string; href: string }[];
}

const caseStudies: CaseStudy[] = [
  {
    slug: "green-bags-uae",
    client: "Green Bags UAE",
    location: "Dubai, UAE",
    service: "SEO + Google Ads + Content Marketing",
    metric: "Named",
    metricLabel: "Public Portfolio Project",
    image: "/images/portfolio/clients/green_bags_web.png",
    website: "https://greenbagsuae.com/",
    evidenceNote: "Evidence available: an approved named portfolio listing, a repository portfolio visual, and a live public client website. Analytics exports, advertising reports, testimonial approval and before/after measurements are not available in the repository, so this page makes no numerical performance claim.",
    relatedServices: [
      { label: "SEO services", href: "/services/seo/" },
      { label: "Paid advertising", href: "/services/paid-ads/" },
      { label: "Digital marketing", href: "/services/digital-marketing/" },
    ],
    fullStory: `
      <h2>Business context</h2>
      <p>Green Bags UAE is a Dubai supplier of reusable cotton, canvas and jute bags, with a public website serving product discovery and business enquiries.</p>
      <h2>Documented objective</h2>
      <p>The approved portfolio record identifies the engagement as e-commerce and eco-friendly products work across SEO, Google Ads and content marketing.</p>
      <h2>Documented scope</h2>
      <p>The available project material supports three workstreams: organic search, paid search and content marketing. More granular implementation records were not supplied, so this project note does not attribute unverified technical changes or campaign tactics.</p>
      <h2>Published outcome</h2>
      <p>The named business and its live digital presence can be independently reviewed. No traffic increase, lead volume, advertising return or revenue result is published without the corresponding analytics or advertising report.</p>
    `,
  },
  {
    slug: "dubai-seo",
    client: "E-commerce Brand",
    location: "Dubai, UAE",
    service: "SEO + Content Strategy",
    metric: "SEO",
    metricLabel: "Technical + Content Scope",
    fullStory: `
      <p>This anonymized UAE e-commerce project note records an SEO and content engagement. The source analytics and client approval needed to publish a performance outcome are not available.</p>
      <h2>Objective</h2>
      <p>The documented objective was to improve qualified organic visibility and reduce dependence on paid acquisition.</p>
      <h2>Recorded scope</h2>
      <p>The existing project summary lists technical review, on-page optimization and content planning. More granular delivery evidence has not been supplied.</p>
      <h2>Evidence boundary</h2>
      <p>No traffic increase, conversion-rate change or ranking result is claimed until a dated GA4 or Search Console comparison and publication approval are archived.</p>
    `
  },
  {
    slug: "riyadh-paid-ads",
    client: "Fintech Startup",
    location: "Riyadh, Saudi Arabia",
    service: "Paid Ads — Google + Snapchat",
    metric: "Paid Media",
    metricLabel: "Google + Snapchat Scope",
    fullStory: "<p>This anonymized Saudi engagement records Google and Snapchat paid-media planning. No ROAS, CPA or acquisition result is claimed because the advertising report, spend period and attribution settings are unavailable.</p>"
  },
  {
    slug: "dammam-marketing",
    client: "Manufacturing Company",
    location: "Dammam, Eastern Province",
    service: "B2B Digital Marketing",
    metric: "B2B",
    metricLabel: "Demand Generation Scope",
    fullStory: "<p>Streamlining a B2B lead generation engine for an industrial client in the Eastern Province. The search component is now documented through the dedicated <a href=\"/dammam/seo/\">Dammam SEO services</a> pathway, covering technical visibility, B2B service content, and qualified organic enquiries.</p>"
  },
  {
    slug: "jeddah-web-development",
    client: "Professional Services Firm",
    location: "Jeddah, Saudi Arabia",
    service: "Web Development + SEO",
    metric: "Web + SEO",
    metricLabel: "Site Architecture Scope",
    fullStory: "<p>This anonymized Jeddah project note covers web-development and SEO architecture objectives. No keyword-count or page-one ranking result is claimed without a dated Search Console export and delivery record.</p>"
  },
  {
    slug: "abu-dhabi-social-media",
    client: "Real Estate Developer",
    location: "Abu Dhabi, UAE",
    service: "Social Media Management",
    metric: "LinkedIn",
    metricLabel: "Authority Content Scope",
    fullStory: "<p>This anonymized Abu Dhabi project note covers LinkedIn content and authority positioning. No engagement or lead result is claimed without platform reporting and a documented lead definition.</p>"
  },
  {
    slug: "sharjah-ai-automation",
    client: "Logistics Company",
    location: "Sharjah, UAE",
    service: "AI Automation",
    metric: "Automation",
    metricLabel: "Workflow Design Scope",
    fullStory: "<p>This anonymized Sharjah project note covers workflow-automation objectives. No time-saving result is claimed without a before-and-after time study and implementation evidence.</p>"
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
    title: `${cs.client}: ${cs.service} Project`,
    description: `Project note for ${cs.client} in ${cs.location}, covering the documented ${cs.service} scope and available evidence.`,
    alternates: {
      canonical: `https://www.fazildigital.com/case-studies/${slug}/`,
    },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);

  if (!cs) notFound();

  const jsonLd = cs.slug === "green-bags-uae" ? {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: "Green Bags UAE digital marketing project note",
    url: "https://www.fazildigital.com/case-studies/green-bags-uae/",
    about: ["Search engine optimization", "Google Ads", "Content marketing"],
    creator: {
      "@type": "Person",
      "@id": "https://www.fazildigital.com/#person",
      name: "Mohammad Fazil",
    },
  } : null;

  return (
    <div className="pt-24 pb-32">
      {jsonLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/case-studies" className="text-accent hover:underline mb-8 inline-block font-medium">
          ← Back to All Work
        </Link>
        
        <header className="mb-16">
          <p className="text-xs font-semibold tracking-widest text-accent uppercase mb-4">{cs.location} · {cs.service}</p>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-bg-base mb-8 leading-tight">
            {cs.metricLabel} for {cs.client}
          </h1>
          
          <div className="bg-[#0f0f0f] border border-white/10 p-10 flex flex-col md:flex-row items-center gap-10">
            <div className="text-center md:text-left">
              <p className="text-sm text-text-muted uppercase tracking-widest font-semibold mb-2">Outcome</p>
              <p className="text-6xl font-heading font-bold text-accent">{cs.metric}</p>
            </div>
            <div className="flex-1 border-white/10 border-t md:border-t-0 md:border-l pt-6 md:pt-0 md:pl-10">
              <p className="text-lg text-text-muted leading-relaxed">
                {cs.evidenceNote ?? `${cs.metricLabel} reported for this ${cs.service.toLowerCase()} engagement.`}
              </p>
            </div>
          </div>
        </header>

        {cs.image && (
          <figure className="mb-16">
            <div className="relative aspect-square overflow-hidden border border-white/10 bg-[#080808]">
              <Image src={cs.image} alt={`${cs.client} portfolio visual`} fill className="object-cover" sizes="(max-width: 768px) 100vw, 896px" priority />
            </div>
            <figcaption className="mt-3 text-sm text-text-muted">
              Repository portfolio visual. This is project evidence, not an analytics or before/after report.
            </figcaption>
          </figure>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 prose prose-invert prose-lg max-w-none text-text-muted font-body leading-relaxed
                         prose-headings:font-heading prose-headings:text-bg-base prose-headings:font-bold
                         prose-a:text-accent prose-strong:text-bg-base"
               dangerouslySetInnerHTML={{ __html: cs.fullStory }}
          />
          
          <aside className="space-y-8">
             <div className="border border-white/10 p-6 bg-[#080808]">
               <h3 className="font-heading font-bold text-bg-base mb-4">Project Details</h3>
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
               {cs.website && (
                 <a href={cs.website} target="_blank" rel="noopener noreferrer" className="inline-block mt-6 text-accent hover:underline">
                   Visit the public website →
                 </a>
               )}
             </div>

             {cs.relatedServices && (
               <div className="border border-white/10 p-6 bg-[#080808]">
                 <h3 className="font-heading font-bold text-bg-base mb-4">Related services</h3>
                 <ul className="space-y-3 text-sm">
                   {cs.relatedServices.map((service) => (
                     <li key={service.href}>
                       <Link href={service.href} className="text-accent hover:underline">{service.label}</Link>
                     </li>
                   ))}
                 </ul>
               </div>
             )}
             
             <div className="bg-accent/5 border border-accent/20 p-6">
               <h3 className="font-heading font-bold text-bg-base mb-3 text-lg">Need a similar project?</h3>
               <p className="text-text-muted text-sm mb-6 leading-relaxed">Let&apos;s discuss the right scope and measurement plan for your business.</p>
               <Button href="/contact" className="w-full">Book Your Call</Button>
             </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
