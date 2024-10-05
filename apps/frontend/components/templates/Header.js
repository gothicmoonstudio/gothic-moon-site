import React from 'react';
import OneColumn from '../layouts/OneColumn';

const Header = ({ title, specialText }) => {
  return (
    <OneColumn>
      <header className="text-center text-[3rem] md:text-[4rem] lg:text-[5rem] font-header font-medium max-w-6xl mb-4">
        <h1>
          {title} <span className="font-serif special-text">{specialText}</span>
        </h1>
      </header>
    </OneColumn>
  );
};

export default Header;