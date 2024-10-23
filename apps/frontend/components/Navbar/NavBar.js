import React, { useState, useEffect } from 'react';
import NavItem from './NavItem';
import MenuButton from './MenuButton';
import LogoAnimation from './LogoAnimation';

function Navbar({ activeSection }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const handleNavItemClick = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav
        className={`
          p-4 rounded-full flex items-center justify-between md:justify-center gap-6
          transition-all duration-300
          ${menuOpen ? 'bg-[#0d0c16]' : 'bg-transparent'} 
          md:bg-[#0d0c16]
          fixed top-4 left-1/2 transform -translate-x-1/2 w-[90%] md:w-auto
          z-50
        `}
      >
        <a
          href="#home"
          aria-label="Home"
          className="w-14 h-14 flex-shrink-0"
        >
          <LogoAnimation />
        </a>

        {/* Menu Button for Mobile */}
        <button
          className=""
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <MenuButton />
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4">
          <NavItem label="About" href="#about" isCurrentPage={activeSection === 'about'} />
          <NavItem label="Our Value" href="#uvp" isCurrentPage={activeSection === 'uvp'} />
          <NavItem label="Services" href="#services" isCurrentPage={activeSection === 'services'} />
          <NavItem label="Projects" href="#projects" isCurrentPage={activeSection === 'projects'} />
          <NavItem label="Prices" href="#prices" isCurrentPage={activeSection === 'prices'} />
          <NavItem label="Blog" href="#blog" isCurrentPage={activeSection === 'blog'} />
        </div>
      </nav>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div
          className="h-screen w-screen bg-[#0D0C16] z-40 flex flex-col items-center justify-center gap-8 transition-all duration-300 ease-in-out"
        >
          <NavItem
            label="About"
            href="#about"
            isCurrentPage={activeSection === 'about'}
            onClick={handleNavItemClick}
          />
           <NavItem
            label="Our Value"
            href="#uvp"
            isCurrentPage={activeSection === 'uvp'}
            onClick={handleNavItemClick}
          />
          <NavItem
            label="Services"
            href="#services"
            isCurrentPage={activeSection === 'services'}
            onClick={handleNavItemClick}
          />
          <NavItem
            label="Projects"
            href="#projects"
            isCurrentPage={activeSection === 'projects'}
            onClick={handleNavItemClick}
          />
          <NavItem
            label="Prices"
            href="#prices"
            isCurrentPage={activeSection === 'prices'}
            onClick={handleNavItemClick}
          />
          <NavItem
            label="Blog"
            href="#blog"
            isCurrentPage={activeSection === 'blog'}
            onClick={handleNavItemClick}
          />
        </div>
      )}
    </header>
  );
}

export default Navbar;