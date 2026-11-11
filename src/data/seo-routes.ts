/** Reviewed route registry. Adding a city/service record does not publish a sitemap entry. */
export const siteOrigin = "https://www.fazildigital.com";

export const approvedSaudiCommercialPaths = [
  "/services/seo/", "/services/local-seo/", "/services/technical-seo/", "/services/content-marketing/",
  "/riyadh/seo/", "/jeddah/seo/", "/dammam/seo/",
] as const;

/** Historical content is retained pending fresh Search Console/backlink evidence. */
export const preservedLegacyCombinationPaths = [
  "/dubai/seo/", "/dubai/digital-marketing/", "/dubai/paid-ads/", "/dubai/social-media-management/", "/dubai/web-development/", "/dubai/ai-automation/", "/dubai/saas-development/",
  "/riyadh/seo/", "/riyadh/digital-marketing/", "/riyadh/paid-ads/", "/riyadh/social-media-management/", "/riyadh/web-development/", "/riyadh/ai-automation/", "/riyadh/saas-development/",
  "/jeddah/seo/", "/jeddah/digital-marketing/", "/jeddah/paid-ads/", "/jeddah/social-media-management/", "/jeddah/web-development/", "/jeddah/ai-automation/", "/jeddah/saas-development/",
  "/abu-dhabi/seo/", "/abu-dhabi/digital-marketing/", "/abu-dhabi/paid-ads/", "/abu-dhabi/social-media-management/", "/abu-dhabi/web-development/", "/abu-dhabi/ai-automation/", "/abu-dhabi/saas-development/",
  "/dammam/seo/", "/dammam/digital-marketing/", "/dammam/paid-ads/", "/dammam/social-media-management/", "/dammam/web-development/", "/dammam/ai-automation/", "/dammam/saas-development/",
  "/sharjah/seo/", "/sharjah/digital-marketing/", "/sharjah/paid-ads/", "/sharjah/social-media-management/", "/sharjah/web-development/", "/sharjah/ai-automation/", "/sharjah/saas-development/",
] as const;

export const preservedLegacyServicePaths = [
  "/services/seo/", "/services/digital-marketing/", "/services/paid-ads/", "/services/social-media-management/", "/services/web-development/", "/services/ai-automation/", "/services/saas-development/",
] as const;

export const preservedCityHubPaths = ["/locations/dubai/", "/locations/riyadh/", "/locations/jeddah/", "/locations/abu-dhabi/", "/locations/dammam/", "/locations/sharjah/"] as const;
export const staticContentPaths = ["/", "/about/", "/services/", "/locations/", "/case-studies/", "/blog/", "/portfolio/", "/methodology/", "/markets/", "/contact/", "/privacy-policy/", "/digital-marketing-expert-dubai/", "/digital-marketing-expert-calicut/"] as const;
export const preservedCaseStudyPaths = ["/case-studies/green-bags-uae/", "/case-studies/dubai-seo/", "/case-studies/riyadh-paid-ads/", "/case-studies/dammam-marketing/", "/case-studies/jeddah-web-development/", "/case-studies/abu-dhabi-social-media/", "/case-studies/sharjah-ai-automation/"] as const;

export function canonicalURL(path: string) {
  const normalized = path === "/" ? "/" : `${path.replace(/\/+$/, "")}/`;
  return `${siteOrigin}${normalized}`;
}
