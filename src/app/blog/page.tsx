import Link from "next/link";
import Image from "next/image";
import { JsonLd, PageCTA, pageMetadata } from "@/components/site/PageElements";
import { blogPosts } from "@/data/blog";
import { saudiArticles } from "@/data/saudi-articles";
import "../editorial-pages.css";

export const metadata = pageMetadata({ title: "Saudi SEO Insights & Practical Guides", description: "Practical Saudi SEO guidance on services, pricing factors, Riyadh strategy, Arabic and English search, local visibility, technical SEO, content and measurement.", path: "/blog/" });
const featuredSlugs = new Set(saudiArticles.map(post => post.slug));
const topics = ["SEO strategy", "Scope & pricing", "Riyadh", "Arabic & English", "Local search", "Technical SEO", "Original content", "Measurement"];

export default function BlogPage() {
  const archive = blogPosts.filter(post => !featuredSlugs.has(post.slug)).sort((a, b) => new Date(b.lastModified || b.date).getTime() - new Date(a.lastModified || a.date).getTime());
  return <>
    <JsonLd data={{ "@context": "https://schema.org", "@type": "CollectionPage", url: "https://www.fazildigital.com/blog/", name: "Saudi SEO insights", mainEntity: { "@type": "ItemList", itemListElement: saudiArticles.map((post, index) => ({ "@type": "ListItem", position: index + 1, url: `https://www.fazildigital.com/blog/${post.slug}/`, name: post.title })) } }} />
    <section className="fd-container fd-page-hero fd-journal-hero"><nav aria-label="Breadcrumb"><Link href="/">Home</Link><span> / Insights</span></nav><p className="fd-page-label">Saudi SEO insights</p><h1>Clear thinking for a better search strategy.</h1><p className="fd-page-hero-intro">Practical reading for Saudi business owners and teams. Understand the decisions behind SEO, from choosing the right scope to measuring whether the work reaches relevant customers.</p><a className="fd-text-link" href="#saudi-guides">Explore the guides <span aria-hidden="true">↓</span></a></section>
    <section className="fd-container fd-section" aria-labelledby="saudi-guides"><div className="fd-section-heading"><h2 id="saudi-guides">Start with the<br />questions that matter.</h2><p>Original guides grounded in published search documentation, with practical questions to apply to your own business.</p></div><div className="fd-journal-grid">{saudiArticles.map((post, index) => <article key={post.slug} className={`fd-journal-card${index === 0 ? " fd-journal-feature" : ""}`}>{index === 0 && <div className="fd-journal-image" aria-hidden="true"><Image src="/images/visual-refresh/content-editorial.webp" alt="" fill sizes="(max-width: 700px) 100vw, 45vw" /></div>}<div className="fd-journal-copy"><p className="fd-support-caption">{topics[index]}</p><h3><Link href={`/blog/${post.slug}/`}>{post.title}</Link></h3><p>{post.excerpt}</p><Link className="fd-text-link" href={`/blog/${post.slug}/`}>Read the guide <span aria-hidden="true">↗</span></Link></div></article>)}</div></section>
    <section className="fd-support-band fd-section"><div className="fd-container fd-support-reading"><h2>Research in two languages.<br />Write for the people using them.</h2><p>Arabic and English search require independent research and editorial judgment. These English-language guides explain the planning decisions. Arabic publication remains subject to native-language review and a genuine localization process.</p><Link href="/services/content-marketing/" className="fd-text-link">Explore content-led organic marketing <span aria-hidden="true">↗</span></Link></div></section>
    <section className="fd-container fd-section" aria-labelledby="earlier-insights"><div className="fd-section-heading"><h2 id="earlier-insights">Earlier insights.</h2><p>Our existing reading library remains available, including UAE and wider digital-market topics. Older articles retain their original publication dates and URLs.</p></div><details className="fd-archive-disclosure"><summary>Browse the earlier insights archive <span aria-hidden="true">+</span></summary><div className="fd-support-archive">{archive.map(post => <article key={post.slug}><span>{post.category}</span><h3><Link href={`/blog/${post.slug}/`}>{post.title}</Link></h3><Link href={`/blog/${post.slug}/`} aria-label={`Read ${post.title}`} className="fd-support-archive-arrow"><span aria-hidden="true">↗</span></Link></article>)}</div></details></section>
    <PageCTA />
  </>;
}
