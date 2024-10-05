import React from 'react';
import Header from '../templates/Header';

const Greeting = () => {
  const title = "Gothic Moon is your trusted guide";
  const specialText = "for all things design.";

  return (
    <div className="flex flex-col items-center justify-center text-center mt-12">
      <Header title={title} specialText={specialText} />
    </div>
  );
};

export default Greeting;