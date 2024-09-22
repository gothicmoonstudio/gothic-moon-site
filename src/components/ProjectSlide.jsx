import React from 'react';

function ProjectSlide({ title, image, link, isActive }) {
  // If the slide is not active, don't render it
  return (
    <div className={`slide ${isActive ? 'block' : 'hidden'} w-full text-center`}>
      <div className="slide__img">
        <img src={image} alt={title} className="w-full h-auto rounded-[3px]" />
      </div>
      <div className="slide__content">
        <h2 className="slide__title text-xl font-medium mt-4 font-display">{title}</h2>
        <a href={link} className="slide__link text-purple-600 mt-2 inline-block font-display">View Case Study</a>
      </div>
    </div>
  );
}

export default ProjectSlide;
