import React, { useState, useEffect } from 'react';
import Head from 'next/head'; // Import Head for meta tags
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
  const [isIntroModalVisible, setIsIntroModalVisible] = useState(false);

  const handleOpenContactModal = () => setIsContactModalVisible(true);
  const handleCloseContactModal = () => setIsContactModalVisible(false);
  const handleCloseIntroModal = () => setIsIntroModalVisible(false);

  useEffect(() => {
    console.log('Loading state updated:', loading);
  }, [loading]);

  const navbarFadeIn = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },
  };

  const buttonFadeIn = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.5, ease: 'easeOut', delay: 0.5 } },
  };

  const handleButtonAnimationComplete = () => {
    setIsIntroModalVisible(true);
    localStorage.setItem('hasSeenIntroModal', 'false');
  };

  return (
    <>
      <Head>
        <title>Gothic Moon Studio</title>
        <meta
          name="description"
          content="High-quality UX design solutions provided by Gothic Moon, specializing in crafting immersive user experiences."
        />
        <link rel="icon" href="/images/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <React.StrictMode>
        <ThemeProvider>
          {loading ? (
            <Preloader setLoading={setLoading} />
          ) : (
            <>
              <motion.div
                layoutId="navbar"
                initial="hidden"
                animate="visible"
                variants={navbarFadeIn}
                className="fixed top-0 left-0 w-full z-50"
              >
                <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
              </motion.div>

              <Component {...pageProps} setActiveSection={setActiveSection} />

              <motion.div
                initial="hidden"
                animate="visible"
                variants={buttonFadeIn}
                className="fixed bottom-0 right-0 z-50"
                onAnimationComplete={handleButtonAnimationComplete}
              >
                <PrimaryButton label="Get Started" onClick={handleOpenContactModal} />
              </motion.div>

              {isContactModalVisible && <ContactModal handleClose={handleCloseContactModal} />}

              {isIntroModalVisible && (
                <Modal
                  title="Fancy meeting you here..."
                  description="The Gothic Moon website is almost complete! Feel free to explore, but please note that some features may still be under construction."
                  buttonLabel="👌 Perfect! Start Exploring..."
                  onClose={handleCloseIntroModal}
                  shakeOnOutsideClick
                />
              )}
            </>
          )}
        </ThemeProvider>
      </React.StrictMode>
    </>
  );
}

export default MyApp;