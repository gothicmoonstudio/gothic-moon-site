import React, { useState } from 'react';
import { motion } from 'framer-motion';

function MenuButton({ onClick }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
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
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          toggleMenu();
        }
      }}
    >
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
  );
}

export default MenuButton;