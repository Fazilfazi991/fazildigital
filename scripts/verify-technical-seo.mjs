import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";

const baseURL = process.env.BASE_URL || "http://127.0.0.1:3001";
assert.match(baseURL, /^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?\/?$/, "Only local regression targets are supported");
const origin = "https://www.fazildigital.com";
const results = [];
const evidence = {};
const request = (path, options = {}) => fetch(new URL(path, baseURL), { signal: AbortSignal.timeout(60000), ...options });
async function check(name, action) {
  try { await action(); results.push({ name, status: "PASS" }); console.log(`PASS ${name}`); }
  catch (error) { results.push({ name, status: "FAIL", detail: error.message }); console.error(`FAIL ${name}: ${error.message}`); }
}
function csvRows(content) {
  const rows = []; let row = [], field = "", quoted = false;
  for (let index = 0; index < content.length; index++) {
    const char = content[index];
    if (char === '"' && content[index + 1] === '"' && quoted) { field += '"'; index++; }
    else if (char === '"') quoted = !quoted;
    else if (char === ',' && !quoted) { row.push(field); field = ""; }
    else if (char === '\n' && !quoted) { row.push(field.replace(/\r$/, "")); rows.push(row); row = []; field = ""; }
    else field += char;
  }
  if (field || row.length) { row.push(field.replace(/\r$/, "")); rows.push(row); }
  return rows;
}
const historical = csvRows(execFileSync("git", ["show", "642ac90:SEO-URL-INVENTORY.csv"], { encoding: "utf8" })).slice(1);
const preservedHTML = historical.filter(row => row[1]?.startsWith("HTML")).map(row => row[0]);
assert.equal(preservedHTML.length, 115);
const originalArticles = historical.filter(row => row[1] === "HTML article").map(row => row[0].split('/').filter(Boolean).at(-1));
const newArticles = [...fs.readFileSync("src/data/saudi-articles.ts", "utf8").matchAll(/slug:\s*"([^"]+)"/g)].map(match => match[1]);
const newServicePaths = ["/services/local-seo/", "/services/technical-seo/", "/services/content-marketing/"];
const expectedContent = new Set([...preservedHTML, ...newServicePaths, ...newArticles.map(slug => `/blog/${slug}/`)]);
let sitemapURLs = [];

await check("One sitemap authority includes every old and approved new content URL", async () => {
  assert.equal(fs.existsSync("public/sitemap.xml"), false);
  assert.equal(fs.existsSync("next-sitemap.config.js"), false);
  const pkg = JSON.parse(fs.readFileSync("package.json", "utf8"));
  assert.equal(pkg.scripts.postbuild, undefined);
  assert.equal(pkg.devDependencies["next-sitemap"], undefined);
  const response = await request('/sitemap.xml'); assert.equal(response.status, 200);
  const xml = await response.text();
  sitemapURLs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => match[1]);
  assert.equal(new Set(sitemapURLs).size, sitemapURLs.length, "No duplicate sitemap URLs");
  assert.equal(sitemapURLs.length, expectedContent.size);
  for (const path of expectedContent) assert.ok(sitemapURLs.includes(`${origin}${path}`), `Missing ${path}`);
  for (const url of sitemapURLs) { assert.ok(url.startsWith(`${origin}/`)); assert.ok(url.endsWith('/')); assert.ok(!url.includes('/raw/') && !url.endsWith('.md')); }
  assert.ok(sitemapURLs.includes(`${origin}/case-studies/green-bags-uae/`));
  evidence.sitemap = { entries: sitemapURLs.length, preservedHTML: preservedHTML.length, newArticles: newArticles.length, newServices: 3 };
});

