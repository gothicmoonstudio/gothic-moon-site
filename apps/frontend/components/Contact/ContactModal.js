import React, { useRef, useState } from 'react';
import { X, Send } from 'react-feather';
import emailjs from '@emailjs/browser';
import InputField from './ui/InputField';
import ModalContainer from './ui/ModalContainer';
import SolidButton from '../ui/SolidButton';
import TabSelector from './ui/TabSelector';

// Initialize EmailJS using the public key
emailjs.init('p5qBbpcOJ-es4s4O6');

const ContactModal = ({ handleClose }) => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);

    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID || 'default_service';
    const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'template_040xvc8';

    emailjs.sendForm(serviceID, templateID, form.current)
      .then(() => {
        alert('Message successfully sent!');
        form.current.reset();
        handleClose();
      })
      .catch((err) => {
        console.error('EmailJS Error:', err);
        alert('Failed to send message. Please try again.');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div
      id="contact-modal"
      className="fixed right-5 md:right-5 lg:right-8 bottom-6 md:bottom-6 lg:bottom-6 z-1001 flex justify-center items-center md:items-start"
      style={{ zIndex: 1001 }}
    >
      <ModalContainer>
        <form ref={form} onSubmit={sendEmail} className="w-full flex flex-col gap-8">
          {/* Header Section */}
          <div className="w-full flex flex-row justify-between items-start mb-2">
            <div className="flex flex-wrap justify-start items-center">
              <div className="text-[#141221] text-[1.25rem] md:text-[1.5rem] lg:text-[1.5rem] font-medium font-header leading-[150%]">
                Let’s build something
              </div>
              <span className="text-[#141221] text-[1.25rem] md:text-[1.5rem] lg:text-[1.5rem] font-medium font-serif leading-[150%] pl-[.25rem] md:pl-2 lg:pl-2">
                extraordinary.
              </span>
            </div>
            <button
              className="bg-[#141221] rounded-full p-2 hover:scale-110 active:scale-95 transition-transform duration-200 ease-in-out cursor-pointer"
              onClick={handleClose}
              aria-label="Close"
            >
              <X className="w-4 h-4 text-[#f4f3ff]" />
            </button>
          </div>

          {/* Additional Selectors */}
          <TabSelector
            label="What kind of project do you have?"
            options={['Product Design', 'User Research', 'Web Design', 'UX Consultation', 'Other']}
            name="project_type"
          />

          <TabSelector
            label="What’s your budget?"
            options={['<$1k', '$1k-$5k', '$5k-$10k', '>$10k', 'Other']}
            name="budget"
          />

          <TabSelector
            label="What’s your timeline?"
            options={['1-2 Weeks', '2-4 Weeks', '1-3 months', '1 year', 'Other']}
            name="timeline"
          />

          {/* Form Fields */}
          <InputField
            label="Your Name*"
            name="from_name"
            placeholder="Your Name"
            type="text"
            required
          />

          <InputField
            label="Your Email*"
            name="email"
            placeholder="Your Email"
            type="email"
            required
          />

          <InputField
            label="Your Message*"
            name="message"
            placeholder="Type your message here..."
            isTextarea={true}
            required
          />

          {/* Submit Button */}
          <div className="flex flex-col justify-end items-end mt-4">
            <SolidButton
              type="submit"
              label={loading ? 'Sending...' : 'Send Inquiry'}
              Icon={Send}
              iconPosition="right"
              disabled={loading}
            />
          </div>
        </form>
      </ModalContainer>
    </div>
  );
};

export default ContactModal;