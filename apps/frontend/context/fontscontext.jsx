import React, { createContext, useContext, useState, useEffect } from 'react';

const FontsContext = createContext();

export function FontsProvider({ children }) {
  const [fonts, setFonts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Use the updated environment variable name based on Vercel settings
    const backendUrl = import.meta.env.VITE_API_BASE_URL;

    // Check if the environment variable is set
    if (!backendUrl) {
      console.error('Error: VITE_API_BASE_URL is not defined. Check your environment variables.');
      setLoading(false);
      return;
    }

    // Fetch fonts data from the backend API
    fetch(`${backendUrl}/api/fonts`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error fetching fonts data: ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => {
        setFonts(data.kit.families);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching fonts data:', error);
        setLoading(false);
      });
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <FontsContext.Provider value={{ fonts, loading }}>
      {children}
    </FontsContext.Provider>
  );
}

export function useFontsContext() {
  return useContext(FontsContext);
}