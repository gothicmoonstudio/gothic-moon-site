import React, { useState } from 'react';
import ValueCard from './ValueCard';

const valueCardData = [
  {
    title1: "Providing",
    title2: "Personalized Service",
    description: "Say goodbye to generic designs and bring your brand's unique vision to life.",
    bgColor: "#9747FF",
    textColor: "#F4F3FF",
  },
  {
    title1: "Ensuring",
    title2: "Quality Craftsmanship",
    description: "Meticulously crafted designs that leave a lasting impression.",
    bgColor: "#E9CDFF",
    textColor: "#141221",
  },
  {
    title1: "Offering",
    title2: "Strategic Expertise",
    description: "Elevate your brand with data-driven strategies.",
    bgColor: "#141221",
    textColor: "#F4F3FF",
  },
  {
    title1: "Using",
    title2: "Data-Driven Design",
    description: "Harness the power of data-driven design to drive engagement and deliver measurable results.",
    bgColor: "#9747FF",
    textColor: "#F4F3FF",
  },
  {
    title1: "Committing to a",
    title2: "Customer-Centric Approach",
    description: "We prioritize your needs and preferences, ensuring a collaborative partnership that exceeds expectations.",
    bgColor: "#E9CDFF",
    textColor: "#141221",
  },
  {
    title1: "Promising a",
    title2: "Seamless Experience",
    description: "Enjoy smooth communication, timely delivery, and exceptional customer service throughout your project.",
    bgColor: "#141221",
    textColor: "#F4F3FF",
  },
];

const generateCardStyle = (index, activeIndex) => {
  const baseLeft = 100;  // Adjust horizontal spread
  const baseTop = 0;    // Adjust for vertical alignment
  const rotateStep = 0; // Reduce rotation for a cleaner look

  // Calculate the left position and rotation based on activeIndex
  const left = baseLeft * index;
  const top = baseTop * index;
  const rotation = rotateStep * (index - 1);

  // Scale the centered card
  const scale = index === activeIndex ? 1.05 : 1;  // Scale the active card

  return {
    transform: `rotate(${rotation}deg) scale(${scale})`,
    left: `${left}px`,
    top: `${top}px`,
    transition: 'transform 0.3s ease, left 0.3s ease',
  };
};

const ValueCardScroll = () => {
  const [activeIndex, setActiveIndex] = useState(1); // Default to center card

  return (
    <div className="relative w-[820px] h-[686px] flex justify-center items-center">
      {valueCardData.map((card, index) => (
        <div
          key={index}
          className="absolute p-12 rounded-2xl flex flex-col justify-between items-center cursor-pointer"
          style={{
            ...generateCardStyle(index, activeIndex),
            zIndex: index === activeIndex ? 1 : 1, // Make the active card on top
          }}
          onClick={() => setActiveIndex(index)} // Handle card click
        >
          <ValueCard
            title1={card.title1}
            title2={card.title2}
            bgColor={card.bgColor} 
            description={card.description}
            textColor={card.textColor}
          />
        </div>
      ))}
    </div>
  );
};

export default ValueCardScroll;
