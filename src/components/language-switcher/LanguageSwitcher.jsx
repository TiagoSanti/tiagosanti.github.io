import { MdLanguage } from 'react-icons/md';
import PropTypes from 'prop-types';

const LanguageSwitcher = ({ currentLang, onLanguageChange }) => (
  <label className="flex items-center gap-2 text-base-content">
    <MdLanguage aria-hidden="true" />
    <span className="sr-only">
      {currentLang === 'pt' ? 'Idioma' : 'Language'}
    </span>
    <select
      className="select select-ghost select-sm"
      value={currentLang}
      onChange={(event) => onLanguageChange(event.target.value)}
    >
      <option value="en">English</option>
      <option value="pt">Português</option>
    </select>
  </label>
);
LanguageSwitcher.propTypes = {
  currentLang: PropTypes.string.isRequired,
  onLanguageChange: PropTypes.func.isRequired,
};
export default LanguageSwitcher;
