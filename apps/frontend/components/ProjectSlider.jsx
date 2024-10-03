import React, { useState } from 'react';
import ProjectSlide from './ProjectSlide'; // Import the ProjectSlide component

function ProjectSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3; // For now, set to 3, based on the number of projects

  const projects = [
    {
      title: 'Project 1',
      image: '/images/slide_01.png',
      link: '/case-studies/project-1',
    },
    {
      title: 'The Obsidian Veil',
      image: '/images/obsidian_teaser.png',
      link: '/case-studies/project-2',
    },
    {
      title: 'Project 3',
      image: '/images/slide_03.png',
      link: '/case-studies/project-3',
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className="w-full h-auto flex flex-col justify-center items-center sm:py-6 md:py-8 lg:py-10">
      {/* Slide Navigation and Container */}
      <div className="w-full flex justify-center items-center gap-8 md:gap-12">
        {/* Prev button */}
        <div
          className="hidden md:block items-center justify-center text-center text-white text-base md:text-lg lg:text-xl font-normal font-['Bely'] cursor-pointer"
          onClick={prevSlide}
        >
          Prev
        </div>

        {/* Slide container */}
        <div className="w-full md:w-full lg:w-2/3 flex items-center justify-center rounded-[3px] md:rounded-[6px] lg:rounded-lg">
          {/* Render the current slide */}
          {projects.map((project, index) => (
            <ProjectSlide
              key={index}
              title={project.title}
              image={project.image}
              link={project.link}
              isActive={currentSlide === index}
            />
          ))}
        </div>

        {/* Next button */}
        <div
          className="hidden md:block items-center justify-center text-center text-white text-base md:text-lg lg:text-xl font-normal font-['Bely'] cursor-pointer"
          onClick={nextSlide}
        >
          Next
        </div>
      </div>

      {/* Pagination */}
      <div className="w-full lg:w-2/4 md:w-full sm:w-full flex flex-col justify-center items-center mt-6 md:mt-12 lg:mt-16">
        <div className="w-full flex justify-between items-center gap-4 md:gap-12">
          {/* Current slide number */}
          <div className="text-center text-white text-sm md:text-base lg:text-lg font-normal font-['Bely']">
            {currentSlide + 1}
          </div>

          {/* Progress bar */}
          <div className="flex w-full h-0.5 md:h-1">
            {/* Purple bar: grows with the current slide */}
            <div
              className="flex-1 h-full bg-[#a06af8]"
              style={{ flex: currentSlide + 1 }} // This controls the width of the active part
            ></div>
            {/* Light gray bar: shrinks as the purple bar grows */}
            <div
              className="flex-1 h-full bg-[#d9d9d9]"
              style={{ flex: totalSlides - (currentSlide + 1) }} // The remaining width
            ></div>
          </div>

          {/* Total slides */}
          <div className="text-center text-white text-sm md:text-base lg:text-lg font-normal font-['Bely']">
            {totalSlides}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectSlider;
