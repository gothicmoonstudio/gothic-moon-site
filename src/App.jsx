import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
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
  const [activeSection, setActiveSection] = useState(''); // Track the active section

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect(); // Cleanup observer on component unmount
  }, []);

  return (
    <>
      {loading && <Preloader setLoading={setLoading} />} {/* Pass setLoading to Preloader */}
      {!loading && (
        <div>
          <CustomCursor />
          <Navbar>
            <NavItem label="Home" href="#main-hero" isActive={activeSection === 'main-hero'} />
            <NavItem label="About" href="#about" isActive={activeSection === 'about'} />
            <NavItem label="Projects" href="#projects" isActive={activeSection === 'projects'} />
            <NavItem label="Services" href="#services" isActive={activeSection === 'services'} />
            <NavItem label="Contact" href="#contact" isActive={activeSection === 'contact'} />
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