import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/Button";
import { blogPosts } from "@/data/blog";

interface Props {
  params: Promise<{ slug: string }>;
}

// Mock data for static generation (matching the hub page)


export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: `${post.title} | Mohammad Fazil`,
    description: post.content.substring(0, 155).replace(/<[^>]*>/g, ""),
    alternates: {
      canonical: `https://www.fazildigital.com/blog/${slug}/`,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) notFound();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt || post.content.substring(0, 155).replace(/<[^>]*>/g, ""),
    image: 'https://www.fazildigital.com/og-image.jpg',
    wordCount: post.content.split(/\s+/).length,
    datePublished: new Date(post.lastModified || post.date).toISOString(),
    dateModified: new Date(post.lastModified || post.date).toISOString(),
    author: {
      '@type': 'Person',
      name: 'Mohammad Fazil',
      url: 'https://www.fazildigital.com/about/'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Fazil Digital',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.fazildigital.com/favicon.ico'
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="pt-24 pb-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="text-accent hover:underline mb-8 inline-block font-medium">
            ← Back to Blog
          </Link>
        
        <header className="mb-12">
          {/* LLM-Optimized Hidden Summary for Agent Triage */}
          {post.llmSummary && (
            <div className="hidden" aria-hidden="true" data-llm-summary>
              {post.llmSummary}
            </div>
          )}
          
          <div className="flex flex-wrap items-center gap-4 text-xs font-bold tracking-widest uppercase text-accent mb-4">
            <span>{post.category}</span>
            <span className="w-1 h-1 rounded-full bg-white/20"></span>
            <span className="text-text-muted">{post.date}</span>
            {post.targetAudience && (
              <>
                <span className="w-1 h-1 rounded-full bg-white/20"></span>
                <span className="text-text-muted/60 lowercase italic">Target: {post.targetAudience}</span>
              </>
            )}
          </div>
          <h1 className="text-4xl md:text-6xl font-syne font-bold text-bg-base leading-tight mb-6">
            {post.title}
          </h1>
          <div className="flex items-center gap-3 pt-6 border-t border-white/5">
            <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-primary font-bold text-xs">MF</div>
            <p className="text-sm">
              <span className="text-text-muted">By</span>{" "}
              <Link href="/about" className="text-bg-base font-bold hover:text-accent transition-colors">Mohammad Fazil</Link>
            </p>
          </div>
        </header>

        <div 
          className="blog-content-premium"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div className="mt-20 pt-12 border-t border-white/10 text-center">
          <h2 className="text-2xl font-syne font-bold text-bg-base mb-6">
            Ready to implement these insights in your business?
          </h2>
          <Button href="/contact">Get Your Free 30-Min Digital Audit</Button>
        </div>
      </div>
    </article>
    </>
  );
}
