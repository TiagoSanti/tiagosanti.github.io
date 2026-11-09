import { chromium } from 'playwright';
import QRCode from 'qrcode';
import { mkdir, access, readFile, rename, rm } from 'node:fs/promises';
import { resolve } from 'node:path';
import configEn from '../gitprofile.config.js';
import configPt from '../gitprofile.config.pt.js';
import { CARD_FORMATS, renderSummaryCard } from './card-template.mjs';

const output = resolve('dist/img');
await access(resolve('dist/index.html'));
await mkdir(output, { recursive: true });
const avatar = `data:image/jpeg;base64,${(
  await readFile(resolve('build/assets/avatar.jpg'))
).toString('base64')}`;
const browser = await chromium.launch();
const temporary = [];
try {
  const context = await browser.newContext({ serviceWorkers: 'block' });
  // Everything is inlined; no remote fonts, images, or tracking.
  await context.route('**/*', (route) => route.abort());
  for (const config of [configPt, configEn]) {
    const qr = await QRCode.toString(config.social.website, {
      type: 'svg',
      margin: 0,
      color: { dark: '#14112b', light: '#ffffff' },
    });
    for (const [format, size] of Object.entries(CARD_FORMATS)) {
      const page = await context.newPage();
      await page.setViewportSize(size);
      await page.setContent(renderSummaryCard(config, format, { avatar, qr }), {
        waitUntil: 'load',
      });
      await page.evaluate(() => document.fonts.ready);
      // Fail the build rather than publish clipped text.
      const overflow = await page.evaluate(() =>
        [document.body, ...document.querySelectorAll('.card, aside, main')]
          .filter(
            (el) =>
              el.scrollHeight > el.clientHeight + 1 ||
              el.scrollWidth > el.clientWidth + 1
          )
          .map((el) => el.className || el.tagName)
      );
      if (overflow.length)
        throw new Error(
          `Summary image overflow (${config.language}, ${format}): ${overflow.join(', ')}`
        );
      const filename = config.resume.imageUrls[format].split('/').pop();
      const temp = resolve(output, `${filename}.tmp`);
      temporary.push(temp);
      await page.screenshot({ path: temp, type: 'png' });
      await page.close();
      console.log(`Generated ${filename}`);
    }
  }
  // Publish no image unless every render succeeds.
  for (const temp of temporary) await rename(temp, temp.slice(0, -4));
} finally {
  await browser.close();
  await Promise.all(temporary.map((path) => rm(path, { force: true })));
}
