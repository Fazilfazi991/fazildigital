import assert from "node:assert/strict";
import { mkdir } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";

const baseURL = process.env.BASE_URL || "http://127.0.0.1:3006";
const playwrightPath = process.env.PLAYWRIGHT_MODULE;
assert.ok(playwrightPath, "Set PLAYWRIGHT_MODULE to an installed Playwright module.");
const { chromium } = await import(pathToFileURL(playwrightPath));
const browser = await chromium.launch({ headless: true, ...(process.env.BROWSER_PATH ? { executablePath: process.env.BROWSER_PATH } : {}) });
const context = await browser.newContext({ viewport: { width: 1440, height: 1000 }, deviceScaleFactor: 1, reducedMotion: "reduce" });
await context.route("**/*", route => new URL(route.request().url()).origin === new URL(baseURL).origin ? route.continue() : route.abort());
const page = await context.newPage();
const runtimeErrors = [];
page.on("pageerror", error => runtimeErrors.push(error.message));
const response = await page.goto(`${baseURL}/digital-marketing-expert-calicut/`, { waitUntil: "networkidle", timeout: 120000 });
assert.equal(response.status(), 200);
await page.evaluate(() => document.fonts.ready);

assert.equal(await page.locator("h1").count(), 1);
assert.equal(await page.locator(".fd-home > .fd-header").count(), 1);
assert.equal(await page.locator("footer").count(), 1);
assert.equal(await page.title(), "Digital Marketing Expert in Calicut | Mohammad Fazil");
assert.ok((await page.locator('meta[name="description"]').getAttribute("content")).includes("Calicut and Kerala"));
assert.equal(await page.locator('link[rel="canonical"]').getAttribute("href"), "https://www.fazildigital.com/digital-marketing-expert-calicut/");
assert.match(await page.locator('meta[name="robots"]').getAttribute("content"), /noindex/i);
assert.equal(await page.locator('link[hreflang]').count(), 0);
assert.ok((await page.locator(".fd-header-cta").getAttribute("href")).includes("market=calicut"), "Header enquiry CTA preserves Calicut context");
assert.ok((await page.locator('.fd-desktop-nav a[href*="/contact/"]').getAttribute("href")).includes("market=calicut"), "Contact navigation preserves Calicut context");
assert.ok((await page.locator('.fd-footer nav a[href*="/contact/"]').getAttribute("href")).includes("market=calicut"), "Footer contact preserves Calicut context");
const schemaBlocks = await page.locator('script[type="application/ld+json"]').allTextContents();
const schema = schemaBlocks.map(JSON.parse).flatMap(block => block["@graph"] || [block]);
assert.ok(schema.some(item => item["@type"] === "Person" && item.name === "Mohammad Fazil"));
const service = schema.find(item => item["@type"] === "Service");
assert.ok(service);
assert.ok(JSON.stringify(service.areaServed).includes("Kozhikode") && JSON.stringify(service.areaServed).includes("Kerala"));
assert.ok(!JSON.stringify(schema).includes("PostalAddress"));
const sitemap = await (await context.request.get(`${baseURL}/sitemap.xml`)).text();
assert.ok(!sitemap.includes("digital-marketing-expert-calicut"), "Calicut remains out of the public sitemap until launch approval");

const widths = [320, 390, 768, 1024, 1440];
const layouts = [];
for (const width of widths) {
  await page.setViewportSize({ width, height: width >= 1024 ? 1000 : 844 });
  const layout = await page.evaluate(() => {
    const heading = document.querySelector("h1");
    const action = document.querySelector(".fd-calicut-actions .fd-button");
    return {
      viewport: innerWidth,
      documentWidth: document.documentElement.scrollWidth,
      bodyWidth: document.body.scrollWidth,
      headingWidth: heading?.getBoundingClientRect().width,
      headingHeight: heading?.getBoundingClientRect().height,
      heroActionBottom: action?.getBoundingClientRect().bottom,
      viewportHeight: innerHeight,
    };
  });
  layouts.push(layout);
  assert.ok(layout.documentWidth <= width + 1 && layout.bodyWidth <= width + 1, `Horizontal overflow at ${width}px: ${layout.documentWidth}/${layout.bodyWidth}`);
  assert.ok(layout.headingWidth > 0 && layout.headingHeight > 0, `Visible H1 at ${width}px`);
  assert.ok(layout.heroActionBottom < layout.viewportHeight, `Hero enquiry CTA is visible in the first viewport at ${width}px`);
}

