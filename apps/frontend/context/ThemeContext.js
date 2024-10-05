import React, { createContext, useState, useEffect } from 'react';

// Create the ThemeContext
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light'); // Default theme

  useEffect(() => {
    const root = document.documentElement;

    // Set CSS variables based on the current theme
    if (theme === 'dark') {
      root.style.setProperty('--background-color', 'var(--dark-background)'); // Dark background
      root.style.setProperty('--text-color', 'var(--dark-text)'); // Light text
    } else {
      root.style.setProperty('--background-color', 'var(--light-background)'); // Light background
      root.style.setProperty('--text-color', 'var(--light-text)'); // Dark text
    }

    // Set the color-scheme if needed
    root.style.setProperty('color-scheme', theme);
  }, [theme]);

  // Function to toggle the theme
  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};