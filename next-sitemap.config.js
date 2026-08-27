/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://www.fazildigital.com',
  // robots.txt is handcrafted in /public/robots.txt with explicit
  // AI retrieval vs training bot rules. Never auto-generate it.
  generateRobotsTxt: false,
  generateIndexSitemap: false,
  // The markdown route exists for AI/LLM retrieval, but it is an alternate
  // representation of each canonical HTML article and must not be indexed.
  exclude: ['/blog/raw/*', '/icon.png', '/apple-icon.png'],
}
