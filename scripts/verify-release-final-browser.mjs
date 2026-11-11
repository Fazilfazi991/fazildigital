import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";

const baseURL = process.env.BASE_URL || "http://127.0.0.1:3006";
assert.match(baseURL, /^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?\/?$/, "Use a local production test server");
const bundledPlaywright = "C:/Program Files/WindowsApps/OpenAI.CodexPrimaryRuntime.v26-1030-493-0_26.1030.493.0_x64__3k8sg7r9htsxt/dependencies/node/node_modules/playwright/index.mjs";
const { chromium } = await import(pathToFileURL(process.env.PLAYWRIGHT_MODULE || bundledPlaywright));
const executablePath = process.env.BROWSER_PATH || ["C:/Program Files/Google/Chrome/Application/chrome.exe", "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe"].find(existsSync);
const coreRoutes = ["/", "/services/seo/", "/services/local-seo/", "/services/technical-seo/", "/services/content-marketing/", "/riyadh/seo/", "/jeddah/seo/", "/dammam/seo/", "/about/", "/contact/", "/case-studies/", "/blog/"];
const articleSlugs = ["seo-services-saudi-arabia-guide", "seo-cost-saudi-arabia-scope-guide", "riyadh-seo-strategy-guide", "arabic-vs-english-seo-saudi-arabia", "local-seo-saudi-businesses-guide", "technical-seo-audit-saudi-websites", "organic-content-strategy-saudi-businesses", "google-search-console-seo-measurement-guide"];
const legacyReadingSamples = ["/blog/snapchat-ads-cpa-benchmarks-saudi-arabia-2026/"];
const routes = [...coreRoutes, ...articleSlugs.map(slug => `/blog/${slug}/`), ...legacyReadingSamples];
const widths = [320, 390, 768, 1024, 1440];
const captureRun = new Date().toISOString().replace(/[:.]/g, "-");
const screenshotRelativeDir = `previews/release-final/verified-${captureRun}`;
const screenshotDir = path.resolve(screenshotRelativeDir);
const buildId = (await readFile(path.resolve(".next/BUILD_ID"), "utf8")).trim();
await mkdir(screenshotDir, { recursive: true });
await mkdir(path.resolve("reports"), { recursive: true });
const browser = await chromium.launch({ headless: true, ...(executablePath ? { executablePath } : {}) });
const context = await browser.newContext({ viewport: { width: 1440, height: 1000 }, deviceScaleFactor: 1, reducedMotion: "reduce" });
const results = [];
const layouts = [];
const screenshots = [];
let fullScreenshots = 0;
const metadata = [];
const localLinks = new Set();
const runtimeErrors = [];
const failedResources = [];
const observations = [];
const blockedExternal = [];
async function interceptExternal(route) {
  if (new URL(route.request().url()).origin === new URL(baseURL).origin) return route.continue();
  blockedExternal.push(route.request().url());
  await route.abort();
}
await context.route("**/*", interceptExternal);
await context.addInitScript(() => {
  window.__qaPerf = { cls: 0, lcp: 0 };
  try { new PerformanceObserver(list => { for (const entry of list.getEntries()) if (!entry.hadRecentInput) window.__qaPerf.cls += entry.value; }).observe({ type: "layout-shift", buffered: true }); } catch { /* optional browser metric */ }
  try { new PerformanceObserver(list => { for (const entry of list.getEntries()) window.__qaPerf.lcp = entry.startTime; }).observe({ type: "largest-contentful-paint", buffered: true }); } catch { /* optional browser metric */ }
});
const page = await context.newPage();
page.on("pageerror", error => runtimeErrors.push({ route: page.url(), error: error.message }));
page.on("response", response => { if (response.url().startsWith(baseURL) && response.status() >= 400 && !response.url().includes("/__nextjs_")) failedResources.push({ route: page.url(), resource: response.url(), status: response.status() }); });

