import React, { useState } from 'react';
import { X, Send } from 'react-feather';
import ModalContainer from './ui/ModalContainer';
import SolidButton from '../ui/SolidButton';
import TabSelector from './ui/TabSelector';
import InputField from './ui/InputField';
import emailjs from 'emailjs-com'; // Import EmailJS

// Initialize EmailJS with your public key
emailjs.init('pjKesBrr-fV85NvNQ'); // Replace 'pjKesBrr-fV85NvNQ' with your actual EmailJS public key

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
    e.preventDefault(); // Prevent default form submission behavior

    // Define template parameters for EmailJS, matching the EmailJS template placeholders
    const templateParams = {
      subject: `New Inquiry from ${name}`,  // Corresponds to `{{subject}}` in your template
      from_name: name,                      // Corresponds to `{{from_name}}`
      to_name: 'Gothic Moon',               // Static value or change as needed, corresponds to `{{to_name}}`
      email: email,                         // Corresponds to `{{email}}`
      reply_to: email,                      // Corresponds to `{{reply_to}}`
      message: message                      // Corresponds to `{{message}}`
    };

    // Use EmailJS to send the email using the public key
    emailjs.send(
      'service_nso7gkp',   // Replace with your EmailJS service ID
      'template_040xvc8',  // Replace with your EmailJS template ID
      templateParams
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert('Message successfully sent!');
      handleClose(); // Close the modal on successful submission
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
      style={{ zIndex: 1001 }} // Ensure it’s above other elements
    >
      <ModalContainer>
        {/* Modal Inner Container */}
        <div className="w-full rounded-2xl flex flex-col relative">
          {/* Header Wrapper with Close Button and Title */}
          <div className="w-full flex flex-row justify-between mb-8">
            {/* Title Container */}
            <div className="flex flex-wrap justify-start items-start">
              <div className="text-[#141221] text-[1.25rem] md:text-[1.5rem] lg:text-[1.5rem] font-medium font-header leading-[150%]">
                Let’s build something
              </div>
              <span className="text-[#141221] text-[1.25rem] md:text-[1.5rem] lg:text-[1.5rem] font-normal font-serif leading-[150%] pl-1 md:pl-2 lg:pl-2">
                extraordinary.
              </span>
            </div>

            {/* Close Button */}
            <button className="flex flex-grow justify-end items-start" onClick={handleClose}>
              <X className="w-6 h-6 text-[#726D96] hover:text-[#141221] hover:scale-105 transition-transform duration-300 cursor-pointer" />
            </button>
          </div>

          <div className="flex flex-col gap-8">
            {/* Project Type Selector */}
            <TabSelector
              label="What kind of project do you have?"
              options={['Product Design', 'User Research', 'Web Design', 'UX Consultation', 'Other']}
              selected={projectType} // Pass the selected value
              onChange={(value) => setProjectType(value)} // Update state on change
            />

            {/* Budget Selector */}
            <TabSelector
              label="What’s your budget?"
              options={['<$1k', '$1k-$5k', '$5k-$10k', '>$10k', 'Other']}
              selected={budget} // Pass the selected value
              onChange={(value) => setBudget(value)} // Update state on change
            />

            {/* Timeline Selector */}
            <TabSelector
              label="What’s your timeline?"
              options={['1-2 Weeks', '2-4 Weeks', '1-3 months', '1 year', 'Other']}
              selected={timeline} // Pass the selected value
              onChange={(value) => setTimeline(value)} // Update state on change
            />

            {/* Name Input Field */}
            <InputField
              label="Your Name*"
              placeholder="Full Name"
              value={name} // Bind state to input value
              onChange={(e) => setName(e.target.value)} // Update state on change
            />

            {/* Email Input Field */}
            <InputField
              label="Your Email*"
              placeholder="youremail@example.com"
              value={email} // Bind state to input value
              onChange={(e) => setEmail(e.target.value)} // Update state on change
            />

            {/* Message Input Field */}
            <InputField
              label="Message*"
              placeholder="Type your message here..."
              isTextarea={true}
              value={message} // Bind state to input value
              onChange={(e) => setMessage(e.target.value)} // Update state on change
            />

            {/* Action Section for the Button */}
            <div className="flex flex-col justify-end items-end mt-4">
              <SolidButton
                label="Send Inquiry"
                onClick={sendEmail} // Use sendEmail function on button click
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