import { escapeHtml } from './cv-template.mjs';

export const CARD_FORMATS = {
  landscape: { width: 1920, height: 1080 },
  portrait: { width: 1080, height: 1920 },
};

const list = (items, className = '') =>
  `<ul class="${className}">${items.map((item) => `<li>${item}</li>`).join('')}</ul>`;

export const renderSummaryCard = (config, format, assets = {}) => {
  if (!CARD_FORMATS[format]) throw new Error(`Unknown card format: ${format}`);
  if (!config.summaryCard) throw new Error('Missing summaryCard config');
  const pt = config.language === 'pt';
  const words = pt
    ? {
        experience: 'Experiência',
        highlights: 'Destaques',
        skills: 'Competências',
        scan: 'Currículo completo',
      }
    : {
        experience: 'Experience',
        highlights: 'Highlights',
        skills: 'Skills',
        scan: 'Full CV',
      };
  const { profile, social, summaryCard: card } = config;
  const name = profile.displayName || profile.name;
  const site = social.website.replace(/^https?:\/\//, '').replace(/\/$/, '');
  const contacts = [
    site,
    social.linkedin && `linkedin.com/in/${social.linkedin}`,
    config.github?.username && `github.com/${config.github.username}`,
  ].filter(Boolean);
  const { width, height } = CARD_FORMATS[format];
  const section = (title, body, className = '') =>
    `<section class="card ${className}"><h2>${escapeHtml(title)}</h2>${body}</section>`;

  const research = section(
    card.research.title,
    `<p class="lead">${escapeHtml(card.research.text)}</p><p class="muted">${escapeHtml(card.research.context)}</p>`,
    'research'
  );
  const experience = section(
    words.experience,
    list(
      card.experiences.map(
        (item) =>
          `<strong>${escapeHtml(item.role)}</strong><span class="muted">${escapeHtml(item.org)} · <span class="period">${escapeHtml(item.period)}</span></span>`
      ),
      'entries'
    )
  );
  const highlights = section(
    words.highlights,
    list(card.highlights.map(escapeHtml), 'bullets')
  );
  const skills = section(
    words.skills,
    list(card.skills.map(escapeHtml), 'chips')
  );
  const avatar = assets.avatar
    ? `<img class="avatar" src="${escapeHtml(assets.avatar)}" alt="">`
    : '';
  const qr = assets.qr
    ? `<div class="qr">${assets.qr}<span>${escapeHtml(words.scan)}</span></div>`
    : '';
  const identity = `<header class="identity">${avatar}<div><h1>${escapeHtml(name)}</h1>${list(
    profile.bio.split('|').map((part) => escapeHtml(part.trim())),
    'bio'
  )}</div></header>`;
  const links = list(contacts.map(escapeHtml), 'contacts');

  const body =
    format === 'landscape'
      ? `<aside>${identity}${links}${qr}</aside><main><div class="col">${research}${experience}</div><div class="col">${highlights}${skills}</div></main>`
      : `${identity}<main>${research}${experience}${highlights}${skills}</main><footer>${qr}${links}</footer>`;

  return `<!doctype html><html lang="${pt ? 'pt-BR' : 'en-US'}"><head><meta charset="utf-8"><title>${escapeHtml(name)}</title><style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    html, body { width: ${width}px; height: ${height}px; overflow: hidden; }
    body { font-family: Arial, Helvetica, 'Liberation Sans', sans-serif; color: #1f2430; background: #f2f2f6; line-height: 1.35; }
    ul { list-style: none; }
    h1 { font-size: 64px; letter-spacing: -1.5px; line-height: 1.05; color: #14112b; }
    h2 { font-size: 22px; text-transform: uppercase; letter-spacing: 2px; color: #570df8; margin-bottom: 18px; }
    .muted { color: #5d6270; }
    .identity { display: flex; align-items: center; gap: 36px; }
    .avatar { width: 200px; height: 200px; border-radius: 50%; border: 6px solid #570df8; object-fit: cover; flex: none; }
    .bio { margin-top: 14px; font-size: 24px; color: #3b3f4b; }
    .bio li + li { margin-top: 4px; }
    .contacts { font-size: 24px; color: #3b3f4b; }
    .contacts li + li { margin-top: 8px; }
    .card { background: #fff; border-radius: 24px; padding: 34px 38px; box-shadow: 0 6px 24px rgba(20, 17, 43, .07); overflow: hidden; }
    .lead { font-size: 30px; line-height: 1.3; color: #14112b; margin-bottom: 14px; }
    .research .muted { font-size: 22px; }
    .entries li + li { margin-top: 18px; }
    .entries strong { display: block; font-size: 25px; color: #14112b; }
    .entries span { display: block; font-size: 21px; margin-top: 3px; }
    .entries .period { display: inline; white-space: nowrap; }
    .bullets li { font-size: 24px; padding-left: 28px; position: relative; }
    .bullets li + li { margin-top: 14px; }
    .bullets li::before { content: ''; position: absolute; left: 4px; top: 11px; width: 10px; height: 10px; border-radius: 50%; background: #570df8; }
    .chips { display: flex; flex-wrap: wrap; gap: 12px; }
    .chips li { font-size: 22px; padding: 9px 18px; border-radius: 999px; background: #ede7fe; color: #3d0aa8; }
    .qr { display: flex; align-items: center; gap: 22px; font-size: 20px; color: #5d6270; }
    .qr svg { width: 150px; height: 150px; flex: none; border-radius: 12px; background: #fff; padding: 10px; }
    ${
      format === 'landscape'
        ? `body { display: flex; gap: 56px; padding: 72px; }
    aside { width: 560px; flex: none; display: flex; flex-direction: column; justify-content: space-between; }
    aside .identity { flex-direction: column; align-items: flex-start; gap: 30px; }
    main { flex: 1; display: grid; grid-template-columns: 1fr 1fr; gap: 32px; min-width: 0; }
    .col { display: flex; flex-direction: column; gap: 32px; min-height: 0; }
    .col .card:last-child { flex: 1; }`
        : `body { display: flex; flex-direction: column; gap: 36px; padding: 64px 72px; }
    .avatar { width: 170px; height: 170px; }
    .card { padding: 28px 36px; }
    h2 { margin-bottom: 14px; }
    .chips li { font-size: 21px; padding: 8px 16px; }
    .identity { flex-direction: column; text-align: center; gap: 26px; }
    .identity h1 { font-size: 72px; }
    .bio { font-size: 27px; }
    main { flex: 1; display: flex; flex-direction: column; justify-content: space-between; gap: 24px; min-height: 0; }
    footer { display: flex; align-items: center; justify-content: space-between; gap: 32px; }
    footer .contacts { text-align: right; }`
    }
  </style></head><body>${body}</body></html>`;
};
