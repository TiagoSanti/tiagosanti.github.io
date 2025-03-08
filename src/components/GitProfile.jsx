import axios from 'axios';
import { Fragment, useCallback, useEffect, useState, useMemo } from 'react';
import HeadTagEditor from './head-tag-editor';
import ErrorPage from './error-page';
import ThemeChanger from './theme-changer';
import AvatarCard from './avatar-card';
import Details from './details';
import Skill from './skill';
import Experience from './experience';
import Certification from './certification';
import Education from './education';
import Project from './project';
import Blog from './blog';
import Footer from './footer';
import {
  genericError,
  getInitialTheme,
  noConfigError,
  notFoundError,
  setupHotjar,
  tooManyRequestError,
  sanitizeConfig,
  skeleton,
} from '../helpers/utils';
import { HelmetProvider } from 'react-helmet-async';
import PropTypes from 'prop-types';
import '../assets/index.css';
import { formatDistance } from 'date-fns';
import ExternalProject from './external-project';
import { AiOutlineControl } from 'react-icons/ai';

const bgColor = 'bg-base-300';

const GitProfile = ({ config, languageSwitcher }) => {
  const [error, setError] = useState(
    typeof config === 'undefined' && !config ? noConfigError : null
  );
  
  // Use useMemo instead of useState so it updates when config changes
  const sanitizedConfig = useMemo(() => 
    typeof config === 'undefined' && !config ? null : sanitizeConfig(config),
    [config]
  );
  
  const [theme, setTheme] = useState(null);
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState(null);
  const [repo, setRepo] = useState(null);

  // Reset loading state when config changes
  useEffect(() => {
    if (sanitizedConfig) {
      // Clear previous data and set loading when language/config changes
      setLoading(true);
      setProfile(null);
      setRepo(null);
    }
  }, [sanitizedConfig]);

  useEffect(() => {
    if (sanitizedConfig) {
      setTheme(getInitialTheme(sanitizedConfig.themeConfig));
      setupHotjar(sanitizedConfig.hotjar);
      loadData();
    }
  }, [sanitizedConfig]);

  useEffect(() => {
    theme && document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const loadData = useCallback(() => {
    axios
      .get(`https://api.github.com/users/${sanitizedConfig.github.username}`)
      .then((response) => {
        let data = response.data;

        let profileData = {
          avatar: data.avatar_url,
          name: data.name ? data.name : '',
          bio: data.bio ? data.bio : '',
          location: data.location ? data.location : '',
          company: data.company ? data.company : '',
        };

        setProfile(profileData);
        return data;
      })
      .then((userData) => {
        let excludeRepo = ``;
        if (userData.public_repos === 0) {
          setRepo([]);
          return;
        }

        sanitizedConfig.github.exclude.projects.forEach((project) => {
          excludeRepo += `+-repo:${sanitizedConfig.github.username}/${project}`;
        });

        let query = `user:${
          sanitizedConfig.github.username
        }+fork:${!sanitizedConfig.github.exclude.forks}${excludeRepo}`;

        let url = `https://api.github.com/search/repositories?q=${query}&sort=${sanitizedConfig.github.sortBy}&per_page=${sanitizedConfig.github.limit}&type=Repositories`;

        axios
          .get(url, {
            headers: {
              'Content-Type': 'application/vnd.github.v3+json',
            },
          })
          .then((response) => {
            let data = response.data;

            setRepo(data.items);
          })
          .catch((error) => {
            handleError(error);
          });
      })
      .catch((error) => {
        handleError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [setLoading]);

  const handleError = (error) => {
    console.error('Error:', error);
    try {
      let reset = formatDistance(
        new Date(error.response.headers['x-ratelimit-reset'] * 1000),
        new Date(),
        {
          addSuffix: true,
        }
      );

      if (error.response.status === 403) {
        setError(tooManyRequestError(reset));
      } else if (error.response.status === 404) {
        setError(notFoundError);
      } else {
        setError(genericError);
      }
    } catch (error2) {
      setError(genericError);
    }
  };

  const changeTheme = (e, newTheme) => {
    e.preventDefault();
    setTheme(newTheme);
  };

  return (
    <HelmetProvider>
      {sanitizedConfig && (
        <HeadTagEditor
          profile={profile}
          theme={theme}
          googleAnalytics={sanitizedConfig.googleAnalytics}
          social={sanitizedConfig.social}
        />
      )}
      <div className="fade-in h-screen">
        {error ? (
          <ErrorPage
            status={`${error.status}`}
            title={error.title}
            subTitle={error.subTitle}
          />
        ) : (
          <Fragment>
            <div className={`p-2 lg:p-4 min-h-full ${bgColor}`}>
              <div className="container mx-auto">
                <div className="flex justify-end items-center gap-2 mb-6">
                  {!sanitizedConfig.themeConfig.disableSwitch && (
                    <div title="Change Theme" className="dropdown dropdown-end">
                      <div
                        tabIndex={0}
                        className="btn btn-ghost m-1 normal-case opacity-50 text-base-content"
                      >
                        <AiOutlineControl className="inline-block w-5 h-5 stroke-current md:mr-2" />
                        <span className="hidden md:inline">Change Theme</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 1792 1792"
                          className="inline-block w-4 h-4 ml-1 fill-current"
                        >
                          <path d="M1395 736q0 13-10 23l-466 466q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l393 393 393-393q10-10 23-10t23 10l50 50q10 10 10 23z" />
                        </svg>
                      </div>
                      <div
                        tabIndex={0}
                        className="mt-16 overflow-y-auto shadow-2xl top-px dropdown-content max-h-96 w-52 rounded-lg bg-base-200 text-base-content z-10"
                      >
                        <ul className="p-4 menu compact">
                          {[
                            sanitizedConfig.themeConfig.defaultTheme,
                            ...sanitizedConfig.themeConfig.themes.filter(
                              (item) =>
                                item !== sanitizedConfig.themeConfig.defaultTheme
                            ),
                          ].map((item, index) => (
                            <li key={index}>
                              {/* eslint-disable-next-line */}
                              <a
                                onClick={(e) => changeTheme(e, item)}
                                className={`${theme === item ? 'active' : ''}`}
                              >
                                <span className="opacity-60 capitalize">
                                  {item === sanitizedConfig.themeConfig.defaultTheme
                                    ? 'Default'
                                    : item}
                                </span>
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                  {languageSwitcher}
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 rounded-box">
                  <div className="col-span-1">
                    <div className="grid grid-cols-1 gap-6">
                      <AvatarCard
                        profile={profile}
                        loading={loading}
                        avatarRing={!sanitizedConfig.themeConfig.hideAvatarRing}
                        resume={sanitizedConfig.resume}
                      />
                      <Details
                        profile={profile}
                        loading={loading}
                        github={sanitizedConfig.github}
                        social={sanitizedConfig.social}
                      />
                      <Skill
                        loading={loading}
                        skills={sanitizedConfig.skills}
                      />
                      <Experience
                        loading={loading}
                        experiences={sanitizedConfig.experiences}
                      />
                      <Education
                        loading={loading}
                        education={sanitizedConfig.education}
                      />
                      <Certification
                        loading={loading}
                        certifications={sanitizedConfig.certifications}
                      />
                    </div>
                  </div>
                  <div className="lg:col-span-2 col-span-1">
                    <div className="grid grid-cols-1 gap-6">
                      <ExternalProject
                        loading={loading}
                        externalProjects={sanitizedConfig.externalProjects}
                        googleAnalytics={sanitizedConfig.googleAnalytics}
                      />
                      <Project
                        repo={repo}
                        loading={loading}
                        github={sanitizedConfig.github}
                        googleAnalytics={sanitizedConfig.googleAnalytics}
                      />
                      <Blog
                        loading={loading}
                        googleAnalytics={sanitizedConfig.googleAnalytics}
                        blog={sanitizedConfig.blog}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <footer className={`p-2 lg:p-4 footer ${bgColor} text-base-content footer-center`}>
              <div className="container mx-auto">
                <div className="card compact bg-base-100 shadow">
                  <Footer content={sanitizedConfig.footer} loading={loading} />
                </div>
              </div>
            </footer>
          </Fragment>
        )}
      </div>
    </HelmetProvider>
  );
};

GitProfile.propTypes = {
  config: PropTypes.shape({
    github: PropTypes.shape({
      username: PropTypes.string.isRequired,
      sortBy: PropTypes.oneOf(['stars', 'updated']),
      limit: PropTypes.number,
      exclude: PropTypes.shape({
        forks: PropTypes.bool,
        projects: PropTypes.array,
      }),
    }).isRequired,
    social: PropTypes.shape({
      linkedin: PropTypes.string,
      twitter: PropTypes.string,
      mastodon: PropTypes.string,
      facebook: PropTypes.string,
      instagram: PropTypes.string,
      youtube: PropTypes.string,
      dribbble: PropTypes.string,
      behance: PropTypes.string,
      medium: PropTypes.string,
      dev: PropTypes.string,
      stackoverflow: PropTypes.string,
      website: PropTypes.string,
      skype: PropTypes.string,
      telegram: PropTypes.string,
      phone: PropTypes.string,
      email: PropTypes.string,
    }),
    resume: PropTypes.shape({
      fileUrl: PropTypes.string,
    }),
    skills: PropTypes.array,
    externalProjects: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
        imageUrl: PropTypes.string,
      })
    ),
    experiences: PropTypes.arrayOf(
      PropTypes.shape({
        company: PropTypes.string,
        position: PropTypes.string,
        from: PropTypes.string,
        to: PropTypes.string,
      })
    ),
    certifications: PropTypes.arrayOf(
      PropTypes.shape({
        body: PropTypes.string,
        name: PropTypes.string,
        year: PropTypes.string,
        link: PropTypes.string,
      })
    ),
    education: PropTypes.arrayOf(
      PropTypes.shape({
        institution: PropTypes.string,
        degree: PropTypes.string,
        from: PropTypes.string,
        to: PropTypes.string,
      })
    ),
    blog: PropTypes.shape({
      source: PropTypes.string,
      username: PropTypes.string,
      limit: PropTypes.number,
    }),
    googleAnalytics: PropTypes.shape({
      id: PropTypes.string,
    }),
    hotjar: PropTypes.shape({
      id: PropTypes.string,
      snippetVersion: PropTypes.number,
    }),
    themeConfig: PropTypes.shape({
      defaultTheme: PropTypes.string,
      disableSwitch: PropTypes.bool,
      respectPrefersColorScheme: PropTypes.bool,
      hideAvatarRing: PropTypes.bool,
      themes: PropTypes.array,
      customTheme: PropTypes.shape({
        primary: PropTypes.string,
        secondary: PropTypes.string,
        accent: PropTypes.string,
        neutral: PropTypes.string,
        'base-100': PropTypes.string,
        '--rounded-box': PropTypes.string,
        '--rounded-btn': PropTypes.string,
      }),
    }),
    footer: PropTypes.string,
  }).isRequired,
  languageSwitcher: PropTypes.node,
};

export default GitProfile;
