export interface Service {
  slug: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  longOpening?: string;
  deliverables: string[];
  whoItsFor: string;
  faqs: { question: string; answer: string }[];
}

export const services: Service[] = [
  {
    slug: "seo",
    name: "SEO",
    shortDescription: "Rank higher on Google in Dubai and Saudi Arabia.",
    fullDescription:
      "Search engine optimization for mid-size businesses targeting Google rankings in the UAE and Saudi Arabia. Includes technical SEO, on-page optimization, content strategy, and local SEO for Dubai, Riyadh, Jeddah and wider GCC cities.",
    longOpening:
      "If you're a mid-size business in Dubai or Riyadh and you're not on page 1 of Google for your core service + location keywords, you're invisible to 74% of potential customers. Mohammad doesn't do generic 'SEO'. He builds search strategies for the GCC reality: bilingual search behavior, mobile-first users, Snapchat-driven discovery in KSA, and the unique commercial intent patterns of UAE consumers. This isn't about rankings. It's about being found by the right people, at the moment they're ready to buy.",
    whoItsFor:
      "Mid-size businesses in the UAE and Saudi Arabia that rely on Google to generate inbound leads — and currently aren't ranking on page 1 for their most valuable service + location keyword combinations.",
    deliverables: [
      "Full Technical SEO Audit",
      "On-Page Optimization (all key pages)",
      "Local SEO Setup (Google Business Profile, citations)",
      "Content Strategy & Keyword Mapping",
      "Monthly SEO Reporting",
      "Internal Link Architecture Review",
      "Core Web Vitals Optimization",
      "Competitor Gap Analysis",
    ],
    faqs: [
      {
        question: "How long does SEO take to show results in Dubai or Saudi Arabia?",
        answer:
          "For competitive service + location keywords in the UAE and KSA, you should expect meaningful ranking improvements within 3–6 months and significant lead impact within 6–12 months. Shorter timelines are possible for lower-competition niches or locations. SEO is a compounding investment — the results accelerate over time rather than plateauing.",
      },
      {
        question: "Do you focus on Arabic SEO as well as English?",
        answer:
          "The initial engagement is English-first, which captures the majority of B2B commercial intent in the UAE and a significant share in Saudi Arabia. Arabic SEO is built into the roadmap as Phase 2 — this requires separate content creation, not just translation, to rank effectively.",
      },
      {
        question: "What makes GCC SEO different from SEO in other markets?",
        answer:
          "Several factors are unique to the GCC: heavy mobile usage, bilingual search behavior (Arabic + English), the importance of Google Maps and Google Business Profile for local discovery, and platform-level differences (Snapchat's search traffic in KSA, for example). A strategy that works in Europe or the US won't automatically translate here.",
      },
      {
        question: "Do you work with businesses that have already done SEO before?",
        answer:
          "Yes, and often the first task is auditing and cleaning up previous work. Many businesses in the region have experienced low-quality 'SEO' that produced links or content that now act as dead weight. A proper audit identifies what to keep, what to remove, and what to build from scratch.",
      },
      {
        question: "How is working with Mohammad different from an SEO agency?",
        answer:
          "With an agency, a senior consultant sells you the engagement, then a junior team executes. With Mohammad, the person who audits your site, builds your strategy, and executes your campaign is the same person. No briefing loss. No account management layers. Direct responsibility for your results.",
      },
      {
        question: "What's included in your monthly SEO reporting?",
        answer:
          "Monthly reports cover: keyword ranking movements for all tracked terms, organic traffic trends, page-level performance, Core Web Vitals status, backlink profile growth, and a clear list of what was done and what is planned next. No vanity metrics — just the data that connects to actual business outcomes.",
      },
    ],
  },
  {
    slug: "digital-marketing",
    name: "Digital Marketing",
    shortDescription: "End-to-end digital marketing strategy and execution.",
    fullDescription:
      "End-to-end digital marketing strategy and execution for companies in the UAE and KSA. Mohammad manages the full funnel — from brand awareness to lead generation — as a senior consultant who is directly accountable for results.",
    longOpening:
      "Frustrated with fragmented agency relationships where the left hand doesn't know what the right is doing? Mohammad provides cohesive, revenue-first digital marketing. He owns your entire funnel in the UAE and Saudi Arabia — from the first impression to the final conversion. This isn't about siloed tactics; it's about a unified strategy where every dirham of your budget is mapped to a tangible business outcome.",
    whoItsFor:
      "Mid-size businesses in the UAE and Saudi Arabia that need a coherent, cross-channel digital marketing strategy — not individual tactics in isolation. Typically founders or CMOs who are frustrated with fragmented agency relationships.",
    deliverables: [
      "Full-Funnel Digital Marketing Strategy",
      "Channel Selection & Budget Allocation",
      "Campaign Execution & Management",
      "Analytics Setup & Conversion Tracking (GA4)",
      "Monthly Performance Reports",
      "Conversion Rate Optimization",
      "Competitor Intelligence",
      "Email Marketing Strategy",
    ],
    faqs: [
      {
        question: "What does 'end-to-end digital marketing' actually mean?",
        answer:
          "It means Mohammad owns the entire funnel — from the first touchpoint a prospect has with your brand to the moment they convert into a lead or customer. This includes strategy, channel selection, campaign execution, analytics, and optimization. You don't need to manage five different vendors in parallel.",
      },
      {
        question: "Which digital marketing channels do you work with?",
        answer:
          "Google (Search, Display, YouTube), Meta (Facebook & Instagram), TikTok, Snapchat, LinkedIn, email marketing, and SEO. Channel selection is always driven by where your specific buyers are and what the data shows — not what's currently trendy.",
      },
      {
        question: "How do you measure success in digital marketing?",
        answer:
          "Every engagement starts with agreeing on the business KPIs that matter: cost per lead, lead volume, revenue attributed to digital, or ROAS for e-commerce. Vanity metrics like impressions and follower counts are tracked but never presented as success indicators.",
      },
      {
        question: "Do you take over existing campaigns or start fresh?",
        answer:
          "Either. If you have existing campaigns, Mohammad audits them first and preserves what is working. If starting fresh, the first 30 days focus on strategy and foundation before any spend is committed.",
      },
      {
        question: "Can you work alongside our internal marketing team?",
        answer:
          "Yes. Mohammad operates well as a senior strategic layer above an in-house team, or as the sole execution resource where no internal team exists. The engagement structure adjusts to what your business actually needs.",
      },
    ],
  },
  {
    slug: "paid-ads",
    name: "Paid Ads",
    shortDescription: "Performance-driven paid advertising on Google, Meta, TikTok, and Snapchat.",
    fullDescription:
      "Performance-driven paid advertising on Google, Meta, TikTok, and Snapchat. Built for mid-size businesses in Dubai and Saudi Arabia who need measurable ROI from ad spend, not just impressions.",
    longOpening:
      "Stop burning your ad budget on impressions that don't convert. Whether it's Google Search in Dubai or Snapchat in Riyadh, Mohammad builds performance-driven ad campaigns that prioritize Cost Per Lead (CPL) and ROAS over vanity metrics. In the KSA market especially, where Snapchat penetration is among the highest globally, you need a partner who understands platform-specific nuances — not just generic media buying.",
    whoItsFor:
      "Mid-size businesses in Dubai and Saudi Arabia spending or planning to spend on paid media who need a clear, accountable return on their ad budget — not just traffic.",
    deliverables: [
      "Google Ads Setup & Management (Search, Display, YouTube)",
      "Meta Ads Management (Facebook & Instagram)",
      "TikTok Ads Management",
      "Snapchat Ads (KSA-focused campaigns)",
      "Audience Research & Targeting Strategy",
      "Ad Creative Direction & Copywriting",
      "Landing Page Audit & CRO Recommendations",
      "Monthly Performance Reporting with ROAS/CPL tracking",
    ],
    faqs: [
      {
        question: "What ad platforms do you manage in the GCC?",
        answer:
          "Google Ads (Search, Display, Shopping, YouTube), Meta (Facebook & Instagram), TikTok Ads, Snapchat Ads (particularly important for Saudi Arabia), and LinkedIn Ads for B2B campaigns. Platform selection depends on your audience, budget, and goals.",
      },
      {
        question: "What is a realistic ROAS for paid ads in Dubai or Riyadh?",
        answer:
          "This depends entirely on your industry, product margin, and funnel quality. E-commerce clients typically target 3x–6x ROAS in the GCC market. Lead generation clients track cost per lead (CPL) which varies by sector. The first 60 days are used to establish baselines — aggressive optimization follows once data is collected.",
      },
      {
        question: "How much ad spend do you typically manage?",
        answer:
          "Mohammad works with budgets ranging from AED 10,000/month to over AED 200,000/month depending on the client. Budget level doesn't affect the quality of strategy — it affects scope and scale of campaigns.",
      },
      {
        question: "Do you manage creative or just the media buying?",
        answer:
          "Mohammad handles creative direction and ad copywriting. For video production or professional photography, he can coordinate with trusted creative partners in Dubai, but the strategic creative brief always comes from Mohammad.",
      },
      {
        question: "Why is Snapchat important for Saudi Arabia specifically?",
        answer:
          "Saudi Arabia has one of the highest Snapchat penetration rates in the world. A significant portion of the Saudi consumer market — particularly under 35 — consumes content primarily on Snap. Any paid media strategy targeting Saudi Arabia that ignores Snapchat is leaving a substantial audience untouched.",
      },
      {
        question: "How do you handle underperforming campaigns?",
        answer:
          "Underperforming campaigns get a structured diagnostic before any decisions are made — audience, creative, landing page, and bidding strategy are all reviewed. Mohammad operates on the principle that no campaign is a failure if it generates actionable data. Killing a campaign too early is as wasteful as running a bad one too long.",
      },
    ],
  },
  {
    slug: "social-media-management",
    name: "Social Media Management",
    shortDescription: "Organic social media strategy and management.",
    fullDescription:
      "Organic social media strategy and management for Instagram, LinkedIn, TikTok, Snapchat, and X. Tailored for the UAE and Saudi audience, with content that builds brand authority and community.",
    longOpening:
      "Most GCC social media management is just noise. Mohammad builds authority. For B2B brands in DIFC or Riyadh, this means a LinkedIn strategy that actually opens doors. For consumer brands in Dubai, it's about authentic community management that turns followers into advocates. We don't just 'post'; we engineer presence that aligns with the specific cultural and commercial pace of the UAE and Saudi Arabia.",
    whoItsFor:
      "Mid-size businesses in the UAE and Saudi Arabia that need a consistent, professional social media presence but lack the internal capacity to produce and manage content at the required quality and frequency.",
    deliverables: [
      "Platform Strategy (channel selection & positioning)",
      "Monthly Content Calendar",
      "Content Creation (copy, creative direction)",
      "Community Management & DM Handling",
      "LinkedIn B2B Strategy",
      "Instagram & TikTok Growth Strategy",
      "Snapchat Strategy (KSA clients)",
      "Monthly Analytics & Growth Report",
    ],
    faqs: [
      {
        question: "Which platforms do you manage for UAE and Saudi clients?",
        answer:
          "Instagram, LinkedIn, TikTok, Snapchat, and X (Twitter). Not every business needs all five. Mohammad's first task is determining which platforms your target buyers actually use and focusing effort there — not spreading thin across everything.",
      },
      {
        question: "Do you produce the content or just manage the accounts?",
        answer:
          "Both. Mohammad handles content strategy, copy, and creative direction. Where professional photography or video production is required, he coordinates with trusted production partners in the UAE — but the content brief and quality control remains his responsibility.",
      },
      {
        question: "How is B2B social media different from B2C?",
        answer:
          "For B2B clients in the UAE and Saudi Arabia, LinkedIn is typically the highest-value platform. The content strategy shifts from engagement-focused to authority-building — thought leadership, insights, case studies, and direct outreach to decision-makers. Mohammad has specific playbooks for B2B brands in the GCC market.",
      },
      {
        question: "What posting frequency do you recommend?",
        answer:
          "Quality over quantity, always. For most mid-size B2B brands, 3–4 posts per week on primary platforms is the right range. For consumer brands targeting reach and awareness, higher frequency may be appropriate. Frequency is set based on your goals and the capacity to produce genuinely useful content.",
      },
      {
        question: "Do you respond to comments and DMs?",
        answer:
          "Community management — responding to comments, handling DMs, and flagging anything requiring client input — is included in the management retainer. Response protocols are agreed upfront so nothing falls through the gaps.",
      },
    ],
  },
  {
    slug: "web-development",
    name: "Web Development",
    shortDescription: "Professional website design and development.",
    fullDescription:
      "Professional website design and development for mid-size businesses in Dubai and across the GCC. Fast, SEO-optimized, mobile-first websites built to convert — not just look good.",
    longOpening:
      "Your website shouldn't just be a digital brochure; it should be your highest-performing salesperson. In the GCC's mobile-first market, a 3-second delay is a lost customer. Mohammad builds high-conversion Next.js engines that are SEO-optimized from the first line of code. We prioritize Core Web Vitals, RTL (Arabic) readiness, and UX patterns that resonate with Gulf-based users to ensure your site actually converts traffic into revenue.",
    whoItsFor:
      "Mid-size businesses in the UAE and Saudi Arabia with websites that are outdated, slow, not ranking on Google, or built on platforms that limit growth — and need a senior web consultant who understands both technical implementation and business outcomes.",
    deliverables: [
      "UX Architecture & Wireframing",
      "UI Design (Figma)",
      "Next.js / React Frontend Development",
      "CMS Integration (Sanity, WordPress, or headless)",
      "SEO-Optimized Page Structure from Day One",
      "Core Web Vitals Optimization (LCP, CLS, INP)",
      "Mobile-First Responsive Development",
      "Post-Launch Support & Maintenance",
    ],
    faqs: [
      {
        question: "What tech stack do you build websites on?",
        answer:
          "For new builds, Mohammad uses Next.js (App Router) with Tailwind CSS for the frontend, deployed on Vercel. CMS is typically Sanity.io or a headless WordPress setup depending on the client's content management needs. This stack delivers the best combination of performance, SEO, and long-term maintainability.",
      },
      {
        question: "How long does a website project take?",
        answer:
          "A typical mid-size business website (8–15 pages) takes 6–10 weeks from design approval to launch. Larger sites with custom functionality take 12–16 weeks. Timeline is always agreed upfront with milestones — no vague 'it'll be done when it's done' commitments.",
      },
      {
        question: "Do you build on WordPress?",
        answer:
          "Yes, where it makes sense. For clients who need a non-technical content team to manage a large blog or product catalogue, WordPress (headless or traditional) can be the right choice. For performance-critical sites, a modern JavaScript framework is typically the better option. Mohammad will give you an honest recommendation based on your actual needs.",
      },
      {
        question: "Is SEO built into the website or added afterwards?",
        answer:
          "Built in from day one — this is non-negotiable. On-page SEO, schema markup, sitemap, Core Web Vitals optimization, canonical tags, and meta structure are all implemented during development. You never have to bolt SEO on afterward and undo technical debt.",
      },
      {
        question: "Do you handle design as well as development?",
        answer:
          "Yes. Mohammad handles UX architecture and UI design (delivered in Figma for approval) before a single line of code is written. You see what you're getting before it's built — not after.",
      },
      {
        question: "What happens after the website launches?",
        answer:
          "Post-launch support is included for the first 30 days — bug fixes, content updates, and performance monitoring. Longer-term maintenance retainers are available for ongoing updates, security patches, and performance optimization.",
      },
    ],
  },
  {
    slug: "ai-automation",
    name: "AI Automation",
    shortDescription: "Business process automation using AI tools and custom workflows.",
    fullDescription:
      "Business process automation using AI tools and custom workflows. Mohammad helps UAE and Saudi companies eliminate repetitive tasks, reduce operational costs, and scale without proportional headcount growth.",
    longOpening:
      "Are you still wasting hours on manual lead qualification, reporting, or data entry? AI automation is no longer a luxury; it's a necessity for scaling mid-market firms in the UAE and KSA. Mohammad implements custom intelligent workflows that integrate directly into your stack. From automated WhatsApp lead routing to AI-driven reporting hubs, we eliminate the operational 'tax' on your team's time so they can focus on high-value human work.",
    whoItsFor:
      "Mid-size businesses in the UAE and Saudi Arabia spending significant time and money on manual, repetitive business processes — lead qualification, reporting, data entry, customer communication, internal workflows — that could be automated with the right AI and integration setup.",
    deliverables: [
      "Process Audit & Automation Opportunity Mapping",
      "Workflow Automation (Make / n8n / Zapier)",
      "LLM Integration (OpenAI, Claude, Gemini)",
      "CRM Automation & Lead Qualification Workflows",
      "Internal AI Tooling & Dashboards",
      "WhatsApp Business API Automation",
      "Reporting & Analytics Automation",
      "Documentation & Team Handover",
    ],
    faqs: [
      {
        question: "What is AI automation and what can it actually do for my business?",
        answer:
          "AI automation connects your existing tools and adds intelligence to previously manual workflows. Examples: automatically qualifying and routing inbound leads from your website, generating first-draft reports from your data, responding to routine customer service queries via WhatsApp, or syncing data across systems without manual entry. The goal is always the same: reduce the time your team spends on low-value repetitive work.",
      },
      {
        question: "Do I need a technical team to maintain what you build?",
        answer:
          "No. Mohammad builds automation systems with non-technical operators in mind. Handover includes documentation and a short training session. Most systems are built on platforms like Make (Integromat) or n8n that have visual interfaces — no coding required to adjust or monitor them.",
      },
      {
        question: "What tools do you use for automation?",
        answer:
          "Make (Integromat), n8n, Zapier, OpenAI API, Anthropic Claude, WhatsApp Business API, and custom Python scripting for more complex data workflows. Tool selection is always based on what fits your stack and budget — no vendor lock-in.",
      },
      {
        question: "How long does an automation implementation take?",
        answer:
          "Simple single-workflow automations can be live in 1–2 weeks. Complex multi-system integrations with LLM components typically take 4–8 weeks. Scope is always defined upfront so there are no surprise timelines.",
      },
      {
        question: "Is AI automation relevant for my industry in the GCC?",
        answer:
          "Yes — across retail, real estate, professional services, logistics, healthcare, and manufacturing. The GCC market is actively adopting AI automation as part of Vision 2030 and the broader UAE digital agenda. Companies that implement now gain compounding operational advantages over those that wait.",
      },
    ],
  },
  {
    slug: "saas-development",
    name: "SaaS Development",
    shortDescription: "Custom SaaS product development for businesses in the UAE and GCC.",
    fullDescription:
      "Custom SaaS product development for businesses in the UAE and GCC. From concept to launch — Mohammad works with clients to build scalable software products tailored to their market and users.",
    longOpening:
      "Got a SaaS idea but no technical partner to bring it to life? Mohammad acts as your strategic technical lead, taking you from wireframes to a market-ready MVP in 12 weeks. We build on modern, scalable stacks (Next.js, Supabase, Stripe) with full support for Arabic (RTL) users. This isn't just about 'dev'; it's about building a sustainable software business with a partner who understands the GCC's unique SaaS landscape.",
    whoItsFor:
      "Entrepreneurs and mid-size businesses in the UAE and Saudi Arabia with a validated SaaS idea that needs a technical co-founder-level partner — someone who can own both product strategy and engineering delivery from concept to a market-ready product.",
    deliverables: [
      "Product Strategy & Scope Definition",
      "UX/UI Design (Figma Prototypes)",
      "Full-Stack SaaS Development (Next.js + Node / Python backend)",
      "Authentication, Multi-Tenancy & Billing (Stripe)",
      "API Design & Third-Party Integrations",
      "Cloud Deployment (AWS / Vercel / Railway)",
      "Scalable Database Architecture (PostgreSQL / Supabase)",
      "Post-Launch Support & Feature Roadmap",
    ],
    faqs: [
      {
        question: "What is the minimum viable scope for a SaaS project?",
        answer:
          "An MVP scoped to the single core value proposition your product delivers, with authentication, basic billing, and enough of the core feature to validate with real paying users. Mohammad is disciplined about MVP scope — the goal is learning, not building a complete product before you know if anyone wants it.",
      },
      {
        question: "How long does it take to build a SaaS MVP?",
        answer:
          "A well-scoped SaaS MVP typically takes 10–16 weeks. This includes product design, development, QA, and a staged launch. Timeline depends on complexity — a single-feature tool is faster than a multi-tenant platform with complex billing logic.",
      },
      {
        question: "What tech stack do you use for SaaS development?",
        answer:
          "Next.js (App Router) for the frontend, Node.js or Python for backend APIs depending on the use case, PostgreSQL via Supabase or Railway for the database, Stripe for billing, and Vercel or AWS for deployment. This stack is production-proven and scales well from MVP to thousands of users.",
      },
      {
        question: "Do you handle billing and subscription logic?",
        answer:
          "Yes — Stripe integration including free trials, monthly/annual plans, usage-based billing, and customer portal is standard for SaaS builds. Billing is one of the most complex parts of a SaaS product and is handled from day one, not bolted on later.",
      },
      {
        question: "Can you build for the Arabic-speaking market specifically?",
        answer:
          "Yes. RTL (right-to-left) layout support, Arabic typography, and locale-specific UX considerations are all part of the design and development process for GCC-targeted SaaS products. This is a frequently missed detail in developers who haven't built specifically for the Arab market.",
      },
      {
        question: "Do you take equity or only work for a fee?",
        answer:
          "Mohammad works on a project fee basis — no equity arrangements. This keeps incentives aligned and expectations clear. If your project requires an ongoing technical partnership post-launch, a retainer model is available.",
      },
    ],
  },
];
