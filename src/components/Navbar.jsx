// Navbar.jsx
import React from 'react';
import PropTypes from 'prop-types'; // Optional: For prop type checking
import NavItem from './NavItem';
import PrimaryButton from './PrimaryButton';
import LogoAnimation from './LogoAnimation';

function Navbar({ activeSection }) {
  return (
    <nav className="p-6 bg-[#0d0c16] rounded-full inline-flex items-center gap-6 z-50 fixed top-6 left-1/2 transform -translate-x-1/2">
      {/* Logo Section - Link to MainHero */}
      <a href="#main-hero" aria-label="Home" className="w-14 h-14 flex-shrink-0">
        <LogoAnimation />
      </a>

      {/* Navigation Items */}
      <div className="flex gap-6">
        <NavItem 
          label="About" 
          href="#about" 
          isCurrentPage={activeSection === 'about'} 
        />
        <NavItem 
          label="Projects" 
          href="#projects" 
          isCurrentPage={activeSection === 'projects'} 
        />
        <NavItem 
          label="Services" 
          href="#services" 
          isCurrentPage={activeSection === 'services'} 
        />
        <NavItem 
          label="Contact" 
          href="#contact" 
          isCurrentPage={activeSection === 'contact'} 
        />
      </div>

      {/* Primary Button */}
      <div className="ml-4 whitespace-nowrap">
        <PrimaryButton label="Request Services" />
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  activeSection: PropTypes.string.isRequired,
};

export default Navbar;
