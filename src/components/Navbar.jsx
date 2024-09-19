// src/components/Navbar.jsx
import React from 'react';
import NavItem from './NavItem';

function Navbar() {
  return (
    <nav className="fixed top-6 left-0 right-0 p-6 bg-primary rounded-full flex items-center justify-between gap-9 z-50 mx-auto max-w-screen-lg">
      <div className="w-14 h-14">
        <img
          src="/images/logo_animation.svg"
          alt="Logo"
          className="w-full h-full"
        />
      </div>

      <div className="flex gap-4">
        <NavItem label="About" href="#about" />
        <NavItem label="Projects" href="#projects" />
        <NavItem label="Services" href="#services" />
        <NavItem label="Contact" href="#contact" />
      </div>

      <a
        href="#contact"
        className="p-4 bg-gradient-to-l from-[#ffe9e9] to-accent rounded-full text-dark text-lg font-normal font-sans"
      >
        Request Services
      </a>
    </nav>
  );
}

export default Navbar;
