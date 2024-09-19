// src/components/Contact.jsx
import React from 'react';
// Import the specific icons you need
import { Instagram, Dribbble, Mail } from 'react-feather';


function Contact() {
  return (
    <section className="w-full h-[982px] p-28 bg-secondary flex flex-col items-center gap-32">
      <div className="w-full flex justify-center items-center gap-9">
        <div className="flex-1 px-9 flex flex-col items-start gap-9">
          <div className="flex flex-col items-start">
            <div className="text-light text-[40px] font-medium font-display leading-tight">
              Let’s build something
            </div>
            <div className="text-light text-[40px] font-normal font-serif leading-tight">
              extraordinary.
            </div>
          </div>
          <div className="text-light opacity-75 text-2xl font-medium font-display leading-9">
            Trust in the expertise and passion of Gothic Moon to transform your
            ideas into reality. Let’s build something extraordinary together.
          </div>
          <div className="flex justify-center items-center gap-4">
            <div className="w-9 h-9 relative">
            <Instagram/>
            </div>
            <div className="w-9 h-9 relative">
            <Dribbble/>
            </div>
            <div className="w-9 h-9 relative">
            <Mail/>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start gap-9">
          <div className="text-light opacity-75 text-2xl font-medium font-display leading-9">
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas.
          </div>
          {/* Email Input */}
          <div className="w-full flex flex-col gap-2">
            <label className="text-light text-base font-medium font-display">
              Your email
            </label>
            <input
              type="email"
              placeholder="youremail@example.com"
              className="w-full h-14 p-4 bg-primary rounded-lg border border-dark text-light placeholder-[#afaacf]"
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
              className="w-full h-14 p-4 bg-primary rounded-lg border border-dark text-light/90"
            />
          </div>
          {/* Message Textarea */}
          <div className="w-full flex flex-col gap-2">
            <label className="text-light text-base font-medium font-display">
              Message
            </label>
            <textarea
              placeholder="Start typing..."
              className="w-full h-36 p-4 bg-primary rounded-lg border border-dark text-light placeholder-[#afaacf] resize-none"
            ></textarea>
          </div>
          <div className="p-4 bg-gradient-to-l from-[#ffe9e9] to-accent rounded-full flex items-center">
            <div className="text-dark text-lg font-normal font-sans">
              Get in Touch
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
