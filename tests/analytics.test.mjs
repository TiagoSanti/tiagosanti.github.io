import test from 'node:test';
import assert from 'node:assert/strict';
import {
  canCollect,
  createAnalytics,
  contactChannel,
} from '../src/helpers/analytics.mjs';

const settings = {
  production: true,
  origin: 'https://tiagosanti.github.io',
  website: 'https://tiagosanti.github.io',
  id: 'G-TEST123',
  lang: 'en',
  title: 'CV | Tiago Santi',
};
const fixture = () => {
  const scripts = [];
  const win = { location: { origin: settings.origin } };
  const doc = {
    createElement: () => ({}),
    head: { appendChild: (s) => scripts.push(s) },
  };
  return {
    win,
    scripts,
    tracker: createAnalytics(win, doc),
    calls: () => (win.dataLayer || []).map((args) => [...args]),
  };
};
test('collection only runs in production on the canonical HTTPS origin', () => {
  assert.equal(canCollect(settings), true);
  for (const change of [
    { production: false },
    { origin: 'http://localhost:4173' },
    { origin: 'https://preview.example.com' },
    { id: '' },
    { website: 'invalid' },
    { origin: 'https://localhost', website: 'https://localhost' },
  ]) {
    assert.equal(canCollect({ ...settings, ...change }), false);
  }
});
test('local previews create no tag, queue, or events', () => {
  const f = fixture();
  f.tracker.initialize({ ...settings, production: false });
  f.tracker.event('project_click');
  assert.equal(f.scripts.length, 0);
  assert.equal(f.win.dataLayer, undefined);
});
test('remounts and language changes do not duplicate page views', () => {
  const f = fixture();
  f.tracker.initialize(settings);
  f.tracker.initialize(settings);
  f.tracker.initialize({
    ...settings,
    lang: 'pt',
    title: 'Currículo | Tiago Santi',
  });
  f.tracker.initialize({ ...settings, lang: 'pt' });
  assert.equal(f.scripts.length, 1);
  assert.equal(f.calls().filter((c) => c[1] === 'page_view').length, 1);
  assert.equal(
    f.calls().find((c) => c[0] === 'config')[2].send_page_view,
    false
  );
  const changes = f.calls().filter((c) => c[1] === 'language_change');
  assert.equal(changes.length, 1);
  assert.equal(changes[0][2].previous_language, 'en');
  assert.equal(changes[0][2].content_language, 'pt');
});
test('invalid event names are ignored and blocked analytics cannot break actions', () => {
  const f = fixture();
  f.tracker.initialize(settings);
  const before = f.calls().length;
  f.tracker.event('Click project');
  assert.equal(f.calls().length, before);
  f.win.gtag = () => {
    throw new Error('blocked');
  };
  assert.doesNotThrow(() => f.tracker.event('project_click'));
});
test('contact classification never returns personal identifiers', () => {
  assert.equal(
    contactChannel('mailto:private@example.com?subject=test'),
    'email'
  );
  assert.equal(contactChannel('tel:+5512345'), 'phone');
  assert.equal(contactChannel('https://lattes.cnpq.br/123'), 'lattes');
  assert.equal(
    contactChannel('https://www.linkedin.com/in/example'),
    'linkedin'
  );
  assert.equal(contactChannel('https://www.linkedin.com.evil.test'), null);
});
