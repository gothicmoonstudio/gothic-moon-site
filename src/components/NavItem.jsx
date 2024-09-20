import React from 'react';

const NavItem = ({ label, href, isActive }) => {
  return (
    <a href={href} className={`nav-item ${isActive ? 'active' : ''}`}>
      <div className="nav-text">{label}</div>
    </a>
  );
};

export default NavItem;
