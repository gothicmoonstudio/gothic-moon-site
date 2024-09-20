// src/components/Projects.jsx
import React from 'react';

function Projects() {
  return (
    <section 
    id="projects"
    className="w-full h-screen px-28 py-20 bg-secondary flex flex-col items-center gap-9">
      <div className="w-full h-[159px] flex flex-col items-center gap-2.5">
        <div className="w-[643px] text-center">
          <span className="text-light text-[40px] font-medium font-display">
            Enchanting user experiences through
          </span>
          <span className="text-light text-[40px] font-normal font-display">
            {' '}
          </span>
          <span className="text-light text-[40px] font-normal font-serif">
            captivating design.
          </span>
        </div>
      </div>
      <div className="w-full flex flex-col items-center gap-12 py-12">
        <div className="flex items-center gap-12">
          <div className="text-center text-white text-base font-normal font-[Bely]">
            Prev
          </div>
          <div className="w-[874px] h-full bg-[#f6ffbc] rounded-[3px]"></div>
          <div className="text-center text-white text-base font-normal font-[Bely]">
            Next
          </div>
        </div>
        <div className="w-full h-5 px-[500px] flex flex-col items-center gap-2.5">
          <div className="w-full flex items-center gap-12">
            <div className="text-center text-white text-base font-normal font-serif">
              02
            </div>
            <div className="h-0.5 flex w-full">
              <div className="flex-1 h-0.5 bg-accent"></div>
              <div className="flex-1 h-0.5 bg-light"></div>
            </div>
            <div className="text-center text-white text-base font-normal font-serif">
              05
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
