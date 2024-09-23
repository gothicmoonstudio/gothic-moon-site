import React from 'react';
import ValueCard from './ValueCard'; // Import the ValueCard component

const valueCardData = [
  {
    title1: "Providing",
    title2: "Personalized Service",
    description: "Say goodbye to generic designs and bring your brand's unique vision to life.",
    bgColor: "#f6ffbc",
    textColor: "#141221",
  },
  {
    title1: "Ensuring",
    title2: "Quality Craftsmanship",
    description: "Meticulously crafted designs that leave a lasting impression.",
    bgColor: "#ffffff",
    textColor: "#141221",
  },
  {
    title1: "Offering",
    title2: "Strategic Expertise",
    description: "Elevate your brand with data-driven strategies.",
    bgColor: "#f3f3f3",
    textColor: "#141221",
  },
  {
    title1: "Using",
    title2: "Data-Driven Design",
    description: "Harness the power of data-driven design to drive engagement and deliver measurable results.",
    bgColor: "#e8f0ff",
    textColor: "#141221",
  },
  {
    title1: "Committing to a",
    title2: "Customer-Centric Approach",
    description: "We prioritize your needs and preferences, ensuring a collaborative partnership that exceeds expectations.",
    bgColor: "#e8f0ff",
    textColor: "#141221",
  },
  {
    title1: "Promising a",
    title2: "Seamless Experience",
    description: "Enjoy smooth communication, timely delivery, and exceptional customer service throughout your project.",
    bgColor: "#e8f0ff",
    textColor: "#141221",
  },
];

const ValueCardScroll = () => {
  return (
    <div className="container flex overflow-x-auto snap-x snap-mandatory">
      {valueCardData.map((card, index) => (
        <div key={index} className="panel w-screen h-screen flex-shrink-0 snap-center">
          <ValueCard
            title1={card.title1}
            title2={card.title2}
            description={card.description}
            bgColor={card.bgColor}
            textColor={card.textColor}
          />
        </div>
      ))}
    </div>
  );
};

export default ValueCardScroll;
