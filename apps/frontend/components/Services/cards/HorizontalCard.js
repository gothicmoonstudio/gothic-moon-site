import React from 'react';
import { motion } from 'framer-motion';
import styles from '../Services.module.css';

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 50, 
    scale: 0.9 
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
};

const HorizontalCard = ({ 
  title, 
  description, 
  services, 
  videoSrc, 
  bgColor, 
  textColor 
}) => {
  return (
    <motion.div
      className={`${styles.horizontalCard} w-full p-6 md:p-8 lg:p-10 flex flex-col lg:flex-row gap-8 rounded-xl shadow-lg`}
      style={{
        background: bgColor,
        color: textColor,
      }}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Left Column: Title, Description, and Services */}
      <div className="flex flex-col justify-between w-full lg:w-2/3 gap-6">
        <div>
          <h2 className="text-[1.75rem] md:text-[2rem] lg:text-[2.5rem] font-medium font-header leading-[150%]">
            {title}
          </h2>
        </div>
        <div className="flex flex-col md:flex-row gap-6 md:gap-12">
          <p className="text-[1.25rem] lg:text-[1.5rem] font-normal font-body leading-[150%] flex-grow">
            {description}
          </p>
          <div className="flex flex-col gap-2 w-full md:w-1/3">
            {services.map((service, i) => (
              <div
                key={i}
                className="text-[.8rem] md:text-[.9rem] uppercase font-medium font-header whitespace-nowrap"
              >
                {service}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Column: Video */}
      <div className="relative w-full lg:w-[30.5rem] h-[15.25rem] rounded-2xl flex justify-center items-center overflow-hidden shadow-md">
        <video
          src={videoSrc}
          muted
          loop
          autoPlay
          playsInline
          className="w-full h-full object-cover rounded-xl"
          onError={(e) => console.error('Video error:', e)}
        />
      </div>
    </motion.div>
  );
};

export default HorizontalCard;