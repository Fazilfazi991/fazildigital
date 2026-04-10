export interface LocationData {
  city: string;
  slug: string;
  country: string;
  tier: number;
  /** Short one-liner used on homepage pills and location hub intros */
  localContext: string;
  /** Optional rich fields — present on Tier 1, optional on Tier 2 */
  marketContext?: string;
  localDistricts?: string[];
  platformNotes?: string;
  vision2030Note?: string;
}

export const locations: LocationData[] = [
  // ─── Tier 1 — Primary Cities ───────────────────────────────────────────────

  {
    city: "Dubai",
    slug: "dubai",
    country: "UAE",
    tier: 1,
    localContext: "Serving dynamic businesses across DIFC, Downtown Dubai, and Dubai Marina.",

    marketContext:
      "Dubai is the most digitally mature market in the GCC, with one of the highest smartphone penetration rates in the world and a population that consumes content across multiple devices and platforms simultaneously. The city's business landscape is extremely competitive — mid-size companies across retail, hospitality, real estate, and professional services are all investing heavily in digital channels. Google remains the dominant search engine and primary discovery tool for both B2B and B2C buyers in Dubai, making SEO and paid search the highest-ROI channels for sustained growth. Brands that delay building their digital presence are ceding significant ground to faster-moving competitors who are already capturing high-intent traffic.",

    localDistricts: [
      "DIFC (Dubai International Financial Centre)",
      "Downtown Dubai",
      "Dubai Marina",
      "Business Bay",
    ],

    platformNotes:
      "Google Ads and Meta (Instagram-first) dominate paid media in Dubai. LinkedIn is highly effective for B2B targeting across the professional and financial services sectors based here. TikTok is rapidly growing for consumer brands, particularly in retail and F&B. WhatsApp Business is a critical conversion tool — many Dubai consumers complete purchases via WhatsApp rather than web forms.",

  },

  {
    city: "Riyadh",
    slug: "riyadh",
    country: "Saudi Arabia",
    tier: 1,
    localContext: "Supporting scalable enterprises and startups in the King Abdullah Financial District and Al Olaya.",

    marketContext:
      "Riyadh is undergoing one of the most significant economic transformations of any city in the world, driven by Vision 2030 and the Saudi government's commitment to diversifying the national economy away from oil. The capital is home to the largest concentration of mid-size and enterprise businesses in the Kingdom, with a young, highly connected population actively using digital channels to discover and evaluate products and services. Search behavior in Riyadh skews mobile-first and is increasingly conducted in English for B2B services and in Arabic for consumer categories. Businesses that establish strong digital visibility in Riyadh now — before market saturation — are positioning for outsized returns as the economy continues to expand.",

    localDistricts: [
      "King Abdullah Financial District (KAFD)",
      "Al Olaya (Olaya District)",
      "Diplomatic Quarter",
      "Exit 7 / Prince Mohammed bin Salman Road — the new tech corridor",
    ],

    platformNotes:
      "Snapchat has uniquely high penetration among Saudi consumers and is an essential paid media channel for any brand targeting Saudi audiences, particularly under 35. Instagram and TikTok are both dominant for consumer content. Google Ads and Saudi-specific SEO (accounting for Arabic search behavior and transliteration patterns) drive B2B leads. X (Twitter) has historically high usage among Saudi professionals and is a key brand-building channel.",

    vision2030Note:
      "Vision 2030 is actively reshaping business priorities in Riyadh. Companies across tourism, entertainment, sports, technology, and professional services are scaling rapidly to meet the ambition set by the national programme. Digital marketing and SEO strategies for Riyadh businesses must account for this growth context — the opportunity window to capture organic search authority in emerging sectors is currently wide open.",
  },

  {
    city: "Jeddah",
    slug: "jeddah",
    country: "Saudi Arabia",
    tier: 1,
    localContext: "Helping mid-size businesses in Jeddah scale their digital operations efficiently.",

    marketContext:
      "Jeddah is Saudi Arabia's commercial capital and primary Red Sea port, with a business culture that is notably more open and diverse than other Saudi cities. The city has a long-established tradition of trade and entrepreneurship, and its mid-size business community spans retail, logistics, hospitality, and professional services. As Vision 2030 investment flows into tourism and entertainment — including the development of the Jeddah Corniche and the NEOM-adjacent Red Sea projects — the demand for digital capability is accelerating sharply. Jeddah currently faces less digital marketing competition than Riyadh, making it a high-value market for businesses willing to invest in SEO and content infrastructure early.",

    localDistricts: [
      "Al-Balad (UNESCO World Heritage — e-commerce and tourism)",
      "Al Hamra District (commercial and retail)",
      "Jeddah Corniche (hospitality and tourism brands)",
      "King Abdulaziz Road (main commercial corridor)",
    ],

    platformNotes:
      "Snapchat and Instagram are the dominant consumer platforms in Jeddah. TikTok is growing fast among the younger demographic that makes up a significant share of the city's population. Google Ads work well for B2B and professional services. Arabic-language content significantly outperforms English-only content in Jeddah's consumer market, making bilingual strategy a strong competitive advantage.",

    vision2030Note:
      "Jeddah is a major beneficiary of Vision 2030's tourism and entertainment drive, with multi-billion dollar projects underway along the Red Sea coast. Businesses in hospitality, retail, F&B, and professional services have a narrow window to establish digital authority in key search terms before these sectors become highly competitive. Early SEO investment in Jeddah is one of the highest-ROI digital decisions a local business can make right now.",
  },

  // ─── Tier 2 — Secondary Cities ─────────────────────────────────────────────

  {
    city: "Abu Dhabi",
    slug: "abu-dhabi",
    country: "UAE",
    tier: 2,
    localContext: "Working with enterprise and growing SME networks across the capital.",
  },
  {
    city: "Dammam",
    slug: "dammam",
    country: "Saudi Arabia",
    tier: 2,
    localContext: "Driving digital transformation for companies in the Eastern Province.",
  },
  {
    city: "Sharjah",
    slug: "sharjah",
    country: "UAE",
    tier: 2,
    localContext: "Empowering the growing SME segment and family fleets in Sharjah.",
  },
];
