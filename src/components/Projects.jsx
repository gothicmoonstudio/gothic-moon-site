import React from 'react';
import ProjectSlider from './ProjectSlider.jsx';

function Projects() {
  return (
    <section
      id="projects"
      className="w-screen min-h-screen flex flex-col justify-center items-center px-8 md:px-16 lg:px-24 py-8 mt-32 md:mt-34 lg:mt-36 bg-secondary gap-6 sm:gap-2 md:gap-4 lg:gap-8"
    >
      {/* Title Section */}
      <div className="w-full flex flex-col justify-center items-center text-center">
        {/* Responsive Text Sizes for Title */}
        <h4 className="text-light text-[1.75rem] md:text-[2.25rem] lg:text-[2.5rem] font-medium font-display leading-tight">
          Enchanting user experiences through
        </h4>
        <span className="text-light text-[1.75rem] md:text-[2.25rem] lg:text-[2.5rem] font-normal font-serif leading-tight mt-2">
          captivating design.
        </span>
      </div>

      {/* Slider Section */}
      <div className="w-full flex flex-col justify-center items-center">
        <ProjectSlider />
      </div>
    </section>
  );
}

export default Projects;
