export const escapeHtml = (value = '') =>
  String(value).replace(
    /[&<>"']/g,
    (char) =>
      ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[
        char
      ]
  );

const paragraph = (text) => (text ? `<p>${escapeHtml(text)}</p>` : '');
const link = (href, label, website) => {
  if (!href) return escapeHtml(label);
  const url = new URL(href, website);
  if (!['https:', 'http:', 'mailto:', 'tel:'].includes(url.protocol))
    throw new Error(`Unsupported CV link protocol: ${url.protocol}`);
  return `<a href="${escapeHtml(url.href)}">${escapeHtml(label)}</a>`;
};

export const renderCV = (config) => {
  const pt = config.language === 'pt';
  const words = pt
    ? {
        cv: 'Currículo',
        about: 'Apresentação',
        education: 'Formação acadêmica',
        experience: 'Experiência profissional',
        skills: 'Competências',
        projects: 'Pesquisa e projetos',
        publications: 'Publicações',
        proceedings: 'Resumos publicados em anais de eventos',
        courses: 'Cursos e reconhecimentos',
        appendix: 'Detalhes dos projetos',
        updated: 'Conteúdo revisado em',
        source: 'Currículo online',
        projectLink: 'Conhecer o projeto',
        certificate: 'Referência',
      }
    : {
        cv: 'Curriculum Vitae',
        about: 'Profile',
        education: 'Education',
        experience: 'Professional Experience',
        skills: 'Skills',
        projects: 'Research & Projects',
        publications: 'Publications',
        proceedings: 'Abstracts published in conference proceedings',
        courses: 'Courses & Recognition',
        appendix: 'Project Details',
        updated: 'Content reviewed on',
        source: 'Online CV',
        projectLink: 'Explore the project',
        certificate: 'Reference',
      };
  const { profile, social } = config;
  const name = profile.displayName || profile.name;
  const website = social.website;
  const anchor = (url, label) => link(url, label, website);
  const section = (title, items) =>
    items.length
      ? `<section><h2>${escapeHtml(title)}</h2>${items.join('')}</section>`
      : '';
  const entry = (title, meta, body = '') =>
    `<article><header><h3>${title}</h3>${meta ? `<p class="meta">${escapeHtml(meta)}</p>` : ''}</header>${body}</article>`;
  const dates = (item) => [item.from, item.to].filter(Boolean).join(' - ');
  const contact = [
    escapeHtml(profile.location),
    social.email && anchor(`mailto:${social.email}`, social.email),
    social.phone && anchor(`tel:${social.phone}`, social.phone),
    anchor(website, words.source),
    social.linkedin &&
      anchor(`https://www.linkedin.com/in/${social.linkedin}`, 'LinkedIn'),
    config.github?.username &&
      anchor(`https://github.com/${config.github.username}`, 'GitHub'),
    social.lattes && anchor(social.lattes, 'Lattes'),
  ]
    .filter(Boolean)
    .join(' <span aria-hidden="true"> · </span> ');
  const date = profile.contentUpdatedAt;
  const reviewed = date
    ? new Intl.DateTimeFormat(pt ? 'pt-BR' : 'en-US', {
        dateStyle: 'long',
        timeZone: 'UTC',
      }).format(new Date(`${date}T00:00:00Z`))
    : '';
  const projects = config.externalProjects || [];
  const content = [
    section(words.about, [paragraph(profile.about)]),
    section(
      words.education,
      (config.education || []).map((item) =>
        entry(
          escapeHtml(item.degree),
          `${item.institution} | ${dates(item)}`,
          paragraph(item.description)
        )
      )
    ),
    section(
      words.experience,
      (config.experiences || []).map((item) =>
        entry(
          escapeHtml(item.position),
          `${item.company} | ${dates(item)}`,
          paragraph(item.description)
        )
      )
    ),
    section(
      words.skills,
      (config.skillGroups || []).map(
        (group) =>
          `<p class="skill"><strong>${escapeHtml(group.title)}:</strong> ${group.items.map(escapeHtml).join('; ')}.</p>`
      )
    ),
    section(
      words.projects,
      projects.map((item) =>
        entry(
          escapeHtml(item.title),
          '',
          paragraph(item.description) +
            (item.link
              ? `<p class="reference">${anchor(item.link, item.linkLabel || words.projectLink)}</p>`
              : '')
        )
      )
    ),
    section(
      words.publications,
      (config.publications || []).map((item) =>
        entry(
          anchor(item.link, item.title),
          `${words.proceedings} | Integra UFMS ${item.year} | Editora UFMS | p. ${item.page}`,
          paragraph(item.authors)
        )
      )
    ),
    section(
      words.courses,
      (config.certifications || []).map((item) =>
        entry(
          escapeHtml(item.name),
          item.year,
          paragraph(item.body) +
            (item.link
              ? `<p class="reference">${anchor(item.link, words.certificate)}</p>`
              : '')
        )
      )
    ),
    projects.some((item) => item.details)
      ? `<div class="appendix">${section(
          words.appendix,
          projects
            .filter((item) => item.details)
            .map((item) =>
              entry(
                escapeHtml(item.title),
                '',
                item.details
                  .split(/\n\s*\n/)
                  .map(paragraph)
                  .join('')
              )
            )
        )}</div>`
      : '',
  ].join('');
  return `<!doctype html><html lang="${pt ? 'pt-BR' : 'en-US'}"><head><meta charset="utf-8"><title>${escapeHtml(name)} | ${words.cv}</title><style>
    @page { size: A4; }
    * { box-sizing: border-box; }
    body { margin: 0; font-family: Arial, Helvetica, sans-serif; font-size: 10.5pt; line-height: 1.42; color: #202c36; }
    h1 { font-size: 25pt; letter-spacing: -.5pt; margin: 0 0 5pt; color: #163f50; }
    .identity { border-bottom: 2pt solid #277287; padding-bottom: 12pt; margin-bottom: 16pt; }
    .bio { font-size: 11pt; font-weight: bold; margin: 0 0 7pt; }
    .contacts, .updated { font-size: 9pt; line-height: 1.6; margin: 3pt 0; }
    h2 { font-size: 13pt; color: #163f50; border-bottom: .5pt solid #c8d7db; padding-bottom: 4pt; margin: 17pt 0 9pt; break-after: avoid; }
    h3 { font-size: 10.8pt; line-height: 1.35; margin: 0 0 3pt; }
    p { margin: 4pt 0 8pt; orphans: 3; widows: 3; }
    article { margin-bottom: 11pt; break-inside: avoid; }
    article header { break-inside: avoid; break-after: avoid; }
    .meta { font-size: 9.3pt; color: #465d67; margin: 0 0 4pt; }
    .skill { break-inside: avoid; margin-bottom: 7pt; }
    a { color: #17596e; text-decoration: underline; overflow-wrap: anywhere; }
    .reference { font-size: 9pt; margin-top: 3pt; }
    .appendix { break-before: page; font-size: 9.5pt; line-height: 1.35; }
    .appendix h3 { font-size: 10pt; }
    .appendix article { break-inside: auto; }
  </style></head><body><main><header class="identity"><h1>${escapeHtml(name)}</h1>
    <p class="bio">${escapeHtml(profile.bio)}</p><p class="contacts">${contact}</p>
    ${reviewed ? `<p class="updated">${words.updated}: ${escapeHtml(reviewed)}</p>` : ''}
    </header>${content}</main></body></html>`;
};
