import React, { createContext, useContext } from 'react';
import { colors, typography, spacing } from '../design-system';

const ThemeContext = createContext({ colors, typography, spacing });

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => (
  <ThemeContext.Provider value={{ colors, typography, spacing }}>
    {children}
  </ThemeContext.Provider>
);