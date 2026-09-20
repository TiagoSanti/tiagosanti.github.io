import PropTypes from 'prop-types';

const ProfileOverview = ({ profile, language }) => (
  <section className="card bg-base-100 shadow-lg">
    <div className="card-body gap-4">
      <h2 className="card-title">
        {language === 'pt'
          ? 'Currículo — Pesquisa e Engenharia de Software'
          : 'CV — Research & Software Engineering'}
      </h2>
      <p className="leading-relaxed text-base-content/80">{profile.about}</p>
    </div>
  </section>
);

ProfileOverview.propTypes = {
  profile: PropTypes.object.isRequired,
  language: PropTypes.string.isRequired,
};

export default ProfileOverview;
