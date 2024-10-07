import React from 'react';
import PropTypes from 'prop-types';
import OneColumn from '../layouts/OneColumn';

const Header = ({ title, specialText = '', theme = 'light', className = '' }) => {
  const textColorClass = theme === 'dark' ? 'text-dark-text' : 'text-light-text';

  return (
    <OneColumn>
      <header
        className={`relative text-center text-[2rem] md:text-[3rem] lg:text-[5rem] font-header font-medium mb-4 ${textColorClass} ${className}`}
      >
        <h1>
          {title}{' '}
          {specialText && (
            <span className="font-serif special-text text-[2rem] md:text-[3rem] lg:text-[5rem]">
              {specialText}
            </span>
          )}
        </h1>
      </header>
    </OneColumn>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  specialText: PropTypes.string,
  theme: PropTypes.oneOf(['light', 'dark']),
  className: PropTypes.string,
};

export default Header;