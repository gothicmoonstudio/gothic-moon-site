// src/components/Contact.jsx
import React from 'react';
import { Instagram, Dribbble, Mail } from 'react-feather';
import PrimaryButton from './PrimaryButton';

function Contact() {
  return (
    <section 
    id="contact"
    className="contact-section w-full h-[982px] p-28 bg-secondary flex flex-col items-center">
      <div className="w-full flex justify-center items-center mt-24 gap-9">
        <div className="flex-1 px-9 flex flex-col items-start gap-9">
          <div className="flex flex-col items-start">
            <div className="text-light text-[40px] font-medium font-display leading-tight">
              Let’s create something
            </div>
            <div className="text-light text-[40px] font-normal font-serif leading-tight">
              extraordinary.
            </div>
          </div>
          <div className="text-light opacity-75 text-2xl font-medium font-display leading-9">
            Trust in the expertise and passion of Gothic Moon to transform your
            ideas into reality. Let’s create something extraordinary together.
          </div>
          <div className="flex justify-center items-center gap-4">
            <div className="custom-cursor-area w-9 h-9 flex justify-center items-center relative">
              <Instagram />
            </div>
            <div className="custom-cursor-area w-9 h-9 flex justify-center items-center relative">
              <Dribbble />
            </div>
            <div className="custom-cursor-area w-9 h-9 flex justify-center items-center relative">
              <Mail />
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start gap-9">
          <div className="text-light opacity-75 text-2xl font-medium font-display leading-9">
          Although my resources are limited, I’m always eager to start a conversation and explore how we can bring your vision to life.
          </div>
          {/* Email Input */}
          <div className="w-full flex flex-col gap-2">
            <label className="text-light text-base font-medium font-display">
              Your email
            </label>
            <input
              type="email"
              placeholder="youremail@example.com"
              className="w-full h-14 p-4 bg-primary rounded-lg border border-dark text-light placeholder-[#afaacf] font-display"
            />
          </div>
          {/* Subject Line Input */}
          <div className="w-full flex flex-col gap-2">
            <label className="text-light text-base font-medium font-display">
              Subject Line
            </label>
            <input
              type="text"
              placeholder="Inquiring about a web design project"
              className="w-full h-14 p-4 bg-primary rounded-lg border border-dark placeholder-[#afaacf]  text-light/90 font-display"
            />
          </div>
          {/* Message Textarea */}
          <div className="w-full flex flex-col gap-2">
            <label className="text-light text-base font-medium font-display">
              Message
            </label>
            <textarea
              placeholder="Start typing..."
              className="w-full h-36 p-4 bg-primary rounded-lg border border-dark text-light placeholder-[#afaacf] resize-none font-display"
            ></textarea>
          </div>
          {/* Primary Button */}
          <div className="mt-6">
            <PrimaryButton label="Get in Touch" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
