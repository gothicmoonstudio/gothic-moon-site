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
import { injectFontLink, listFontsInProject } from '../src/utils/adobefonts'; // Import Adobe Fonts utility functions

function App() {
  const [loading, setLoading] = useState(true); // Track loading state
  const [activeSection, setActiveSection] = useState('null'); // Track the active section
  const [projectFonts, setProjectFonts] = useState([]); // Store fonts from the Adobe project

  useEffect(() => {
    // Inject Adobe Fonts link into the head
    injectFontLink();

    // Fetch fonts from the Adobe Fonts project and log them
    async function fetchProjectFonts() {
      const fonts = await listFontsInProject();
      if (fonts) {
        console.log('Fonts in Adobe Project:', fonts);
        setProjectFonts(fonts); // Update the state with fetched fonts
      }
    }

    fetchProjectFonts();

    // Set up IntersectionObserver for section tracking only when loading is complete
    if (!loading) {
      const sections = document.querySelectorAll('section');
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(entry.target.id); // Dynamically update active section
            }
          });
        },
        { threshold: 0.1 } // Adjust this threshold as needed
      );

      sections.forEach((section) => observer.observe(section));

      return () => {
        observer.disconnect();
      };
    }
  }, [loading]);

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId); // Dynamically set the active section
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {loading && <Preloader setLoading={setLoading} />} {/* Pass setLoading to Preloader */}
      {!loading && (
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
