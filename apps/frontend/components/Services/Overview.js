import React, { useRef, useEffect, useState, memo } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import HorizontalCard from './cards/HorizontalCard';

const services = [
  {
    title: 'Research & Analytics',
    description:
      "Delve into understanding your target audience's needs, behaviors, and pain points. Our comprehensive user research lays the foundation for informed design decisions, ensuring your product resonates with its intended users.",
    services: ['Web Analytics', 'Conversion Tracking', 'Performance Tracking', 'User Testing' ],
    bgColor: 'linear-gradient(45deg, #3B1AE5, #E1303B)',
    textColor: '#F4F3FF',
    videoSrc: '/assets/videos/research.mp4',
  },
  {
    title: 'Graphic Design',
    description:
      'Create stunning, on-brand visuals that captivate your audience. We craft aesthetically pleasing interfaces that not only look beautiful but also enhance usability and reinforce your brand identity.',
    services: ['User Interface', 'Design Libraries', 'Style Guides', 'Templates'],
    bgColor: 'linear-gradient(45deg, #862598, #3B1AE5)',
    textColor: '#F4F3FF',
    videoSrc: '/assets/videos/visual.mp4',
  },
  {
    title: 'Web Animation',
    description:
      'Develop intuitive and engaging user interactions that guide users seamlessly through your product. Our interaction design focuses on creating smooth, meaningful experiences that delight users and keep them coming back.',
    services: ['Interaction Design', 'Motion Graphics', 'Front-End Development'],
    bgColor: 'linear-gradient(270deg, #3B1AE5, #A06AF8)',
    textColor: '#F4F3FF',
    videoSrc: '/assets/videos/interaction.mp4',
  },
  {
    title: 'Website & App Design',
    description:
      'Bring your product vision to life with our end-to-end product design services. We combine user research, visual design, and interaction design to create cohesive, user-centered products that solve real problems and drive business growth.',
    services: ['Web & Mobile Applications', 'Product Design', 'Design Systems', 'Site Maintenance', 'SEO'],
    bgColor: 'linear-gradient(90deg, #81249E, #9747FF)',
    textColor: '#F4F3FF',
    videoSrc: '/assets/videos/product.mp4',
  },
];

const Overview = () => {
  const containerRef = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(containerRef, { once: false, amount: 0.5 }); // More reliable detection

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Debounced resize handler
  useEffect(() => {
    const handleResize = () => {
      clearTimeout(window.resizeTimeout);
      window.resizeTimeout = setTimeout(() => {
        setIsMobile(window.innerWidth <= 768);
      }, 100);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Trigger animations based on view state
  useEffect(() => {
    controls.start(isInView ? 'visible' : 'hidden');
  }, [isInView, controls]);

  // Animation variants with smoother exit handling
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.95,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <motion.div
      ref={containerRef}
      initial="hidden"
      animate={controls}
      exit="exit"
      className="w-full min-h-screen py-8 bg-gray-900"
    >
      <div className="px-6">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-white mb-8">
          Our Services
        </h2>
        <div className="flex flex-col gap-6">
          {services.map((service, index) => (
            <MemoizedCard
              key={index}
              index={index}
              service={service}
              variants={cardVariants}
              servicesLength={services.length}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

// Memoized card to prevent unnecessary re-renders
const MemoizedCard = memo(({ index, service, variants, servicesLength }) => (
  <motion.div
    custom={index}
    variants={variants}
    initial="hidden"
    whileInView="visible"
    exit="exit"
    className="horizontal-card"
    style={{ zIndex: servicesLength - index }}
    viewport={{ once: false, amount: 0.5 }} // Ensures smoother viewport detection
  >
    <HorizontalCard
      title={service.title}
      description={service.description}
      services={service.services}
      bgColor={service.bgColor}
      textColor={service.textColor}
      videoSrc={service.videoSrc}
    />
  </motion.div>
));

export default Overview;