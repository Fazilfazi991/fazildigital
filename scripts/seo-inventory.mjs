/** Rebuild the source-derived Phase 1 inventory. No network requests or route mutations. */
import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";

const root = process.cwd();
const sourceRef = process.env.SEO_INVENTORY_REF || "833d3820ede59d9f96df12551f12d43e1695a363";
const trackedFiles = execFileSync("git", ["ls-tree", "-r", "--name-only", sourceRef], { cwd: root, encoding: "utf8" }).trim().split(/\r?\n/);
const cache = new Map();
const read = (file) => {
  if (!cache.has(file)) cache.set(file, execFileSync("git", ["show", `${sourceRef}:${file}`], { cwd: root, encoding: "utf8" }));
  return cache.get(file);
};
const slugs = (file) => [...read(file).matchAll(/\bslug:\s*"([^"]+)"/g)].map((m) => m[1]);
const walk = (folder) => trackedFiles.filter((file) => file.startsWith(`${folder}/`));
const rows = new Map();
const add = (url, kind, classification, destination, reason, evidence = "Source code; fresh GSC/backlink data unavailable") => rows.set(url, { url, kind, classification, destination, reason, evidence, phase1: "Preserve; recommendation only" });
const route = (value) => value === "" ? "/" : `${value.replace(/\/$/, "")}/`;
const locations = slugs("src/data/locations.ts");
const services = slugs("src/data/services.ts");
const blogFiles = walk("src/data").filter((f) => /\/blogs?(?:-cluster-\d)?\.ts$/.test(f));
const blogs = [...new Set(blogFiles.flatMap(slugs))].sort();
const cases = slugs("src/app/case-studies/[slug]/page.tsx");
const staticPages = walk("src/app").filter((f) => f.endsWith("/page.tsx") && !f.includes("[")).map((f) => route(f.slice("src/app".length, -"/page.tsx".length)));
const policies = {
  "/": ["REBUILD", "/", "Saudi consultancy homepage prototype; retain URL"],
  "/about/": ["KEEP", "/about/", "Protect branded/person intent and historical 6 clicks; later factual positioning update only"],
  "/services/": ["REBUILD", "/services/", "Retain useful service-navigation hub; specialist SEO scope in Phase 2"],
  "/locations/": ["REVIEW", "Pending", "Broad multi-country hub; evaluate queries/backlinks before any consolidation"],
  "/markets/": ["REVIEW", "Pending", "Historical 124 impressions/1 click; do not redirect broad market intent to homepage blindly"],
  "/portfolio/": ["REVIEW", "Pending", "Preserve named project scope; verify permission and alignment before restructuring"],
  "/methodology/": ["REBUILD", "/methodology/", "Retain URL with distinct SEO working-process intent, rather than a second services pitch"],
  "/case-studies/": ["REBUILD", "/case-studies/", "Evidence-led case index; publish only substantiated scope/results"],
  "/blog/": ["REBUILD", "/blog/", "Retain article hub; curate Saudi organic-growth discovery without deleting older articles"],
  "/contact/": ["REBUILD", "/contact/", "Retain enquiry intent; accurate WhatsApp handoff and Saudi SEO briefing"],
  "/privacy-policy/": ["KEEP", "/privacy-policy/", "Restored legal/privacy route; preserve and review against future processing changes"],
  "/digital-marketing-expert-dubai/": ["REVIEW", "Pending", "Protect historical 57 impressions/2 clicks and distinct UAE intent despite new positioning"],
  "/sharjah/digital-marketing/": ["REVIEW", "Pending", "Dedicated static override of generated route; off-strategy, evidence needed before removal"],
};
for (const url of staticPages) add(url, "HTML static", ...(policies[url] || ["REVIEW", "Pending", "Needs individual evidence review"]));
for (const city of locations) {
  const url = `/locations/${city}/`;
  add(url, "HTML location hub", "REVIEW", "Pending", city === "dammam" ? "Historical 551 impressions/3 clicks; overlaps /dammam/seo/. Evaluate query split before any merge" : "Broad city-services intent; keep live while measuring overlap and historical value");
}
for (const service of services) add(`/services/${service}/`, "HTML service", service === "seo" ? "REBUILD" : "REVIEW", service === "seo" ? "/services/seo/" : "Pending", service === "seo" ? "National SEO program; retain URL and distinguish from consultant homepage" : service === "saas-development" ? "Historical 52 impressions/1 click; off-strategy intent is not equivalent to SEO" : "Off-strategy service; no safe equivalent SEO destination established");
for (const city of locations) for (const service of services) {
  const url = `/${city}/${service}/`;
  const core = service === "seo" && ["riyadh", "jeddah", "dammam"].includes(city);
  add(url, city === "sharjah" && service === "digital-marketing" ? "HTML static override" : "HTML city-service", core ? "REBUILD" : "REVIEW", core ? url : "Pending", core ? city === "jeddah" ? "Protected Saudi SEO intent; historical 11 impressions/1 click/position 4.8 is a small sample" : city === "riyadh" ? "Protected Saudi SEO intent; historical 206 impressions/0 clicks/position 58.3; retain specialized copy" : "Protected Saudi SEO intent; resolve hub overlap using fresh query evidence" : url === "/riyadh/paid-ads/" ? "Historical 90 impressions/1 click; retain pending separate paid-search intent review" : "Generated/off-priority combination; unique demand, backlinks and legitimate service evidence not established");
}
const protectedBlogs = new Map([
  ["snapchat-ads-cpa-benchmarks-saudi-arabia-2026", "Historical 832 impressions/1 click/position 6.1; preserve URL, review title-to-content fit after benchmark claims removal"],
  ["sharjah-business-directory-guide-2026", "Historical 17 impressions/3 clicks; preserve despite small sample and UAE topic"],
  ["digital-transformation-uae-sme-guide", "Historical 166 impressions/1 click; preserve distinct SME transformation intent"],
]);
const rebuildBlogs = new Set(["seo-jeddah-guide-2026", "digital-marketing-riyadh-saudi-businesses-2026", "dammam-digital-marketing-eastern-province"]);
const consolidateBlogs = new Map([
  ["how-to-rank-on-google-maps-uae", "google-maps-seo-uae-2026"],
  ["marketing-roi-tracking-gcc-businesses", "tracking-marketing-roi-gcc-dashboard-guide"],
]);
for (const slug of blogs) {
  const url = `/blog/${slug}/`;
  const candidate = consolidateBlogs.get(slug);
  const classification = rebuildBlogs.has(slug) ? "REBUILD" : candidate ? "CONSOLIDATE" : protectedBlogs.has(slug) ? "KEEP" : "REVIEW";
  const reason = protectedBlogs.get(slug) || (rebuildBlogs.has(slug) ? "Relevant Saudi market guide; preserve informational purpose distinct from local commercial page" : candidate ? "Potential same-intent overlap; destination is provisional and must win fresh query/backlink/content review before approval" : "Retain article; Saudi relevance, accuracy, distinct intent and current performance need evidence review");
  add(url, "HTML article", classification, candidate ? `/blog/${candidate}/` : classification === "REVIEW" ? "Pending" : url, reason);
  add(`/blog/raw/${slug}/`, "Markdown representation", "REBUILD", url, "Retain machine-readable endpoint; plan X-Robots-Tag noindex and canonical Link to HTML (currently absent)");
  add(`/blog/${slug}.md`, "Markdown rewrite alias", "REBUILD", url, "Same representation via rewrite; retain and apply equivalent noindex/canonical policy in Phase 2");
}
for (const slug of cases) add(`/case-studies/${slug}/`, "HTML project note", slug === "green-bags-uae" ? "KEEP" : "REVIEW", slug === "green-bags-uae" ? `/case-studies/${slug}/` : "Pending", slug === "green-bags-uae" ? "First-party supported named scope only; no verified numerical outcome or Saudi-client claim" : slug === "dubai-seo" ? "Historical case-study query visibility; source measurements and publication approval unavailable" : "Existing anonymized scope is not verified delivery/results; retain pending evidence and permission review");
const redirectPattern = /source:\s*"([^"]+)"\s*,\s*destination:\s*"([^"]+)"\s*,\s*permanent:\s*true/g;
for (const [, source, destination] of read("next.config.ts").matchAll(redirectPattern)) add(source, "Existing permanent redirect", "KEEP", destination, "Preserve existing mapping unchanged; check destination relevance and slash-chain behavior before future changes");
for (const url of ["/ajman/web-development/", "/ajman/social-media-management/", "/ajman/digital-marketing/"]) add(url, "Historical 404", "REVIEW", "Pending", "Documented historical missing route; no Ajman data record or equivalent offering; do not invent a redirect");
for (const file of walk("public")) {
  const url = file.slice("public".length);
  const rebuild = ["/sitemap.xml", "/llms.txt", "/llms-full.txt", "/robots.txt"].includes(url);
  add(url, "Public SEO/support asset", rebuild ? "REBUILD" : "KEEP", url, url.includes("llms") ? "Preserve endpoint; remove stale unsupported claims and align positioning after approval" : url === "/sitemap.xml" ? "Preserve; competing static/metadata/postbuild sitemap ownership needs a separately approved fix" : url === "/robots.txt" ? "Preserve crawler policy; review /_next/ blocking and stale/misnamed crawler entries separately" : "Preserve existing image/vector support asset; not an indexable commercial page");
}
for (const url of ["/favicon.ico", "/icon.png", "/apple-icon.png"]) add(url, "App metadata asset", "KEEP", url, "Preserve brand/icon route; no independent SEO landing-page intent");
add("/ai-agents.txt", "Referenced missing asset", "REVIEW", "Pending", "robots.txt allows this path, but no matching public asset/route exists; do not assume indexation");
const sorted = [...rows.values()].sort((a, b) => a.kind.localeCompare(b.kind) || a.url.localeCompare(b.url));
const quote = (value) => `"${String(value).replaceAll('"', '""')}"`;
const checking = process.argv.includes("--check");
function output(file, value) {
  const destination = path.join(root, file);
  if (checking) {
    const actual = fs.readFileSync(destination, "utf8").replaceAll("\r\n", "\n");
    if (actual !== value) throw new Error(`${file} is out of date; run node scripts/seo-inventory.mjs`);
  } else fs.writeFileSync(destination, value);
}
output("SEO-URL-INVENTORY.csv", [Object.keys(sorted[0]).map(quote).join(","), ...sorted.map((row) => Object.values(row).map(quote).join(","))].join("\n") + "\n");
const html = sorted.filter((row) => row.kind.startsWith("HTML"));
const sections = [
  ["Indexable HTML routes (source-derived, not an indexing assertion)", html],
  ["Machine-readable alternate representations", sorted.filter((row) => row.kind.startsWith("Markdown"))],
  ["Existing redirects and historical missing URLs", sorted.filter((row) => ["Existing permanent redirect", "Historical 404", "Referenced missing asset"].includes(row.kind))],
  ["SEO and support assets", sorted.filter((row) => row.kind.includes("asset") && row.kind !== "Referenced missing asset")],
];
const generated = sections.map(([heading, group]) => `### ${heading}\n\n| Current URL | Class | Future destination / retained URL | Reason |\n| --- | --- | --- | --- |\n${group.map((row) => `| \`${row.url}\` | ${row.classification} | ${row.destination === "Pending" ? "Pending evidence" : `\`${row.destination}\``} | ${row.reason} |`).join("\n")}\n`).join("\n");
const planPath = path.join(root, "SEO-MIGRATION-PLAN.md");
if (fs.existsSync(planPath)) {
  const prefix = fs.readFileSync(planPath, "utf8").split("<!-- BEGIN GENERATED INVENTORY -->")[0].trimEnd();
  output("SEO-MIGRATION-PLAN.md", `${prefix}\n\n<!-- BEGIN GENERATED INVENTORY -->\n\n## Complete URL register\n\nGenerated with \`node scripts/seo-inventory.mjs\` from source commit \`${sourceRef}\` (${trackedFiles.length} tracked files). ${html.length} unique HTML routes; ${blogs.length} articles; ${locations.length} cities × ${services.length} services = ${locations.length * services.length} combinations (one static override, not an extra URL). ${sorted.length} total logical URLs/assets/aliases including existing redirects and documented missing paths.\n\n${generated}`);
}
const counts = sorted.reduce((result, row) => ({ ...result, [row.classification]: (result[row.classification] || 0) + 1 }), {});
console.log(JSON.stringify({ html: html.length, blogs: blogs.length, cities: locations.length, services: services.length, caseStudies: cases.length, total: sorted.length, counts }, null, 2));
