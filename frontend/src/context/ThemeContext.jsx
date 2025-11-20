import { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved) setIsDark(saved === 'dark');
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    localStorage.setItem('theme', !isDark ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <div style={{ 
        minHeight: '100vh', 
        background: isDark ? '#1a1a2e' : '#f0f2f5',
        color: isDark ? '#eee' : '#333',
        transition: 'all 0.3s'
      }}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};
