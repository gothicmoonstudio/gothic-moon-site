// src/App.jsx

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import MainHero from './components/MainHero';
import About from './components/About';
import Projects from './components/Projects';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import NavItem from './components/NavItem';

function App() {
  const [loading, setLoading] = useState(true); // Track loading state
  const [activeSection, setActiveSection] = useState('main-hero'); // Set default active section to avoid warnings

  useEffect(() => {
    if (loading) return; // Only setup observer when not loading

    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id); // Update active section when a section is intersecting
          }
        });
      },
      { threshold: 0.1 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect(); // Cleanup observer on unmount
  }, [loading]);

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId); // Set active section on nav click
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {loading ? (
        <Preloader setLoading={setLoading} /> // Pass setLoading to Preloader
      ) : (
        <div>
          {/* Pass activeSection to Navbar */}
          <Navbar activeSection={activeSection}>
            <NavItem label="Home" href="#main-hero" isCurrentPage={activeSection === 'main-hero'} />
            <NavItem label="About" href="#about" isCurrentPage={activeSection === 'about'} />
            <NavItem label="Projects" href="#projects" isCurrentPage={activeSection === 'projects'} />
            <NavItem label="Services" href="#services" isCurrentPage={activeSection === 'services'} />
            <NavItem label="Contact" href="#contact" isCurrentPage={activeSection === 'contact'} />
          </Navbar>
          <MainHero id="main-hero" />
          <About id="about" />
          <Projects id="projects" />
          <Services id="services" />
          <Contact id="contact" />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
