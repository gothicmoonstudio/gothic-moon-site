import React from 'react';
import PropTypes from 'prop-types';

const NavItem = ({ label, href, isCurrentPage }) => {
  return (
    <a
      href={href}
      className={`nav-item relative h-[54px] px-6 rounded-full flex justify-center items-center gap-[10px]
        ${isCurrentPage ? 'nav-item-active' : ''}`}
    >
      
      {isCurrentPage ? null : (
        <span className="absolute inset-0 rounded-full transform -translate-x-full group-hover:translate-x-0 z-10"></span>
      )}
      
      <div className="nav-text relative z-20 text-md font-header">
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