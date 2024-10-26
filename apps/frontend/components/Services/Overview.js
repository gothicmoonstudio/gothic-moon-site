import React, { useRef, useEffect, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import HorizontalCard from './cards/HorizontalCard';
import styles from './Services.module.css';

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
    bgColor: 'linear-gradient(90deg, #862598, #272343)',
    textColor: '#F4F3FF',
    videoSrc: '/assets/videos/visual.mp4',
  },
  {
    title: 'Web Animation',
    description:
      'Develop intuitive and engaging user interactions that guide users seamlessly through your product. Our interaction design focuses on creating smooth, meaningful experiences that delight users and keep them coming back.',
    services: ['Interaction Design', 'Motion Graphics', 'Front-End Development'],
    bgColor: 'linear-gradient(45deg, #3B1AE5, #A06AF8)',
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
  const controls = useAnimation(); // Animation controls
  const isInView = useInView(containerRef, { amount: 0.3, once: false });
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Detect screen size changes
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Trigger animation when the section is in view
  useEffect(() => {
    controls.start(isInView ? 'visible' : 'hidden');
  }, [isInView, controls]);

  // Animation variants for cards with stagger effect
  const containerVariants = {
    visible: {
      transition: {
        staggerChildren: isMobile ? 0.15 : 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: (index) => ({
      opacity: 0,
      y: index * (isMobile ? 10 : 30),
      scale: 0.9,
    }),
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      className={`${styles.container} w-full min-h-screen py-8`}
      ref={containerRef}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      <div className="pl-8">
        <h2 className="text-[1.5rem] md:text-[1.75rem] lg:text-[2rem] font-header font-medium text-[#F4F3FF] mb-8">
          Our Services
        </h2>
      </div>

      <div className={styles.horizontalCardWrapper}>
        {services.map((service, index) => (
          <motion.div
            key={index}
            className={`${styles.horizontalCard} horizontal-card`}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
          >
            <HorizontalCard
              title={service.title}
              description={service.description}
              services={service.services}
              videoSrc={service.videoSrc}
              bgColor={service.bgColor}
              textColor={service.textColor}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Overview;