// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { FontsProvider } from './context/fontscontext'; 
import './styles/index.css'; // Ensure this path is correct

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <FontsProvider>
      <App />
    </FontsProvider>
  </React.StrictMode>
);
