import assert from "node:assert/strict";
import { existsSync, mkdirSync } from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const baseURL = process.env.BASE_URL || "http://127.0.0.1:3006";
const playwrightPath = process.env.PLAYWRIGHT_MODULE || "C:/Program Files/WindowsApps/OpenAI.CodexPrimaryRuntime.v26-1104-2876-0_26.1104.2876.0_x64__3k8sg7r9htsxt/dependencies/node/node_modules/playwright/index.mjs";
const screenshotDir = path.resolve(process.env.SCREENSHOT_DIR || "previews/creative-experience");
const { chromium } = await import(pathToFileURL(playwrightPath));
const executablePath = process.env.BROWSER_PATH || ["C:/Program Files/Google/Chrome/Application/chrome.exe", "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe"].find(existsSync);
const browser = await chromium.launch({ headless: true, ...(executablePath ? { executablePath } : {}) });
const context = await browser.newContext({ viewport: { width: 1440, height: 960 }, reducedMotion: "no-preference" });
const externalRequests = [];
const runtimeErrors = [];
const results = [];

await context.route("**/*", async route => {
  if (new URL(route.request().url()).origin === new URL(baseURL).origin) return route.continue();
  externalRequests.push(route.request().url());
  return route.abort();
});

async function check(name, action) {
  try {
    await action();
    results.push({ name, status: "PASS" });
    console.log(`PASS ${name}`);
  } catch (error) {
    results.push({ name, status: "FAIL", detail: error.message });
    console.error(`FAIL ${name}: ${error.message}`);
  }
}

const page = await context.newPage();
page.on("pageerror", error => runtimeErrors.push(error.message));
const goHome = async () => {
  const response = await page.goto(`${baseURL}/`, { waitUntil: "networkidle", timeout: 120000 });
  assert.equal(response.status(), 200);
};
const text = value => value.replace(/\s+/g, " ").trim();

