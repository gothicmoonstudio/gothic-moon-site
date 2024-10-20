import React, { useState, useEffect } from 'react';
import '../styles/global.css';
import Preloader from '../components/Preloader/Preloader';
import Navbar from '../components/Navbar/NavBar';
import { ThemeProvider } from '../context/ThemeContext';
import PrimaryButton from '../components/ui/PrimaryButton';
import ContactModal from '../components/Contact/ContactModal';
import Modal from '../components/Modal/Modal'; // Import reusable modal
import { motion } from 'framer-motion'; // Import Framer Motion

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [isContactModalVisible, setIsContactModalVisible] = useState(false);
  const [isIntroModalVisible, setIsIntroModalVisible] = useState(false); // Intro modal visibility

  const handleOpenContactModal = () => setIsContactModalVisible(true);
  const handleCloseContactModal = () => setIsContactModalVisible(false);

  const handleCloseIntroModal = () => setIsIntroModalVisible(false);

  useEffect(() => {
    console.log('Loading state updated:', loading);
  }, [loading]);

  // Animation Variants
  const navbarFadeIn = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },
  };

  const buttonFadeIn = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.5, ease: 'easeOut', delay: 0.5 },
    },
  };

  // Show intro modal after button animation completes
  const handleButtonAnimationComplete = () => {
    setIsIntroModalVisible(true); // Always show the modal on every load

    // Optional: Reset the value in localStorage for testing, if needed
    localStorage.setItem('hasSeenIntroModal', 'false');
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
              layoutId="navbar"
              initial="hidden"
              animate="visible"
              variants={navbarFadeIn}
              className="fixed top-0 left-0 w-full z-50"
            >
              <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
            </motion.div>

            {/* Main Content */}
            <Component {...pageProps} setActiveSection={setActiveSection} />

            {/* Animated Primary Button */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={buttonFadeIn}
              className="fixed bottom-0 right-0 z-50"
              onAnimationComplete={handleButtonAnimationComplete} // Trigger modal when animation completes
            >
              <PrimaryButton label="Get Started" onClick={handleOpenContactModal} />
            </motion.div>

            {/* Contact Modal */}
            {isContactModalVisible && <ContactModal handleClose={handleCloseContactModal} />}

            {/* Intro Modal with shake animation logic */}
            {isIntroModalVisible && (
              <Modal
                title="Fancy meeting you here..."
                description={`The Gothic Moon website is almost complete! Feel free to explore, but please note that some features may still be under construction and might not work as expected.\n\nWe appreciate your patience as we put the finishing touches on everything!`}
                buttonLabel="👌 Perfect! Start Exploring..."
                onClose={handleCloseIntroModal} // Close logic
                shakeOnOutsideClick={true} // Enable shaking when clicking outside
              />
            )}
          </>
        )}
      </ThemeProvider>
    </React.StrictMode>
  );
}

export default MyApp;