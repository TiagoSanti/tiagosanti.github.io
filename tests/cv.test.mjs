import test from 'node:test';
import assert from 'node:assert/strict';
import en from '../gitprofile.config.js';
import pt from '../gitprofile.config.pt.js';
import { renderCV, escapeHtml } from '../build/cv-template.mjs';

test('both CVs preserve all configured curriculum entries and project details', () => {
  for (const config of [en, pt]) {
    const html = renderCV(config);
    for (const text of [
      config.profile.displayName,
      config.profile.about,
      ...config.education.map((x) => x.degree),
      ...config.experiences.map((x) => x.position),
      ...config.skillGroups.flatMap((x) => x.items),
      ...config.externalProjects.flatMap((x) => [
        x.title,
        x.description,
        ...(x.details || '').split(/\n\s*\n/),
      ]),
      ...config.publications.flatMap((x) => [x.title, x.authors]),
      ...config.certifications.flatMap((x) => [x.name, x.body]),
    ])
      assert.ok(html.includes(escapeHtml(text)), `Missing content: ${text}`);
    assert.ok(!html.includes('<script'));
    assert.ok(
      html.includes(config.language === 'pt' ? 'lang="pt-BR"' : 'lang="en-US"')
    );
    assert.ok(html.includes('https://tiagosanti.github.io/pdf/'));
  }
});

test('CV markup escapes content and refuses executable links', () => {
  const html = renderCV({
    ...en,
    profile: { ...en.profile, displayName: '<script>alert(1)</script>' },
  });
  assert.ok(!html.includes('<script>'));
  assert.ok(html.includes('&lt;script&gt;'));
  assert.throws(
    () =>
      renderCV({
        ...en,
        externalProjects: [{ title: 'Unsafe', link: 'javascript:alert(1)' }],
      }),
    /Unsupported/
  );
});
