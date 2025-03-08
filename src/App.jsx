import { useState, useCallback } from 'react';
import configEn from '../gitprofile.config';
import configPt from '../gitprofile.config.pt';
import GitProfile from './components/GitProfile';
import LanguageSwitcher from './components/language-switcher/LanguageSwitcher';

function App() {
  const [currentLang, setCurrentLang] = useState(() => {
    const savedLang = localStorage.getItem('preferred-language');
    return savedLang || 'en';
  });

  const [config, setConfig] = useState(() => {
    const savedLang = localStorage.getItem('preferred-language');
    return savedLang === 'pt' ? configPt : configEn;
  });

  const handleLanguageChange = useCallback((lang) => {
    setCurrentLang(lang);
    const newConfig = lang === 'en' ? configEn : configPt;
    setConfig(newConfig);
    localStorage.setItem('preferred-language', lang);
    // The GitProfile component will now automatically react to config changes
  }, []);

  return (
    <GitProfile 
      config={config} 
      languageSwitcher={
        <LanguageSwitcher 
          currentLang={currentLang}
          onLanguageChange={handleLanguageChange} 
        />
      } 
    />
  );
}

export default App;
