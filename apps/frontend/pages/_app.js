import React, { useState, useEffect } from 'react';
import '../styles/global.css';
import Preloader from '../components/Preloader/Preloader';
import Navbar from '../components/Navbar/NavBar';
import { ThemeProvider } from '../context/ThemeContext';
import PrimaryButton from '../components/ui/PrimaryButton';
import ContactModal from '../components/Contact/ContactModal';

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

  return (
    <React.StrictMode>
      <ThemeProvider>
        {loading ? (
          <Preloader setLoading={setLoading} />
        ) : (
          <>
            <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
            <Component {...pageProps} setActiveSection={setActiveSection} />

            <PrimaryButton
              label="Start a Project"
              onClick={handleOpenModal}
              className="fixed z-50"
            />

            {isModalVisible && <ContactModal handleClose={handleCloseModal} />}
          </>
        )}
      </ThemeProvider>
    </React.StrictMode>
  );
}

export default MyApp;