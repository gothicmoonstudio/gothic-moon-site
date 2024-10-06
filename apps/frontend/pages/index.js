import React, { useEffect } from 'react';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Services from '../components/Services/Services';
import Projects from '../components/Projects/Project';
import Prices from '../components/Prices/Prices';
import Blog from '../components/Blog/Blog';
import Footer from '../components/Footer/Footer';

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
        <Hero />
      </section>

      <section id="about">
        <About /> 
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

      <section id="footer">
        <Footer />
      </section>
    </>
  );
};

export default HomePage;