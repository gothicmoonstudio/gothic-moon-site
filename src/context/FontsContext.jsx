import React, { createContext, useContext, useState, useEffect } from 'react';

const FontsContext = createContext();

export function FontsProvider({ children }) {
  const [fonts, setFonts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3001/api/fonts')
      .then(response => response.json())
      .then(data => {
        setFonts(data.kit.families);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching fonts data:', error);
        setLoading(false);
      });
  }, []);

  return (
    <FontsContext.Provider value={{ fonts, loading }}>
      {children}
    </FontsContext.Provider>
  );
}

export function useFontsContext() {
  return useContext(FontsContext);
}
