// NavItem.jsx
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useFontsContext } from '../context/fontscontext';

const NavItem = ({ label, href, isCurrentPage }) => {
  const { fonts } = useFontsContext();

  useEffect(() => {
    if (fonts.length > 0) {
      const displayFont = fonts[0]?.css_stack || 'sans-serif';
      document.documentElement.style.setProperty('--font-display', displayFont);
    }
  }, [fonts]);

  return (
    <a
      href={href}
      className={`relative h-[54px] px-6 rounded-full flex justify-center items-center gap-[10px] overflow-hidden transition-colors duration-200 ease-in-out w-fit group ${
        isCurrentPage ? 'bg-[#f4f3ff] text-[#141221] nav-item-active' : 'bg-[#141221] text-[#fcfbff]'
      } nav-item`}
    >
      <span className="absolute inset-0 bg-[#f4f3ff] rounded-full transition-transform duration-300 ease-in-out transform -translate-x-full group-hover:translate-x-0 z-10"></span>

      <div
        className={`relative z-20 text-lg transition-colors duration-300 ease-in-out ${
          isCurrentPage ? 'text-[#141221]' : 'text-[#fcfbff] group-hover:text-[#141221]'
        } nav-text`} 
        style={{ fontFamily: 'var(--font-display)' }}
      >
        {label}
      </div>
    </a>
  );
};

NavItem.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  isCurrentPage: PropTypes.bool.isRequired,
};

export default NavItem;
