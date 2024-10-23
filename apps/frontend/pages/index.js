import React, { useEffect } from 'react';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import UVP from '../components/UVP/UVP';
import Services from '../components/Services/Services';
import Projects from '../components/Projects/Project';
import Prices from '../components/Prices/Prices';
import Blog from '../components/Blog/Blog';
import Footer from '../components/Footer/Footer';

const HomePage = ({ setActiveSection }) => {
  useEffect(() => {
    console.log('setActiveSection:', setActiveSection);
    
    if (typeof setActiveSection !== 'function') {
      console.error('setActiveSection is not defined or not a function');
      return;
    }

    const handleObserver = () => {
      const sections = document.querySelectorAll('section');
      console.log('Sections found:', sections);

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          console.log(`Section: ${entry.target.id}, isIntersecting: ${entry.isIntersecting}`);
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      }, {
        root: null,
        rootMargin: '0px',
        threshold: 0.3,
      });

      sections.forEach((section) => observer.observe(section));

      return () => sections.forEach((section) => observer.unobserve(section));
    };

    // Delay observer initialization to ensure all sections are in place
    const timeoutId = setTimeout(handleObserver, 100);

    return () => clearTimeout(timeoutId);
  }, [setActiveSection]);

  return (
    <>
      <section id="home">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="uvp">
        <UVP />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="prices">
        <Prices />
      </section>

      <section id="blog">
        <Blog />
      </section>

        <Footer />
    </>
  );
};

export default HomePage;