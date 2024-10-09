import React, { useState } from 'react';
import UVPCard from './UVPCards';

const UVPCardSlider = () => {
  const [selectedSlide, setSelectedSlide] = useState(3);

  const cards = [
    { title: 'Card 1', description: 'Description 1', imageSrc: 'https://via.placeholder.com/376x523' },
    { title: 'Card 2', description: 'Description 2', imageSrc: 'https://via.placeholder.com/376x523' },
    { title: 'Card 3', description: 'Description 3', imageSrc: 'https://via.placeholder.com/376x523' },
    { title: 'Card 4', description: 'Description 4', imageSrc: 'https://via.placeholder.com/376x523' },
    { title: 'Card 5', description: 'Description 5', imageSrc: 'https://via.placeholder.com/376x523' },
    { title: 'Card 6', description: 'Description 6', imageSrc: 'https://via.placeholder.com/376x523' },
  ];

  const handleSlideChange = (index) => {
    setSelectedSlide(index);
  };

  return (
    <div className="mkt-3dSlider">
      <section id="slider" className="relative w-[34rem] h-[50rem] flex flex-col justify-center items-center" style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}>
        {cards.map((_, index) => (
          <input
            key={`input-${index}`}
            type="radio"
            name="slider"
            className="hidden"
            id={`s${index + 1}`}
            checked={selectedSlide === index + 1}
            onChange={() => handleSlideChange(index + 1)}
          />
        ))}
        {cards.map((card, index) => (
          <label
            key={`label-${index}`}
            htmlFor={`s${index + 1}`}
            className="absolute cursor-pointer transition-transform duration-400"
            style={{
              transform: getTransformStyle(index, selectedSlide - 1, cards.length),
              zIndex: getZIndex(index, selectedSlide - 1, cards.length),
              transition: 'transform 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55)', // Custom easing for a smoother effect
            }}
          >
            <UVPCard title={card.title} description={card.description} imageSrc={card.imageSrc} />
          </label>
        ))}
      </section>
    </div>
  );
};

// Helper function to calculate the 3D transform style
const getTransformStyle = (index, selectedSlide, totalSlides) => {
  // Calculate the position offset, taking into account circular behavior
  const positionOffset = (index - selectedSlide + totalSlides) % totalSlides;

  let transformStyle;
  switch (positionOffset) {
    case 0: // The current slide (front-most position)
      transformStyle = 'translate3d(0, 0, 0)';
      break;
    case 1: // Next slide to the right
      transformStyle = 'translate3d(15%, 0, -100px)';
      break;
    case 2: // Slide further back on the right
      transformStyle = 'translate3d(30%, 0, -200px)';
      break;
    case 3: // Opposite slide (back-most position)
      transformStyle = 'translate3d(-15%, 0, -100px)';
      break;
    case 4: // Slide further back on the left
      transformStyle = 'translate3d(-30%, 0, -200px)';
      break;
    default:
      transformStyle = 'translate3d(0, 0, -300px)'; // Default position for unseen cards
      break;
  }

  return transformStyle;
};

// Helper function to adjust the z-index for depth, using modulo for circular behavior
const getZIndex = (index, selectedSlide, totalSlides) => {
  const positionOffset = (index - selectedSlide + totalSlides) % totalSlides;

  // Higher z-index means the element is closer to the viewer
  switch (positionOffset) {
    case 0: // Current slide in front
      return 3;
    case 1:
    case 4: // Slides adjacent to the current one
      return 2;
    case 2:
    case 3: // Slides further back
      return 1;
    default:
      return 0; // Default z-index for unseen cards
  }
};

export default UVPCardSlider;