import { analytics } from '../../helpers/analytics.mjs';
import PropTypes from 'prop-types';

const Publications = ({ publications, language }) => {
  if (!publications.length) return null;
  const pt = language === 'pt';
  return (
    <section className="card bg-base-100 shadow-lg">
      <div className="card-body">
        <h2 className="card-title">{pt ? 'Publicações' : 'Publications'}</h2>
        <p className="text-sm text-base-content/70">
          {pt
            ? 'Resumos publicados em anais de eventos'
            : 'Abstracts published in conference proceedings'}
        </p>
        <ol className="divide-y divide-base-300">
          {publications.map((item) => (
            <li key={item.title} className="py-5 space-y-2">
              <h3 className="font-semibold leading-relaxed" lang="pt-BR">
                <a
                  className="link link-hover"
                  href={item.link}
                  onClick={() =>
                    analytics.event('publication_click', {
                      publication_id: `integra_${item.year}_${item.page}`,
                    })
                  }
                  target="_blank"
                  rel="noreferrer"
                >
                  {item.title}
                </a>
              </h3>
              <p className="text-sm leading-relaxed text-base-content/80">
                {item.authors}
              </p>
              <p className="text-sm text-base-content/70">
                Integra UFMS {item.year} · Editora UFMS · p. {item.page}
              </p>
              <a
                className="link text-sm"
                href={item.link}
                onClick={() =>
                  analytics.event('publication_click', {
                    publication_id: `integra_${item.year}_${item.page}`,
                  })
                }
                target="_blank"
                rel="noreferrer"
              >
                {pt ? 'Consultar anais oficiais' : 'View official proceedings'}
              </a>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

Publications.propTypes = {
  publications: PropTypes.array.isRequired,
  language: PropTypes.string.isRequired,
};

export default Publications;
