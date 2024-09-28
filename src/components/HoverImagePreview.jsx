import React, { useState } from 'react';
import { gsap } from 'gsap';
import PropTypes from 'prop-types';

const HoverImagePreview = ({ items = [], imageHeight = 200, imageWidth = 300 }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [hoveredStyle, setHoveredStyle] = useState({ left: 0, top: 0 });

  // Handle mouse enter on the "View Projects" link
  const handleMouseEnter = (index, event) => {
    setHoveredIndex(index); // Set the hovered index to the link being hovered
    const { clientX, clientY } = event; // Get the mouse position
    setHoveredStyle({ left: clientX + 20, top: clientY + 20 }); // Update position of the image preview
    gsap.to('#gallery-work', { autoAlpha: 1, duration: 0.3, ease: 'power1.out' });
  };

  // Handle mouse leave to hide the image preview
  const handleMouseLeave = () => {
    setHoveredIndex(null);
    gsap.to('#gallery-work', { autoAlpha: 0, duration: 0.3, ease: 'power1.out' });
  };

  // Move the image preview with the cursor
  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    gsap.to('#gallery-work', {
      left: clientX + 20,
      top: clientY + 20,
      duration: 0.2,
      ease: 'power1.out',
    });
  };

  return (
    <div className="relative w-full items-works" onMouseMove={handleMouseMove}>
      {/* Image Preview Container */}
      <div
        id="gallery-work"
        className="fixed z-50 pointer-events-none opacity-0"
        style={{ width: imageWidth, height: imageHeight, ...hoveredStyle }}
      >
        {/* Show the image corresponding to the hovered index */}
        {items.map((item, index) => (
          <div
            key={index}
            className={`absolute inset-0 rounded-full w-48 h-48 bg-cover bg-center transition-all duration-500 ${
              hoveredIndex === index ? 'block' : 'hidden'
            }`}
            style={{ backgroundImage: `url(${item.imageUrl})` }}
          ></div>
        ))}
      </div>

      {/* Generate "View Projects" links for each item */}
      <div className="grid grid-cols-1 gap-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="item-work cursor-pointer hover:opacity-100 opacity-60 transition duration-300 gap-4"
            onMouseEnter={(e) => handleMouseEnter(index, e)}
            onMouseLeave={handleMouseLeave}
          >
            {/* This is the "View Projects" link text that gets hovered */}
            <a
              href="#projects"
              className="text-[#f4f3ff] text-md font-medium uppercase font-display hover:text-gray-300 transition duration-200"
            >
              View Projects
              {/* <img 
              src="/images/fancy_arrow.svg" 
              alt="Arrow Icon" 
              className="w-8 h-8 inline-block pl-1" /> */}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

// PropTypes for Type Checking
HoverImagePreview.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      imageUrl: PropTypes.string.isRequired, // Only imageUrl is needed for hover preview
    })
  ).isRequired,
  imageHeight: PropTypes.number,
  imageWidth: PropTypes.number,
};

export default HoverImagePreview;