await check("Every historical and approved content route returns 200 with a self canonical", async () => {
  const pending = [...expectedContent]; const samples = []; const titles = new Map();
  async function worker() {
    while (pending.length) {
      const path = pending.shift(); const response = await request(path);
      assert.equal(response.status, 200, path);
      const html = await response.text();
      const canonicalTag = html.match(/<link\b[^>]*rel="canonical"[^>]*>/)?.[0];
      const canonical = canonicalTag?.match(/href="([^"]+)"/)?.[1];
      assert.equal(canonical, `${origin}${path}`, `${path} self canonical`);
      assert.ok(!/<meta[^>]*name="robots"[^>]*content="[^"]*noindex/i.test(html), `${path} remains indexable`);
      assert.ok(!/noindex/i.test(response.headers.get('x-robots-tag') || ''), `${path} response remains indexable`);
      assert.equal((html.match(/<h1\b/g) || []).length, 1, `${path} has one H1`);
      assert.ok(!/<link[^>]*hreflang=/i.test(html), `${path} has no fictitious localized alternatives`);
      const title = html.match(/<title>([^<]+)<\/title>/)?.[1]; assert.ok(title, `${path} title`);
      assert.ok(!titles.has(title), `${path} shares title with ${titles.get(title)}`); titles.set(title, path);
      samples.push({ path, status: response.status, canonical });
    }
  }
  await Promise.all(Array.from({ length: 5 }, worker));
  evidence.content = { tested: samples.length, uniqueTitles: titles.size, allHTTP200: true, allSelfCanonical: true };
});

await check("All raw and rewritten Markdown articles have noindex and canonical headers", async () => {
  const slugs = [...new Set([...originalArticles, ...newArticles])];
  let tested = 0;
  for (const slug of slugs) {
    for (const path of [`/blog/raw/${slug}/`, `/blog/${slug}.md`]) {
      const response = await request(path); assert.equal(response.status, 200, path);
      assert.match(response.headers.get('x-robots-tag') || '', /noindex/i, path);
      assert.equal(response.headers.get('link'), `<${origin}/blog/${slug}/>; rel="canonical"`, path);
      assert.match(response.headers.get('content-type') || '', /text\/markdown/);
      tested++;
    }
  }
  evidence.markdown = { articles: slugs.length, representations: tested };
});

await check("Existing redirect destinations survive and trailing-slash normalization is permanent", async () => {
  evidence.redirects = [];
  for (const [source, , , destination] of historical.filter(row => row[1] === 'Existing permanent redirect')) {
    const response = await request(source); assert.equal(response.status, 200, source);
    assert.equal(new URL(response.url).pathname, destination, source);
    const first = await request(source, { redirect: 'manual' }); assert.ok([301, 308].includes(first.status), `${source} permanent redirect`);
    evidence.redirects.push({ source, destination, status: first.status });
  }
  for (const path of ['/about', '/riyadh/seo', '/services/local-seo']) {
    const response = await request(path, { redirect: 'manual' }); assert.equal(response.status, 308);
    assert.equal(new URL(response.headers.get('location'), baseURL).pathname, `${path}/`);
  }
});

await check("Robots allows rendering assets and machine-readable text has no invented results", async () => {
  const robots = await request('/robots.txt'); assert.equal(robots.status, 200);
  const text = await robots.text(); assert.ok(!/^Disallow:\s*\/_next\//mi.test(text));
  assert.match(text, /Sitemap:\s*https:\/\/www\.fazildigital\.com\/sitemap.xml/);
  for (const path of ['/llms.txt', '/llms-full.txt']) {
    const response = await request(path); assert.equal(response.status, 200);
    const content = await response.text(); assert.ok(!/\+180%|3\.2x ROAS|Top 3 guaranteed|4\.9\/5/.test(content));
    assert.match(content, /Saudi/); assert.match(content, /Mohammad Fazil/);
  }
});

await check("Legacy schema describes coverage without fabricated offices", async () => {
  for (const path of ['/dubai/seo/', '/dammam/paid-ads/', '/locations/jeddah/']) {
    const response = await request(path); const html = await response.text();
    const blocks = [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map(match => JSON.parse(match[1]));
    const schema = JSON.stringify(blocks); assert.ok(!schema.includes('PostalAddress'), path);
    assert.ok(!schema.includes('LocalBusiness'), path);
  }
});

const reportFile = process.env.SEO_REPORT_PATH || 'reports/technical-seo-results.json';
fs.mkdirSync(path.dirname(reportFile), { recursive: true });
const summary = { target: baseURL, timestamp: new Date().toISOString(), results, evidence };
fs.writeFileSync(reportFile, JSON.stringify(summary, null, 2));
console.log(JSON.stringify(summary, null, 2));
if (results.some(result => result.status === 'FAIL')) process.exitCode = 1;
