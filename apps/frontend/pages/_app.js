// pages/_app.js
import React from 'react';
import '../styles/global.css';
import { ThemeProvider } from '../context/ThemeContext';

function MyApp({ Component, pageProps }) {
  return (
    <React.StrictMode>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </React.StrictMode>
  );
}

export default MyApp;