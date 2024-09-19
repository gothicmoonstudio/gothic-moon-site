// src/components/NavItem.jsx
import React from 'react';

function NavItem({ label, href }) {
  return (
    <a
      href={href}
      className="nav-item-custom relative p-4 bg-secondary rounded-full text-light text-lg font-normal font-sans overflow-hidden"
    >
      {label}
    </a>
  );
}

export default NavItem;
