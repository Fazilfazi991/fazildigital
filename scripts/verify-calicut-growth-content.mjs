import assert from "node:assert/strict";

const baseURL = process.env.BASE_URL || "http://127.0.0.1:3015";
const origin = "https://www.fazildigital.com";
const urls = [
  "/blog/calicut-business-google-visibility-guide/",
  "/blog/google-business-profile-vs-website-seo-kozhikode/",
];
const pages = new Map();
for (const path of urls) {
  const response = await fetch(new URL(path, baseURL));
  assert.equal(response.status, 200, path);
  const html = await response.text();
  assert.equal((html.match(/<h1\b/g) || []).length, 1, `${path}: one H1`);
  assert.equal(html.match(/<link\b[^>]*rel="canonical"[^>]*>/)?.[0].match(/href="([^"]+)"/)?.[1], `${origin}${path}`, `${path}: self canonical`);
  assert.ok(!/<meta[^>]*name="robots"[^>]*content="[^"]*noindex/i.test(html), `${path}: indexable`);
  assert.ok(html.includes("<title>") && html.includes("name=\"description\""), `${path}: title and description`);
  const schemas = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(match => JSON.parse(match[1]));
  assert.ok(schemas.some(schema => schema["@type"] === "BlogPosting" && schema.mainEntityOfPage === `${origin}${path}`), `${path}: BlogPosting schema`);
  assert.ok(html.includes('href="/about/"'), `${path}: author profile link`);
  assert.ok(html.includes('href="/digital-marketing-expert-calicut/"'), `${path}: contextual landing-page link`);
  pages.set(path, html);
}
assert.ok(pages.get(urls[0]).includes(`href="${urls[1]}"`), "Visibility guide links to Profile comparison");
assert.ok(pages.get(urls[1]).includes(`href="${urls[0]}"`), "Profile comparison links to Visibility guide");

const landing = await (await fetch(new URL("/digital-marketing-expert-calicut/", baseURL))).text();
for (const path of urls) assert.ok(landing.includes(`href="${path}"`), `Landing page links to ${path}`);
const insights = await (await fetch(new URL("/blog/", baseURL))).text();
assert.ok(insights.includes("Calicut &amp; Kerala") && insights.includes("Saudi SEO insights"), "Insights separates Calicut from Saudi collection");
for (const path of urls) assert.ok(insights.includes(`href="${path}"`), `Insights links to ${path}`);
const sitemap = await (await fetch(new URL("/sitemap.xml", baseURL))).text();
for (const path of urls) assert.ok(sitemap.includes(`${origin}${path}`), `Sitemap contains ${path}`);

const home = await (await fetch(new URL("/", baseURL))).text();
assert.ok(home.includes("SEO Consultant Saudi Arabia"), "Saudi-focused homepage remains intact");
const about = await (await fetch(new URL("/about/", baseURL))).text();
assert.ok(about.includes('href="/digital-marketing-expert-calicut/"'), "About page retains its contextual Calicut link");
console.log("PASS: two original articles, BlogPosting metadata, self canonicals, indexability, contextual/cross links, separate Insights section, sitemap, About link and Saudi homepage positioning.");