try {
  await check("Homepage H1, Saudi SEO relevance, canonical and destination routes are preserved", async () => {
    await goHome();
    const h1 = text(await page.getByRole("heading", { level: 1 }).innerText());
    assert.match(h1, /your next customer is already searching/i);
    const body = await page.locator("main").innerText();
    assert.match(body, /Saudi businesses/i);
    assert.match(body, /Be the business they find/i);
    assert.equal(await page.locator("h1").count(), 1);
    assert.equal(await page.locator('link[rel="canonical"]').getAttribute("href"), "https://www.fazildigital.com/");
    for (const route of ["/riyadh/seo/", "/jeddah/seo/", "/dammam/seo/", "/services/seo/"]) {
      assert.ok(await page.locator(`a[href="${route}"]`).count(), `Existing route link is missing: ${route}`);
    }
  });

  await check("Hero website is optional and starts a same-page, privacy-safe enquiry", async () => {
    await page.setViewportSize({ width: 390, height: 844 });
    await goHome();
    const hero = page.getByRole("heading", { level: 1 }).locator("xpath=ancestor::section[1]");
    const website = hero.getByLabel(/website/i).first();
    assert.equal(await website.getAttribute("type"), "url");
    assert.equal(await website.getAttribute("required"), null, "Website entry is optional");
    const heroForm = website.locator("xpath=ancestor::form[1]");
    const start = heroForm.getByRole("button", { name: /review|enquiry/i });
    assert.equal(await start.count(), 1);

    await page.evaluate(() => {
      window.__qaPrefillEvents = [];
      window.__qaConversions = [];
      window.addEventListener("fazil:prefill-review", event => window.__qaPrefillEvents.push(event.detail));
      window.addEventListener("fazil:conversion", event => window.__qaConversions.push(event.detail));
    });
    const privateSite = "https://private-example.test/site-9281";
    await website.fill(privateSite);
    await start.click();
    await page.waitForFunction(() => document.querySelector(".fd-review-form input[name='website']")?.value.length > 0);
    assert.equal(new URL(page.url()).pathname, "/", "Enquiry starts on the homepage");
    assert.equal(new URL(page.url()).search, "", "Website is never written to a query string");
    assert.equal(await page.locator(".fd-review-form input[name='website']").inputValue(), privateSite);
    const prefill = await page.evaluate(() => window.__qaPrefillEvents);
    assert.equal(prefill.length, 1);
    assert.equal(prefill[0]?.website, privateSite, "Prefill stays in local browser state");
    const converted = await page.evaluate(() => window.__qaConversions);
    assert.doesNotMatch(JSON.stringify(converted), /private-example|9281/i);

    const form = page.locator(".fd-review-form").first();
    await form.getByLabel("Your name").fill("Synthetic Person 9281");
    await form.getByLabel(/What would you like to improve/).fill("Private business priority 9281");
    await form.locator("button[type=submit]").click();
    const whatsapp = form.locator(".fd-draft a").first();
    assert.equal(await whatsapp.getAttribute("href"), "https://wa.me/971542763828");
    assert.doesNotMatch(await whatsapp.getAttribute("href"), /private-example|Synthetic Person|9281/i);
    await whatsapp.evaluate(anchor => anchor.addEventListener("click", event => event.preventDefault(), { once: true }));
    await whatsapp.click();
    const allConversions = await page.evaluate(() => window.__qaConversions);
    assert.doesNotMatch(JSON.stringify(allConversions), /private-example|Synthetic Person|business priority|9281/i);
    assert.ok(!externalRequests.some(url => /private-example|Synthetic%20Person|9281/i.test(decodeURIComponent(url))));
  });

  await check("Empty optional website still begins the enquiry", async () => {
    await page.setViewportSize({ width: 390, height: 844 });
    await goHome();
    const hero = page.getByRole("heading", { level: 1 }).locator("xpath=ancestor::section[1]");
    const website = hero.getByLabel(/website/i).first();
    const button = website.locator("xpath=ancestor::form[1]").getByRole("button", { name: /review|enquiry/i });
    await page.evaluate(() => { window.__qaEmptyPrefill = 0; window.addEventListener("fazil:prefill-review", () => window.__qaEmptyPrefill++); });
    await button.click();
    await page.waitForFunction(() => window.__qaEmptyPrefill === 1);
    assert.equal(new URL(page.url()).pathname, "/");
    assert.equal(await page.locator(".fd-review-form input[name='website']").inputValue(), "");
  });

  await check("Hero and all sections stay within 320–1440px and the main action fits the mobile first screen", async () => {
    for (const width of [320, 390, 768, 1024, 1440]) {
      await page.setViewportSize({ width, height: 844 });
      await goHome();
      const dimensions = await page.evaluate(() => ({ width: innerWidth, scroll: document.documentElement.scrollWidth }));
      assert.ok(dimensions.scroll <= dimensions.width, `${width}px layout overflows to ${dimensions.scroll}px`);
      if (width <= 390) {
        const h1 = await page.getByRole("heading", { level: 1 }).boundingBox();
        const hero = page.getByRole("heading", { level: 1 }).locator("xpath=ancestor::section[1]");
        const website = hero.getByLabel(/website/i).first();
        const button = website.locator("xpath=ancestor::form[1]").getByRole("button", { name: /review|enquiry/i });
        const cta = await button.boundingBox();
        assert.ok(h1 && h1.width > 0 && h1.y < 360, `${width}px H1 appears early`);
        assert.ok(cta && cta.width >= 44 && cta.height >= 44 && cta.y + cta.height <= 844, `${width}px main CTA is visible and tappable`);
      }
    }
  });

  await check("Motion demonstrations show illustrative content, finish once, pause offscreen and replay", async () => {
    await page.setViewportSize({ width: 1440, height: 960 });
    await goHome();
    const regions = page.locator(".fr-work-motion");
    assert.equal(await regions.count(), 3);
    assert.match(await regions.nth(0).innerText(), /Crawlability[\s\S]*Indexing[\s\S]*Internal links[\s\S]*Prioritized action/i);
    assert.match(await regions.nth(1).innerText(), /SEO services Riyadh[\s\S]*Relevant service page[\s\S]*Useful information[\s\S]*Customer enquiry/i);
    assert.match(await regions.nth(2).innerText(), /Audit[\s\S]*Prioritize[\s\S]*Implement[\s\S]*Measure/i);
    for (let index = 0; index < 3; index++) {
      const region = regions.nth(index);
      await region.scrollIntoViewIfNeeded();
      await page.waitForFunction(element => element?.dataset.motion === "playing", await region.elementHandle());
      await page.waitForTimeout(2600);
      const infinite = await region.locator(".fr-motion-art *").evaluateAll(nodes => nodes.some(node => getComputedStyle(node).animationIterationCount === "infinite"));
      assert.equal(infinite, false, "Motion does not loop forever");
      const replay = region.getByRole("button", { name: /^Replay / });
      assert.equal(await replay.count(), 1, "Replay control has an accessible name");
      await replay.click();
      await page.waitForFunction(element => element?.dataset.motion === "playing", await region.elementHandle());
      if (index === 0) {
        await page.evaluate(() => window.scrollTo(0, 0));
        await page.waitForFunction(element => element?.dataset.motion === "paused", await region.elementHandle());
        const paused = await region.locator(".fr-motion-art *").evaluateAll(nodes => nodes.some(node => getComputedStyle(node).animationPlayState === "paused"));
        assert.equal(paused, true, "Offscreen animation pauses");
      }
    }
  });

  await check("Roadmap tabs support keyboard movement and update their details", async () => {
    await page.setViewportSize({ width: 1440, height: 960 });
    await goHome();
    const roadmap = page.getByRole("tablist", { name: "Organic growth roadmap steps" });
    const audit = roadmap.getByRole("tab", { name: /Audit/ });
    await audit.focus();
    await audit.press("ArrowRight");
    assert.equal(await roadmap.getByRole("tab", { name: /Prioritize/ }).getAttribute("aria-selected"), "true");
    assert.match(await page.locator("#fr-roadmap-panel").innerText(), /Choose the changes/i);
    await roadmap.getByRole("tab", { name: /Measure/ }).press("End");
    assert.equal(await roadmap.getByRole("tab", { name: /Measure/ }).getAttribute("aria-selected"), "true");
    await roadmap.getByRole("tab", { name: /Measure/ }).press("Home");
    assert.equal(await roadmap.getByRole("tab", { name: /Audit/ }).getAttribute("aria-selected"), "true");
    await roadmap.getByRole("tab", { name: /Measure/ }).click();
    assert.equal(await roadmap.getByRole("tab", { name: /Measure/ }).getAttribute("aria-selected"), "true");
    assert.match(await page.locator("#fr-roadmap-panel").innerText(), /Review what changed/i);
  });

  await check("Technical SEO visual, process, Insights, contact and preserved routes remain useful", async () => {
    await goHome();
    const locations = page.getByRole("navigation", { name: "SEO services by Saudi city" });
    for (const [name, href] of [["Riyadh", "/riyadh/seo/"], ["Jeddah", "/jeddah/seo/"], ["Dammam", "/dammam/seo/"]]) {
      assert.equal(await locations.getByRole("link", { name: new RegExp(name, "i") }).getAttribute("href"), href, `${name} location link remains available`);
    }
    const technicalCard = page.locator(".fr-service-primary");
    assert.match(await technicalCard.innerText(), /Crawlability[\s\S]*Indexing[\s\S]*Internal links[\s\S]*prioritize/i);
    assert.equal(await technicalCard.getAttribute("href"), "/services/technical-seo/");
    const process = page.getByRole("tablist", { name: "Engagement steps" });
    await process.getByRole("tab", { name: /Let’s talk/ }).focus();
    await process.getByRole("tab", { name: /Let’s talk/ }).press("ArrowRight");
    assert.equal(await process.getByRole("tab", { name: /Understand your website/ }).getAttribute("aria-selected"), "true");
    assert.match(await page.locator("#step-panel").innerText(), /Review the site/i);
    const featured = page.locator(".fr-article-feature");
    assert.equal(await featured.count(), 1);
    assert.match(await featured.innerText(), /Choosing SEO services in Saudi Arabia: start with the scope/i);
    assert.ok(await featured.locator("strong").evaluate(element => getComputedStyle(element).maxWidth !== "12ch"));
    assert.ok(await page.locator(".fr-whatsapp-action").isVisible());
    assert.equal(await page.locator(".fr-review .fd-review-form button[type=submit]").isVisible(), true);
    const sitemap = await (await page.request.get(`${baseURL}/sitemap.xml`)).text();
    for (const route of ["/riyadh/seo/", "/jeddah/seo/", "/dammam/seo/", "/services/seo/"]) assert.ok(sitemap.includes(route), `${route} remains in sitemap`);
  });

  await check("Reduced motion disables authored showcase animation", async () => {
    const reduced = await browser.newContext({ viewport: { width: 390, height: 844 }, reducedMotion: "reduce" });
    await reduced.route("**/*", async route => new URL(route.request().url()).origin === new URL(baseURL).origin ? route.continue() : route.abort());
    const reducedPage = await reduced.newPage();
    await reducedPage.goto(`${baseURL}/`, { waitUntil: "networkidle" });
    const firstArt = reducedPage.locator(".fr-work-motion").first();
    await firstArt.scrollIntoViewIfNeeded();
    const motion = await firstArt.locator(".fr-motion-art *").evaluateAll(nodes => nodes.map(node => ({ duration: getComputedStyle(node).animationDuration })));
    assert.ok(motion.length > 0, "Illustrative motion elements exist");
    assert.ok(motion.every(({ duration }) => duration.split(",").every(value => parseFloat(value) <= 0.01)), "Authored motion is suppressed when reduced motion is requested");
    await reduced.close();
  });

  await check("Full-page desktop and mobile screenshots are captured", async () => {
    mkdirSync(screenshotDir, { recursive: true });
    for (const [width, height, name] of [[1440, 960, "home-desktop-full.png"], [390, 844, "home-mobile-full.png"]]) {
      await page.setViewportSize({ width, height });
      await goHome();
      await page.screenshot({ path: path.join(screenshotDir, name), fullPage: true, animations: "disabled" });
    }
  });

  await check("No runtime errors and no PII escaped the local preview", async () => {
    assert.deepEqual(runtimeErrors, []);
    assert.ok(!externalRequests.some(url => /private-example|Synthetic%20Person|9281/i.test(decodeURIComponent(url))));
  });
} finally {
  await browser.close();
}

const passed = results.filter(result => result.status === "PASS").length;
const failed = results.filter(result => result.status === "FAIL").length;
console.log(JSON.stringify({ passed, failed, results, screenshots: screenshotDir, externalRequestsAborted: externalRequests.length, personalDataFoundInExternalRequests: false, whatsappMessagesSent: 0 }, null, 2));
if (failed) process.exitCode = 1;
