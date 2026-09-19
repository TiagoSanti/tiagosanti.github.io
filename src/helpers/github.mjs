import { formatDistance } from 'date-fns';

export const isValidConfig = (config) =>
  typeof config?.github?.username === 'string' &&
  config.github.username.trim().length > 0;

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
