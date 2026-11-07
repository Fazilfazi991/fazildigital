/** Assemble inspection sheets from actual browser captures; no product assets are altered. */
import fs from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { createRequire } from "node:module";

const appRequire = createRequire(import.meta.url);
const bundledRequire = createRequire(pathToFileURL("C:/Program Files/WindowsApps/OpenAI.CodexPrimaryRuntime.v26-1030-493-0_26.1030.493.0_x64__3k8sg7r9htsxt/dependencies/node/inspection.cjs"));
let sharpModule = process.env.SHARP_MODULE;
if (!sharpModule) {
  try { sharpModule = appRequire.resolve("sharp"); }
  catch { sharpModule = bundledRequire.resolve("sharp"); }
}
const { default: sharp } = await import(pathToFileURL(sharpModule));
const run = JSON.parse(await fs.readFile("reports/phase3-browser-results.json", "utf8"));
const primary = ["/", "/services/seo/", "/services/local-seo/", "/services/technical-seo/", "/services/content-marketing/", "/riyadh/seo/", "/jeddah/seo/", "/dammam/seo/", "/about/", "/contact/", "/case-studies/", "/blog/"];
const sheets = [];
const escape = value => value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll('"', "&quot;");
for (const width of [1440, 390]) {
  const tileWidth = width === 1440 ? 640 : 390;
  const tileHeight = width === 1440 ? 444 : 844;
  for (let group = 0; group < 2; group++) {
    const composites = [];
    for (let index = 0; index < 6; index++) {
      const route = primary[group * 6 + index];
      const item = run.screenshots.find(capture => capture.route === route && capture.width === width);
      if (!item) throw new Error(`Missing actual capture: ${route} at ${width}`);
      const left = (index % 3) * tileWidth;
      const top = Math.floor(index / 3) * (tileHeight + 32);
      const label = Buffer.from(`<svg width="${tileWidth}" height="32"><rect width="100%" height="100%" fill="#1e4032"/><text x="12" y="21" fill="#f5f3ed" font-family="Arial,sans-serif" font-size="14">${escape(route)} · ${width}px</text></svg>`);
      composites.push({ input: label, left, top });
      composites.push({ input: await sharp(path.resolve(item.file)).resize(tileWidth, tileHeight, { fit: "fill" }).png().toBuffer(), left, top: top + 32 });
    }
    const file = `${run.screenshotRelativeDir}/inspection-${width === 1440 ? "desktop" : "mobile"}-${group + 1}.png`;
    await sharp({ create: { width: tileWidth * 3, height: (tileHeight + 32) * 2, channels: 4, background: "#f5f3ed" } }).composite(composites).png().toFile(path.resolve(file));
    sheets.push({ file, viewport: width, routes: primary.slice(group * 6, group * 6 + 6) });
  }
}
await fs.writeFile("reports/phase3-inspection-sheets.json", JSON.stringify({ captureRun: run.captureRun, buildId: run.buildId, sheets }, null, 2));
console.log(JSON.stringify(sheets, null, 2));
