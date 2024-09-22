import React from 'react';
import ProjectSlider from './ProjectSlider.jsx'

function Projects() {
  return (
    <section 
      id="projects"
      className="w-full h-screen px-[8rem] py-[3rem] bg-secondary flex flex-col justify-center items-center"
    >
      <div className="w-full mt-28 h-[9.9375rem] flex flex-col items-center">
        <div className="w-full text-center">
          <span className="text-light text-[2.5rem] font-medium font-display">
            Enchanting user experiences through
          </span>
          <span className="text-light text-[2.5rem] font-normal font-display">
            {' '}
          </span>
          <span className="text-light text-[2.5rem] font-normal font-serif">
            captivating design.
          </span>
        </div>
      </div>
      <div className="w-full flex flex-col py-[2rem]">
        <ProjectSlider />
      </div>
    </section>
  );
}

export default Projects;
