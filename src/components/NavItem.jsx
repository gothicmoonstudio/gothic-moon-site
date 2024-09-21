// NavItem.jsx
import React from 'react';
import PropTypes from 'prop-types'; // Optional: For prop type checking

const NavItem = ({ label, href, isCurrentPage }) => {
  return (
    <a href={href} className={`nav-item ${isCurrentPage ? 'active' : ''}`}>
      <div className="nav-text">{label}</div>
    </a>
  );
};

// Optional: Define prop types for better maintainability
NavItem.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  isCurrentPage: PropTypes.bool.isRequired,
};

export default NavItem;
