import React from 'react';
import { Instagram, Dribbble, Mail } from 'react-feather';
import TwoColumnFooter from '../layouts/TwoColumnFooter';

const Footer = () => {
  // Define the left content for the footer
  const leftContent = (
    <div className="w-full flex flex-col items-center md:items-start lg:items-start mt-24 md:lg:mt-0 lg:mt-0">
      {/* Logo Section */}
      <img
        src="/images/gothicmoon_fulllogo.png" // Update the path if needed
        alt="Gothic Moon Creative Studio Logo"
        className="w-[12rem] md:w-[16rem] lg:w-[20rem] h-auto object-contain" // Responsive sizes for different breakpoints
      />
    </div>
  );

  // Define the right content for the footer (Social Icons)
  const rightContent = (
    <div className="flex flex-col items-center md:items-end lg:items-end justify-end self-end mt-6 md:mt-4 lg:mt-4"> {/* Responsive gap */}
      <div className="flex items-start gap-6 md:gap-9"> {/* Adjust gap for responsiveness */}
        {/* Social Icon Links */}
        <a
          href="https://www.instagram.com/gothicmoonstudio"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#F6FFBC]"
        >
          <Instagram className="stroke-2 w-6 h-6 hover:scale-110 transition-transform duration-300 ease-in-out" />
        </a>
        <a
          href="https://dribbble.com/gothicmoonstudio"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#F6FFBC]"
        >
          <Dribbble className="stroke-2 w-6 h-6 hover:scale-110 transition-transform duration-300 ease-in-out" />
        </a>
        <a
          href="hello@gothicmoon.co"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#F6FFBC]"
        >
          <Mail className="stroke-2 w-6 h-6 hover:scale-110 transition-transform duration-300 ease-in-out" />
        </a>
      </div>
    </div>
  );

  return (
    <footer className="w-full p-6 md:p-12 lg:p-24 bg-[#141221] flex flex-col justify-end items-center gap-10 lg:gap-14">
      {/* Top Section using TwoColumnFooter */}
      <TwoColumnFooter
        leftContent={leftContent}
        rightContent={rightContent}
        className="w-full flex flex-col md:flex-row justify-between items-start md:items-end gap-10 lg:gap-14"
      />

      {/* Divider Line */}
      <div className="w-full h-px bg-[#3f3a5b]" />

      {/* Bottom Section */}
      <div className="w-full flex flex-col md:flex-row justify-between items-center md:items-start gap-4">
        {/* Copyright Text */}
        <div className="text-[#f4f3ff] text-center md:text-left text-base font-normal font-header">
          © 2024 Gothic Moon Creative Studio LLC
        </div>

        {/* Legal Links */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center text-center">
          <a
            href="https://app.termly.io/policy-viewer/policy.html?policyUUID=ae7e109c-aee5-417d-8b96-0307a9aead2b"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#f4f3ff] text-base font-normal font-header hover:text-[#F6FFBC] transition-colors duration-200"
          >
            Terms & Conditions
          </a>
          <a
            href="https://app.termly.io/policy-viewer/policy.html?policyUUID=fcb07211-f5b1-4b86-915e-4a393d54a3c7"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#f4f3ff] text-base font-normal font-header hover:text-[#F6FFBC] transition-colors duration-200"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;