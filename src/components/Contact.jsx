// src/components/Contact.jsx
import React from 'react';
import { Instagram, Dribbble, Mail } from 'react-feather';
import ContactForm from './ContactForm';

function Contact() {
  return (
    <section 
    id="contact"
    className="contact-section w-full p-28 flex flex-col items-center"
    style={{ height: "calc(100vh - 24rem)" }}>
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
          <div className="flex justify-center items-center gap-9">
            <div className="custom-cursor-area w-9 h-9 flex justify-center items-center relative">
            <a 
            href="https://www.instagram.com/gothicmoonstudio" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform duration-300 ease-in-out"
            >          
              <Instagram className="hover:text-[#E1306C]" />
            </a>
          </div>
          <div className="custom-cursor-area w-9 h-9 flex justify-center items-center relative">
            <a 
            href="https://dribbble.com/gothicmoonstudio" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform duration-300 ease-in-out"
            >          
              <Dribbble className="hover:text-[#E1306C]" />
            </a>
          </div>
          <div className="custom-cursor-area w-9 h-9 flex justify-center items-center relative">
            <a 
            href="hello@gothicmoon.co" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform duration-300 ease-in-out"
            >          
              <Mail className="hover:text-[#E1306C]" />
            </a>
          </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start gap-9">
          <div className="text-light opacity-75 text-2xl font-medium font-display leading-9">
          Although my resources are limited, I’m always eager to start a conversation and explore how we can bring your vision to life.
          </div>
          {/* Email Input */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default Contact;