async function check(name, action) {
  try { await action(); results.push({ name, status: "PASS" }); console.log(`PASS ${name}`); }
  catch (error) { results.push({ name, status: "FAIL", message: error.message }); console.error(`FAIL ${name}: ${error.message}`); }
}
const shotName = route => route === "/" ? "home" : route.replace(/^\//, "").replace(/\/$/, "").replaceAll("/", "-");
const titles = new Set();
const descriptions = new Set();

try {
  for (const route of routes) {
    await check(`Page, metadata and semantics: ${route}`, async () => {
      await page.setViewportSize({ width: 1440, height: 1000 });
      const response = await page.goto(`${baseURL}${route}`, { waitUntil: "networkidle", timeout: 120000 });
      assert.equal(response.status(), 200);
      await page.evaluate(() => document.fonts.ready);
      assert.equal(await page.locator("main").count(), 1);
      assert.equal(await page.locator(".fd-home > .fd-header").count(), 1, "One site header");
      assert.equal(await page.locator("footer").count(), 1);
      assert.equal(await page.locator("h1").count(), 1);
      assert.equal(await page.locator("html").getAttribute("lang"), "en");
      const title = await page.title();
      const description = await page.locator('meta[name="description"]').getAttribute("content");
      const canonical = await page.locator('link[rel="canonical"]').getAttribute("href");
      assert.ok(title && !titles.has(title), `Unique title: ${title}`); titles.add(title);
      assert.ok(description && !descriptions.has(description), "Unique nonempty description"); descriptions.add(description);
      assert.equal(canonical, `https://www.fazildigital.com${route}`);
      assert.equal(await page.locator("link[hreflang]").count(), 0, "No unrelated language alternatives");
      if (articleSlugs.some(slug => route === `/blog/${slug}/`)) {
        assert.equal(await page.locator(".fd-support-byline time").first().innerText(), "6 November 2026", "Publication calendar date is not shifted by the host timezone");
        assert.equal(await page.locator(".fd-support-byline time").first().getAttribute("datetime"), "2026-11-06T00:00:00.000Z");
      }
      const schemas = await page.locator('script[type="application/ld+json"]').allTextContents();
      for (const raw of schemas) {
        const json = JSON.parse(raw);
        assert.ok(!JSON.stringify(json).includes("PostalAddress"), "No invented office address");
        assert.ok(!JSON.stringify(json).includes("aggregateRating"), "No invented rating");
      }
      const headingLevels = await page.locator("main h1,main h2,main h3,main h4,main h5,main h6").evaluateAll(items => items.map(item => Number(item.tagName[1])));
      for (let index = 1; index < headingLevels.length; index++) assert.ok(headingLevels[index] <= headingLevels[index - 1] + 1, `Heading skips from ${headingLevels[index - 1]} to ${headingLevels[index]}`);
      const internal = await page.locator('a[href^="/"]').evaluateAll(links => links.map(link => new URL(link.href).pathname));
      internal.forEach(link => localLinks.add(link));
      const contrastFailures = await page.locator("main p, main label, main summary, main h1, main h2, main h3").evaluateAll(elements => {
        const rgb = value => { const match = value.match(/[\d.]+/g); return match ? match.map(Number) : [0,0,0,0]; };
        const luminance = color => color.slice(0,3).map(value => { const channel = value / 255; return channel <= .04045 ? channel / 12.92 : ((channel + .055) / 1.055) ** 2.4; }).reduce((sum, value, index) => sum + value * [.2126,.7152,.0722][index], 0);
        return elements.filter(element => element.getClientRects().length && element.textContent.trim()).flatMap(element => {
          const style = getComputedStyle(element);
          let ancestor = element;
          let background = [245,243,237];
          while (ancestor) { const candidate = rgb(getComputedStyle(ancestor).backgroundColor); if (candidate.length < 4 || candidate[3] >= .99) { background = candidate; break; } ancestor = ancestor.parentElement; }
          const foreground = rgb(style.color);
          if (foreground.length === 4 && foreground[3] < 1) for (let index = 0; index < 3; index++) foreground[index] = foreground[index] * foreground[3] + background[index] * (1 - foreground[3]);
          const values = [luminance(foreground), luminance(background)].sort((a,b) => a-b);
          const ratio = (values[1] + .05) / (values[0] + .05);
          const large = parseFloat(style.fontSize) >= 24 || (parseFloat(style.fontSize) >= 18.66 && parseFloat(style.fontWeight) >= 700);
          return ratio + .01 < (large ? 3 : 4.5) ? [{ text: element.textContent.trim().slice(0,90), ratio: Number(ratio.toFixed(2)), color: style.color, background }] : [];
        });
      });
      assert.deepEqual(contrastFailures, [], "Visible text contrast samples meet WCAG AA ratios");
      metadata.push({ route, title, description, canonical, schemas: schemas.length });
      observations.push(await page.evaluate(() => ({ route: location.pathname, ...window.__qaPerf, resources: performance.getEntriesByType("resource").length, localEncodedBytes: performance.getEntriesByType("resource").filter(item => new URL(item.name).origin === location.origin).reduce((sum, item) => sum + item.encodedBodySize, 0), fonts: performance.getEntriesByType("resource").filter(item => /\.woff2(\?|$)/.test(item.name)).map(item => ({ path: new URL(item.name).pathname, bytes: item.encodedBodySize })) })));
    });

    await check(`Five responsive widths and screenshots: ${route}`, async () => {
      const overflow = [];
      for (const width of widths) {
        await page.setViewportSize({ width, height: width === 1440 ? 1000 : 844 });
        const layout = await page.evaluate(() => ({ route: location.pathname, viewport: innerWidth, documentWidth: document.documentElement.scrollWidth, bodyWidth: document.body.scrollWidth, h1Width: document.querySelector("h1")?.getBoundingClientRect().width, mainBackground: getComputedStyle(document.querySelector(".fd-home")).backgroundColor }));
        layouts.push(layout);
        if (layout.documentWidth > width + 1 || layout.bodyWidth > width + 1) overflow.push(`${width}px: ${layout.documentWidth}/${layout.bodyWidth}`);
        if (width === 390 || width === 1440) {
          const filename = `${shotName(route)}-${width === 390 ? "mobile" : "desktop"}.png`;
          await page.screenshot({ path: path.join(screenshotDir, filename), animations: "disabled", fullPage: false });
          screenshots.push({ route, width, file: `${screenshotRelativeDir}/${filename}`, before: existsSync(path.resolve(`previews/phase2/${filename}`)) ? `previews/phase2/${filename}` : null });
        }
      }
      assert.deepEqual(overflow, [], `${route} horizontal overflow`);
    });
  }

  await check("Internal navigation targets respond without missing pages", async () => {
    const links = [...localLinks].filter(link => !link.startsWith("/_next/"));
    const outcomes = [];
    for (let index = 0; index < links.length; index += 4) await Promise.all(links.slice(index, index + 4).map(async route => {
      const response = await context.request.get(`${baseURL}${route}`, { timeout: 120000 });
      outcomes.push({ route, status: response.status() });
      assert.equal(response.status(), 200, route);
    }));
    await writeFile(path.resolve("reports/release-final-link-checks.json"), JSON.stringify(outcomes, null, 2));
  });

  await check("All 115 original HTML URLs remain reachable", async () => {
    const inventory = await readFile("SEO-URL-INVENTORY.csv", "utf8");
    const originals = inventory.split(/\r?\n/).map(line => line.match(/^"([^"]+)","HTML[^\"]*"/)).filter(Boolean).map(match => match[1]);
    assert.equal(originals.length, 115);
    const outcomes = [];
    for (let index = 0; index < originals.length; index += 4) await Promise.all(originals.slice(index, index + 4).map(async route => {
      const response = await context.request.get(`${baseURL}${route}`, { timeout: 120000 });
      outcomes.push({ route, status: response.status() });
      assert.equal(response.status(), 200, route);
    }));
    await writeFile(path.resolve("reports/release-final-original-url-checks.json"), JSON.stringify(outcomes, null, 2));
  });

  await check("Homepage guides and commercial journeys navigate to their destinations", async () => {
    const destinations = ["/services/seo/", "/services/local-seo/", "/services/technical-seo/", "/services/content-marketing/", "/riyadh/seo/", "/jeddah/seo/", "/dammam/seo/", "/blog/"];
    await page.setViewportSize({ width: 390, height: 844 });
    for (const destination of destinations) {
      await page.goto(`${baseURL}/`, { waitUntil: "networkidle" });
      const links = page.locator(`a[href="${destination}"]`);
      assert.ok(await links.count(), `Homepage link missing: ${destination}`);
      await links.last().click();
      await page.waitForURL(url => url.pathname.replace(/\/$/, "") === destination.replace(/\/$/, ""));
      assert.equal(await page.locator("h1").count(), 1);
    }
    await page.goto(`${baseURL}/blog/`);
    const archive = page.locator(".fd-archive-disclosure");
    assert.equal(await archive.getAttribute("open"), null);
    await archive.locator("summary").click();
    assert.equal(await archive.getAttribute("open"), "");
    assert.equal(await archive.locator("a[href^='/blog/']").count(), 82);
  });
  await check("Mobile menu, keyboard escape, real page navigation and FAQ", async () => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto(`${baseURL}/about/`, { waitUntil: "networkidle" });
    const summary = page.locator(".fd-mobile-menu > summary");
    await summary.focus(); await summary.press("Enter");
    assert.equal(await page.locator(".fd-mobile-menu").getAttribute("open"), "");
    await summary.press("Escape");
    assert.equal(await page.locator(".fd-mobile-menu").getAttribute("open"), null);
    assert.equal(await summary.evaluate(element => element === document.activeElement), true);
    await summary.press("Enter");
    await page.locator(".fd-mobile-menu nav").getByRole("link", { name: "SEO Services", exact: true }).click();
    await page.waitForURL("**/services/seo/");
    assert.equal(await page.locator(".fd-mobile-menu").getAttribute("open"), null);
    const faq = page.locator(".fd-faq details").first();
    await faq.locator("summary").focus(); await faq.locator("summary").press("Space");
    assert.equal(await faq.getAttribute("open"), "");
    assert.equal(await faq.locator("p").isVisible(), true);
    assert.equal(await page.locator(".fd-skip").getAttribute("href"), "#main-content");
  });

  await check("Honest contact draft, synthetic analytics mappings and data boundaries", async () => {
    await page.goto(`${baseURL}/contact/`, { waitUntil: "networkidle" });
    const heroAction = page.locator(".fd-page-hero .fd-button");
    assert.equal(await heroAction.getAttribute("href"), "#contact-prepare", "Contact hero action targets the actual enquiry panel");
    await heroAction.click();
    await page.waitForURL(url => url.hash === "#contact-prepare");
    await page.waitForFunction(() => { const heading = document.querySelector("#contact-prepare"); return heading && heading.getBoundingClientRect().top >= -1 && heading.getBoundingClientRect().top < 300; });
    const formPosition = await page.locator("#contact-prepare").boundingBox();
    assert.ok(formPosition.y >= -1 && formPosition.y < 300, "Hero action scrolls directly to the form heading on mobile");
    await page.locator(".fd-review-form button").waitFor({ state: "visible" });
    assert.equal(await page.locator(".fd-review-form button").isEnabled(), true);
    const form = page.locator(".fd-review-form").first();
    const nameField = form.getByLabel("Your name");
    const websiteField = form.getByLabel("Business website");
    const goalField = form.getByLabel(/What would you like to improve/);
    await page.evaluate(() => { window.__qaConversions = []; window.addEventListener("fazil:conversion", event => window.__qaConversions.push(event.detail)); });
    await form.locator("button[type=submit]").click();
    assert.equal(await page.locator(".fd-draft").count(), 0, "Empty form cannot prepare a message");
    await nameField.fill("QA Reviewer");
    await websiteField.fill("https://example.com");
    await goalField.fill("Riyadh visibility & useful content");
    await form.locator("button[type=submit]").click();
    assert.match(await page.locator(".fd-draft").innerText(), /Nothing has been sent/);
    const link = page.locator(".fd-draft a");
    const target = new URL(await link.getAttribute("href"));
    assert.equal(target.origin + target.pathname, "https://wa.me/971542763828");
    assert.equal(target.search, "", "WhatsApp link must not contain personal data");
    await page.evaluate(() => { window.__copied = ""; Object.defineProperty(navigator, "clipboard", { configurable: true, value: { writeText: async value => { window.__copied = value; } } }); });
    await form.locator(".fd-draft button").click();
    assert.match(await page.evaluate(() => window.__copied), /QA Reviewer/);
    assert.match(await page.evaluate(() => window.__copied), /Riyadh visibility & useful content/);
    await link.evaluate(element => element.addEventListener("click", event => event.preventDefault(), { once: true }));
    await link.click();
    const events = await page.evaluate(() => window.__qaConversions);
    assert.deepEqual(events, [{ event: "review_intent" }, { event: "form_submit" }]);
    assert.doesNotMatch(JSON.stringify(events), /QA Reviewer|example\.com|Riyadh visibility/);
    await writeFile(path.resolve("reports/release-final-synthetic-analytics.json"), JSON.stringify({ intercepted: true, conversionEvents: events, personalDataFound: false, whatsappMessageSent: false, method: "Synthetic personal values were kept out of conversion event details; the outbound WhatsApp link was prevented and checked for a constant destination." }, null, 2));
    await goalField.fill("A changed priority");
    assert.equal(await page.locator(".fd-draft").count(), 0, "Editing invalidates the old draft");
  });

  await check("Contact and reading remain useful without JavaScript", async () => {
    const noJS = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 390, height: 844 } });
    await noJS.route("**/*", interceptExternal);
    const plain = await noJS.newPage();
    await plain.goto(`${baseURL}/contact/`);
    assert.equal(await plain.locator("h1").count(), 1);
    assert.equal(await plain.locator(".fd-review-form button").isDisabled(), true);
    assert.equal(await plain.getByRole("link", { name: "contact Mohammad directly on WhatsApp" }).getAttribute("href"), "https://wa.me/971542763828");
    await plain.goto(`${baseURL}/blog/${articleSlugs[0]}/`);
    assert.ok((await plain.locator(".fd-support-article-body").innerText()).length > 2000);
    await noJS.close();
  });

  await check("Reduced motion and no runtime/application resource errors", async () => {
    await page.goto(`${baseURL}/`, { waitUntil: "networkidle" });
    const motion = await page.locator(".fr-hero-copy").evaluate(element => ({ duration: getComputedStyle(element).animationDuration, reduced: matchMedia("(prefers-reduced-motion: reduce)").matches }));
    assert.equal(motion.reduced, true);
    assert.ok(motion.duration.split(",").every(value => parseFloat(value) <= 0.01));
    assert.deepEqual(runtimeErrors, []);
    assert.deepEqual(failedResources, []);
    for (const width of [1440, 390]) { await page.setViewportSize({ width, height: width === 1440 ? 1000 : 844 }); await page.screenshot({ path: path.join(screenshotDir, `home-${width === 1440 ? "desktop" : "mobile"}-full.png`), fullPage: true, animations: "disabled" }); fullScreenshots++; }
  });
} finally {
  await browser.close();
  const passed = results.filter(result => result.status === "PASS").length;
  const failed = results.filter(result => result.status === "FAIL").length;
  const run = { generatedAt: new Date().toISOString(), baseURL, buildId, captureRun, screenshotRelativeDir, passed, failed, results, layouts, metadata, observations, screenshots, runtimeErrors, failedResources, blockedExternal };
  await writeFile(path.resolve("reports/release-final-browser-results.json"), JSON.stringify(run, null, 2));
  const report = `# Final release browser verification\n\nRun: ${run.generatedAt}. Local production target: ${baseURL}. Installed Chromium via Playwright, headless. ${passed} checks passed; ${failed} failed.\n\n## Coverage\n\nTwenty rebuilt/new routes (homepage, four services, three Saudi city pages, About, Contact, Case Studies, Blog and all eight original guides), plus the historically important Snapchat article, at 320, 390, 768, 1024 and 1440 pixels. Expected coverage is 42 desktop/mobile viewport screenshots plus two homepage full-page captures in previews/release-final; actual captures are listed below. All 115 original HTML URLs are checked separately.\n\n| Check | Result |\n| --- | --- |\n${results.map(result => `| ${result.name} | ${result.status} |`).join("\n")}\n\n${failed ? `## Failures\n\n${results.filter(result => result.status === "FAIL").map(result => `- ${result.name}: ${result.message}`).join("\n")}\n\n` : ""}## Evidence\n\n- Complete results, responsive dimensions, metadata and resource observations: reports/release-final-browser-results.json.\n- Link responses: reports/release-final-link-checks.json.\n- Original URL responses: reports/release-final-original-url-checks.json.\n- Synthetic analytics mapping: reports/release-final-synthetic-analytics.json.\n\n## Screenshots\n\n${screenshots.map(item => `- [${item.route} at ${item.width}px](${item.file})`).join("\n")}\n\n## Interpretation and limits\n\nAnalytics uses the synthetic G-TESTONLY build configuration. All Google and WhatsApp requests are intercepted; the outbound review link click is prevented from opening another page. These checks validate local intent and click mappings, not delivery to a GA account, a sent WhatsApp message or a qualified lead. The form stores no backend submission.\n\nLocal LCP/CLS/resource observations are one synthetic navigation under a local server; they are not field Core Web Vitals, an INP assessment or a Lighthouse score. Keyboard, semantics, native form validation, reduced motion and no-JavaScript checks are useful coverage, not a WCAG certification. Compilation, full lint, dependency audit and technical sitemap/redirect assertions are separately owned by the technical engineer. Screenshots require visual inspection before design approval. No production deployment, merge or external enquiry is performed.\n`;
  const comparisons = `# Phase 3 screenshot inventory\n\nCurrent local production build: \`${buildId}\`, captured at ${run.generatedAt}, target ${baseURL}. Phase 2 images are historical before-reference captures; Phase 3 images come from this verified current build, with matching 1440 × 1000 desktop and 390 × 844 mobile viewports. All network requests outside the local preview origin are intercepted. No production deployment or external enquiry is performed.\n\n| Page | Width | Before: Phase 2 | After: Phase 3 |\n| --- | ---: | --- | --- |\n${screenshots.map(item => `| ${item.route} | ${item.width} | ${item.before ? `[Before](${item.before})` : "No matching historical capture"} | [After](${item.file}) |`).join("\n")}\n\nHomepage full-page captures: [desktop](${screenshotRelativeDir}/home-desktop-full.png), [mobile](${screenshotRelativeDir}/home-mobile-full.png). These include the updated three insight cards and five additional Saudi guide links.\n\nVisual inspection observations are appended after reviewing the captures; compilation/overflow success alone does not constitute design approval.\n`;
  await writeFile(path.resolve("RELEASE-SCREENSHOT-INVENTORY.md"), comparisons);
  await writeFile(path.resolve("RELEASE-BROWSER-VERIFICATION.md"), report + `\n## Build and comparison provenance\n\nLocal build ID: \`${buildId}\`. Capture run: ${captureRun}. Actual screenshot folder: \`${screenshotRelativeDir}\`. See [before/after inventory](RELEASE-SCREENSHOT-INVENTORY.md). Phase 2 files were preserved and not overwritten.\n`);
  console.log(JSON.stringify({ passed, failed, screenshotCount: screenshots.length + fullScreenshots, responsiveCases: layouts.length }, null, 2));
  if (failed) process.exitCode = 1;
}
