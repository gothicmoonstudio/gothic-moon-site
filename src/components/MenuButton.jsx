// MenuButton.jsx
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
      className={`relative w-6 h-6 flex cursor-pointer ${isOpen ? 'opacity-80' : ''}`}
      onClick={toggleMenu}
      aria-label="Menu"
    >
      {/* Line 1 */}
      <motion.div
        className="w-6 h-0.5 bg-[#f4f3ff] absolute rounded-full"
        animate={{
          rotate: isOpen ? 45 : 0, // Rotate to 45 degrees when open
          top: isOpen ? '6px' : '0px', // Move to the center when open
        }}
        transition={{ duration: 0.3 }}
      />
      {/* Line 2 */}
      <motion.div
        className="w-6 h-0.5 bg-[#f4f3ff] absolute rounded-full"
        animate={{
          opacity: isOpen ? 0 : 1, // Hide the middle line when open
        }}
        transition={{ duration: 0.3 }}
        style={{ top: '6px' }} // Middle line stays centered
      />
      {/* Line 3 */}
      <motion.div
        className="w-6 h-0.5 bg-[#f4f3ff] absolute rounded-full"
        animate={{
          rotate: isOpen ? -45 : 0, // Rotate to -45 degrees when open
          top: isOpen ? '6px' : '12px', // Move to the center when open
        }}
        transition={{ duration: 0.3 }}
      />
    </div>
  );
}

export default MenuButton;
