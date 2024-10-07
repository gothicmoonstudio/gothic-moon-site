import React, { useState, useEffect } from 'react';
import '../styles/global.css';
import Preloader from '../components/Preloader/Preloader';
import Navbar from '../components/Navbar/NavBar';
import { ThemeProvider } from '../context/ThemeContext';
import PrimaryButton from '../components/ui/PrimaryButton'; 

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    console.log('Loading state updated:', loading);
  }, [loading]);

  return (
    <React.StrictMode>
      <ThemeProvider>
        {loading ? (
          <Preloader setLoading={setLoading} />
        ) : (
          <>
            <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
            <Component {...pageProps} setActiveSection={setActiveSection} />
            <PrimaryButton
              label="Start a Project"
              href="/contact"
              position="fixed"
              bottom="2.25rem" 
              right="2.25rem"
            />
          </>
        )}
      </ThemeProvider>
    </React.StrictMode>
  );
}

export default MyApp;