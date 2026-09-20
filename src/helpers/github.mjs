import { formatDistance } from 'date-fns';

export const isValidConfig = (config) =>
  typeof config?.github?.username === 'string' &&
  config.github.username.trim().length > 0;

export const getRepositoryParams = (github, publicRepos) => {
  if (github.mode === 'manual') {
    if (!github.manualProjects.length) return null;
    return {
      q: [
        ...github.manualProjects.map((name) => `repo:${name}`),
        'fork:true',
      ].join(' '),
      per_page: 100,
    };
  }
  if (!publicRepos) return null;
  return {
    q: [
      `user:${github.username}`,
      `fork:${!github.exclude.forks}`,
      ...github.exclude.projects.map(
        (name) =>
          `-repo:${name.includes('/') ? name : `${github.username}/${name}`}`
      ),
    ].join(' '),
    sort: github.sortBy,
    per_page: github.limit,
  };
};

export const orderRepositories = (items, github) => {
  if (github.mode !== 'manual') return items;
  const byName = new Map(
    items.map((item) => [item.full_name.toLowerCase(), item])
  );
  return github.manualProjects
    .map((name) => byName.get(name.toLowerCase()))
    .filter(Boolean);
};

// Adapted from upstream deeed53: missing reset headers must not mask 403/404.
export const getGithubErrorDetails = (error) => {
  const status = error?.response?.status;
  if (status === 404) return { kind: 'not-found' };
  if (status !== 403 && status !== 429) return { kind: 'generic' };

  const rawReset = error.response?.headers?.['x-ratelimit-reset'];
  const timestamp = Number(rawReset);
  let reset = null;
  if (rawReset != null && rawReset !== '' && Number.isFinite(timestamp)) {
    const date = new Date(timestamp * 1000);
    if (!Number.isNaN(date.getTime())) {
      reset = formatDistance(date, new Date(), { addSuffix: true });
    }
  }
  return { kind: 'rate-limit', reset };
};
