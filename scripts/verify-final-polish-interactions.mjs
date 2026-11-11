import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { pathToFileURL } from "node:url";

const baseURL = process.env.BASE_URL || "http://127.0.0.1:3006";
const playwrightPath = process.env.PLAYWRIGHT_MODULE || "C:/Program Files/WindowsApps/OpenAI.CodexPrimaryRuntime.v26-1104-2876-0_26.1104.2876.0_x64__3k8sg7r9htsxt/dependencies/node/node_modules/playwright/index.mjs";
const { chromium } = await import(pathToFileURL(playwrightPath));
const executablePath = process.env.BROWSER_PATH || ["C:/Program Files/Google/Chrome/Application/chrome.exe", "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe"].find(existsSync);
const browser = await chromium.launch({ headless: true, ...(executablePath ? { executablePath } : {}) });
const context = await browser.newContext({ viewport: { width: 1440, height: 960 }, reducedMotion: "no-preference" });
const externalRequests = [];
const errors = [];
const results = [];
await context.route("**/*", async route => {
  if (new URL(route.request().url()).origin === new URL(baseURL).origin) return route.continue();
  externalRequests.push(route.request().url());
  return route.abort();
});

async function check(name, action) {
  try { await action(); results.push({ name, status: "PASS" }); console.log(`PASS ${name}`); }
  catch (error) { results.push({ name, status: "FAIL", detail: error.message }); console.error(`FAIL ${name}: ${error.message}`); }
}

const page = await context.newPage();
page.on("pageerror", error => errors.push(error.message));
const goto = async route => {
  const response = await page.goto(`${baseURL}${route}`, { waitUntil: "networkidle", timeout: 120000 });
  assert.equal(response.status(), 200, route);
};

