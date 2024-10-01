import React from 'react';

function ProjectSlide({ title, image, link, isActive }) {
  // If the slide is not active, don't render it
  return (
    <div
      className={`slide ${isActive ? 'block' : 'hidden'} w-full sm:w-full md:w-full lg:w-full mx-auto text-center transition-all duration-300 ease-in-out`}
    >
      {/* Slide Image */}
      <div className="slide__img w-full h-[27rem]">
        <img src={image} alt={title} className="w-full h-full rounded-[3px] md:rounded-[6px] lg:rounded-lg shadow-lg" />
      </div>
    </div>
  );
}

export default ProjectSlide;
