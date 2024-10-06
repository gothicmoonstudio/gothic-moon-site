import React from 'react';
import PropTypes from 'prop-types';
import OneColumn from '../layouts/OneColumn';

const Header = ({ title, specialText, theme = 'light', className = '' }) => {
  // Set text color based on the theme prop
  const textColorClass = theme === 'dark' ? 'text-dark-text' : 'text-light-text';

  return (
    <OneColumn>
      <header
        className={`relative text-center text-[2rem] md:text-[3rem] lg:text-[5rem] font-header font-medium mb-4 ${textColorClass} ${className}`}
      >
        {/* Title and Special Text */}
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

// Prop type validation for better code quality and safety
Header.propTypes = {
  title: PropTypes.string.isRequired, // title is required and must be a string
  specialText: PropTypes.string, // specialText is optional and must be a string
  theme: PropTypes.oneOf(['light', 'dark']), // theme prop can only be 'light' or 'dark'
  className: PropTypes.string, // Optional className prop for additional styling
};

// Default prop values
Header.defaultProps = {
  specialText: '',
  theme: 'light', // Default theme is set to 'light'
  className: '',
};

export default Header;