import React, { useState, useEffect } from 'react';
import '../styles/global.css';
import Preloader from '../components/Preloader/Preloader';
import Navbar from '../components/Navbar/NavBar';
import { ThemeProvider } from '../context/ThemeContext';

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true); // Create the loading state

  useEffect(() => {
    console.log('Loading state updated:', loading); // Debug: check when the loading state updates
  }, [loading]);

  return (
    <React.StrictMode>
      <ThemeProvider>
        {/* Preloader displays until loading is false */}
        {loading ? (
          <Preloader setLoading={setLoading} /> // Pass setLoading as a prop to Preloader
        ) : (
          <>
            <Navbar />
            <Component {...pageProps} />
          </>
        )}
      </ThemeProvider>
    </React.StrictMode>
  );
}

export default MyApp;