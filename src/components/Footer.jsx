import React from 'react';
import { Instagram, Dribbble } from 'react-feather';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="logo-section">
          <img src="/images/full_logo.svg" alt="Gothic Moon logo" className="footer-logo" />
        </div>

        <div className="footer-text">
          <span className="footer-main-text">We’re brewing something </span>
          <span className="footer-highlight">extra</span>
          <span className="footer-main-text">ordinary.</span>
        </div>
      </div>

      <div className="social-icons">
        <div>
            <Instagram/>
        </div>
        <div>
            <Dribbble/>
        </div>
      </div>

      <div className="footer-copyright">
        @2024 Gothic Moon Creative Studio LLC
      </div>
    </footer>
  );
};

export default Footer;
