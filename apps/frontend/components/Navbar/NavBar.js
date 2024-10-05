import React, { useState } from 'react';
import PropTypes from 'prop-types';
import NavItem from './NavItem';
import MenuButton from './MenuButton';
import LogoAnimation from './LogoAnimation';

function Navbar({ activeSection }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Close the menu when a nav item is clicked (for mobile view)
  const handleNavItemClick = () => {
    setMenuOpen(false);
  };

  return (
    <header>
      <nav
        className={`
          p-4 md:p-4 rounded-full flex items-center justify-between md:justify-center gap-6 z-50 fixed top-4 left-1/2 transform -translate-x-1/2 w-[90%] md:w-auto
          ${menuOpen ? 'bg-[#0d0c16]' : 'bg-transparent'} 
          md:bg-[#0d0c16] 
          text-[#]
          transition-all duration-300
        `}
      >
        <a href="#home" aria-label="Home" className="w-14 h-14 md:w-14 md:h-14 flex-shrink-0">
          <LogoAnimation />
        </a>

        <button
          className="md:hidden p-4 bg-[#1F1C33] rounded-full"
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <MenuButton />
        </button>

        <div className="hidden md:flex items-center gap-4">
          <NavItem label="About" href="#about" isCurrentPage={activeSection === 'about'} />
          <NavItem label="Services" href="#services" isCurrentPage={activeSection === 'services'} />
          <NavItem label="Projects" href="#projects" isCurrentPage={activeSection === 'projects'} />
          <NavItem label="Prices" href="#prices" isCurrentPage={activeSection === 'prices'} />
          <NavItem label="Blog" href="#blog" isCurrentPage={activeSection === 'blog'} />
        </div>
      </nav>

      {menuOpen && (
        <div className="
          md:hidden fixed inset-0 z-40 flex flex-col items-center justify-center gap-6
          bg-[#0D0C16] 
          transition-all duration-300 ease-in-out
        ">
          <NavItem label="About" href="#about" isCurrentPage={activeSection === 'about'} onClick={handleNavItemClick} />
          <NavItem label="Services" href="#services" isCurrentPage={activeSection === 'services'} onClick={handleNavItemClick} />
          <NavItem label="Projects" href="#projects" isCurrentPage={activeSection === 'projects'} onClick={handleNavItemClick} />
          <NavItem label="Prices" href="#prices" isCurrentPage={activeSection === 'prices'} onClick={handleNavItemClick} />
          <NavItem label="Blog" href="#blog" isCurrentPage={activeSection === 'blog'} onClick={handleNavItemClick} />
        </div>
      )}
    </header>
  );
}

Navbar.propTypes = {
  activeSection: PropTypes.string.isRequired,
};

export default Navbar;