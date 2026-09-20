import test from 'node:test';
import assert from 'node:assert/strict';
import {
  getRepositoryParams,
  orderRepositories,
} from '../src/helpers/github.mjs';

const github = {
  username: 'owner',
  mode: 'automatic',
  sortBy: 'stars',
  limit: 8,
  manualProjects: [],
  exclude: { forks: false, projects: ['hidden', 'org/other'] },
};

test('automatic search preserves sorting and supports both exclusion formats', () => {
  assert.deepEqual(getRepositoryParams(github, 3), {
    q: 'user:owner fork:true -repo:owner/hidden -repo:org/other',
    sort: 'stars',
    per_page: 8,
  });
  assert.equal(getRepositoryParams(github, 0), null);
});

test('manual selection supports organization projects without personal repositories', () => {
  const manual = {
    ...github,
    mode: 'manual',
    manualProjects: ['org/second', 'owner/first'],
  };
  assert.deepEqual(getRepositoryParams(manual, 0), {
    q: 'repo:org/second repo:owner/first fork:true',
    per_page: 100,
  });
  assert.deepEqual(
    orderRepositories(
      [
        { full_name: 'owner/first' },
        { full_name: 'Org/Second' },
        { full_name: 'org/unselected' },
      ],
      manual
    ),
    [{ full_name: 'Org/Second' }, { full_name: 'owner/first' }]
  );
});

test('empty manual selection makes no search and missing repositories are omitted', () => {
  assert.equal(getRepositoryParams({ ...github, mode: 'manual' }, 10), null);
  assert.deepEqual(
    orderRepositories([], {
      ...github,
      mode: 'manual',
      manualProjects: ['org/missing'],
    }),
    []
  );
});
