// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import MainHero from './components/MainHero';
import About from './components/About';
import Projects from './components/Projects';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <MainHero />
      <About />
      <Projects />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
