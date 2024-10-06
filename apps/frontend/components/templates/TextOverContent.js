import React, { useRef } from 'react';
import OneColumn from '../layouts/OneColumn';

const TextOverContent = ({ title, specialText, children }) => {
  // Create refs for title and content sections
  const titleRef = useRef(null);
  const contentRef = useRef(null);

  return (
    <OneColumn>
      <div className="w-full flex flex-col justify-center items-center text-center">
        <div className="z-10 w-full">
          {/* Title Section with Special Text */}
          <h1 ref={titleRef} className="font-medium text-[1.25rem] md:text-[2rem] lg:text-[3rem] mb-4">
            {title}{' '}
            {specialText && (
              <span className="font-serif special-text text-[1.25rem] md:text-[2rem] lg:text-[3rem]">
                {specialText}
              </span>
            )}
          </h1>

          {/* Children Content */}
          <div ref={contentRef}>{children}</div>
        </div>
      </div>
    </OneColumn>
  );
};

export default TextOverContent;