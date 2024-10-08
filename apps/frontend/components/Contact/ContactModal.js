import React from 'react';
import { X } from 'react-feather'; 
import ModalContainer from './ui/ModalContainer';
import SolidButton from '../ui/SolidButton';
import TabSelector from './ui/TabSelector';
import InputField from './ui/InputField';

const ContactModal = ({ handleClose }) => {
  return (
    <div
      id="contact-modal"
      className="fixed right-5 md:right-5 lg:right-8 bottom-6 md:bottom-6 lg:bottom-6 z-1001 flex justify-center items-center md:items-start" // Center the modal and use padding for spacing
      style={{ zIndex: 1001 }} // Ensure it’s above other elements
    >
      <ModalContainer>
        {/* Modal Inner Container */}
        <div className="w-full rounded-2xl flex flex-col relative">
         {/* Header Wrapper with Close Button and Title */}
          <div className="w-full flex justify-between items-center mb-4">
            {/* Title Container */}
            <div className="flex justify-start items-center">
              <div className="text-[#141221] text-[1.25rem] md:text-[1.5rem] lg:text-[1.5rem] font-medium font-header leading-[150%]">
                Let’s build something
              </div>
              <span className="text-[#141221] text-[1.25rem] md:text-[1.5rem] lg:text-[1.5rem] font-normal font-serif leading-[150%] pl-1 md:pl-2 lg:pl-2">
                extraordinary.
              </span>
            </div>

            {/* Close Button */}
            <button
              className="flex justify-end items-end"
              onClick={handleClose}
            >
              <X className="w-6 h-6 text-[#726D96] hover:text-[#141221] hover:scale-105 transition-transform duration-300 cursor-pointer" />
            </button>
          </div>

          <div className="flex flex-col gap-6">
            {/* Project Type Selector */}
            <TabSelector
              label="What kind of project do you have?"
              options={['Product Design', 'User Research', 'Web Design', 'UX Consultation', 'Other']}
            />

            {/* Budget Selector */}
            <TabSelector
              label="What’s your budget?"
              options={['<$1k', '$1k-$5k', '$5k-$10k', '>$10k', 'Other']}
            />

            {/* Timeline Selector */}
            <TabSelector
              label="What’s your timeline?"
              options={['1-2 Weeks', '2-4 Weeks', '1-3 months', '1 year', 'Other']}
            />

            {/* Name Input Field */}
            <InputField label="Your Name*" placeholder="Full Name" />

            {/* Email Input Field */}
            <InputField label="Your Email*" placeholder="youremail@example.com" />

            {/* Message Input Field */}
            <InputField label="Message*" placeholder="Type your message here..." isTextarea={true} />

            {/* Action Section for the Button */}
            <div className="flex flex-col justify-end items-end mt-4">
              <SolidButton
                label="Send Inquiry" // Label for the button
                onClick={() => console.log('Send Inquiry clicked')} // Placeholder action for the button
              />
            </div>
          </div>
        </div>
      </ModalContainer>
    </div>
  );
};

export default ContactModal;