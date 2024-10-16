import React from 'react';
import OneColumn from '../layouts/OneColumn';
import TextFocus from '../Animations/TextFocus/TextFocus';

const Header = ({ title, specialText = '', theme = 'light', className = '' }) => {
  const textColorClass = theme === 'dark' ? 'text-dark-text' : 'text-light-text';

  return (
    <OneColumn>
      <header
        className={`relative text-center text-[2rem] md:text-[3rem] lg:text-[5rem] font-header font-medium mb-4 ${textColorClass} ${className}`}
      >
        <TextFocus>
          <h1>
            {title}{' '}
            {specialText && (
              <span className="font-serif special-text text-[2rem] md:text-[3rem] lg:text-[5rem]">
                {specialText}
              </span>
            )}
          </h1>
        </TextFocus>
      </header>
    </OneColumn>
  );
};

export default Header;