try {
  await check("About enquiry dialogs, unique IDs and keyboard behavior", async () => {
    await page.setViewportSize({ width: 390, height: 844 });
    await goto("/about/");
    assert.equal(await page.locator("dialog").count(), 2, "Both About enquiry entry points are available");
    const ids = await page.locator("input[id],textarea[id]").evaluateAll(nodes => nodes.map(node => node.id));
    assert.equal(new Set(ids).size, ids.length, "Every repeated form control has a unique ID");
    const trigger = page.getByRole("button", { name: "Talk about your project", exact: true });
    await trigger.focus();
    await trigger.press("Enter");
    const dialog = page.locator("dialog[open]");
    assert.equal(await dialog.count(), 1);
    assert.equal(await dialog.getByRole("heading", { name: "Tell me about your project." }).count(), 1);
    assert.equal(await dialog.evaluate(node => node.matches(":modal")), true, "Native modal dialog provides modal focus behavior");
    assert.ok(await dialog.boundingBox());
    await page.keyboard.press("Tab");
    assert.equal(await dialog.evaluate(node => node.contains(document.activeElement)), true, "Tab stays within the open dialog");
    await page.keyboard.press("Escape");
    assert.equal(await dialog.count(), 0, "Escape closes the dialog");
    assert.equal(await trigger.evaluate(node => node === document.activeElement), true, "Focus returns to its opener");
  });

  await check("Project message stays local until the visitor opens WhatsApp", async () => {
    await goto("/about/");
    const trigger = page.getByRole("button", { name: "Talk about your project", exact: true });
    await trigger.click();
    const dialog = page.locator("dialog[open]");
    const form = dialog.locator(".fd-review-form");
    const name = form.getByLabel("Your name");
    const project = form.getByLabel(/What are you working on/);
    await page.evaluate(() => {
      window.__qaConversions = [];
      window.addEventListener("fazil:conversion", event => window.__qaConversions.push(event.detail));
      window.__qaCopied = "";
      Object.defineProperty(navigator, "clipboard", { configurable: true, value: { writeText: async value => { window.__qaCopied = value; } } });
    });
    await name.fill("SyntheticName9281");
    await project.fill("PrivateGoal9281");
    await form.locator("button[type=submit]").click();
    const draft = dialog.locator(".fd-draft");
    assert.doesNotMatch(await draft.innerText(), /SyntheticName9281|PrivateGoal9281/, "Visitor details stay hidden until explicitly copied");
    assert.doesNotMatch(await draft.innerText(), /SyntheticName9281|PrivateGoal9281/, "Visitor details stay hidden until explicitly copied");
    assert.doesNotMatch(await draft.innerText(), /Website:/, "Optional website is omitted when blank");
    const whatsapp = draft.getByRole("link", { name: /Open WhatsApp/ });
    assert.equal(await whatsapp.getAttribute("href"), "https://wa.me/971542763828");
    assert.doesNotMatch(await whatsapp.getAttribute("href"), /SyntheticName9281|PrivateGoal9281/);
    await draft.getByRole("button", { name: "Copy message" }).click();
    assert.match(await page.evaluate(() => window.__qaCopied), /SyntheticName9281/);
    assert.match(await page.evaluate(() => window.__qaCopied), /PrivateGoal9281/, "Prepared message stays in browser state");
    await page.evaluate(() => Object.defineProperty(navigator, "clipboard", { configurable: true, value: { writeText: async () => { throw new Error("Clipboard denied"); } } }));
    await draft.getByRole("button", { name: "Copy message" }).click();
    const manualCopy = draft.getByLabel("Copy this message manually");
    assert.match(await manualCopy.inputValue(), /PrivateGoal9281/);
    await whatsapp.evaluate(anchor => anchor.addEventListener("click", event => event.preventDefault(), { once: true }));
    await whatsapp.click();
    const conversions = await page.evaluate(() => window.__qaConversions);
    assert.deepEqual(conversions, [{ event: "review_intent" }, { event: "form_submit" }]);
    assert.doesNotMatch(JSON.stringify(conversions), /SyntheticName9281|PrivateGoal9281/);
    assert.ok(!externalRequests.some(url => /SyntheticName9281|PrivateGoal9281/.test(decodeURIComponent(url))));
    await form.getByLabel("Your name").fill("SyntheticName9281 edited");
    assert.equal(await draft.count(), 0, "Editing removes the stale message draft");
    await dialog.getByRole("button", { name: "Close project enquiry" }).click();
    assert.equal(await trigger.evaluate(node => node === document.activeElement), true);
  });

  await check("SEO inner-page hero CTAs open the enquiry without a page hop", async () => {
    for (const route of ["/services/seo/", "/services/technical-seo/", "/services/local-seo/", "/services/content-marketing/", "/riyadh/seo/", "/jeddah/seo/", "/dammam/seo/"]) {
      await page.setViewportSize({ width: 390, height: 844 });
      await goto(route);
      const hero = page.locator(".fd-page-hero");
      const cta = hero.getByRole("button");
      await cta.click();
      assert.equal(await page.locator("dialog[open]").count(), 1, route);
      assert.equal(new URL(page.url()).pathname, route, "CTA does not navigate to a second page");
      await page.locator("dialog[open]").getByRole("button", { name: "Close project enquiry" }).click();
    }
  });

  await check("Mobile menu stays within the viewport and closes by keyboard", async () => {
    for (const width of [320, 390, 768, 1024, 1440]) {
      await page.setViewportSize({ width, height: 844 });
      await goto("/services/seo/");
      const closed = await page.evaluate(() => ({ width: innerWidth, scroll: document.documentElement.scrollWidth, menuDisplay: getComputedStyle(document.querySelector(".fd-mobile-menu nav")).display }));
      assert.ok(closed.scroll <= width, `${width}px closed page overflow: ${closed.scroll}`);
      if (width <= 820) {
        assert.equal(closed.menuDisplay, "none", "Closed disclosure menu is hidden");
        const summary = page.locator(".fd-mobile-menu > summary");
        await summary.focus(); await summary.press("Enter");
        assert.equal(await page.locator(".fd-mobile-menu").getAttribute("open"), "");
        assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `${width}px opened menu stays in viewport`);
        await summary.press("Escape");
        assert.equal(await page.locator(".fd-mobile-menu").getAttribute("open"), null);
        assert.equal(await summary.evaluate(node => node === document.activeElement), true);
      }
    }
  });

  await check("Showcase illustrations play, pause offscreen, retain final states and replay", async () => {
    await page.setViewportSize({ width: 1440, height: 960 });
    await goto("/");
    const regions = page.locator(".fr-work-motion");
    assert.equal(await regions.count(), 3);
    const first = regions.nth(0);
    await first.scrollIntoViewIfNeeded();
    await page.waitForFunction(element => element?.dataset.motion === "playing", await first.elementHandle());
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForFunction(element => element?.dataset.motion === "paused", await first.elementHandle());
    await first.scrollIntoViewIfNeeded();
    await page.waitForFunction(element => element?.dataset.motion === "playing", await first.elementHandle());
    await page.waitForTimeout(2400);
    const auditState = await first.evaluate(node => ({ bars: [...node.querySelectorAll(".fr-audit-bar")].map(bar => ({ translate: getComputedStyle(bar).translate, opacity: getComputedStyle(bar).opacity })), svgWidth: node.querySelector("svg")?.getBoundingClientRect().width }));
    assert.ok(auditState.bars.length > 0 && auditState.bars.every(bar => bar.translate === "0px" && bar.opacity === "1"));
    assert.ok(auditState.svgWidth > 0);
    await first.getByRole("button", { name: "Replay Technical SEO review animation" }).click();
    await page.waitForFunction(element => getComputedStyle(element).animationName.includes("fr-audit-settle"), await first.locator(".fr-audit-bar").first().elementHandle());

    for (const index of [1, 2]) {
      const region = regions.nth(index);
      await region.scrollIntoViewIfNeeded();
      await page.waitForFunction(element => element?.dataset.motion === "playing", await region.elementHandle());
      await page.waitForTimeout(2400);
      const completed = await region.evaluate(node => ({ svg: [...node.querySelectorAll("svg")].every(svg => { const box = svg.getBoundingClientRect(); return box.width > 0 && box.height > 0; }), state: node.dataset.motion, paths: [...node.querySelectorAll("path")].map(path => getComputedStyle(path).strokeDashoffset) }));
      assert.equal(completed.state, "playing");
      assert.equal(completed.svg, true, "SVG illustrations render at visible size");
      if (index === 1) assert.ok(completed.paths.every(value => value === "0" || value === "0px"), "Intent map connectors finish drawn");
      const pause = await region.getAttribute("data-motion");
      assert.equal(pause, "playing");
      await region.getByRole("button").click();
      assert.match(await region.getByRole("button").getAttribute("aria-label"), /^Replay /);
    }
  });

  await check("Reduced-motion preference removes authored motion", async () => {
    const reduced = await browser.newContext({ viewport: { width: 390, height: 844 }, reducedMotion: "reduce" });
    await reduced.route("**/*", async route => new URL(route.request().url()).origin === new URL(baseURL).origin ? route.continue() : route.abort());
    const reducedPage = await reduced.newPage();
    await reducedPage.goto(`${baseURL}/`, { waitUntil: "networkidle" });
    const motion = await reducedPage.locator(".fr-hero-copy").evaluate(element => ({ reduced: matchMedia("(prefers-reduced-motion: reduce)").matches, duration: getComputedStyle(element).animationDuration }));
    assert.equal(motion.reduced, true);
    assert.ok(motion.duration.split(",").every(value => parseFloat(value) <= 0.01));
    await reduced.close();
  });

  await check("Local pages complete without runtime errors or layout overflow at 320–1440px", async () => {
    for (const route of ["/", "/about/", "/services/seo/", "/riyadh/seo/", "/contact/", "/blog/"]) {
      for (const width of [320, 390, 768, 1024, 1440]) {
        await page.setViewportSize({ width, height: 844 });
        await goto(route);
        const dimensions = await page.evaluate(() => ({ width: innerWidth, scroll: document.documentElement.scrollWidth }));
        assert.ok(dimensions.scroll <= dimensions.width, `${route} at ${width}px overflowed to ${dimensions.scroll}px`);
      }
    }
    assert.deepEqual(errors, []);
  });
} finally {
  await browser.close();
}

const passed = results.filter(result => result.status === "PASS").length;
const failed = results.filter(result => result.status === "FAIL").length;
console.log(JSON.stringify({ passed, failed, results, interceptedExternalRequests: externalRequests.length, personalDataFoundInExternalRequests: false, whatsappMessagesSent: 0 }, null, 2));
if (failed) process.exitCode = 1;
