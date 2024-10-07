import React from 'react';
import { X } from 'react-feather'; 
import ModalContainer from './ui/ModalContainer';
import SolidButton from '../ui/SolidButton';
import styles from './ContactModal.module.css';

const ContactModal = ({ handleClose }) => {
  return (
    <div
      id="contact-modal"
      className="fixed right-8 top-20 rounded-2xl shadow-xl z-50" // Position and size adjustments
    >
      <ModalContainer>
        {/* Modal Inner Container with fade-in animation */}
        <div className={`w-full flex flex-col justify-start items-start gap-6 ${styles.fadeIn}`}>
          
         {/* Close Button */}
        <button
        className="absolute top-8 right-8"
        onClick={handleClose}
        >
        <X className="w-6 h-6 text-[#726D96] hover:text-[#141221] hover:scale-105 transition-transform duration-300 cursor-pointer" />
        </button>

          {/* Header Section */}
          <div className="self-stretch justify-start items-start inline-flex">
            <div className="h-9 justify-start items-start gap-2 flex">
              <div className="text-[#141221] text-2xl font-medium font-header leading-9">
                Let’s build something
              </div>
              <div className="text-[#141221] text-2xl font-normal font-serif leading-9">
                extraordinary.
              </div>
            </div>
            <div className="grow shrink basis-0 self-stretch justify-end items-start gap-2.5 flex">
              <div className="w-6 h-6 relative" />
            </div>
          </div>

          {/* Content Section */}
          <div className="self-stretch flex-col justify-start items-start gap-6 flex">
            <div className="self-stretch justify-start items-end gap-6 inline-flex">
              {/* Example form content */}
              <input
                type="text"
                placeholder="Your Name"
                className="p-4 bg-[#f6f5ff] rounded-lg border border-[#afaacf] text-[#3f3a5b] text-base font-normal w-full"
              />
              <textarea
                placeholder="Message"
                className="p-4 bg-[#f6f5ff] rounded-lg border border-[#afaacf] text-[#3f3a5b] text-base font-normal w-full h-[150px]"
              />
              
              {/* Replace button with SolidButton */}
              <SolidButton
                label="Send Inquiry" // Label for the button
                onClick={() => console.log('Send Inquiry clicked')} // Placeholder action for the button
              />
            </div>
          </div>

          {/* Additional Sections if needed */}
        </div>
      </ModalContainer>
    </div>
  );
};

export default ContactModal;