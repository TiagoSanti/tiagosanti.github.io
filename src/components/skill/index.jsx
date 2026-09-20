import { skeleton } from '../../helpers/utils';
import PropTypes from 'prop-types';

const Skill = ({ title = 'Tech Stack', loading, skills = [], groups = [] }) => {
  if (!skills.length && !groups.length) return null;
  const sections = groups.length ? groups : [{ title: '', items: skills }];
  return (
    <section className="card shadow-lg compact bg-base-100 min-w-0">
      <div className="card-body">
        <h2 className="card-title text-base-content/80">{title}</h2>
        {loading ? (
          skeleton({ width: 'w-full', height: 'h-48' })
        ) : (
          <div className="mt-3 space-y-5">
            {sections.map((group, index) => (
              <div key={group.title || index}>
                {group.title && (
                  <h3 className="text-sm font-semibold mb-2">{group.title}</h3>
                )}
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-lg bg-base-200 text-base-content px-3 py-2 text-xs leading-relaxed max-w-full break-words"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
Skill.propTypes = {
  title: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  skills: PropTypes.arrayOf(PropTypes.string),
  groups: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      items: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ),
};
export default Skill;
