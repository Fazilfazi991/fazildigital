import { blogPosts } from "@/data/blog";
import { saudiArticles } from "@/data/saudi-articles";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  
  // Find the post
  const post = [...saudiArticles, ...blogPosts].find((p) => p.slug === slug);

  if (!post) {
    return new NextResponse("Post not found", { status: 404 });
  }

  // Construct the raw Markdown content using the 'Content OS' pattern
  const markdown = `---
title: ${JSON.stringify(post.title)}
slug: ${JSON.stringify(`/blog/${post.slug}/`)}
date: ${JSON.stringify(post.date)}
category: ${JSON.stringify(post.category)}
targetAudience: ${JSON.stringify(post.targetAudience ?? "General")}
llmSummary: ${JSON.stringify(post.llmSummary ?? "")}
primaryKeyword: ${JSON.stringify(post.primaryKeyword ?? "")}
---

${post.content.replace(/<[^>]*>/g, "")}

---
© 2026 Fazil Digital
Author: Mohammad Fazil
Canonical Source: https://www.fazildigital.com/blog/${post.slug}/
`;

  return new NextResponse(markdown, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "X-Robots-Tag": "noindex, follow",
      "Link": `<https://www.fazildigital.com/blog/${post.slug}/>; rel="canonical"`,
    },
  });
}

// Since these are static, we can generate them at build time
export async function generateStaticParams() {
  return [...new Map([...saudiArticles, ...blogPosts].map(post => [post.slug, post])).values()].map((post) => ({
    slug: post.slug,
  }));
}
