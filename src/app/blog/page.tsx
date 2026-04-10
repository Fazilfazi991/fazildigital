import { Metadata } from "next";
import { Button } from "@/components/Button";
import { blogPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Digital Marketing Blog — SEO, AI & Growth for UAE & Saudi Arabia | Mohammad Fazil",
  description: "Insights on SEO, digital marketing, AI automation, and business growth for mid-size companies in Dubai, Riyadh, and across the GCC — by Mohammad Fazil.",
  alternates: { canonical: "https://fazildigital.com/blog" },
};



const categoryColors: Record<string, string> = {
  SEO: "text-emerald-400",
  "Digital Marketing": "text-blue-400",
  "Paid Ads": "text-purple-400",
  "AI Automation": "text-accent",
};

export default function BlogPage() {
  return (
    <div className="pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-syne font-bold text-bg-base mb-6">
            Insights & Guides
          </h1>
          <p className="text-xl text-text-muted max-w-2xl mx-auto">
            Practical articles on SEO, digital marketing, AI, and business growth — written specifically for mid-size companies in the UAE and Saudi Arabia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.slug} className="group border border-white/10 bg-[#0A0A0A] hover:border-accent/40 hover:-translate-y-0.5 transition-all duration-300">
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <span className={`text-xs font-bold tracking-widest uppercase ${categoryColors[post.category] ?? "text-accent"}`}>
                    {post.category}
                  </span>
                  <span className="text-xs text-text-muted">{post.date}</span>
                </div>
                <h2 className="text-xl font-syne font-bold text-bg-base mb-4 group-hover:text-accent transition-colors leading-snug">
                  {post.title}
                </h2>
                <p className="text-text-muted text-sm leading-relaxed mb-8">{post.excerpt}</p>
                <span className="text-accent text-sm font-medium inline-flex items-center">
                  Read Article <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-24 border border-white/10 bg-[#050505] p-12 text-center">
          <p className="text-text-muted mb-2 text-sm tracking-widest uppercase font-semibold">New articles added regularly</p>
          <h2 className="text-3xl font-syne font-bold text-bg-base mb-4">Want Mohammad&apos;s analysis on your market?</h2>
          <p className="text-text-muted mb-8 max-w-lg mx-auto">Get a free 30-minute digital audit and direct analysis of where your business stands in the GCC digital landscape.</p>
          <Button href="/contact" className="text-lg px-8 py-4">Get Your Free 30-Min Digital Audit</Button>
        </div>

      </div>
    </div>
  );
}
