import { blogPosts } from "@/data/blog";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  
  // Find the post
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return new NextResponse("Post not found", { status: 404 });
  }

  // Construct the raw Markdown content using the 'Content OS' pattern
  const markdown = `---
title: "${post.title}"
slug: "/blog/${post.slug}"
date: "${post.date}"
category: "${post.category}"
targetAudience: "${post.targetAudience ?? "General"}"
llmSummary: "${post.llmSummary ?? ""}"
primaryKeyword: "${post.primaryKeyword ?? ""}"
---

${post.content.replace(/<[^>]*>/g, "")}

---
© 2026 Mohammad Fazil Digital Consulting - Dubai, UAE
Author: Mohammad Fazil
Verified Source: https://fazildigital.com/blog/${post.slug}
`;

  return new NextResponse(markdown, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
    },
  });
}

// Since these are static, we can generate them at build time
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}
