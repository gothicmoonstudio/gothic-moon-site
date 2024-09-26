import React from 'react';
import { Instagram, Dribbble } from 'react-feather';

const Footer = () => {
  const bubbles = Array.from({ length: 275 });

  return (
    <footer className="footer-container">
      {/* Bubbles */}
      <div className="bubbles">
        {bubbles.map((_, index) => (
          <div
            key={index}
            className="bubble"
            style={{
              '--size': `${2 + Math.random() * 2}rem`,
              '--distance': `${6 + Math.random() * 9}rem`,
              '--position': `${-5 + Math.random() * 250}%`,
              '--time': `${2 + Math.random() * 2}s`,
              '--delay': `${-1 * (2 + Math.random() * 2)}s`
            }}
          ></div>
        ))}
      </div>

      {/* Wrapper for footer content with background */}
      <div className="footer-content-wrapper">
        <div className="footer-content">
          <div className="logo-section">
            <img src="/images/full_logo.svg" alt="Gothic Moon logo" className="footer-logo" />
          </div>

          <div className="footer-text-container">
            <div className="footer-text">
              <span className="footer-main-text">We’re brewing something</span>
              <span className="footer-highlight">extraordinary.</span>
          </div>
        </div>
        </div>

        <div className="social-icons gap-9 pb-6">
        <div className="custom-cursor-area flex justify-center items-center relative">
            <a 
            href="https://www.instagram.com/gothicmoonstudio" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform duration-300 ease-in-out"
            >          
              <Instagram className="hover:text-[#F6FFBC]" />
            </a>
          </div>
          <div className="custom-cursor-area flex justify-center items-center relative">
            <a 
            href="https://dribbble.com/gothicmoonstudio" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform duration-300 ease-in-out"
            >          
              <Dribbble className="hover:text-[#F6FFBC]" />
            </a>
          </div>
        </div>

        <div className="custom-cursor-area w-full flex justify-between items-start">
          <div>
            <p className="font-[Bely]">Designed and developed by yours truly —with a little 💻, ☕, and AI magic🪄.</p>
          </div>
          <div>
            <p className="font-display">© 2024 Gothic Moon Creative Studio LLC</p>
          </div>
        </div>
      </div>

       {/* SVG filter for gooey effect */}
       <svg style={{ position: 'fixed', top: '100vh' }}>
        <defs>
          <filter id="blob">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="blob"
            />
          </filter>
        </defs>
      </svg>
    </footer>
  );
};

export default Footer;
