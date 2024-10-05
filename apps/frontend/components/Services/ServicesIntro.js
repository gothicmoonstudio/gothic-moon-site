import React from 'react';
import HeaderExit from '../templates/HeaderExit';

const ServicesIntro = () => {
  const title = "Guiding your project to unmatched success";
  const specialText = "";

  return (
    <div className="flex flex-col items-center justify-center text-center mt-12">
      <HeaderExit title={title} specialText={specialText} />
    </div>
  );
};

export default ServicesIntro;