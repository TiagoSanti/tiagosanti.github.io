import test from 'node:test';
import assert from 'node:assert/strict';
import { staticSEO } from '../build/seo.mjs';
import config from '../gitprofile.config.js';

test('static metadata uses canonical profile without depending on GitHub', () => {
  const result =
    staticSEO(config).transformIndexHtml.handler('<title>CV</title>');
  assert.equal(result.html, '<title>CV | Tiago Santi</title>');
  assert.equal(
    result.tags.find((tag) => tag.attrs.name === 'description').attrs.content,
    config.profile.bio
  );
  assert.equal(
    result.tags.find((tag) => tag.attrs.property === 'og:url').attrs.content,
    config.social.website
  );
  assert.ok(result.tags.every((tag) => tag.attrs['data-rh'] === 'true'));
});

test('static title escapes markup characters', () => {
  const result = staticSEO({
    ...config,
    profile: { name: '<script>&"', bio: 'Research' },
  }).transformIndexHtml.handler('<title>CV</title>');
  assert.equal(result.html, '<title>CV | &lt;script&gt;&amp;&quot;</title>');
});
