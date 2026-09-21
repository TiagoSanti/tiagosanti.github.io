import { chromium } from 'playwright';
import { mkdir, access, rename, rm } from 'node:fs/promises';
import { resolve } from 'node:path';
import configEn from '../gitprofile.config.js';
import configPt from '../gitprofile.config.pt.js';
import { renderCV, escapeHtml } from './cv-template.mjs';

const output = resolve('dist/pdf');
await access(resolve('dist/index.html'));
await mkdir(output, { recursive: true });
const browser = await chromium.launch();
const temporary = [];
try {
  const context = await browser.newContext({ serviceWorkers: 'block' });
  // No tracking, remote fonts, GitHub API, or private browser session.
  await context.route('**/*', (route) => route.abort());
  for (const config of [configPt, configEn]) {
    const page = await context.newPage();
    // Match A4's printable width (210mm minus two 16mm margins).
    await page.setViewportSize({ width: 673, height: 998 });
    await page.setContent(renderCV(config), { waitUntil: 'load' });
    await page.emulateMedia({ media: 'print' });
    await page.evaluate(() => document.fonts.ready);
    if (
      await page.evaluate(
        () => document.documentElement.scrollWidth > innerWidth
      )
    )
      throw new Error(`CV layout overflow: ${config.language}`);
    const filename = `tiago-santi-cv-${config.language}.pdf`;
    const temp = resolve(output, `${filename}.tmp`);
    temporary.push(temp);
    await page.pdf({
      path: temp,
      format: 'A4',
      printBackground: true,
      tagged: true,
      outline: true,
      displayHeaderFooter: true,
      headerTemplate: '<span></span>',
      footerTemplate: `<div style="font:8px Arial;width:100%;margin:0 16mm;color:#50616b;display:flex;justify-content:space-between"><span>${escapeHtml(config.profile.displayName || config.profile.name)} · ${config.language.toUpperCase()}</span><span><span class="pageNumber"></span> / <span class="totalPages"></span></span></div>`,
      margin: { top: '16mm', right: '16mm', bottom: '17mm', left: '16mm' },
    });
    await page.close();
    console.log(`Generated ${filename}`);
  }
  // Publish neither PDF unless both renders succeed.
  for (const temp of temporary) await rename(temp, temp.slice(0, -4));
} finally {
  await browser.close();
  await Promise.all(temporary.map((path) => rm(path, { force: true })));
}
