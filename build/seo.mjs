// Provide metadata to crawlers that do not execute React or GitHub API calls.
export const staticSEO = (config) => ({
  name: 'portfolio-static-seo',
  transformIndexHtml: {
    order: 'pre',
    handler(html) {
      const title = `CV | ${config.profile.name}`;
      const description = config.profile.bio;
      const website = config.social.website;
      const escape = (value) =>
        value.replace(
          /[&<>"']/g,
          (char) =>
            ({
              '&': '&amp;',
              '<': '&lt;',
              '>': '&gt;',
              '"': '&quot;',
              "'": '&#39;',
            })[char]
        );
      const meta = (key, value, property = false) => ({
        tag: 'meta',
        attrs: {
          [property ? 'property' : 'name']: key,
          content: value,
          'data-rh': 'true',
        },
        injectTo: 'head',
      });
      return {
        html: html.replace(
          /<title>.*?<\/title>/s,
          `<title>${escape(title)}</title>`
        ),
        tags: [
          meta('description', description),
          meta('og:title', title, true),
          meta('og:description', description, true),
          meta('og:type', 'website', true),
          meta('og:url', website, true),
          meta('twitter:card', 'summary'),
          meta('twitter:title', title),
          meta('twitter:description', description),
        ],
      };
    },
  },
});
