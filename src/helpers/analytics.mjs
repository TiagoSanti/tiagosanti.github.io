// Only the production build on the canonical HTTPS origin may collect data.
export const canCollect = ({ production, origin, website, id }) => {
  try {
    const canonical = new URL(website);
    return Boolean(
      production &&
      /^G-[A-Z0-9]+$/.test(id || '') &&
      canonical.protocol === 'https:' &&
      !/^(localhost|127\.|\[::1\])/.test(canonical.hostname) &&
      origin === canonical.origin
    );
  } catch {
    return false;
  }
};

export const createAnalytics = (win, doc) => {
  let initialized = false;
  let language;
  let measurementId;
  const event = (name, params = {}) => {
    if (!initialized || !/^[a-z][a-z0-9_]{0,39}$/.test(name)) return;
    // A blocked tag must never interrupt navigation or interaction.
    try {
      win.gtag('event', name, {
        send_to: measurementId,
        content_language: language,
        ...params,
      });
    } catch {
      // Analytics is optional.
    }
  };
  const initialize = ({ id, website, production, lang, title }) => {
    if (!canCollect({ id, website, production, origin: win.location.origin }))
      return;
    if (initialized) {
      if (language !== lang) {
        const previous_language = language;
        language = lang;
        win.gtag('set', { content_language: lang, page_title: title });
        event('language_change', { previous_language });
      }
      return;
    }
    language = lang;
    measurementId = id;
    win.dataLayer = win.dataLayer || [];
    win.gtag =
      win.gtag ||
      function () {
        win.dataLayer.push(arguments);
      };
    win.gtag('js', new Date());
    win.gtag('set', { content_language: lang });
    win.gtag('config', id, { send_page_view: false, page_title: title });
    initialized = true;
    event('page_view', { page_title: title });
    const script = doc.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
    doc.head.appendChild(script);
  };
  return { initialize, event };
};

export const analytics =
  typeof window === 'undefined'
    ? { initialize() {}, event() {} }
    : createAnalytics(window, document);

// Send a channel label, never email addresses, phone numbers or query strings.
export const contactChannel = (href) => {
  if (!href) return null;
  if (href.startsWith('mailto:')) return 'email';
  if (href.startsWith('tel:')) return 'phone';
  try {
    const { hostname } = new URL(href);
    if (hostname === 'lattes.cnpq.br') return 'lattes';
    if (hostname === 'www.linkedin.com') return 'linkedin';
  } catch {
    return null;
  }
  return null;
};
