import React, { useState } from 'react';
import { motion } from 'framer-motion';

function MenuButton({ onClick }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
    if (onClick) onClick();
  };

  return (
    <div
      className={`md:hidden p-4 bg-[#1F1C33] rounded-full z-50 cursor-pointer transition-opacity duration-300 ${
        isOpen ? 'opacity-80' : 'opacity-100'
      }`}
      onClick={toggleMenu} // Move onClick to the outer div to ensure the entire button is clickable
      aria-label="Menu"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') toggleMenu();
      }}
    >
      {/* Menu Icon */}
      <div className="relative w-6 h-6 flex items-center justify-center">
        {/* Top Line */}
        <motion.div
          className="w-6 h-0.5 bg-[#f4f3ff] rounded-full absolute"
          animate={{
            rotate: isOpen ? 45 : 0,
            top: isOpen ? '50%' : '25%',
            left: '50%',
            translateX: '-50%',
          }}
          initial={{ top: '25%', left: '50%' }}
          transition={{ duration: 0.3 }}
        />

        {/* Middle Line */}
        <motion.div
          className="w-6 h-0.5 bg-[#f4f3ff] rounded-full absolute"
          animate={{
            opacity: isOpen ? 0 : 1,
            top: '50%',
            left: '50%',
            translateX: '-50%',
          }}
          initial={{ top: '50%', left: '50%' }}
          transition={{ duration: 0.3 }}
        />

        {/* Bottom Line */}
        <motion.div
          className="w-6 h-0.5 bg-[#f4f3ff] rounded-full absolute"
          animate={{
            rotate: isOpen ? -45 : 0,
            top: isOpen ? '50%' : '75%',
            left: '50%',
            translateX: '-50%',
          }}
          initial={{ top: '75%', left: '50%' }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </div>
  );
}

export default MenuButton;