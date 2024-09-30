import React from 'react';

function ProjectSlide({ title, image, link, isActive }) {
  // If the slide is not active, don't render it
  return (
    <div
      className={`slide ${isActive ? 'block' : 'hidden'} w-full sm:w-full md:w-full lg:w-full mx-auto text-center transition-all duration-300 ease-in-out`}
    >
      {/* Slide Image */}
      <div className="slide__img w-full h-[18rem]">
        <img src={image} alt={title} className="w-full h-full rounded-[3px] md:rounded-[6px] lg:rounded-lg shadow-lg" />
      </div>

      {/* Slide Content */}
      <div className="slide__content mt-4 md:mt-6 lg:mt-8">
        {/* Slide Title */}
        <h2 className="slide__title text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium font-display text-[#f4f3ff]">
          {title}
        </h2>

        {/* Slide Link */}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="slide__link text-purple-600 text-sm sm:text-base md:text-lg mt-2 md:mt-4 inline-block font-display hover:text-purple-400 transition-colors duration-200"
        >
          View Case Study
        </a>
      </div>
    </div>
  );
}

export default ProjectSlide;
