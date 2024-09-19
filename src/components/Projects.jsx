// src/components/Projects.jsx
import React from 'react';

function Projects() {
  return (
    <section className="w-full h-[982px] px-28 py-20 bg-secondary flex flex-col items-center gap-9">
      <div className="w-full h-[159px] flex flex-col items-center gap-2.5">
        <div className="w-[643px] text-center">
          <span className="text-light text-[40px] font-medium font-display">
            Lorem ipsum dolor
          </span>
          <span className="text-light text-[40px] font-normal font-display">
            {' '}
          </span>
          <span className="text-light text-[40px] font-normal font-serif">
            sit amet
          </span>
        </div>
      </div>
      <div className="w-full flex flex-col items-center gap-12 py-12">
        <div className="flex items-center gap-12">
          <div className="text-center text-white text-base font-normal">
            Prev
          </div>
          <div className="w-[874px] h-full bg-[#f6ffbc] rounded-[3px]"></div>
          <div className="text-center text-white text-base font-normal">
            Next
          </div>
        </div>
        <div className="w-full h-5 px-[500px] flex flex-col items-center gap-2.5">
          <div className="w-full flex items-center gap-12">
            <div className="text-center text-white text-base font-normal">
              02
            </div>
            <div className="h-0.5 flex w-full">
              <div className="flex-1 h-0.5 bg-accent"></div>
              <div className="flex-1 h-0.5 bg-gray-300"></div>
            </div>
            <div className="text-center text-white text-base font-normal">
              05
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
