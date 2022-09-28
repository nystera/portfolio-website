import React, { createContext, useContext, useEffect, useState } from 'react';

type ThemeProviderProps = { children: React.ReactNode };

const ThemeContext = createContext<
  { theme: string | null; toggleTheme: () => void } | undefined
>(undefined);

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  let defaultValue = '';
  if (typeof window !== 'undefined') {
    defaultValue = window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  }

  const [theme, setTheme] = useState<string>(defaultValue);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setTheme('dark');
      } else {
        setTheme('light');
      }
    }
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
  }, [theme, setTheme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme: () =>
          theme === 'dark' ? setTheme('light') : setTheme('dark'),
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export { ThemeProvider, useTheme };
