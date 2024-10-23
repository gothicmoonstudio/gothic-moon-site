import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import HorizontalCardSlideUp from './cards/HorizontalCardSlideUp';

const services = [
  {
    title: 'User Research & Testing',
    description:
      "Delve into understanding your target audience's needs, behaviors, and pain points. Our comprehensive user research lays the foundation for informed design decisions, ensuring your product resonates with its intended users.",
    services: ['User Interviews', 'Analytics', 'A/B Testing', 'User Flows', 'Journey Mapping'],
    bgColor: 'linear-gradient(45deg, #3B1AE5, #E1303B)',
    textColor: '#F4F3FF',
    videoSrc: '/assets/videos/research.mp4',
  },
  {
    title: 'Visual Design',
    description:
      'Create stunning, on-brand visuals that captivate your audience. We craft aesthetically pleasing interfaces that not only look beautiful but also enhance usability and reinforce your brand identity.',
    services: ['User Interface', 'Design Libraries', 'Style Guides', 'Templates'],
    bgColor: 'linear-gradient(90deg, #862598, #272343)',
    textColor: '#F4F3FF',
    videoSrc: '/assets/videos/visual.mp4',
  },
  {
    title: 'Interaction Design',
    description:
      'Develop intuitive and engaging user interactions that guide users seamlessly through your product. Our interaction design focuses on creating smooth, meaningful experiences that delight users and keep them coming back.',
    services: ['Animations', 'Motion Graphics', 'Front-End Development'],
    bgColor: 'linear-gradient(45deg, #3B1AE5, #A06AF8)',
    textColor: '#F4F3FF',
    videoSrc: '/assets/videos/interaction.mp4',
  },
  {
    title: 'Web & Product Design',
    description:
      'Bring your product vision to life with our end-to-end product design services. We combine user research, visual design, and interaction design to create cohesive, user-centered products that solve real problems and drive business growth.',
    services: ['Information Architecture', 'Design Strategy', 'Business Analysis', 'Design Systems', 'SEO'],
    bgColor: 'linear-gradient(90deg, #81249E, #9747FF)',
    textColor: '#F4F3FF',
    videoSrc: '/assets/videos/product.mp4',
  },
];

const Overview = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Faster stagger to reduce lag
        ease: 'easeInOut',
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 1, y: 300, scale: 0.95 }, // Subtle scale effect for smooth entry
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: 'easeOut' }, // Reduced duration for better performance
    },
  };

  return (
    <div className="h-full min-h-screen py-8 md:py-16 lg:py-24">
      {/* Title Section */}
      <div>
        <h2 className="text-[1.5rem] md:text-[1.75rem] lg:text-[1.75rem] text-left font-header font-medium text-[#F4F3FF] pl-8">
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
          <motion.div
            key={index}
            variants={cardVariants}
            className="h-full mb-6 md:mb-8 lg:mb-8"
            viewport={{ once: true, amount: 0.3 }} // Triggers animation when 30% is in view
          >
            <HorizontalCardSlideUp
              service={service}
              index={index}
              totalCards={services.length}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Overview;