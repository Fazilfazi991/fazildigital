import assert from "node:assert/strict";
import { pathToFileURL } from "node:url";

const baseURL = process.env.BASE_URL || "http://127.0.0.1:3006";
assert.ok(process.env.PLAYWRIGHT_MODULE, "Set PLAYWRIGHT_MODULE to Playwright.");
const { chromium } = await import(pathToFileURL(process.env.PLAYWRIGHT_MODULE));
const browser = await chromium.launch({ headless: true, ...(process.env.BROWSER_PATH ? { executablePath: process.env.BROWSER_PATH } : {}) });
const context = await browser.newContext({ viewport: { width: 390, height: 844 } });
const externalRequests = [];
await context.route("**/*", async route => {
  const url = new URL(route.request().url());
  if (url.origin === new URL(baseURL).origin) return route.continue();
  externalRequests.push(route.request().url());
  await route.abort();
});

for (const market of ["saudi", "calicut"]) {
  const page = await context.newPage();
  const route = market === "calicut" ? "/contact/?market=calicut#contact-prepare" : "/contact/#contact-prepare";
  await page.goto(`${baseURL}${route}`, { waitUntil: "networkidle" });
  await page.evaluate(() => {
    window.__conversionEvents = [];
    window.addEventListener("fazil:conversion", event => window.__conversionEvents.push(event.detail));
    Object.defineProperty(navigator, "clipboard", { configurable: true, value: { writeText: async value => { window.__copied = value; } } });
  });
  const marker = market === "calicut" ? "CalicutSynthetic" : "SaudiSynthetic";
  await page.locator('.fd-review-form input[name="name"]').fill(marker);
  await page.locator('.fd-review-form input[name="website"]').fill(`https://${marker.toLowerCase()}.example`);
  await page.locator('.fd-review-form textarea[name="goal"]').fill(`${marker} private priority`);
  await page.locator('.fd-review-form button[type="submit"]').click();
  const expected = market === "calicut"
    ? "Hello Mohammad, I'd like to discuss SEO and digital marketing for my business in Calicut/Kozhikode."
    : "Hello Mohammad, I'd like to request an SEO review for my Saudi business.";
  assert.equal(await page.locator(".fd-draft a").getAttribute("href"), "https://wa.me/971542763828");
  assert.ok((await page.locator("a").evaluateAll(links => links.map(link => link.href))).every(href => !href.includes(marker)), "No personal values in link parameters");
  await page.locator(".fd-draft button").click();
  const message = await page.evaluate(() => window.__copied);
  assert.ok(message.startsWith(expected), `${market} greeting is correct`);
  assert.ok(message.includes(marker) && message.includes(`${marker} private priority`));
  const events = await page.evaluate(() => window.__conversionEvents);
  assert.deepEqual(events, [{ event: "review_intent" }], "Only generic intent is exposed to analytics");
  await page.close();
}

assert.deepEqual(externalRequests, [], "No message or personal data was sent to an external destination");
await browser.close();
console.log("PASS: Saudi and Calicut message wording, local copy, clean WhatsApp URL, no personal values in links or conversion events, and no automatic send.");
