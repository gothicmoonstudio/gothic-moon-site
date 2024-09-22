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
    <div className="h-[621px] py-12 flex-col justify-center items-center gap-12 inline-flex">
      <div className="grow shrink basis-0 justify-start items-center gap-12 inline-flex">
        {/* Prev button */}
        <div className="custom-cursor-area text-center text-white text-base font-normal font-['Bely'] cursor-pointer" onClick={prevSlide}>
          Prev
        </div>
        
        {/* Slide container */}
        <div className="w-[874px] self-stretch rounded-[3px] flex items-center justify-center">
          {/* Show the current slide */}
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
        <div className="custom-cursor-area text-center text-white text-base font-normal font-['Bely'] cursor-pointer" onClick={nextSlide}>
          Next
        </div>
      </div>

     {/* Pagination */}
     <div className="self-stretch h-[19px] px-[500px] flex-col justify-center items-center gap-2.5 flex">
              <div className="self-stretch justify-start items-center gap-12 inline-flex">
                {/* Current slide number */}
                <div className="text-center text-white text-base font-normal font-['Bely']">
                  {currentSlide + 1}
                </div>

                {/* Progress bar */}
                <div className="h-0.5 flex w-full">
                  {/* Purple bar: grows with the current slide */}
                  <div
                    className="flex-1 h-0.5 bg-[#a06af8]"
                    style={{ flex: currentSlide + 1 }} // This controls the width of the active part
                  ></div>
                  {/* Light gray bar: shrinks as the purple bar grows */}
                  <div
                    className="flex-1 h-0.5 bg-[#d9d9d9]"
                    style={{ flex: totalSlides - (currentSlide + 1) }} // The remaining width
                  ></div>
                </div>

                {/* Total slides */}
                <div className="text-center text-white text-base font-normal font-['Bely']">
                  {totalSlides}
                </div>
              </div>
            </div>
          </div>
  );
}

export default ProjectSlider;
