import test from 'node:test';
import assert from 'node:assert/strict';
import en from '../gitprofile.config.js';
import pt from '../gitprofile.config.pt.js';
import { escapeHtml } from '../build/cv-template.mjs';
import { CARD_FORMATS, renderSummaryCard } from '../build/card-template.mjs';

test('summary cards render every curated item in both languages and formats', () => {
  for (const config of [en, pt]) {
    const card = config.summaryCard;
    for (const format of Object.keys(CARD_FORMATS)) {
      const html = renderSummaryCard(config, format);
      for (const text of [
        config.profile.displayName,
        card.research.text,
        card.research.context,
        ...card.experiences.flatMap((x) => [x.role, x.org, x.period]),
        ...card.highlights,
        ...card.skills,
      ])
        assert.ok(html.includes(escapeHtml(text)), `Missing content: ${text}`);
      assert.ok(!html.includes('<script'));
      // Images circulate further than the site; keep phone and email off.
      assert.ok(!html.includes(config.social.phone));
      assert.ok(!html.includes(config.social.email));
    }
    for (const format of Object.keys(CARD_FORMATS))
      assert.match(config.resume.imageUrls[format], /^\/img\/.+\.png$/);
  }
});

test('summary card configs stay aligned between languages', () => {
  const shape = (card) => [
    card.experiences.length,
    card.highlights.length,
    card.skills.length,
    card.experiences.map((x) => x.period).join(),
  ];
  assert.deepEqual(shape(en.summaryCard), shape(pt.summaryCard));
});

test('summary card escapes content and rejects unknown formats', () => {
  const html = renderSummaryCard(
    {
      ...en,
      profile: { ...en.profile, displayName: '<script>alert(1)</script>' },
    },
    'portrait'
  );
  assert.ok(!html.includes('<script>'));
  assert.ok(html.includes('&lt;script&gt;'));
  assert.throws(() => renderSummaryCard(en, 'square'), /Unknown/);
});
