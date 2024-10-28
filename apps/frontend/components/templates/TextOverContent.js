import React, { useRef } from 'react';
import OneColumn from '../layouts/OneColumn';
import TrackingInExpand from '../Animations/TrackingInExpand/TrackingInExpand';

const TextOverContent = ({ title, specialText, children }) => {
  const titleRef = useRef(null);
  const contentRef = useRef(null);

  return (
    <OneColumn>
      <div className="w-full py-5 md:py-9 lg:py-12 flex flex-col justify-center items-center text-center">
        <div className="z-10 w-full">
          <h1
          ref={titleRef}
          className="font-medium text-[1.25rem] md:text-[1.75rem] lg:text-[2.25rem] mb-8"
        >
          <TrackingInExpand>{title}</TrackingInExpand>{' '}
          
          {specialText && (
            <TrackingInExpand>
              <span className="font-serif special-text text-[1.25rem] md:text-[1.75rem] lg:text-[2.25rem]">
                {specialText}
              </span>
            </TrackingInExpand>
          )}
        </h1>
          <div ref={contentRef} className="flex justify-center items-center h-full w-full">
            {children}
          </div>
        </div>
      </div>
    </OneColumn>
  );
};

export default TextOverContent;