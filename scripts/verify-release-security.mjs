import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";

// Read-only assertions over current lockfiles and separately collected hosting metadata.
// No deployment, environment mutation, auth token or production enquiry is performed.
const readJSON = file => JSON.parse(fs.readFileSync(file, "utf8").replace(/^\uFEFF/, ""));
const git = (...args) => execFileSync("git", args, { encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] }).trim();
const reportDir = "reports/phase3-security";
const pkg = readJSON("package.json");
const lock = readJSON("package-lock.json");
const full = readJSON(`${reportDir}/audit-full.json`);
const production = readJSON(`${reportDir}/audit-production.json`);
const hosting = readJSON(`${reportDir}/hosting-snapshot.json`);
const results = [];
async function check(name, action) {
  try { await action(); results.push({ name, status: "PASS" }); console.log(`PASS ${name}`); }
  catch (error) { results.push({ name, status: "FAIL", detail: error.message }); console.error(`FAIL ${name}: ${error.message}`); }
}

await check("Patched framework and lockfile are aligned", () => {
  const [major, minor, patch] = pkg.dependencies.next.split('.').map(Number);
  assert.ok(major > 16 || (major === 16 && (minor > 4 || (minor === 4 && patch >= 5))));
  assert.equal(pkg.dependencies.next, pkg.devDependencies["eslint-config-next"]);
  assert.equal(pkg.dependencies.next, lock.packages["node_modules/next"].version);
  assert.equal(pkg.dependencies.next, lock.packages[""].dependencies.next);
  assert.equal(pkg.devDependencies["eslint-config-next"], lock.packages[""].devDependencies["eslint-config-next"]);
});

await check("No production dependency vulnerabilities; no Critical or High full-audit findings", () => {
  assert.equal(production.metadata.vulnerabilities.total, 0);
  assert.equal(full.metadata.vulnerabilities.critical, 0);
  assert.equal(full.metadata.vulnerabilities.high, 0);
});

await check("Remaining findings match the explicitly reviewed development-only minimatch chain", () => {
  const approved = new Set(["minimatch", "@typescript-eslint/typescript-estree", "@typescript-eslint/parser", "@typescript-eslint/type-utils", "@typescript-eslint/utils", "@typescript-eslint/eslint-plugin", "typescript-eslint", "eslint-config-next"]);
  for (const [name, finding] of Object.entries(full.vulnerabilities)) {
    assert.ok(approved.has(name), `Unreviewed finding ${name}`);
    assert.equal(finding.severity, "moderate");
    for (const node of finding.nodes) assert.equal(lock.packages[node]?.dev, true, `${node} must remain development-only`);
    for (const cause of finding.via) if (typeof cause === "object") assert.equal(cause.url, "https://github.com/advisories/GHSA-g3hv-75wg-m249");
  }
});

await check("Security PR remains draft, unmerged and independent of redesign source", () => {
  assert.equal(hosting.githubPR.number, 1);
  assert.equal(hosting.githubPR.state, "open");
  assert.equal(hosting.githubPR.draft, true);
  assert.equal(hosting.githubPR.merged, false);
  assert.equal(hosting.githubPR.base, "main");
  assert.equal(hosting.githubPR.head, "security/nextjs-november-2026");
  assert.equal(git("rev-parse", "origin/main"), hosting.githubPR.base_sha);
  assert.equal(git("rev-parse", "origin/security/nextjs-november-2026"), hosting.githubPR.head_sha);
  const changed = git("diff", "--name-only", `${hosting.githubPR.base_sha}..${hosting.githubPR.head_sha}`).split(/\r?\n/);
  assert.ok(changed.includes("package.json") && changed.includes("package-lock.json"));
  const allowed = new Set(["package.json", "package-lock.json", "SECURITY-HOTFIX-REPORT.md", "SECURITY-HOTFIX-BROWSER-RESULTS.json", "reports/security/audit-before.json", "reports/security/audit-after.json"]);
  for (const file of changed) assert.ok(allowed.has(file), `Unexpected hotfix file ${file}`);
  assert.equal(git("merge-base", hosting.githubPR.base_sha, hosting.githubPR.head_sha), hosting.githubPR.base_sha);
});

await check("Release inspection targets the verified project and preserves production", () => {
  assert.equal(git("branch", "--show-current"), "revamp/saudi-seo-organic");
  assert.equal(hosting.project.id, "prj_CmLqVHcl9jaE585rBNpDoWelS8xy");
  assert.equal(hosting.project.name, "fazil-digital");
  assert.equal(hosting.project.teamId, "team_FKtnAnds9Xak13ypGNvXO346");
  assert.equal(hosting.production.target, "production");
  assert.equal(hosting.production.commit, hosting.githubPR.base_sha);
  assert.equal(hosting.redesignPreview.branch, "revamp/saudi-seo-organic");
  assert.equal(hosting.project.ssoProtection.enabled, true);
  assert.equal(hosting.unauthenticatedChecks.preview.xRobotsTag, "noindex");
  assert.deepEqual(hosting.mutationsPerformed, []);
});

await check("GA4 environment presence is recorded without values and source contains no synthetic ID", () => {
  assert.equal(hosting.environment.ga4KeyPresent, true);
  assert.ok(hosting.environment.ga4Targets.includes("production"));
  assert.equal(hosting.environment.valuesRead, false);
  assert.equal(hosting.environment.valuesStored, false);
  assert.equal(git("ls-files", ".env*"), "");
  function scan(directory) {
    for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
      const file = path.join(directory, entry.name);
      if (entry.isDirectory()) scan(file);
      else if (/\.(tsx?|m?js|txt)$/.test(file)) assert.ok(!/G-(?:TEST|FAKE|XXXX|PLACEHOLDER)/.test(fs.readFileSync(file, "utf8")), `Synthetic GA identifier in shipped source ${file}`);
    }
  }
  scan("src"); scan("public");
  const analytics = fs.readFileSync("src/components/Analytics.tsx", "utf8");
  assert.match(analytics, /process\.env\.NEXT_PUBLIC_GA_MEASUREMENT_ID/);
  assert.match(analytics, /sendEvent\("seo_review_intent"/);
  assert.match(analytics, /sendEvent\("whatsapp_click"/);
  assert.ok(!/sendEvent\("generate_lead"/.test(analytics));
});

const report = { checkedAt: new Date().toISOString(), sourceCommit: git("rev-parse", "HEAD"), results, fullAudit: full.metadata.vulnerabilities, productionAudit: production.metadata.vulnerabilities, productionReady: false, releaseGate: "Owner approval, patched rollback anchor and real Production-environment verification remain required; this script does not authorize a release." };
fs.writeFileSync(`${reportDir}/security-results.json`, JSON.stringify(report, null, 2));
console.log(JSON.stringify(report, null, 2));
if (results.some(result => result.status === "FAIL")) process.exitCode = 1;
