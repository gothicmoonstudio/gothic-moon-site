// Navbar.jsx
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import NavItem from './NavItem';
import PrimaryButton from './PrimaryButton';
import LogoAnimation from './LogoAnimation';
import MenuButton from './MenuButton';

function Navbar({ activeSection }) {
  // State to track if the mobile menu is open
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle menu open/close
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header>
      {/* Desktop and Mobile Navbar Container */}
      <nav className="p-4 md:p-4 bg-[#0d0c16] rounded-full flex items-center justify-between md:justify-center gap-6 z-50 fixed top-4 left-1/2 transform -translate-x-1/2 w-[90%] md:w-auto">
        {/* Logo Section - Link to MainHero */}
        <a href="#main-hero" aria-label="Home" className="w-14 h-14 md:w-14 md:h-14 flex-shrink-0">
          <LogoAnimation />
        </a>

        {/* Hamburger Menu for Mobile */}
        <button
          className="md:hidden p-4 bg-[#141221] rounded-full"
          onClick={toggleMenu}
          aria-label="Menu"
        >
          {/* Icon for the hamburger menu */}
          <div>
          <MenuButton /> 
          </div>
        </button>

        {/* Desktop Navigation Items */}
        <div className="hidden md:flex items-center gap-4">
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

        {/* Primary Button - Desktop Only */}
        <div className="hidden md:block whitespace-nowrap">
          <PrimaryButton label="Start a Project" />
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 bg-[#0D0C16] z-40 flex flex-col items-center justify-center gap-6">
          <NavItem
            label="About"
            href="#about"
            isCurrentPage={activeSection === 'about'}
            onClick={toggleMenu} // Close menu on click
          />
          <NavItem
            label="Projects"
            href="#projects"
            isCurrentPage={activeSection === 'projects'}
            onClick={toggleMenu}
          />
          <NavItem
            label="Services"
            href="#services"
            isCurrentPage={activeSection === 'services'}
            onClick={toggleMenu}
          />
          <NavItem
            label="Contact"
            href="#contact"
            isCurrentPage={activeSection === 'contact'}
            onClick={toggleMenu}
          />
          {/* Mobile Primary Button */}
          <PrimaryButton label="Start a Project" />
        </div>
      )}
    </header>
  );
}

Navbar.propTypes = {
  activeSection: PropTypes.string.isRequired,
};

export default Navbar;
