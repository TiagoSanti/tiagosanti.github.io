import axios from 'axios';
import { Fragment, useEffect, useState, useMemo } from 'react';
import HeadTagEditor from './head-tag-editor';
import ErrorPage from './error-page';
import ProfileOverview from './profile-overview';
import Publications from './publications';
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
} from '../helpers/utils';
import { HelmetProvider } from 'react-helmet-async';
import PropTypes from 'prop-types';
import '../assets/index.css';
import { getGithubErrorDetails, isValidConfig } from '../helpers/github.mjs';
import ExternalProject from './external-project';
import { AiOutlineControl } from 'react-icons/ai';

const bgColor = 'bg-base-300';

const GitProfile = ({ config, languageSwitcher }) => {
  if (!isValidConfig(config)) {
    return (
      <ErrorPage
        status={String(noConfigError.status)}
        title={noConfigError.title}
        subTitle={noConfigError.subTitle}
      />
    );
  }
  return (
    <GitProfileContent config={config} languageSwitcher={languageSwitcher} />
  );
};

const GitProfileContent = ({ config, languageSwitcher }) => {
  const sanitizedConfig = useMemo(() => sanitizeConfig(config), [config]);
  const [error, setError] = useState(null);
  const language = sanitizedConfig.language;
  const pt = language === 'pt';
  const [theme, setTheme] = useState(() =>
    getInitialTheme(sanitizedConfig.themeConfig)
  );
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState(null);
  const [repo, setRepo] = useState([]);
  const { username, sortBy, limit } = sanitizedConfig.github;
  const excludeForks = sanitizedConfig.github.exclude.forks;
  const excludedProjects = JSON.stringify(
    sanitizedConfig.github.exclude.projects
  );

  useEffect(() => {
    setupHotjar(sanitizedConfig.hotjar);
  }, [sanitizedConfig.hotjar.id, sanitizedConfig.hotjar.snippetVersion]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    const controller = new AbortController();
    const loadData = async () => {
      setLoading(true);
      setError(null);
      try {
        const { data } = await axios.get(
          'https://api.github.com/users/' + username,
          { signal: controller.signal }
        );
        setProfile({
          avatar: data.avatar_url,
          name: data.name || '',
          bio: data.bio || '',
          location: data.location || '',
          company: data.company || '',
        });
        if (!data.public_repos) {
          setRepo([]);
          return;
        }
        const excluded = JSON.parse(excludedProjects).map(
          (name) => '-repo:' + username + '/' + name
        );
        const query = [
          'user:' + username,
          'fork:' + !excludeForks,
          ...excluded,
        ].join(' ');
        const response = await axios.get(
          'https://api.github.com/search/repositories',
          {
            signal: controller.signal,
            params: {
              q: query,
              sort: sortBy,
              per_page: limit,
              type: 'Repositories',
            },
          }
        );
        setRepo(response.data.items);
      } catch (failure) {
        if (controller.signal.aborted) return;
        const details = getGithubErrorDetails(failure);
        setError(
          details.kind === 'rate-limit'
            ? tooManyRequestError(details.reset)
            : details.kind === 'not-found'
            ? notFoundError
            : genericError
        );
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    };
    loadData();
    return () => controller.abort();
  }, [username, sortBy, limit, excludeForks, excludedProjects]);

  const displayProfile = profile
    ? { ...profile, ...sanitizedConfig.profile }
    : null;

  const changeTheme = (e, newTheme) => {
    e.preventDefault();
    setTheme(newTheme);
    localStorage.setItem('gitprofile-theme', newTheme);
  };

  return (
    <HelmetProvider>
      {sanitizedConfig && (
        <HeadTagEditor
          language={language}
          profile={displayProfile}
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
                    <div
                      title={pt ? 'Alterar tema' : 'Change Theme'}
                      className="dropdown dropdown-end"
                    >
                      <button
                        type="button"
                        aria-label={pt ? 'Alterar tema' : 'Change Theme'}
                        tabIndex={0}
                        className="btn btn-ghost m-1 normal-case opacity-50 text-base-content"
                      >
                        <AiOutlineControl className="inline-block w-5 h-5 stroke-current md:mr-2" />
                        <span className="hidden md:inline">
                          {pt ? 'Alterar tema' : 'Change Theme'}
                        </span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 1792 1792"
                          className="inline-block w-4 h-4 ml-1 fill-current"
                        >
                          <path d="M1395 736q0 13-10 23l-466 466q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l393 393 393-393q10-10 23-10t23 10l50 50q10 10 10 23z" />
                        </svg>
                      </button>
                      <div
                        tabIndex={0}
                        className="mt-16 overflow-y-auto shadow-2xl top-px dropdown-content max-h-96 w-52 rounded-lg bg-base-200 text-base-content z-10"
                      >
                        <ul className="p-4 menu compact">
                          {[
                            sanitizedConfig.themeConfig.defaultTheme,
                            ...sanitizedConfig.themeConfig.themes.filter(
                              (item) =>
                                item !==
                                sanitizedConfig.themeConfig.defaultTheme
                            ),
                          ].map((item, index) => (
                            <li key={index}>
                              {/* eslint-disable-next-line */}
                              <a
                                onClick={(e) => changeTheme(e, item)}
                                className={`${theme === item ? 'active' : ''}`}
                              >
                                <span className="opacity-60 capitalize">
                                  {item ===
                                  sanitizedConfig.themeConfig.defaultTheme
                                    ? pt
                                      ? 'Padrão'
                                      : 'Default'
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
                        profile={displayProfile}
                        loading={loading}
                        avatarRing={!sanitizedConfig.themeConfig.hideAvatarRing}
                        resume={sanitizedConfig.resume}
                        lattes={sanitizedConfig.social.lattes}
                      />
                      <Details
                        language={language}
                        profile={displayProfile}
                        loading={loading}
                        github={sanitizedConfig.github}
                        social={sanitizedConfig.social}
                      />
                      <Skill
                        title={pt ? 'Competências' : 'Skills'}
                        loading={loading}
                        skills={sanitizedConfig.skills}
                      />
                      <Experience
                        title={
                          pt
                            ? 'Experiência profissional'
                            : 'Professional Experience'
                        }
                        loading={loading}
                        experiences={sanitizedConfig.experiences}
                      />
                      <Education
                        title={pt ? 'Formação acadêmica' : 'Education'}
                        loading={loading}
                        education={sanitizedConfig.education}
                      />
                      <Certification
                        title={
                          pt
                            ? 'Cursos e reconhecimentos'
                            : 'Courses & Recognition'
                        }
                        loading={loading}
                        certifications={sanitizedConfig.certifications}
                      />
                    </div>
                  </div>
                  <div className="lg:col-span-2 col-span-1">
                    <div className="flex flex-col gap-6 min-w-0">
                      {sanitizedConfig.profile.about && (
                        <ProfileOverview
                          profile={sanitizedConfig.profile}
                          language={language}
                        />
                      )}
                      <ExternalProject
                        title={
                          pt ? 'Pesquisa e projetos' : 'Research & Projects'
                        }
                        loading={loading}
                        language={language}
                        externalProjects={sanitizedConfig.externalProjects}
                        googleAnalytics={sanitizedConfig.googleAnalytics}
                      />
                      <Publications
                        publications={sanitizedConfig.publications}
                        language={language}
                      />
                      <Project
                        title={pt ? 'Projetos no GitHub' : 'GitHub Projects'}
                        seeAllLabel={pt ? 'Ver todos' : 'See all'}
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
            <footer
              className={`p-2 lg:p-4 footer ${bgColor} text-base-content footer-center`}
            >
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

GitProfileContent.propTypes = {
  config: PropTypes.object.isRequired,
  languageSwitcher: PropTypes.node,
};

GitProfile.propTypes = {
  config: PropTypes.shape({
    language: PropTypes.string,
    profile: PropTypes.object,
    publications: PropTypes.array,
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
      lattes: PropTypes.string,
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
