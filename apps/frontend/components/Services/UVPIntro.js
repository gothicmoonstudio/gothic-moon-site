import React from 'react';
import Header from '../templates/Header';

const UVPIntro = () => {
  const title = "Illuminating your path to";
  const specialText = "design excellence";

  return (
    <div className="flex flex-col items-center justify-center text-center mt-12">
      <Header title={title} specialText={specialText} />
    </div>
  );
};

export default UVPIntro;