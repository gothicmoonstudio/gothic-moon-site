import React from 'react';
import PropTypes from 'prop-types';

const SolidButton = ({ label = 'Button', onClick = () => {} }) => {
  return (
    <button
        className="h-[50px] px-6 py-4 bg-[#141221] rounded-full justify-center items-center gap-2.5 inline-flex whitespace-nowrap transition-all duration-300 ease-in-out hover:bg-[#3f3a5b] focus:outline-none focus:ring-2 focus:ring-[#3f3a5b] focus:ring-offset-2"
      onClick={onClick}
    >
      <div className="text-[#f4f3ff] text-base font-normal font-header">
        {label}
      </div>
    </button>
  );
};

// PropTypes validation
SolidButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default SolidButton;