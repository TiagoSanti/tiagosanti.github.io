import test from 'node:test';
import assert from 'node:assert/strict';
import {
  getGithubErrorDetails,
  isValidConfig,
} from '../src/helpers/github.mjs';

test('configuration requires a nonempty GitHub username', () => {
  for (const config of [
    undefined,
    null,
    {},
    { github: {} },
    { github: { username: ' ' } },
  ]) {
    assert.equal(isValidConfig(config), false);
  }
  assert.equal(isValidConfig({ github: { username: 'TiagoSanti' } }), true);
});

test('404 remains not-found without a rate-limit header', () => {
  assert.deepEqual(getGithubErrorDetails({ response: { status: 404 } }), {
    kind: 'not-found',
  });
});

test('403 and 429 tolerate absent, malformed, and out-of-range reset headers', () => {
  for (const status of [403, 429]) {
    for (const reset of [undefined, '', 'invalid', 'Infinity', '1e100']) {
      assert.deepEqual(
        getGithubErrorDetails({
          response: { status, headers: { 'x-ratelimit-reset': reset } },
        }),
        { kind: 'rate-limit', reset: null }
      );
    }
  }
});

test('a valid reset date is formatted', () => {
  const error = {
    response: {
      status: 403,
      headers: { 'x-ratelimit-reset': Math.floor(Date.now() / 1000) + 3600 },
    },
  };
  assert.equal(typeof getGithubErrorDetails(error).reset, 'string');
});

test('network and server errors remain generic', () => {
  assert.deepEqual(getGithubErrorDetails(new Error('offline')), {
    kind: 'generic',
  });
  assert.deepEqual(getGithubErrorDetails({ response: { status: 500 } }), {
    kind: 'generic',
  });
});
