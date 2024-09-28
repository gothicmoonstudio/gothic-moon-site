import React, { useState } from 'react';
import { motion } from 'framer-motion'; // For animations

function MenuButton({ onClick }) {
  // State to track if the menu is open or closed
  const [isOpen, setIsOpen] = useState(false);

  // Toggle open/close state
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (onClick) {
      onClick();
    }
  };

  return (
    <div
      id="pull"
      className={`relative w-6 h-6 flex items-center justify-center cursor-pointer ${isOpen ? 'opacity-80' : ''}`}
      onClick={toggleMenu}
      aria-label="Menu"
    >
      {/* Line 1 */}
      <motion.div
        className="w-6 h-0.5 bg-[#f4f3ff] rounded-full absolute"
        animate={{
          rotate: isOpen ? 45 : 0, // Rotate to 45 degrees when open
          top: isOpen ? '50%' : '25%', // Center vertically when open, otherwise 25% from the top
          left: '50%', // Center horizontally
          translateX: '-50%',
        }}
        initial={{ top: '25%', left: '50%' }} // Initial position of the line
        transition={{ duration: 0.3 }}
      />
      {/* Line 2 */}
      <motion.div
        className="w-6 h-0.5 bg-[#f4f3ff] rounded-full absolute"
        animate={{
          opacity: isOpen ? 0 : 1, // Hide the middle line when open
          top: '50%', // Always centered vertically
          left: '50%', // Always centered horizontally
          translateX: '-50%',
        }}
        initial={{ top: '50%', left: '50%' }} // Initial position of the line
        transition={{ duration: 0.3 }}
      />
      {/* Line 3 */}
      <motion.div
        className="w-6 h-0.5 bg-[#f4f3ff] rounded-full absolute"
        animate={{
          rotate: isOpen ? -45 : 0, // Rotate to -45 degrees when open
          top: isOpen ? '50%' : '75%', // Center vertically when open, otherwise 75% from the top
          left: '50%', // Center horizontally
          translateX: '-50%',
        }}
        initial={{ top: '75%', left: '50%' }} // Initial position of the line
        transition={{ duration: 0.3 }}
      />
    </div>
  );
}

export default MenuButton;
