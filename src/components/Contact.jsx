import React from 'react';
import { Instagram, Dribbble, Mail } from 'react-feather';
import ContactForm from './ContactForm';

function Contact() {
  return (
    <section 
      id="contact"
      className="w-screen h-full px-8 md:px-16 lg:px-24 py-12 flex flex-col items-center"
    >
      {/* Wrapper container with responsive styles */}
      <div className="w-full flex flex-col lg:flex-row justify-center items-center mt-10 lg:mt-20 gap-6 md:gap-12 lg:gap-16">
        {/* Left section for heading and description */}
        <div className="flex-1 px-0 md:px-0 lg:px-0 flex flex-col items-start gap-4 md:gap-6 lg:gap-9">
          {/* Headings */}
          <div className="flex flex-col items-start">
            <div className="text-light text-[1.75rem] md:text-[2.25rem] lg:text-[2.5rem] font-medium font-display leading-tight">
              Let’s create something
            </div>
            <div className="text-light text-[1.75rem] md:text-[2.25rem]] lg:text-[2.5rem] font-normal font-serif leading-tight">
              extraordinary.
            </div>
          </div>
          
          {/* Description Text */}
          <div className="text-light opacity-75 text-lg md:text-xl lg:text-2xl font-medium font-display leading-relaxed lg:leading-9">
            Trust in the expertise and passion of Gothic Moon to transform your
            ideas into reality. Let’s create something extraordinary together.
          </div>

          {/* Social Icons */}
          <div className="flex justify-start items-center gap-4 md:gap-6">
            <div className="custom-cursor-area w-8 md:w-9 h-8 md:h-9 flex justify-center items-center relative">
              <a 
                href="https://www.instagram.com/gothicmoonstudio" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform duration-300 ease-in-out"
              >          
                <Instagram className="stroke-1 hover:text-[#F6FFBC]" />
              </a>
            </div>
            <div className="custom-cursor-area w-8 md:w-9 h-8 md:h-9 flex justify-center items-center relative">
              <a 
                href="https://dribbble.com/gothicmoonstudio" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform duration-300 ease-in-out"
              >          
                <Dribbble className="stroke-1 hover:text-[#F6FFBC]" />
              </a>
            </div>
            <div className="custom-cursor-area w-8 md:w-9 h-8 md:h-9 flex justify-center items-center relative">
              <a 
                href="mailto:hello@gothicmoon.co" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform duration-300 ease-in-out"
              >          
                <Mail className="stroke-1 hover:text-[#F6FFBC]" />
              </a>
            </div>
          </div>
        </div>

        {/* Right section for contact form */}
        <div className="w-full lg:w-full flex-1 flex flex-col items-center gap-6 md:gap-9">
          {/* Additional Text */}
          <div className="w-full lg:w-full text-light opacity-75 text-lg md:text-xl lg:text-2xl font-medium font-display leading-relaxed lg:leading-9 text-left lg:text-left">
            Although my resources are limited, I’m always eager to start a conversation and explore how we can bring your vision to life.
          </div>

          {/* Contact Form Component */}
          <div className="w-full lg:w-full">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
