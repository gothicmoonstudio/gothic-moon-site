import React from 'react';
import '../styles/index.css'; 

function MyApp({ Component, pageProps }) {
  return (
    <React.StrictMode>
        <Component {...pageProps} />
    </React.StrictMode>
  );
}

export default MyApp;