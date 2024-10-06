import React from 'react';
import Header from '../templates/Header';

const ServicesIntro = () => {
  const title = "Guiding your project to";
  const specialText = "unmatched success";

  return (
    <div className="flex flex-col items-center justify-center text-center mt-12">
      <Header title={title} specialText={specialText} />
    </div>
  );
};

export default ServicesIntro;