/** Regression guard for the Phase 1 promise: rebuild home, preserve existing SEO assets. */
import assert from "node:assert/strict";
import fs from "node:fs";
import { execFileSync } from "node:child_process";

const baseline = "833d3820ede59d9f96df12551f12d43e1695a363";
const git = (...args) => execFileSync("git", args, { encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] }).trim();
assert.equal(git("branch", "--show-current"), "revamp/saudi-seo-organic", "Work must remain on the requested development branch");
assert.equal(git("rev-parse", "main"), baseline, "The local production branch must remain at the cloned baseline");

const originalFiles = git("ls-tree", "-r", "--name-only", baseline).split(/\r?\n/);
const authorizedChanges = new Set(["src/app/page.tsx", "src/app/layout.tsx", "src/app/template.tsx"]);
const changedFiles = new Set(git("diff", "--name-only", baseline).split(/\r?\n/).filter(Boolean));
for (const file of originalFiles) {
  assert.ok(fs.existsSync(file), `An existing source/asset was removed: ${file}`);
  if (!authorizedChanges.has(file)) assert.ok(!changedFiles.has(file), `Protected baseline file changed: ${file}`);
}

// Recompute the complete register in check-only mode; no reports are rewritten.
const inventory = execFileSync(process.execPath, ["scripts/seo-inventory.mjs", "--check"], { encoding: "utf8" });
const counts = JSON.parse(inventory);
assert.equal(counts.html, 115, "Unexpected baseline HTML inventory count");
assert.equal(counts.blogs, 41, "All original articles must be inventoried");
assert.equal(counts.caseStudies, 7, "All original project notes must be inventoried");
assert.equal(counts.total, 227, "Every original route, representation, known missing path and support asset must be classified");
assert.equal(counts.counts.RETIRE || 0, 0, "No URL retirement is justified in this phase");
const csv = fs.readFileSync("SEO-URL-INVENTORY.csv", "utf8");
for (const city of ["riyadh", "jeddah", "dammam"]) assert.ok(csv.includes(`"/${city}/seo/","HTML city-service","REBUILD","/${city}/seo/"`), `The protected ${city} SEO URL must retain its exact destination`);

console.log(`PASS: development branch; main unchanged; ${originalFiles.length - authorizedChanges.size} baseline files preserved; ${counts.total} URL classifications match source and report; three Saudi SEO URLs retained.`);
