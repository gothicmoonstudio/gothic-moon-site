import React, { useState } from 'react';
import { X, Send } from 'react-feather';
import ModalContainer from './ui/ModalContainer';
import SolidButton from '../ui/SolidButton';
import TabSelector from './ui/TabSelector';
import InputField from './ui/InputField';
import emailjs from 'emailjs-com';

// Initialize EmailJS with your public key
emailjs.init('pjKesBrr-fV85NvNQ');

const ContactModal = ({ handleClose }) => {
  // State variables to capture form input
  const [projectType, setProjectType] = useState('');
  const [budget, setBudget] = useState('');
  const [timeline, setTimeline] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Function to handle form submission
  const sendEmail = (e) => {
    e.preventDefault();

    // Define template parameters for EmailJS, matching the EmailJS template placeholders
    const templateParams = {
      subject: `New Inquiry from ${name}`,  // Corresponds to `{{subject}}` in your template
      from_name: name,                      // Corresponds to `{{from_name}}`
      to_name: 'Gothic Moon',               // Static value or change as needed, corresponds to `{{to_name}}`
      email: email,                         // Corresponds to `{{email}}`
      reply_to: email,                      // Corresponds to `{{reply_to}}`
      message: message                      // Corresponds to `{{message}}`
    };

    emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      templateParams
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert('Message successfully sent!');
      handleClose();
    })
    .catch((err) => {
      console.error('FAILED...', err);
      alert('Message failed to send. Please try again later.');
    });
  };

  return (
    <div
      id="contact-modal"
      className="fixed right-5 md:right-5 lg:right-8 bottom-6 md:bottom-6 lg:bottom-6 z-1001 flex justify-center items-center md:items-start"
      style={{ zIndex: 1001 }}
    >
      <ModalContainer>
        {/* Modal Inner Container */}
        <div className="w-full rounded-2xl flex flex-col">
          {/* Header Wrapper with Close Button and Title */}
          <div className="w-full flex flex-row justify-between items-start mb-8">
          {/* Title Container */}
          <div className="flex flex-wrap justify-start items-start">
            <div className="text-[#141221] text-[1.25rem] md:text-[1.5rem] lg:text-[1.5rem] font-medium font-header leading-[150%]">
              Let’s build something
            </div>
            <span className="text-[#141221] text-[1.25rem] md:text-[1.5rem] lg:text-[1.5rem] font-normal font-serif leading-[150%] pl-0 md:pl-2 lg:pl-2">
              extraordinary.
            </span>
          </div>

          {/* Close Button - Fixed to Top Right */}
          <div className="flex justify-end items-end">
          <button
            className="bg-[#141221] rounded-full p-2
            hover:scale-105 transition-transform duration-300 cursor-pointer"
            onClick={handleClose}
          >
            <X className="w-4 h-4 text-[#f4f3ff]" />
          </button>
          </div>
        </div>

          <div className="flex flex-col gap-8">
            {/* Project Type Selector */}
            <TabSelector
              label="What kind of project do you have?"
              options={['Product Design', 'User Research', 'Web Design', 'UX Consultation', 'Other']}
              selected={projectType}
              onChange={(value) => setProjectType(value)}
            />

            {/* Budget Selector */}
            <TabSelector
              label="What’s your budget?"
              options={['<$1k', '$1k-$5k', '$5k-$10k', '>$10k', 'Other']}
              selected={budget}
              onChange={(value) => setBudget(value)}
            />

            {/* Timeline Selector */}
            <TabSelector
              label="What’s your timeline?"
              options={['1-2 Weeks', '2-4 Weeks', '1-3 months', '1 year', 'Other']}
              selected={timeline}
              onChange={(value) => setTimeline(value)}
            />

            {/* Name Input Field */}
            <InputField
              label="Your Name*"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            {/* Email Input Field */}
            <InputField
              label="Your Email*"
              placeholder="youremail@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            {/* Message Input Field */}
            <InputField
              label="Message*"
              placeholder="Type your message here..."
              isTextarea={true}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            {/* Action Section for the Button */}
            <div className="flex flex-col justify-end items-end mt-4">
              <SolidButton
                label="Send Inquiry"
                onClick={sendEmail}
                Icon={Send}
                iconPosition="right"
              />
            </div>
          </div>
        </div>
      </ModalContainer>
    </div>
  );
};

export default ContactModal;