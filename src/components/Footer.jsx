import React from 'react';
import { Instagram, Dribbble } from 'react-feather';

const Footer = () => {
  const bubbles = Array.from({ length: 128 });

  return (
    <footer className="footer-container">
      {/* Bubbles */}
      <div className="bubbles">
        {bubbles.map((_, index) => (
          <div
            key={index}
            className="bubble"
            style={{
              '--size': `${2 + Math.random() * 4}rem`,
              '--distance': `${6 + Math.random() * 8}rem`,
              '--position': `${-5 + Math.random() * 110}%`,
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

          <div className="footer-text">
            <span className="footer-main-text">We’re brewing something </span>
            <span className="footer-highlight">extraordinary.</span>
          </div>
        </div>

        <div className="social-icons gap-9 pb-6">
          <div className="custom-cursor-area">
            <Instagram />
          </div>
          <div className="custom-cursor-area">
            <Dribbble />
          </div>
        </div>

        <div className="custom-cursor-area w-full flex justify-between items-start">
          <div>
            <p>Designed and developed by me —with a little 💻, ☕, and AI magic🪄.</p>
          </div>
          <div>
            <p>© 2024 Gothic Moon Creative Studio LLC</p>
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
