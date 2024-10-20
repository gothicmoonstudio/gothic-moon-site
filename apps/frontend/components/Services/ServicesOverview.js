import React, { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import ServicesCardSlideUp from './cards/ServicesCardSlideUp';

const services = [
  {
    title: 'User Research & Testing',
    description:
      "Delve into understanding your target audience's needs, behaviors, and pain points.",
    services: ['User Interviews', 'Analytics', 'A/B Testing', 'User Flows', 'Journey Mapping'],
    bgColor: 'linear-gradient(45deg, #3B1AE5, #E1303B)',
    textColor: '#F4F3FF',
    imageSrc: '/gifs/orb.gif',
  },
  {
    title: 'Visual Design',
    description:
      'Create stunning, on-brand visuals that captivate your audience.',
    services: ['User Interface', 'Design Libraries', 'Style Guides', 'Templates'],
    bgColor: 'linear-gradient(90deg, #862598, #272343)',
    textColor: '#F4F3FF',
    imageSrc: '/gifs/blobs.gif',
  },
  {
    title: 'Interaction Design',
    description:
      'Develop intuitive and engaging user interactions that guide users seamlessly.',
    services: ['Animations', 'Motion Graphics', 'Front-End Development'],
    bgColor: 'linear-gradient(45deg, #3B1AE5, #A06AF8)',
    textColor: '#F4F3FF',
    imageSrc: '/gifs/blobby.gif',
  },
  {
    title: 'Web & Product Design',
    description:
      'Bring your product vision to life with our end-to-end product design services.',
    services: ['Information Architecture', 'Design Strategy', 'Business Analysis', 'Design Systems', 'SEO'],
    bgColor: 'linear-gradient(90deg, #81249E, #9747FF)',
    textColor: '#F4F3FF',
    imageSrc: '/gifs/glob.gif',
  },
];

const ServicesOverview = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true }); // Only trigger once

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section className="relative min-h-screen pt-24 mb-[36rem] md:mb-[16rem] lg:mb-[6rem]">
      {/* Title Section */}
      <div className="">
        <h2 className="text-[1.5rem] md:text-[2.25rem] lg:text-[2.25rem] text-left font-header font-medium text-[#F4F3FF] pl-8">
          Our Services
        </h2>
      </div>

      {/* Cards Wrapper */}
      <motion.div
        ref={containerRef}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={containerVariants}
        className="relative"
      >
        {services.map((service, index) => (
          <motion.div key={index} variants={cardVariants} className="mb-6 md:mb-8 lg:mb-8">
            <ServicesCardSlideUp
              service={service}
              index={index}
              totalCards={services.length}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ServicesOverview;