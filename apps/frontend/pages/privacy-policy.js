import React, { useEffect } from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion

const PrivacyPolicy = () => {
  useEffect(() => {
    // Inject the Termly script when the component mounts
    const script = document.createElement('script');
    script.id = 'termly-jssdk';
    script.src = 'https://app.termly.io/embed-policy.min.js';
    document.body.appendChild(script);

    return () => {
      // Cleanup the script on unmount
      document.body.removeChild(script);
    };
  }, []);

  // Animation variants for fade-in and slide-in effect
  const containerVariants = {
    hidden: { opacity: 0, y: 30 }, // Start hidden, slightly down
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: 'easeOut' } 
    },
  };

  return (
    <motion.div
      className="container mx-auto py-24 px-8 md:px-16 lg:px-24"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div
        name="termly-embed"
        data-id="fcb07211-f5b1-4b86-915e-4a393d54a3c7"
      ></div>
    </motion.div>
  );
};

export default PrivacyPolicy;