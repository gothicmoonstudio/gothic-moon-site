import React from 'react';
import { Instagram, Dribbble } from 'react-feather';
import TwoColumnFooter from '../layouts/TwoColumnFooter';

const Footer = () => {
  // Define the left content for the footer
  const leftContent = (
    <div className="flex flex-col items-start justify-between gap-3 md:gap-5 lg:gap-7">
      {/* Logo Section */}
      <div className="logo-section mb-4 md:mb-0 lg:mb-0">
        <img
          src="/images/full_logo.svg" // Ensure this path is correct for your project
          alt="Gothic Moon logo"
          className="footer-logo w-36"
        />
      </div>

      {/* Social Icons */}
      <div className="flex space-x-6 mb-4 md:mb-0 lg:mb-0">
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
      </div>

      {/* Signature Text */}
      <div className="signature-text font-normal font-header">
        Made with a little 🪄 & ✨
      </div>
    </div>
  );

  // Define the right content for the footer
  const rightContent = (
    <div className="flex flex-col items-start justify-between md:items-end text-left md:text-right">
      {/* Tagline */}
      <div className="text-lg mb-6 md:mb-10 lg:mb-16">
        <span className="font-semibold font-header">We’re brewing something</span>
        <span className="font-normal font-serif"> extraordinary.</span>
      </div>

      {/* Legal Text */}
      <div className="flex flex-wrap items-center justify-start md:justify-end gap-4">
        <a
          href="https://app.termly.io/policy-viewer/policy.html?policyUUID=fcb07211-f5b1-4b86-915e-4a393d54a3c7"
          target="_blank"
          rel="noopener noreferrer"
          className="text-base font-normal font-header hover:text-[#F6FFBC] transition-colors duration-200"
        >
          Privacy Policy
        </a>
        <a
          href="https://app.termly.io/policy-viewer/policy.html?policyUUID=ae7e109c-aee5-417d-8b96-0307a9aead2b"
          target="_blank"
          rel="noopener noreferrer"
          className="text-base font-normal font-header hover:text-[#F6FFBC] transition-colors duration-200"
        >
          Terms & Conditions
        </a>
        <div className="legal-text text-base font-normal font-header">
          © 2024 Gothic Moon Creative Studio LLC
        </div>
      </div>
    </div>
  );

  return (
    <footer className="h-1/3">
      {/* Use the TwoColumn layout and pass the leftContent and rightContent */}
      <TwoColumnFooter leftContent={leftContent} rightContent={rightContent} />
    </footer>
  );
};

export default Footer;