/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://fazildigital.com',
  // robots.txt is handcrafted in /public/robots.txt with explicit
  // AI retrieval vs training bot rules. Never auto-generate it.
  generateRobotsTxt: false,
  generateIndexSitemap: false,
}
