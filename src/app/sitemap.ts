import type { MetadataRoute } from "next";
import { blogPosts } from "@/data/blog";
import { saudiArticles } from "@/data/saudi-articles";
import { approvedSaudiCommercialPaths, canonicalURL, preservedCaseStudyPaths, preservedCityHubPaths, preservedLegacyCombinationPaths, preservedLegacyServicePaths, staticContentPaths } from "@/data/seo-routes";

/** Single sitemap authority. Legacy URLs remain indexable until evidence-backed review. */
export default function sitemap(): MetadataRoute.Sitemap {
  const contentPaths = new Set<string>([
    ...staticContentPaths, ...approvedSaudiCommercialPaths,
    ...preservedLegacyCombinationPaths, ...preservedLegacyServicePaths,
    ...preservedCityHubPaths, ...preservedCaseStudyPaths,
  ]);
  const entries: MetadataRoute.Sitemap = [...contentPaths].map(path => ({
    url: canonicalURL(path),
    // No fabricated per-build lastModified dates for unchanged legacy content.
  }));
  const articles = new Map([...blogPosts, ...saudiArticles].map(post => [post.slug, post]));
  for (const post of articles.values()) {
    entries.push({ url: canonicalURL(`/blog/${post.slug}`), lastModified: new Date(post.lastModified || post.date) });
  }
  return entries.sort((a, b) => a.url.localeCompare(b.url));
}
