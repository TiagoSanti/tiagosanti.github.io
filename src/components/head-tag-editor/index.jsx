import { Fragment } from 'react';
import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';
import { isDarkishTheme } from '../../helpers/utils';

const HeadTagEditor = ({ profile, theme, social, language = 'en' }) => {
  return (
    <Fragment>
      {profile && (
        <Helmet>
          <html lang={language === 'pt' ? 'pt-BR' : 'en-US'} />
          <title>
            {language === 'pt' ? 'Currículo' : 'CV'} | {profile.name}
          </title>
          <meta
            name="theme-color"
            content={isDarkishTheme(theme) ? '#000000' : '#ffffff'}
          />

          <meta name="description" content={profile.bio} />

          <meta
            itemProp="name"
            content={`${language === 'pt' ? 'Currículo' : 'CV'} | ${profile.name}`}
          />
          <meta itemProp="description" content={profile.bio} />
          <meta itemProp="image" content={profile.avatar} />

          <meta property="og:url" content={social?.website || ''} />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content={`${language === 'pt' ? 'Currículo' : 'CV'} | ${profile.name}`}
          />
          <meta property="og:description" content={profile.bio} />
          <meta property="og:image" content={profile.avatar} />

          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content={`${language === 'pt' ? 'Currículo' : 'CV'} | ${profile.name}`}
          />
          <meta name="twitter:description" content={profile.bio} />
          <meta name="twitter:image" content={profile.avatar} />
        </Helmet>
      )}
    </Fragment>
  );
};

HeadTagEditor.propTypes = {
  language: PropTypes.string,
  profile: PropTypes.object,
  theme: PropTypes.string,
  social: PropTypes.object.isRequired,
};

export default HeadTagEditor;
