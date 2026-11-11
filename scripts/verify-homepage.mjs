import assert from 'node:assert/strict';
import { mkdir, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { pathToFileURL } from 'node:url';
import path from 'node:path';

// No external enquiries are opened or sent. Run against a local test server.
const baseURL = process.env.BASE_URL || 'http://localhost:3000';
assert.ok(/^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?\/?$/.test(baseURL), 'Use a localhost test server');
const runtime = 'C:/Program Files/WindowsApps/OpenAI.CodexPrimaryRuntime.v26-1030-493-0_26.1030.493.0_x64__3k8sg7r9htsxt/dependencies/node/node_modules/playwright/index.mjs';
const { chromium } = await import(process.env.PLAYWRIGHT_MODULE ? pathToFileURL(process.env.PLAYWRIGHT_MODULE) : pathToFileURL(runtime));
const executablePath = process.env.BROWSER_PATH || [
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
].find(existsSync);
const browser = await chromium.launch({ headless: true, ...(executablePath ? { executablePath } : {}) });
const results = [];
const errors = [];
const failedResources = [];
const devToolResources = [];
const evidence = {};
const previewDir = path.resolve('previews');
await mkdir(previewDir, { recursive: true });
const context = await browser.newContext({ viewport: { width: 1440, height: 1000 }, deviceScaleFactor: 1 });
const page = await context.newPage();
page.on('pageerror', error => errors.push(error.message));
page.on('response', response => {
  if (response.url().startsWith(baseURL) && response.status() >= 400) {
    const target = new URL(response.url());
    (target.pathname.startsWith('/__nextjs_') ? devToolResources : failedResources).push(`${response.status()} ${response.url()}`);
  }
});
await context.route(/https:\/\/(wa\.me|api\.whatsapp\.com|web\.whatsapp\.com)\//, route => route.abort());

async function check(name, action) {
  try { await action(); results.push({ name, status: 'PASS' }); console.log(`PASS ${name}`); }
  catch (error) { results.push({ name, status: 'FAIL', message: error.message }); console.error(`FAIL ${name}: ${error.message}`); }
}

try {
  const response = await page.goto(baseURL, { waitUntil: 'networkidle', timeout: 120000 });
  assert.equal(response.status(), 200, 'Homepage returns HTTP 200');
  await page.locator('.fd-home').waitFor();
  await page.evaluate(() => document.fonts.ready);
  evidence.initialResources = await page.evaluate(() => {
    const resources = performance.getEntriesByType('resource');
    const local = resources.filter(resource => new URL(resource.name).origin === location.origin);
    return {
      resourceCount: resources.length,
      localResourceCount: local.length,
      localTransferredBytes: local.reduce((total, resource) => total + resource.transferSize, 0),
      localEncodedBytes: local.reduce((total, resource) => total + resource.encodedBodySize, 0),
      byInitiator: resources.reduce((counts, resource) => ({ ...counts, [resource.initiatorType]: (counts[resource.initiatorType] || 0) + 1 }), {}),
      localFonts: local.filter(resource => /\.woff2?(\?|$)/.test(resource.name)).map(resource => ({ path: new URL(resource.name).pathname, encodedBytes: resource.encodedBodySize })),
      externalOrigins: [...new Set(resources.filter(resource => new URL(resource.name).origin !== location.origin).map(resource => new URL(resource.name).origin))],
    };
  });

  await check('Saudi metadata, one H1 and self canonical', async () => {
    assert.equal(await page.title(), 'SEO Consultant Saudi Arabia | Fazil Digital');
    assert.equal(await page.locator('h1').count(), 1);
    assert.equal((await page.locator('h1').innerText()).replace(/\s+/g, ' '), 'SEO & Organic Growth for Saudi Businesses.');
    assert.equal(new URL(await page.locator('link[rel="canonical"]').getAttribute('href')).href, 'https://www.fazildigital.com/');
    assert.match(await page.locator('meta[name="description"]').getAttribute('content'), /Saudi businesses/);
    assert.equal(await page.locator('link[hreflang]').count(), 0, 'No inherited unrelated language alternatives');
    assert.equal(await page.locator('html').getAttribute('lang'), 'en');
    assert.equal(await page.locator('link[href*="api.fontshare.com"]').count(), 0, 'Legacy fonts are scoped away from the homepage');
  });

  await check('Structured data matches visible consultant facts without invented offices', async () => {
    const graphs = await page.locator('script[type="application/ld+json"]').allTextContents();
    const entities = graphs.flatMap(value => { const schema = JSON.parse(value); return schema['@graph'] || [schema]; });
    assert.ok(entities.some(entity => entity['@type'] === 'Person' && entity.name === 'Mohammad Fazil'));
    assert.ok(entities.some(entity => entity['@type'] === 'Organization' && entity.name === 'Fazil Digital'));
    assert.ok(entities.some(entity => entity['@type'] === 'Service' && entity.areaServed?.name === 'Saudi Arabia'));
    assert.ok(!JSON.stringify(entities).includes('PostalAddress'));
    assert.ok(!JSON.stringify(entities).includes('aggregateRating'));
    const faq = entities.find(entity => entity['@type'] === 'FAQPage');
    assert.equal(faq.mainEntity.length, await page.locator('.fd-faq details').count());
    for (const item of faq.mainEntity) assert.ok(await page.locator('.fd-faq').getByText(item.name, { exact: true }).count());
  });

  await check('Semantic landmarks, heading order and form labels', async () => {
    assert.equal(await page.locator('main').count(), 1);
    assert.equal(await page.locator('header').count(), 1);
    assert.equal(await page.locator('footer').count(), 1);
    const levels = await page.locator('h1,h2,h3,h4,h5,h6').evaluateAll(headings => headings.map(heading => Number(heading.tagName[1])));
    for (let index = 1; index < levels.length; index++) assert.ok(levels[index] <= levels[index - 1] + 1, `Heading level ${levels[index - 1]} to ${levels[index]} skips a level`);
    for (const field of ['review-name', 'review-website', 'review-goal']) assert.equal(await page.locator(`label[for="${field}"]`).count(), 1);
    assert.equal(await page.locator('.fd-skip').getAttribute('href'), '#main-content');
  });

  await check('Desktop navigation and primary actions have valid destinations', async () => {
    assert.equal(await page.locator('.fd-desktop-nav').isVisible(), true);
    assert.equal(await page.locator('.fd-mobile-menu').isVisible(), false);
    assert.equal(await page.locator('.fd-header-cta').getAttribute('href'), '#review');
    const fragments = await page.locator('a[href^="#"]').evaluateAll(links => links.map(link => link.getAttribute('href')));
    for (const fragment of new Set(fragments)) assert.equal(await page.locator(fragment).count(), 1, `${fragment} resolves once`);
    assert.equal(await page.locator('.fd-service-grid article').count(), 3);
    const markets = await page.locator('.fd-market-grid a').evaluateAll(links => links.map(link => new URL(link.href).pathname.replace(/\/$/, '')));
    for (const city of ['riyadh', 'jeddah', 'dammam']) assert.equal(markets.filter(route => route === `/${city}/seo`).length, 1);
  });

  await check('FAQ works by keyboard with native disclosure state', async () => {
    const faq = page.locator('.fd-faq details').first();
    const trigger = faq.locator('summary');
    await trigger.focus();
    await page.keyboard.press('Enter');
    assert.equal(await faq.getAttribute('open'), '');
    assert.equal(await faq.locator('p').isVisible(), true);
    await page.keyboard.press('Enter');
    assert.equal(await faq.getAttribute('open'), null);
    assert.equal(await faq.locator('p').isVisible(), false);
  });

  await check('Three original Saudi insight notes can be read without leaving the homepage', async () => {
    const notes = page.locator('.fd-insight-note');
    assert.equal(await notes.count(), 3);
    const currentURL = page.url();
    for (const note of await notes.all()) {
      assert.equal(await note.locator('p').isVisible(), false);
      await note.locator('summary').click();
      assert.equal(await note.locator('p').isVisible(), true);
      assert.ok((await note.locator('p').innerText()).length > 150);
      await note.locator('summary').click();
    }
    assert.equal(page.url(), currentURL);
  });

  await check('Invalid form does not create an enquiry draft', async () => {
    await page.locator('.fd-review-form button[type="submit"]').click();
    assert.equal(await page.locator('.fd-draft').count(), 0);
    assert.equal(await page.locator('#review-name').evaluate(element => element.validity.valueMissing), true);
    await page.locator('#review-name').fill('QA Example');
    await page.locator('#review-website').fill('not-a-url');
    await page.locator('.fd-review-form button[type="submit"]').click();
    assert.equal(await page.locator('.fd-draft').count(), 0);
    assert.equal(await page.locator('#review-website').evaluate(element => element.validity.typeMismatch), true);
  });

  await check('Valid form prepares a truthful, correctly encoded WhatsApp review', async () => {
    await page.locator('#review-name').fill('QA Example & Co');
    await page.locator('#review-website').fill('https://example.com/?a=1&b=2');
    await page.locator('#review-goal').fill('Riyadh search visibility\nArabic content & local SEO');
    const pageCount = context.pages().length;
    await page.locator('.fd-review-form button[type="submit"]').click();
    assert.equal(context.pages().length, pageCount, 'Preparing a draft opens no external page');
    assert.match(await page.locator('.fd-draft').innerText(), /Nothing has been sent/);
    const target = new URL(await page.locator('.fd-draft a').getAttribute('href'));
    assert.equal(target.origin, 'https://wa.me');
    assert.equal(target.pathname, '/971542763828');
    const message = target.searchParams.get('text');
    assert.ok(message.includes('\nName: QA Example & Co\nWebsite: https://example.com/?a=1&b=2\nPriority: Riyadh search visibility\nArabic content & local SEO'), 'Real newline separators and user punctuation preserved');
    assert.ok(!message.includes('\\n'), 'No literal backslash-n separators');
    assert.equal(await page.locator('.fd-draft a').getAttribute('target'), '_blank');
    assert.match(await page.locator('.fd-draft a').getAttribute('rel'), /noopener/);
    await page.locator('#review-goal').fill('Updated priority');
    assert.equal(await page.locator('.fd-draft').count(), 0, 'Editing invalidates stale draft');
    await page.locator('.fd-review-form').evaluate(form => form.reset());
  });

  await check('Layouts fit desktop, tablet and narrow mobile without horizontal overflow', async () => {
    evidence.layouts = [];
    for (const width of [1440, 1024, 768, 390, 320]) {
      await page.setViewportSize({ width, height: width < 700 ? 844 : 1000 });
      await page.evaluate(() => window.scrollTo(0, 0));
      const dimensions = await page.evaluate(() => ({ viewport: innerWidth, document: document.documentElement.scrollWidth, body: document.body.scrollWidth, main: document.querySelector('main').getBoundingClientRect().width }));
      evidence.layouts.push({ width, ...dimensions });
      assert.ok(dimensions.document <= width + 1, `${width}px: document width ${dimensions.document}`);
      assert.ok(dimensions.body <= width + 1, `${width}px: body width ${dimensions.body}`);
      assert.ok(await page.locator('h1').isVisible());
    }
  });

  await check('Mobile menu opens, closes on navigation and restores focus with Escape', async () => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.evaluate(() => window.scrollTo(0, 0));
    const menu = page.locator('.fd-mobile-menu');
    const trigger = menu.locator('summary');
    assert.equal(await trigger.isVisible(), true);
    await trigger.click();
    assert.equal(await menu.getAttribute('open'), '');
    await menu.getByRole('link', { name: 'SEO Services', exact: true }).click();
    assert.equal(await menu.getAttribute('open'), null);
    assert.equal(await page.evaluate(() => location.hash), '#services');
    await page.evaluate(() => window.scrollTo(0, 0));
    await trigger.click();
    await page.keyboard.press('Escape');
    assert.equal(await menu.getAttribute('open'), null);
    assert.equal(await trigger.evaluate(element => document.activeElement === element), true);
  });

  await check('Reduced motion disables hero animation and process transition', async () => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
    const reduced = await page.evaluate(() => ({ animation: getComputedStyle(document.querySelector('.fd-hero-copy')).animationName, transition: getComputedStyle(document.querySelector('.fd-process-rule'), '::after').transitionDuration }));
    evidence.reducedMotion = reduced;
    assert.equal(reduced.animation, 'none');
    assert.equal(reduced.transition, '0s');
    await page.emulateMedia({ reducedMotion: 'no-preference' });
  });

  await check('Desktop and mobile screenshots captured with loaded fonts', async () => {
    await page.goto(baseURL, { waitUntil: 'networkidle' });
    await page.evaluate(() => document.fonts.ready);
    for (const [name, width, height] of [['desktop', 1440, 1000], ['mobile', 390, 844]]) {
      await page.setViewportSize({ width, height });
      await page.evaluate(() => window.scrollTo(0, 0));
      await page.screenshot({ path: path.join(previewDir, `home-${name}.png`), animations: 'disabled' });
      await page.screenshot({ path: path.join(previewDir, `home-${name}-full.png`), fullPage: true, animations: 'disabled' });
    }
  });

  await check('Homepage content and navigation remain visible without JavaScript', async () => {
    const noJS = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 390, height: 844 } });
    const plain = await noJS.newPage();
    await plain.goto(baseURL, { waitUntil: 'networkidle' });
    assert.equal(await plain.locator('h1').isVisible(), true);
    assert.equal(await plain.locator('h1').evaluate(element => getComputedStyle(element).opacity), '1');
    await plain.locator('.fd-mobile-menu summary').click();
    assert.equal(await plain.locator('.fd-mobile-menu nav').isVisible(), true);
    await plain.locator('.fd-faq details summary').first().click();
    assert.equal(await plain.locator('.fd-faq details p').first().isVisible(), true);
    await plain.locator('.fd-insight-note summary').first().click();
    assert.equal(await plain.locator('.fd-insight-note p').first().isVisible(), true);
    assert.equal(await plain.locator('.fd-review-form fieldset').getAttribute('disabled'), '');
    assert.equal(await plain.locator('.fd-review-form button').isDisabled(), true);
    assert.equal(await plain.getByRole('link', { name: 'contact Mohammad directly on WhatsApp' }).getAttribute('href'), 'https://wa.me/971542763828');
    await noJS.close();
  });

  await check('Linked existing articles and core legacy landing pages remain reachable', async () => {
    const paths = new Set(await page.locator('main a[href^="/"]').evaluateAll(links => links.map(link => new URL(link.href).pathname)));
    for (const extra of ['/about/', '/contact/', '/privacy-policy/', '/blog/snapchat-ads-cpa-benchmarks-saudi-arabia-2026/']) paths.add(extra);
    evidence.legacyHTTP = [];
    for (const route of paths) {
      const legacy = await context.request.get(new URL(route, baseURL).href, { timeout: 120000 });
      evidence.legacyHTTP.push({ route, status: legacy.status() });
      assert.equal(legacy.status(), 200, route);
    }
  });

  await check('No homepage runtime exceptions or failed application resources', async () => {
    assert.deepEqual(errors, []);
    assert.deepEqual(failedResources, []);
  });
} finally {
  await browser.close();
  evidence.devToolResourceWarnings = devToolResources;
  const summary = { baseURL, generatedAt: new Date().toISOString(), results, evidence, runtimeErrors: errors, failedResources };
  const rows = results.map(result => `| ${result.name} | ${result.status} |`).join('\n');
  const failures = results.filter(result => result.status === 'FAIL').map(result => `- **${result.name}:** ${result.message}`).join('\n');
  const report = `# Phase 1 verification report\n\nBrowser run: ${summary.generatedAt}. Local target: ${baseURL}. Browser: installed Chromium via Playwright, headless. No external enquiry was opened or sent.\n\n## Browser checks\n\n${results.filter(result => result.status === 'PASS').length} passed; ${results.filter(result => result.status === 'FAIL').length} failed.\n\n| Check | Result |\n| --- | --- |\n${rows}\n\n${failures ? `## Failures requiring resolution\n\n${failures}\n\n` : ''}## Responsive evidence\n\n\`\`\`json\n${JSON.stringify(evidence.layouts || [], null, 2)}\n\`\`\`\n\n## Existing URL HTTP samples\n\n${(evidence.legacyHTTP || []).map(item => `- ${item.status}: ${item.route}`).join('\n')}\n\n## Screenshots\n\n- [Desktop viewport](previews/home-desktop.png) — 1440 × 1000.\n- [Desktop full page](previews/home-desktop-full.png).\n- [Mobile viewport](previews/home-mobile.png) — 390 × 844.\n- [Mobile full page](previews/home-mobile-full.png).\n\nScreenshots capture loaded local fonts with animations disabled for stable output. The coordinator must visually inspect the captures before declaring design verification complete.\n\n## Build, lint and TypeScript\n\nRun and final results are owned by the coordinator; append the actual commands and outcomes before handoff. This browser run does not claim those commands passed.\n\n## Scope and limitations\n\nThis is a local prototype check. No production deployment, Search Console mutation, GA4 account change, redirect implementation or deletion was performed. Functional checks cover meaningful UI behavior, not a full WCAG certification or field Core Web Vitals assessment. No external WhatsApp message was sent; prepare/review events do not prove a lead was delivered or qualified. Existing historical Search Console figures remain supplied snapshots, not live data.\n\nRe-run with \`node scripts/verify-homepage.mjs\` against a local server on port 3000. Set \`BASE_URL\` for another localhost port, and \`PLAYWRIGHT_MODULE\` / \`BROWSER_PATH\` when the bundled runtime paths differ.\n`;
  const resources = `\n## Initial browser resource observations\n\nThese are one local browser navigation's resource counts and byte observations, not a Lighthouse score or field Core Web Vitals result.\n\n\`\`\`json\n${JSON.stringify(evidence.initialResources || {}, null, 2)}\n\`\`\`\n`;
  await writeFile(path.resolve('REVAMP-VERIFICATION-REPORT.md'), report + resources);
  console.log(JSON.stringify({ passed: results.filter(result => result.status === 'PASS').length, failed: results.filter(result => result.status === 'FAIL').length, evidence }, null, 2));
  if (results.some(result => result.status === 'FAIL')) process.exitCode = 1;
}
