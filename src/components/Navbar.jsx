import React from 'react';
import NavItem from './NavItem';
import PrimaryButton from './PrimaryButton';
import LogoAnimation from './LogoAnimation';

function Navbar() {
  return (
    <nav className="p-6 bg-[#0d0c16] rounded-full inline-flex items-center gap-6 z-50 fixed top-6 left-1/2 transform -translate-x-1/2">
      {/* Logo Section - Link to MainHero */}
      <div className="w-14 h-14 flex-shrink-0">
          <LogoAnimation  />
      </div>

      {/* Navigation Items */}
      <div className="flex gap-6">
        <NavItem label="About" href="#about" />
        <NavItem label="Projects" href="#projects" />
        <NavItem label="Services" href="#services" />
        <NavItem label="Contact" href="#contact" />
      </div>

      {/* Primary Button */}
      <div className="ml-4 whitespace-nowrap">
        <PrimaryButton label="Request Services" />
      </div>
    </nav>
  );
}

export default Navbar;
