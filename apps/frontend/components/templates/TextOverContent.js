import React from 'react';
import OneColumn from '../layouts/OneColumn';

const TextOverContent = ({ title, subtitle, children }) => {
  return (
    <OneColumn>
      <div className="w-full flex flex-col justify-center items-center text-center">
        <div className=""></div>
        
        <div className="z-10 w-full max-w-7xl">
          <h1 className="font-medium text-[1rem] md:text-[2rem] lg:text-[3rem] mb-4">{title}</h1>
          <p className="mb-8">{subtitle}</p>
          <div className="">{children}</div>
        </div>
      </div>
    </OneColumn>
  );
};

export default TextOverContent;