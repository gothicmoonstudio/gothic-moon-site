import React, { createContext, useContext, useState, useEffect } from 'react';

const FontsContext = createContext();

export function FontsProvider({ children }) {
  const [fonts, setFonts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Use environment variable to determine the correct backend URL
    const backendUrl = import.meta.env.VITE_BACKEND_URL
    
    fetch(`${backendUrl}/api/fonts`)
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
