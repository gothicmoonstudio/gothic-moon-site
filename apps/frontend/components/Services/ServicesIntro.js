import React from 'react';
import Header from '../templates/Header';

const ServicesIntro = () => {
  const title = "Guiding your project to";
  const specialText = "unmatched success";

  return (
    <div className="flex flex-col items-center justify-center text-center mt-12">
      <Header title={title} 
      specialText={specialText} 
      className="w-[30rem] md:w-[40rem] lg:w-[70rem] xl:w-[70rem]"/>
    </div>
  );
};

export default ServicesIntro;