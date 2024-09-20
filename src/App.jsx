// src/App.jsx
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import MainHero from './components/MainHero';
import About from './components/About';
import Projects from './components/Projects';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Preloader from './components/Preloader';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Preloader setLoading={setLoading} />}
      {!loading && (
        <div>
          <Navbar />
          <CustomCursor />
          <MainHero />
          <About />
          <Projects />
          <Services />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
