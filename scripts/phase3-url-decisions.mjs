/** Generate the Phase 3 recommendation register. No network or application mutations. */
import assert from "node:assert/strict";
import fs from "node:fs";
import { execFileSync } from "node:child_process";

const baseline = "4b81b631de2430b533970ce33096c1364a349627";
const read = file => execFileSync("git", ["show", `${baseline}:${file}`], { encoding: "utf8" });
const registry = read("src/data/seo-routes.ts");
const group = name => {
  const contents = registry.match(new RegExp(`export const ${name} = \\[([\\s\\S]*?)\\] as const;`))?.[1];
  assert.ok(contents, `Missing route group: ${name}`);
  return [...contents.matchAll(/"([^\"]+)"/g)].map(match => match[1]);
};
const groups = {
  core: group("approvedSaudiCommercialPaths"), combinations: group("preservedLegacyCombinationPaths"),
  services: group("preservedLegacyServicePaths"), cities: group("preservedCityHubPaths"),
  static: group("staticContentPaths"), cases: group("preservedCaseStudyPaths"),
};
const dataFiles = ["src/data/blog.ts", "src/data/blogs-cluster-1.ts", "src/data/blogs-cluster-2.ts", "src/data/blogs-cluster-3.ts", "src/data/blogs-cluster-4.ts", "src/data/saudi-articles.ts"];
const articles = new Map();
for (const file of dataFiles) for (const match of read(file).matchAll(/slug:\s*"([^\"]+)"\s*,\s*title:\s*"([^\"]+)"\s*,\s*category:\s*"([^\"]+)"/g)) articles.set(`/blog/${match[1]}/`, { title: match[2], category: match[3], file });
const newArticles = new Set([...articles].filter(([, value]) => value.file.endsWith("saudi-articles.ts")).map(([url]) => url));
assert.equal(articles.size, 49);
assert.equal(newArticles.size, 8);
const paths = new Set([...Object.values(groups).flat(), ...articles.keys()]);
assert.equal(paths.size, 126);
const originalHTML = read("SEO-URL-INVENTORY.csv").split(/\r?\n/).map(line => line.match(/^"([^\"]+)","HTML[^\"]*"/)).filter(Boolean).map(match => match[1]);
assert.equal(originalHTML.length, 115);
const expected = new Set([...originalHTML, "/services/local-seo/", "/services/technical-seo/", "/services/content-marketing/", ...newArticles]);
assert.deepEqual([...paths].sort(), [...expected].sort(), "Registry must contain every original and approved new content URL exactly once");
const specialized = new Set([...read("src/data/specializedContent.ts").matchAll(/^  "([a-z-]+)": \{/gm)].map(match => match[1]));
const history = new Map([
  ["/about/", "2026-05-25–08-24 register: 536 impressions, 6 clicks, position 7.4"],
  ["/blog/snapchat-ads-cpa-benchmarks-saudi-arabia-2026/", "Historical register: 832 impressions, 1 click, position 6.1; benchmark evidence/title fit needs review"],
  ["/digital-marketing-expert-dubai/", "Historical register: 57 impressions, 2 clicks; distinct Dubai consultant intent"],
  ["/locations/dammam/", "Historical register: 551 impressions, 3 clicks; SEO query split 81 hub / 6 specialist plus 6 non-www hub impressions"],
  ["/blog/digital-transformation-uae-sme-guide/", "Historical register: 166 impressions, 1 click; distinct UAE SME information intent"],
  ["/blog/sharjah-business-directory-guide-2026/", "Historical register: 17 impressions, 3 clicks; small sample"],
  ["/jeddah/seo/", "Historical register: 11 impressions, 1 click, position 4.8; small sample, not a current rank claim"],
  ["/markets/", "Historical register: 124 impressions, 1 click"],
  ["/riyadh/paid-ads/", "Historical register: 90 impressions, 1 click"],
  ["/services/saas-development/", "Historical register: 52 impressions, 1 click"],
  ["/riyadh/seo/", "Historical CTR register: 206 impressions, 0 clicks, position 58.3; clean Riyadh SEO ownership in query register"],
  ["/case-studies/dubai-seo/", "Historical CTR register: case-study query 78 impressions, 0 clicks, position 81.8; outcome evidence unavailable"],
]);
const primary = new Set(["/", ...groups.core, "/about/", "/contact/", "/case-studies/", "/blog/", ...newArticles]);
const sameIntentCandidates = new Map([
  ["/blog/how-to-rank-on-google-maps-uae/", "/blog/google-maps-seo-uae-2026/"],
  ["/blog/marketing-roi-tracking-gcc-businesses/", "/blog/tracking-marketing-roi-gcc-dashboard-guide/"],
]);
const required = {
  traffic: "E1: current page/query/country/device GSC exports + comparison window and index/canonical examples",
  links: "E2: current inbound/referring-page export + destination context + known historical variants",
  leads: "E3: organic landing-page and qualified-enquiry context; click intent is not confirmed lead delivery",
  content: "E4: content/intent comparison and confirmed service/market availability",
  proof: "E5: delivery evidence, image rights, client/publication approval and result sources",
  approval: "E6: owner-approved exact source/action/destination, rollback and monitoring plan",
};
function classify(url) {
  const article = articles.get(url);
  const isCore = primary.has(url);
  const row = {
    url, type: article ? "ARTICLE" : groups.cases.includes(url) ? "PROJECT NOTE" : groups.core.includes(url) ? "SAUDI COMMERCIAL" : groups.combinations.includes(url) ? "LEGACY CITY/SERVICE" : groups.services.includes(url) ? "LEGACY SERVICE" : groups.cities.includes(url) ? "LEGACY CITY HUB" : "STATIC / UTILITY",
    strategy_fit: isCore ? "APPROVED SAUDI PRIMARY JOURNEY" : "LEGACY / SUPPORTING",
    decision: "PENDING EVIDENCE", candidate_action: "KEEP", candidate_destination: url,
    rationale: "Distinct legacy intent; current search/link value is not verified. Preserve while reviewing accuracy and demand.",
    evidence_status: history.has(url) ? "HISTORICAL SIGNAL; CURRENT VALUE UNKNOWN" : "CURRENT GSC / BACKLINK EVIDENCE UNAVAILABLE",
    historical_signal: history.get(url) || "No per-URL historical performance recorded in the supplied repository registers; this is not zero traffic.",
    evidence_required: "E1; E2; E3; E4; E6", navigation_role: "SECONDARY ARCHIVE / DIRECT ORGANIC LANDING; NOT NEW-SERVICE PROMOTION",
    current_action: "PRESERVE EXISTING URL, HTTP200, SELF-CANONICAL AND INDEXING; NO MIGRATION IMPLEMENTED",
    url_level_change_approved: "NO", source: article?.file || groups.core.includes(url) ? article?.file || `src/app${url}page.tsx` : "src/data/seo-routes.ts; source route/template",
  };
  if (isCore) {
    row.decision = "KEEP"; row.candidate_action = "KEEP";
    row.rationale = newArticles.has(url) ? "One of eight approved Saudi SEO guides; distinct informational purpose supporting the commercial pages." : "Approved Saudi SEO, consultant trust, enquiry or editorial purpose; retain the exact URL and its intent.";
    row.evidence_status = history.has(url) ? "APPROVED STRATEGY + HISTORICAL SIGNAL" : "APPROVED STRATEGY; NO RANKING OR DEMAND CLAIM";
    row.navigation_role = newArticles.has(url) ? "FEATURED SAUDI EDITORIAL" : "PRIMARY SAUDI JOURNEY";
    row.evidence_required = newArticles.has(url) ? "Maintain citations and editorial review; measure with E1/E3 after release; no Arabic publication without native approval" : "Maintain factual copy, canonical and useful intent; E1/E3 for performance evaluation";
  } else if (url === "/privacy-policy/") {
    row.decision = "KEEP"; row.strategy_fit = "LEGAL / PRIVACY UTILITY"; row.navigation_role = "UTILITY FOOTER";
    row.rationale = "Privacy utility supports the actual enquiry/analytics processing; search demand is not its reason for existing.";
    row.evidence_status = "UTILITY PURPOSE"; row.evidence_required = "Review actual data handling and production analytics configuration; no search-value claim";
  } else if (["/services/", "/locations/", "/methodology/"].includes(url)) {
    row.decision = "KEEP"; row.strategy_fit = "SUPPORTING URL; CURRENT LEGACY COPY NEEDS ALIGNMENT";
    row.rationale = url === "/services/" ? "Retain navigation-hub URL; present only the current four SEO/content scopes, not seven old service offers." : url === "/locations/" ? "Retain city-discovery hub URL; distinguish Saudi service coverage from offices and demote historical UAE navigation." : "Retain distinct process/explanation URL; remove broad current-offer language and unsupported fixed delivery/agency-comparison assertions.";
    row.navigation_role = "SUPPORTING RESOURCE; CURRENT SAUDI LINKS OR CLEAR HISTORICAL CONTEXT";
    row.evidence_required = "E4 factual scope/intent review; E1/E2 before any later URL migration; no redirect/noindex now";
  } else if (url === "/locations/dammam/") {
    row.candidate_action = "CONSOLIDATE"; row.candidate_destination = "/dammam/seo/ (PROVISIONAL; NOT AN APPROVED REDIRECT)";
    row.rationale = "Documented old SEO-query overlap warrants comparison. Broad city-service queries/clicks may justify keeping a distinct hub; do not assume all hub intent is SEO.";
  } else if (history.has(url)) {
    row.decision = "KEEP";
    row.rationale = "Conservative retention of a documented historical search signal. Keep its original intent and archival discovery; current value and any future migration remain unverified.";
    row.evidence_required = "E1; E2; E3; E4; E6 before reversing retention; E5 additionally for project-result assertions";
  } else if (sameIntentCandidates.has(url)) {
    row.candidate_action = "CONSOLIDATE"; row.candidate_destination = `${sameIntentCandidates.get(url)} (PROVISIONAL; NOT APPROVED)`;
    row.rationale = "Source titles and content address a similar task. Compare page/query overlap, useful unique material and inbound links before choosing a winner; do not use a narrower Saudi page as a substitute.";
  } else if (url === "/case-studies/green-bags-uae/") {
    row.decision = "KEEP"; row.strategy_fit = "CONTEXTUAL FIRST-PARTY PROJECT SCOPE, NOT SAUDI PERFORMANCE PROOF";
    row.rationale = "The existing evidence register supports a named relationship/scope note. Retain truthful boundaries; a live website or image does not prove a numerical result.";
    row.evidence_status = "FIRST-PARTY SUPPORTED SCOPE ONLY"; row.evidence_required = "E5 for any outcome/new asset claim; E1/E2/E6 before future migration";
    row.navigation_role = "CONTEXTUAL PROJECT NOTE WITH EVIDENCE BOUNDARIES; NOT A CURRENT PAID-ADS OFFER";
  } else if (groups.cases.includes(url)) {
    row.candidate_action = "NOINDEX";
    row.rationale = "Very brief anonymous scope notes lack delivery/publication evidence. If substantive accurate material cannot be established, nonindexed archival access is a candidate, subject to query/link review and explicit URL approval.";
    row.evidence_required = "E1; E2; E3; E5; E6";
  } else if (url === "/portfolio/") {
    row.candidate_action = "NOINDEX";
    row.rationale = "Broad development/creative portfolio is off the current offer and includes stock/reference imagery. Verify authorship, rights and permission; consider nonindexed archive only after value/proof review.";
    row.evidence_required = "E1; E2; E3; E5; E6";
  } else if (groups.combinations.includes(url)) {
    const [city, service] = url.split("/").filter(Boolean);
    const custom = specialized.has(`${city}-${service}`) || url === "/sharjah/digital-marketing/";
    row.strategy_fit = ["riyadh", "jeddah", "dammam"].includes(city) ? "SAUDI GEOGRAPHY; NON-SEO OFFER" : "UAE COMMERCIAL OFFER OUTSIDE PRIMARY MARKET";
    row.candidate_action = custom ? "KEEP" : "RETIRE";
    row.candidate_destination = custom ? url : "NONE; NO INTENT-EQUIVALENT DESTINATION ESTABLISHED";
    row.rationale = custom ? "Specialized/static copy exists; current service availability, accuracy and organic value require individual review. Uniqueness alone does not prove performance." : "Generated matrix route uses shared service/location material and layout variation. Retirement is only a candidate if exports show no useful demand/links and there is no substantive live offer or equivalent destination.";
  } else if (groups.services.includes(url)) {
    row.candidate_action = "RETIRE"; row.candidate_destination = "NONE; UNRELATED TO THE SAUDI SEO HOMEPAGE";
    row.rationale = "Standalone non-SEO commercial offer conflicts with the present service focus. Confirm the service is discontinued and review demand, conversions and links before approving removal; do not redirect to SEO solely to retain traffic.";
  }
  return row;
}
const rows = [...paths].sort().map(classify);
assert.equal(new Set(rows.map(row => row.url)).size, 126);
assert.ok(rows.every(row => ["KEEP", "CONSOLIDATE", "NOINDEX", "RETIRE", "PENDING EVIDENCE"].includes(row.decision)));
assert.ok(rows.every(row => ["KEEP", "CONSOLIDATE", "NOINDEX", "RETIRE"].includes(row.candidate_action)));
assert.ok(rows.filter(row => row.decision === "PENDING EVIDENCE").every(row => row.evidence_required.includes("E1") && row.evidence_required.includes("E2") && row.evidence_required.includes("E6")));
const counts = rows.reduce((value, row) => ({ ...value, [row.decision]: (value[row.decision] || 0) + 1 }), {});
const pendingCandidates = rows.filter(row => row.decision === "PENDING EVIDENCE").reduce((value, row) => ({ ...value, [row.candidate_action]: (value[row.candidate_action] || 0) + 1 }), {});
const quote = value => `"${String(value).replaceAll('"', '""')}"`;
const csv = [Object.keys(rows[0]).map(quote).join(","), ...rows.map(row => Object.values(row).map(quote).join(","))].join("\n") + "\n";
const register = `## Per-URL decisions\n\nBaseline: \`${baseline}\`. All 126 source-defined indexable content routes are included once, including all 115 original routes, three new service routes and eight new guides. These are source/indexability facts, not a claim that Google indexes all 126.\n\n| Decision | Count |\n| --- | ---: |\n${Object.entries(counts).map(([decision, count]) => `| ${decision} | ${count} |`).join("\n")}\n\nPending candidates (not approved migration decisions): ${Object.entries(pendingCandidates).map(([action, count]) => `${action}: ${count}`).join("; ")}.\n\n${Object.entries(required).map(([key, value]) => `- ${key}: ${value}`).join("\n")}\n\n| URL | Decision | Candidate action / destination | Evidence and rationale | Navigation role | Required evidence |\n| --- | --- | --- | --- | --- | --- |\n${rows.map(row => `| \`${row.url}\` | ${row.decision} | ${row.candidate_action}${row.candidate_action === "CONSOLIDATE" ? ` → ${row.candidate_destination}` : ""} | ${row.rationale} ${history.has(row.url) ? `**Historical only:** ${row.historical_signal}.` : ""} | ${row.navigation_role} | ${row.evidence_required} |`).join("\n")}\n`;
const marker = "<!-- GENERATED URL DECISIONS -->";
const reportFile = "PHASE3-LEGACY-URL-DECISIONS.md";
const prefix = fs.existsSync(reportFile) ? fs.readFileSync(reportFile, "utf8").split(marker)[0].trimEnd() : "# Phase 3 legacy URL decisions";
const report = `${prefix}\n\n${marker}\n\n${register}`;
if (process.argv.includes("--check")) {
  assert.equal(fs.readFileSync("PHASE3-LEGACY-URL-DECISIONS.csv", "utf8").replaceAll("\r\n", "\n"), csv, "Decision CSV needs regeneration");
  assert.equal(fs.readFileSync(reportFile, "utf8").replaceAll("\r\n", "\n"), report, "Decision Markdown needs regeneration");
} else {
  fs.writeFileSync("PHASE3-LEGACY-URL-DECISIONS.csv", csv);
  fs.writeFileSync(reportFile, report);
}
console.log(JSON.stringify({ baseline, routes: rows.length, articles: articles.size, newArticles: newArticles.size, decisions: counts, pendingCandidates, urlLevelChangesImplemented: 0 }, null, 2));
