import React from 'react';
import Header from '../templates/Header';

const Greeting = () => {
  const title = "Gothic Moon is your trusted guide";
  const specialText = "for all things design.";

  return (
    <div 
    className="flex flex-col items-center justify-center text-center mt-12">
      <Header 
      title={title} 
      specialText={specialText} 
      className="w-[20rem] md:w-[30rem] lg:w-[70rem] xl:w-[70rem]"
      />
    </div>
  );
};

export default Greeting;