import React, { useEffect } from 'react';
import About from '../components/About/About';
import Prices from '../components/Prices/Prices';

const HomePage = ({ setActiveSection }) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const sections = document.querySelectorAll('section');
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.3,
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      }, options);

      sections.forEach((section) => {
        observer.observe(section);
      });

      return () => {
        sections.forEach((section) => {
          observer.unobserve(section);
        });
      };
    }
  }, [setActiveSection]);

  return (
    <>
      <section id="home">
      </section>

      <section id="about">
        <About /> 
      </section>

      <section id="uvp">
      </section>

      <section id="projects">
      </section>

      <section id="Prices">
        <Prices />
      </section>

      <section id="blog">
      </section>
    </>
  );
};

export default HomePage;