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
              transform: getTransformStyle(index + 1, selectedSlide),
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
const getTransformStyle = (slideIndex, selectedSlide) => {
  const positions = {
    '-2': 'translate3d(-30%, 0, -200px)',
    '-1': 'translate3d(-15%, 0, -100px)',
    '0': 'translate3d(0, 0, 0)',
    '1': 'translate3d(15%, 0, -100px)',
    '2': 'translate3d(30%, 0, -200px)',
  };
  const positionIndex = slideIndex - selectedSlide;
  return positions[positionIndex] || positions['0'];
};

export default UVPCardSlider;