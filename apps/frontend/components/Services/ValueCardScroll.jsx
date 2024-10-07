import React, { useState, useEffect } from 'react';
import ValueCard from './cards/ValueCard';

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
  const angleStep = 0; // Angle difference between cards
  const rotateY = angleStep * (index - activeIndex); // Calculate rotation for each card
  const translateZ = index === activeIndex ? 200 : 150; // Pull the active card closer
  const scale = index === activeIndex ? 1.1 : 0.85; // Scale active card larger

  return {
    transform: `rotateY(${rotateY}deg) translateZ(${translateZ}px) scale(${scale})`,
    transition: 'transform 0.5s ease',
  };
};

const ValueCardScroll = () => {
  const [activeIndex, setActiveIndex] = useState(2); // Default to center card
  const [intervalId, setIntervalId] = useState(null);

  // Function to slide to the next card
  const autoSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % valueCardData.length);
  };

  useEffect(() => {
    const id = setInterval(autoSlide, 3000); // Slide every 3 seconds
    setIntervalId(id);

    return () => {
      clearInterval(id); // Clean up interval on component unmount
    };
  }, []);

  return (
    <div className="relative w-[820px] h-[686px] flex justify-center items-center perspective-1000">
      {valueCardData.map((card, index) => (
        
        <div
          key={index}
          className="absolute p-12 rounded-2xl flex flex-col justify-between items-center cursor-pointer"
          style={{
            ...generateCardStyle(index, activeIndex),
            zIndex: index === activeIndex ? 1 : 0, // Adjust zIndex for active card
          }}
          onClick={() => {
            setActiveIndex(index);
            clearInterval(intervalId); // Stop auto-slide on manual interaction
          }} // Handle card click
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
