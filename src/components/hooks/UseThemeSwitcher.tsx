import { useEffect, useState } from 'react';

const UseThemeSwitcher = () => {
  const [activeTheme, setActiveTheme] = useState<string>('');
  const preferDarkQuery = '(prefers-color-scheme: dark)';

  useEffect(() => {
    const mediaQuery = window.matchMedia(preferDarkQuery);
    const userPreference = window.localStorage.getItem('theme');

    const handleChange = () => {
      if (userPreference) {
        const check = userPreference === 'dark' ? 'dark' : 'light';
        setActiveTheme(check);
        if (check === 'dark') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      } else {
        const check = mediaQuery.matches ? 'dark' : 'light';
        setActiveTheme(check);
        if (check === 'dark') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      }
    };

    handleChange();

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    if (activeTheme === 'dark') {
      window.localStorage.setItem('theme', 'dark');
      document.documentElement.classList.add('dark');
    }
    if (activeTheme === 'light') {
      window.localStorage.setItem('theme', 'light');
      document.documentElement.classList.remove('dark');
    }
  }, [activeTheme]);

  return [activeTheme, setActiveTheme] as const;
};

export default UseThemeSwitcher;
