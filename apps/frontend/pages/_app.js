import React, { useState, useEffect } from 'react';
import '../styles/global.css';
import Preloader from '../components/Preloader/Preloader';
import Navbar from '../components/Navbar/NavBar';
import { ThemeProvider } from '../context/ThemeContext';
import PrimaryButton from '../components/ui/PrimaryButton';
import ContactModal from '../components/Contact/ContactModal';
import { motion } from 'framer-motion'; // Import Framer Motion

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [isModalVisible, setIsModalVisible] = useState(false); // Modal visibility state

  // Handler to open the modal
  const handleOpenModal = () => {
    setIsModalVisible(true);
  };

  // Handler to close the modal
  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    console.log('Loading state updated:', loading);
  }, [loading]);

  // Animation variants
  const navbarFadeIn = {
    hidden: { opacity: 0, y: -30 }, // Slide down from top
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },
  };

  const buttonFadeIn = {
    hidden: { opacity: 0, scale: 0.8 }, // Scale up from smaller size
    visible: { opacity: 1, scale: 1, transition: { duration: 1.2, ease: 'easeOut', delay: 0.3 } },
  };

  return (
    <React.StrictMode>
      <ThemeProvider>
        {loading ? (
          <Preloader setLoading={setLoading} />
        ) : (
          <>
            {/* Animated Navbar */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={navbarFadeIn}
              className="z-50" // Ensure Navbar stays on top
            >
              <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
            </motion.div>

            <Component {...pageProps} setActiveSection={setActiveSection} />

            {/* Animated Primary Button */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={buttonFadeIn}
              className="fixed w-full h-full bottom-2 right-2 z-50" // Adjusted button position
            >
              <PrimaryButton label="Get Started" onClick={handleOpenModal} />
            </motion.div>

            {isModalVisible && <ContactModal handleClose={handleCloseModal} />}
          </>
        )}
      </ThemeProvider>
    </React.StrictMode>
  );
}

export default MyApp;