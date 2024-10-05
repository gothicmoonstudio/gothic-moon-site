// pages/_app.js
import React, { useState } from 'react';
import '../styles/global.css';
import { ThemeProvider } from '../context/ThemeContext';
import Navbar from '../components/Navbar/NavBar';

function MyApp({ Component, pageProps }) {
  const [activeSection, setActiveSection] = useState('');

  return (
    <React.StrictMode>
      <ThemeProvider>
        <Navbar activeSection={activeSection} />
        <Component {...pageProps} setActiveSection={setActiveSection} />
      </ThemeProvider>
    </React.StrictMode>
  );
}

export default MyApp;