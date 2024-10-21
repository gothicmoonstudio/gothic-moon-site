import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSwipeable } from 'react-swipeable';
import TextOverContent from '../templates/TextOverContent';
import ProjectCard from '../Projects/ProjectCard';

const Project = () => {
  const [activeCard, setActiveCard] = useState(0); // Track the active card

  const projectCards = [
    {
      title: 'A mystery waits',
      subtitle: 'to unfold…',
      description: 'What lies hidden beneath the surface? A new experience is coming soon.',
      status: 'Coming Soon',
    },
    {
      title: 'Reimagine what’s',
      subtitle: 'possible.',
      description: 'We’re crafting an app that blends the practical with the magical. Launching soon.',
      status: 'Coming Soon',
    },
  ];

  const handleNext = () => {
    setActiveCard((prev) => (prev + 1) % projectCards.length);
  };

  const handlePrevious = () => {
    setActiveCard((prev) => (prev - 1 + projectCards.length) % projectCards.length);
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrevious,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true, 
  });

  return (
    <section
      id="projects"
      className="w-full h-screen"
    >
      <TextOverContent title="Designs that" specialText="captivate & enchant.">
        {/* Wrapper for Swipeable and Cards */}
        <div {...swipeHandlers} className="relative w-full max-w-[72rem]">
          <div className="w-full flex justify-between items-center">
            {/* Previous Button - Hidden on Mobile */}
            <button
              onClick={handlePrevious}
              className="hidden md:block lg:block p-6 rounded-full text-white transition"
            >
              Prev
            </button>

            {/* Card Display */}
            <div className="relative w-full md:w-[56rem] lg:w-[56rem] h-[31.25rem]">
              <AnimatePresence mode="wait"> {/* Updated to mode="wait" */}
                {projectCards.map((card, index) =>
                  index === activeCard ? (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.5, ease: 'easeInOut' }}
                      className="absolute w-full"
                    >
                      <ProjectCard {...card} />
                    </motion.div>
                  ) : null
                )}
              </AnimatePresence>
            </div>

            {/* Next Button - Hidden on Mobile */}
            <button
              onClick={handleNext}
              className="hidden md:block lg:block p-6 bg-gray-800 rounded-full text-white hover:bg-gray-700 transition"
            >
              Next
            </button>
          </div>
        </div>
      </TextOverContent>
    </section>
  );
};

export default Project;