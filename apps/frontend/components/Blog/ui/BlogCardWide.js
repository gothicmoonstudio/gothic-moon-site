import React from 'react';
import PropTypes from 'prop-types';
import TextBlock from '../ui/TextBlock';

const BlogCardWide = ({ title, description, buttonText, onButtonClick, image }) => {
  return (
    <div
      className="w-full h-[37rem] p-6 md:p-9 bg-cover bg-center rounded-2xl shadow-lg flex flex-col justify-end items-end gap-6 md:gap-2.5 transition-all duration-300 relative overflow-hidden"
      style={{ backgroundImage: `url(${image})` }} // Set the background image using the `image` prop
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30 rounded-2xl"></div>

      {/* TextBlock Component with Props */}
      <div className="relative z-10 w-full h-full">
        <TextBlock
          title={title}
          description={description}
          buttonText={buttonText}
          onButtonClick={onButtonClick}
        />
      </div>
    </div>
  );
};

// PropTypes for type checking
BlogCardWide.propTypes = {
  title: PropTypes.string.isRequired, // Title text for the card
  description: PropTypes.string.isRequired, // Description text for the card
  buttonText: PropTypes.string, // Text for the button, e.g., 'Read More'
  onButtonClick: PropTypes.func, // Callback function for button click event
  image: PropTypes.string, // URL of the background image
};

// Default Props
BlogCardWide.defaultProps = {
  buttonText: 'Read More', // Default text for the button
  onButtonClick: () => {}, // Default empty function for button click
  image: 'https://via.placeholder.com/800x600', // Placeholder image URL
};

export default BlogCardWide;