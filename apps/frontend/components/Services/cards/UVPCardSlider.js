import React, { useState } from 'react';
import UVPCard from './UVPCards';
import { useSwipeable } from 'react-swipeable';

// Helper function to calculate the 3D transform style
const getTransformStyle = (index, selectedSlide, totalSlides) => {
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

const UVPCardSlider = () => {
  const [selectedSlide, setSelectedSlide] = useState(0); // Start at index 0

  const cards = [
      {
        title1: 'Committing to',
        title2: 'a Customer-Centric Approach',
        description: 'We prioritize your needs and preferences, ensuring a collaborative partnership that exceeds expectations.',
        imageSrc: '/webm/bubble.webm',
        bgColor: 'linear-gradient(90deg, #81249E, #9747FF)',
        textColor: '#F4F3FF',
      },
      {
        title1: 'Using',
        title2: 'Data-Driven Design',
        description: 'Harness the power of data-driven design to drive engagement and deliver measurable results.',
        imageSrc: '/webm/bubble.webm',
        bgColor: 'linear-gradient(45deg, #FFE9E9, #F6FFBC)',
        textColor: '#141221',
      },
      {
        title1: 'Providing',
        title2: 'Personalized Service',
        description: 'Say goodbye to generic designs and bring your brand’s unique vision to life.',
        imageSrc: '/webm/bubble.webm',
        bgColor: 'linear-gradient(135deg, #3B1AE5, #E1303B)',
        textColor: '#F4F3FF',
      },
      {
        title1: 'Ensuring',
        title2: 'Quality Craftsmanship',
        description: 'Meticulously crafted designs that leave a lasting impression.',
        imageSrc: '/webm/bubble.webm',
        bgColor: 'linear-gradient(25deg, #FFE9E9, #3B1AE5)',
        textColor: '#141221',
      },
      {
        title1: 'Offering',
        title2: 'Strategic Expertise',
        description: 'Elevate your brand with data-driven strategies.',
        imageSrc: '/webm/bubble.webm',
        bgColor: 'linear-gradient(45deg, #3B1AE5, #A06AF8)',
        textColor: '#F4F3FF',
      },
      {
        title1: 'Promising',
        title2: 'a Seamless Experience',
        description: 'Enjoy smooth communication, timely delivery, and exceptional customer service throughout your project.',
        imageSrc: '/webm/bubble.webm',
        bgColor: 'linear-gradient(45deg, #FFE9E9, #A06AF8)',
        textColor: '#141221',
      },
    ];

  const handleSlideChange = (index) => {
    setSelectedSlide(index);
  };

  const handleNextSlide = () => {
    setSelectedSlide((prevSlide) => (prevSlide === cards.length - 1 ? 0 : prevSlide + 1));
  };

  const handlePrevSlide = () => {
    setSelectedSlide((prevSlide) => (prevSlide === 0 ? cards.length - 1 : prevSlide - 1));
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNextSlide, // Trigger next slide on left swipe
    onSwipedRight: handlePrevSlide, // Trigger previous slide on right swipe
    preventDefaultTouchmoveEvent: true, // Prevent default touch move behavior to avoid accidental scrolling
    trackMouse: true, // Enable swipe detection using mouse (helpful for testing)
  });

  return (
    <div {...swipeHandlers} className="swipeable-container relative w-full h-full flex items-center justify-center">
      <div className="mkt-3dSlider">
        <section
          id="slider"
          className="relative w-auto h-[34rem] md:h-[36rem] lg:h-[44rem] flex flex-col justify-center items-center"
          style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
        >
          {/* Render radio buttons for each card */}
          {cards.map((_, index) => (
            <input
              key={`input-${index}`}
              type="radio"
              name="slider"
              className="hidden"
              id={`s${index + 1}`}
              checked={selectedSlide === index} // Corrected index comparison
              onChange={() => handleSlideChange(index)} // Set correct slide
            />
          ))}

          {/* Render UVP cards */}
          {cards.map((card, index) => (
            <label
              key={`label-${index}`}
              htmlFor={`s${index + 1}`}
              className="absolute cursor-pointer transition-transform duration-400"
              style={{
                transform: getTransformStyle(index, selectedSlide, cards.length), // Reference the helper function correctly
                zIndex: getZIndex(index, selectedSlide, cards.length),
                transition: 'transform 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55)', // Custom easing for a smoother effect
              }}
            >
              <UVPCard
                title1={card.title1}
                title2={card.title2}
                description={card.description}
                imageSrc={card.imageSrc}
                bgColor={card.bgColor}
                textColor={card.textColor}
              />
            </label>
          ))}
        </section>
      </div>
    </div>
  );
};

export default UVPCardSlider;