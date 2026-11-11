import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { JsonLd, PageCTA, pageMetadata } from "@/components/site/PageElements";
import { blogPosts } from "@/data/blog";
import { calicutArticles } from "@/data/calicut-articles";
import { saudiArticles } from "@/data/saudi-articles";
import "../../calicut-editorial.css";
import "../../editorial-pages.css";

interface Props { params: Promise<{ slug: string }> }
export function generateStaticParams() { return blogPosts.map(post => ({ slug: post.slug })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find(item => item.slug === slug);
  if (!post) return {};
  return { ...pageMetadata({ title: post.title, description: post.excerpt || post.content.replace(/<[^>]*>/g, "").slice(0, 155), path: `/blog/${slug}/` }), openGraph: { type: "article", title: post.title, description: post.excerpt, url: `https://www.fazildigital.com/blog/${slug}/`, siteName: "Fazil Digital", publishedTime: articleDate(post.date), modifiedTime: articleDate(post.lastModified || post.date), authors: ["Mohammad Fazil"] } };
}

/** Data stores calendar dates; never interpret a named date in the server's local timezone. */
function articleDate(value: string) { return new Date(/^\d{4}-\d{2}-\d{2}(?:T|$)/.test(value) ? value : `${value} UTC`).toISOString(); }
function formatDate(value: string) { return new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(new Date(articleDate(value))); }

/** Repository-authored HTML only. Drop historical presentation, preserve its content and links. */
function articlePresentation(content: string) {
  const sections: { id: string; title: string }[] = [];
  let previousLevel = 1;
  const readable = content.replace(/\s(?:class|style)="[^"]*"/g, "").replace(/<h([2-6])\b([^>]*)>([\s\S]*?)<\/h\1>/gi, (_match, level: string, attributes: string, heading: string) => {
    const nextLevel = Math.min(Number(level), previousLevel + 1);
    previousLevel = nextLevel;
    return `<h${nextLevel}${attributes}>${heading}</h${nextLevel}>`;
  });
  const html = readable.replace(/<h2\b([^>]*)>([\s\S]*?)<\/h2>/gi, (_match, attributes: string, heading: string) => {
    const id = attributes.match(/\s+id="([^"]*)"/)?.[1] || `guide-section-${sections.length + 1}`;
    sections.push({ id, title: heading.replace(/<[^>]*>/g, "").replaceAll("&amp;", "&").replaceAll("&nbsp;", " ").replaceAll("&quot;", '"') });
    return `<h2${attributes.replace(/\s+id="[^"]*"/g, "")} id="${id}">${heading}</h2>`;
  });
  return { html, sections };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find(item => item.slug === slug);
  if (!post) notFound();
  const { html, sections } = articlePresentation(post.content);
  const isSaudiEditorial = saudiArticles.some(item => item.slug === post.slug);
  const isCalicutEditorial = calicutArticles.some(item => item.slug === post.slug);
  const related = isCalicutEditorial
    ? calicutArticles.filter(item => item.slug !== post.slug)
    : isSaudiEditorial
      ? saudiArticles.filter(item => item.slug !== post.slug).slice(0, 3)
      : blogPosts.filter(item => item.slug !== post.slug && !saudiArticles.some(saudi => saudi.slug === item.slug)).slice(0, 3);
  const wordCount = post.content.replace(/<[^>]*>/g, " ").trim().split(/\s+/).length;
  const published = articleDate(post.date);
  const modified = articleDate(post.lastModified || post.date);
  return <div className={isCalicutEditorial ? "fd-calicut-article" : undefined}>
    <JsonLd data={{ "@context": "https://schema.org", "@type": "BlogPosting", "@id": `https://www.fazildigital.com/blog/${slug}/#article`, mainEntityOfPage: `https://www.fazildigital.com/blog/${slug}/`, headline: post.title, description: post.excerpt, datePublished: published, dateModified: modified, wordCount, inLanguage: "en", author: { "@type": "Person", "@id": "https://www.fazildigital.com/#person", name: "Mohammad Fazil", url: "https://www.fazildigital.com/about/", sameAs: ["https://linkedin.com/in/fazilfazi"] }, publisher: { "@type": "Organization", "@id": "https://www.fazildigital.com/#organization", name: "Fazil Digital", url: "https://www.fazildigital.com/", logo: { "@type": "ImageObject", url: "https://www.fazildigital.com/icon.png" } } }} />
    <article>
      <header className="fd-container fd-support-article-head"><nav aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><Link href="/blog/">Insights</Link><span aria-hidden="true">/</span><span>{isCalicutEditorial ? "Calicut & Kerala" : post.category}</span></nav><p className="fd-support-caption">{isCalicutEditorial ? "Calicut & Kerala guide" : isSaudiEditorial ? "Saudi SEO guide" : post.category}</p><h1>{post.title}</h1><p className="fd-support-article-deck">{post.excerpt}</p><div className="fd-support-byline"><Link href="/about/">Mohammad Fazil</Link><time dateTime={published}>{formatDate(post.date)}</time><span>{Math.max(1, Math.ceil(wordCount / 220))} min read</span>{post.lastModified && published !== modified && <span>Updated <time dateTime={modified}>{formatDate(post.lastModified)}</time></span>}</div></header>
      <div className="fd-container fd-support-article-layout"><aside className="fd-support-toc"><nav aria-label="In this guide"><p>In this guide</p><ol>{sections.map(section => <li key={section.id}><a href={`#${section.id}`}>{section.title}</a></li>)}</ol></nav><Link href={isCalicutEditorial ? "/contact/?market=calicut#contact-prepare" : "/contact/"} className="fd-text-link">{isCalicutEditorial ? "Discuss Calicut SEO" : "Discuss your SEO goals"} <span aria-hidden="true">↗</span></Link></aside><div className="fd-support-article-body" dangerouslySetInnerHTML={{ __html: html }} /></div>
    </article>
    {related.length > 0 && <section className="fd-support-band fd-section"><div className="fd-container"><div className="fd-section-heading"><h2>{isCalicutEditorial ? "More Calicut & Kerala guides." : "Keep the thinking going."}</h2><Link href="/blog/" className="fd-text-link">All insights <span aria-hidden="true">↗</span></Link></div><div className="fd-support-related">{related.map(item => <article key={item.slug}><p className="fd-support-caption">{isCalicutEditorial ? "Calicut & Kerala" : item.category}</p><h3><Link href={`/blog/${item.slug}/`}>{item.title}</Link></h3><p>{item.excerpt}</p></article>)}</div></div></section>}
    {isCalicutEditorial ? <section className="fd-support-band fd-section fd-calicut-article-cta"><div className="fd-container fd-support-reading"><p className="fd-support-caption">Calicut &amp; Kerala</p><h2>Want to discuss SEO for your business?</h2><p>Read about the remote consultancy for businesses serving Calicut and Kozhikode, or prepare a private enquiry when you are ready.</p><Link href="/digital-marketing-expert-calicut/" className="fd-text-link">Explore the Calicut consultancy <span aria-hidden="true">↗</span></Link><Link href="/contact/?market=calicut#contact-prepare" className="fd-text-link">Prepare a private enquiry <span aria-hidden="true">↗</span></Link></div></section> : <PageCTA />}
  </div>;
}
