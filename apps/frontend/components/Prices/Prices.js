import React from 'react';
import TextOverContent from '../templates/TextOverContent';

const Prices = () => {
  return (
    <section id="prices">
      <TextOverContent
        title="Let Gothic be"
        specialText="your design guide."
      >
        <img
          src="https://via.placeholder.com/800x400"
          alt="Placeholder"
          className="w-full h-auto rounded-md pt-4"
        />
      </TextOverContent>
    </section>
  );
};

export default Prices;