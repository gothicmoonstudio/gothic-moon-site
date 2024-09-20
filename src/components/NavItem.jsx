import React from 'react';

const NavItem = ({ label, href }) => {
  return (
    <a href={href} className="nav-item">
      <div className="nav-text">{label}</div>
    </a>
  );
};

export default NavItem;
