import { MdLanguage } from 'react-icons/md';
import { useRef } from 'react';

const languages = [
  { code: 'en', label: 'English', flag: '🇺🇸' },
  { code: 'pt', label: 'Português', flag: '🇧🇷' },
  // Add more languages here in the future
];

const LanguageSwitcher = ({ currentLang, onLanguageChange }) => {
  const dropdownRef = useRef(null);

  const handleLanguageChange = (e, langCode) => {
    e.preventDefault();
    onLanguageChange(langCode);
    
    // Close the dropdown after selection
    if (dropdownRef.current) {
      dropdownRef.current.blur();
    }
  };

  const currentLanguage = languages.find(lang => lang.code === currentLang) || languages[0];

  return (
    <div className="dropdown dropdown-end" title="Change Language">
      <div
        ref={dropdownRef}
        tabIndex={0}
        className="btn btn-ghost m-1 normal-case opacity-50 text-base-content"
      >
        <MdLanguage className="inline-block w-5 h-5 stroke-current md:mr-2" />
        <span className="hidden md:inline">
          {currentLanguage.flag} {currentLanguage.label}
        </span>
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
          {languages.map((lang, index) => (
            <li key={index}>
              {/* eslint-disable-next-line */}
              <a
                onClick={(e) => handleLanguageChange(e, lang.code)}
                className={`${currentLang === lang.code ? 'active' : ''}`}
              >
                <span className="opacity-60">
                  {lang.flag} {lang.label}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LanguageSwitcher; 