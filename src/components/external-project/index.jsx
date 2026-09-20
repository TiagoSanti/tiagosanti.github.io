import PropTypes from 'prop-types';
import { ga, skeleton } from '../../helpers/utils';
import LazyImage from '../lazy-image';

const ExternalProject = ({
  externalProjects,
  loading,
  googleAnalytics,
  title = 'My Projects',
  language = 'en',
}) => {
  if (!externalProjects?.length) return null;
  const pt = language === 'pt';
  return (
    <section className="card compact bg-base-100 shadow bg-opacity-40">
      <div className="card-body">
        <h2 className="card-title mb-2">{title}</h2>
        <div className="grid grid-cols-1 gap-6">
          {externalProjects.map((item) => (
            <article
              className="card shadow-lg bg-base-100 min-w-0"
              key={item.title}
            >
              <div className="p-5 md:p-8 space-y-4">
                {loading ? (
                  skeleton({ width: 'w-full', height: 'h-24' })
                ) : (
                  <>
                    <h3 className="font-semibold text-lg leading-relaxed">
                      {item.title}
                    </h3>
                    {item.imageUrl && (
                      <LazyImage
                        src={item.imageUrl}
                        alt={item.title}
                        className="w-20 h-20 object-contain"
                        placeholder={skeleton({
                          width: 'w-20',
                          height: 'h-20',
                        })}
                      />
                    )}
                    <p className="text-base-content/80 text-sm leading-relaxed">
                      {item.description}
                    </p>
                    {item.details && (
                      <details className="text-sm text-base-content/80">
                        <summary className="cursor-pointer font-medium py-2">
                          {pt
                            ? 'Contexto e detalhes do projeto'
                            : 'Project context and details'}
                        </summary>
                        <p className="mt-2 leading-relaxed">{item.details}</p>
                      </details>
                    )}
                    {item.link && (
                      <a
                        className="link text-sm font-medium inline-block"
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                        onClick={() => {
                          if (googleAnalytics?.id)
                            ga.event({
                              action: 'Click External Project',
                              params: { post: item.title },
                            });
                        }}
                      >
                        {item.linkLabel ||
                          (pt ? 'Conhecer o projeto' : 'Explore the project')}
                      </a>
                    )}
                  </>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
ExternalProject.propTypes = {
  externalProjects: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  googleAnalytics: PropTypes.object,
  title: PropTypes.string,
  language: PropTypes.string,
};
export default ExternalProject;
