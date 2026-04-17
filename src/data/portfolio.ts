export interface PortfolioService {
  title: string;
  icon: string;
  description: string;
  features: string[];
  slug: string;
}

export interface Client {
  name: string;
  industry: string;
  logoUrl?: string;
  services: string[];
  websiteUrl?: string;
  instagramUrl?: string;
}

export const portfolioServices: PortfolioService[] = [
  {
    title: "SEO & Content Marketing",
    icon: "",
    description: "Rank higher on Google and attract qualified organic traffic through technical optimization and strategic content.",
    features: [
      "Technical SEO audits",
      "Keyword research & strategy",
      "On-page optimization",
      "Content creation (EN/AR)",
      "Local SEO for UAE/KSA"
    ],
    slug: "seo"
  },
  {
    title: "Paid Advertising",
    icon: "",
    description: "Data-driven campaigns on Google, Meta, Snapchat, and TikTok that convert clicks into customers.",
    features: [
      "Google Ads (Search + Shopping)",
      "Meta Ads (Facebook/Instagram)",
      "Snapchat Ads (KSA focus)",
      "TikTok Ads",
      "Conversion tracking & optimization"
    ],
    slug: "paid-ads"
  },
  {
    title: "AI Automation",
    icon: "",
    description: "Automate repetitive tasks and streamline workflows using AI tools and smart integrations.",
    features: [
      "Workflow automation",
      "CRM integrations",
      "Lead routing & follow-up",
      "Reporting automation",
      "Chatbot development"
    ],
    slug: "ai-automation"
  },
  {
    title: "Web Development",
    icon: "",
    description: "Fast, responsive, conversion-optimized websites built for the UAE and Saudi Arabian markets.",
    features: [
      "WordPress development",
      "E-commerce sites",
      "Landing pages",
      "Website optimization",
      "Bilingual (EN/AR) sites"
    ],
    slug: "web-development"
  },
  {
    title: "Graphic Design",
    icon: "",
    description: "Eye-catching visuals that communicate your brand message and drive engagement.",
    features: [
      "Social media graphics",
      "Marketing posters",
      "Brand identity",
      "Ad creatives",
      "Print design"
    ],
    slug: "graphic-design"
  },
  {
    title: "Video Production",
    icon: "",
    description: "Engaging video content and AI-powered video generation for social media and ads.",
    features: [
      "AI video generation",
      "Social media videos",
      "Product showcases",
      "Explainer videos",
      "Video editing"
    ],
    slug: "video-production"
  }
];

export const clients: Client[] = [
  {
    name: "Green Bags UAE",
    industry: "E-commerce • Eco-friendly Products",
    services: ["SEO", "Google Ads", "Content Marketing"],
    websiteUrl: "https://greenbagsuae.com",
    instagramUrl: "https://instagram.com/greenbagsuae",
    logoUrl: "/images/portfolio/clients/green_bags_web.png"
  },
  {
    name: "Golden Point",
    industry: "Commercial Printing • Advertising Production",
    services: ["Paid Ads", "Social Media", "Graphic Design"],
    websiteUrl: "https://goldenpoint.com",
    instagramUrl: "https://instagram.com/goldenpoint",
    logoUrl: "/images/portfolio/clients/golden_point_web.png"
  },
  {
    name: "Zap Mart",
    industry: "E-commerce • Retail",
    services: ["SEO", "Web Development", "Paid Ads"],
    websiteUrl: "https://zap-mart.com",
    logoUrl: "/images/portfolio/clients/zap_mart_web.png"
  },
  {
    name: "BWMC",
    industry: "B2B Services • Abu Dhabi",
    services: ["Lead Generation", "LinkedIn Ads", "SEO"],
    websiteUrl: "https://bwmc.ae",
    logoUrl: "/images/portfolio/clients/bwmc_web.png"
  },
  {
    name: "Bags Basket",
    industry: "E-commerce • Accessories",
    services: ["SEO", "Content Strategy", "Social Media"],
    websiteUrl: "https://bagsbasket.com",
    instagramUrl: "https://instagram.com/bagsbasket",
    logoUrl: "/images/portfolio/clients/bags_basket_web.png"
  },
  {
    name: "Budget Home Fix",
    industry: "Home Services • UAE",
    services: ["AI Automation", "Web Development", "Local SEO"],
    websiteUrl: "https://budgethomefix.com",
    logoUrl: "/images/portfolio/clients/budget_home_fix_web.png"
  }
];