await page.setViewportSize({ width: 390, height: 844 });
const menuSummary = page.locator(".fd-mobile-menu > summary");
await menuSummary.focus();
await menuSummary.press("Enter");
assert.equal(await page.locator(".fd-mobile-menu").getAttribute("open"), "");
await menuSummary.press("Escape");
assert.equal(await page.locator(".fd-mobile-menu").getAttribute("open"), null);
assert.ok(await menuSummary.evaluate(element => element === document.activeElement), "Escape returns focus to the menu control");

const faq = page.locator(".fd-calicut-faq details").first();
assert.equal(await faq.getAttribute("open"), null);
await faq.locator("summary").click();
assert.equal(await faq.getAttribute("open"), "");
assert.ok(await faq.locator("p").isVisible());

const unnamedLinks = await page.locator("a").evaluateAll(links => links.filter(link => link.getClientRects().length && !(link.getAttribute("aria-label") || link.innerText).trim()).map(link => link.outerHTML));
assert.deepEqual(unnamedLinks, [], "Every link has an accessible name");
const contrastFailures = await page.locator("main p, main label, main summary, main h1, main h2, main h3, main a").evaluateAll(elements => {
  const rgb = value => { const match = value.match(/[\d.]+/g); return match ? match.map(Number) : [0, 0, 0, 0]; };
  const luminance = color => color.slice(0, 3).map(value => { const channel = value / 255; return channel <= .04045 ? channel / 12.92 : ((channel + .055) / 1.055) ** 2.4; }).reduce((sum, value, index) => sum + value * [.2126, .7152, .0722][index], 0);
  return elements.filter(element => element.getClientRects().length && element.textContent.trim()).flatMap(element => {
    const style = getComputedStyle(element); let ancestor = element; let background = [245, 243, 237];
    while (ancestor) { const candidate = rgb(getComputedStyle(ancestor).backgroundColor); if (candidate.length < 4 || candidate[3] >= .99) { background = candidate; break; } ancestor = ancestor.parentElement; }
    const foreground = rgb(style.color); const values = [luminance(foreground), luminance(background)].sort((a, b) => a - b);
    const ratio = (values[1] + .05) / (values[0] + .05); const large = parseFloat(style.fontSize) >= 24 || (parseFloat(style.fontSize) >= 18.66 && parseFloat(style.fontWeight) >= 700);
    return ratio + .01 < (large ? 3 : 4.5) ? [{ text: element.textContent.trim().slice(0, 80), ratio: Number(ratio.toFixed(2)) }] : [];
  });
});
assert.deepEqual(contrastFailures, [], "Visible text meets sampled WCAG AA contrast thresholds");

const screenshotDir = path.resolve("previews/calicut-final");
await mkdir(screenshotDir, { recursive: true });
await page.setViewportSize({ width: 390, height: 844 });
await page.screenshot({ path: path.join(screenshotDir, "calicut-mobile-full.png"), fullPage: true, animations: "disabled" });
await page.setViewportSize({ width: 1440, height: 1000 });
await page.screenshot({ path: path.join(screenshotDir, "calicut-desktop-full.png"), fullPage: true, animations: "disabled" });
assert.deepEqual(runtimeErrors, []);
console.log(JSON.stringify({ status: "PASS", route: "/digital-marketing-expert-calicut/", widths, layouts, checks: ["status and metadata", "one H1", "Person and Service schema", "robots noindex and sitemap exclusion", "responsive overflow", "first-viewport enquiry CTA", "mobile menu keyboard and focus", "FAQ interaction", "link names", "sampled WCAG AA contrast", "runtime errors"], screenshots: ["previews/calicut-final/calicut-mobile-full.png", "previews/calicut-final/calicut-desktop-full.png"] }, null, 2));
await browser.close();
