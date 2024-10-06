import React from 'react';
import PropTypes from 'prop-types';

// TextBlock Component
const TextBlock = ({ title, description, onReadMoreClick }) => {
  // Split title and description into words and apply styling for each word
  const renderText = (text) => {
    return text.split(' ').map((word, index) => (
      <span
        key={index}
        className="inline-block px-1 py-0.5 mx-1 my-0.5 bg-[#E9CDFF] rounded-lg text-[#141221] font-semibold transition-all duration-300"
      >
        {word}
      </span>
    ));
  };

  return (
    <div className="flex flex-col items-start justify-start space-y-4">
      {/* Title Section with Background */}
      <div className="text-xl md:text-2xl lg:text-3xl font-bold font-header text-left">
        {renderText(title)}
      </div>

      {/* Description Section with Background */}
      <div className="text-base font-medium text-left text-[#726d96] font-header">
        {renderText(description)}
      </div>
    </div>
  );
};

// PropTypes for type checking
TextBlock.propTypes = {
  title: PropTypes.string.isRequired, // Title text for the block
  description: PropTypes.string.isRequired, // Description text for the block
  onReadMoreClick: PropTypes.func, // Callback function for 'Read More' link click event
};

// Default Props
TextBlock.defaultProps = {
  onReadMoreClick: () => {}, // Default empty function for 'Read More' click event
};

export default TextBlock;