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
          <span className="footer-highlight">extraordinary.</span>  
        </div>
      </div>

      <div className="social-icons pb-6">
        <div>
          <Instagram />
        </div>
        <div>
          <Dribbble />
        </div>
      </div>

      <div className="w-full flex justify-between items-start">
        <div>
          <p>Designed and developed by me —with a little 💻, ☕, and AI magic🪄.</p>
        </div>
        <div>
          <p>© 2024 Gothic Moon Creative Studio LLC</p> 
          </div>
      </div>
    </footer>
  );
};

export default Footer;
