import React from 'react';
import { X } from 'react-feather'; 
import ModalContainer from './ui/ModalContainer';
import SolidButton from '../ui/SolidButton';

const ContactModal = ({ handleClose }) => {
  return (
    <div
    id="contact-modal"
    className="fixed right-5 md:right-5 lg:right-8 bottom-6 md:bottom-6 lg:bottom-6 z-1001 flex justify-center items-center md:items-start" // Center the modal and use padding for spacing
    style={{ zIndex: 1001 }} // Ensure it’s above other elements
  >
     <ModalContainer>
        {/* Modal Inner Container */}
        <div
          className="w-full rounded-2xl flex flex-col relative" // Adjust width with margin around it
        >
         {/* Close Button */}
        <button
        className="flex flex-col justify-end items-end top-8 right-8"
        onClick={handleClose}
        >
        <X className="w-6 h-6 text-[#726D96] hover:text-[#141221] hover:scale-105 transition-transform duration-300 cursor-pointer" />
        </button>

          {/* Header Section */}
          <div className="w-full md:flex lg:flex justify-start items-start">
            <div className="md:flex lg:flex justify-start items-center mb-4">
              <div className="text-[#141221] text-[1.25rem] md:text-[1.5rem] lg:text-[1.5rem] font-medium font-header leading-[150%]">
                Let’s build something
              </div>
              <span className="text-[#141221] text-[1.25rem] md:text-[1.5rem] lg:text-[1.5rem] font-normal font-serif leading-[150%] pl-0 md:pl-2 lg:pl-2">
                extraordinary.
              </span>
            </div>
          </div>

          {/* Basic Form Field for Testing */}
        <div className="w-full flex flex-col justify-center items-start gap-2 mb-4 ">
          {/* Placeholder Form Field */}
          <input
            type="text"
            placeholder="Placeholder Input"
            className="w-full p-2 bg-[#f6f5ff] rounded-md border border-[#afaacf] text-[#3f3a5b] text-base font-header font-normal"
          />

          {/* Optional Additional Input */}
          <textarea
            placeholder="Placeholder Text Area"
            className="w-full h-[150px] p-2 bg-[#f6f5ff] rounded-md border border-[#afaacf] text-[#3f3a5b] text-base font-normal font-header mt-4 resize-none"
          />
        </div>

            {/* Action Section for the Button */}
            <div className="flex flex-col justify-end items-end">
                <SolidButton
                label="Send Inquiry" // Label for the button
                onClick={() => console.log('Send Inquiry clicked')} // Placeholder action for the button
                />
            </div>
            </div>

          {/* Additional Sections if needed */}
      </ModalContainer>
    </div>
  );
};

export default ContactModal;