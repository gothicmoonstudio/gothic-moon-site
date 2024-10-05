import React from 'react';
import { Instagram, Dribbble } from 'react-feather';

const Footer = () => {
  return (
    <footer className="w-screen h-1/3 px-8 md:px-16 lg:px-24 py-12 relative text-gray-800 bg-[#141221]">
      {/* Footer Content Wrapper */}
      <div className="w-full h-full max-w-8xl flex flex-col md:flex-row justify-between items-start md:items-center relative z-10 gap-8 md:gap-0">
        {/* Column 1 - Left Section */}
        <div className="flex flex-col items-start w-full md:w-1/2 gap-9 md:gap-12">
          {/* Logo Section */}
          <div className="logo-section mb-6 md:mb-0">
            <img
              src="/images/full_logo.svg" // Ensure this path is correct for your project
              alt="Gothic Moon logo"
              className="footer-logo w-36"
            />
          </div>

          {/* Social Icons */}
          <div className="flex space-x-6 mb-6 md:mb-0">
            <div className="social-icon">
              <a
                href="https://www.instagram.com/gothicmoonstudio"
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:text-[#F6FFBC]"
              >
                <Instagram className="stroke-2 w-6 h-6 hover:scale-110 transition-transform duration-300 ease-in-out" />
              </a>
            </div>
            <div className="social-icon">
              <a
                href="https://dribbble.com/gothicmoonstudio"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#F6FFBC]"
              >
                <Dribbble className="hover:scale-110 transition-transform duration-300 ease-in-out stroke-2 w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Signature Text */}
          <div className="signature-text text-base font-normal font-header">
            Made with 🪄 & ✨...
          </div>
        </div>

        {/* Column 2 - Right Section */}
        <div className="flex flex-col items-start md:items-end w-full md:w-1/2 text-left md:text-right">
          <div className="flex flex-col justify-between gap-12 md:gap-24">
            {/* Tagline */}
            <div className="text-lg">
              <span className="font-semibold font-header">We’re brewing something</span>
              <span className="font-normal font-serif"> extraordinary.</span>
            </div>

            {/* Legal Text */}
            <div className="flex flex-wrap items-center justify-start md:justify-end gap-4">
              <div className="text-base font-normal font-header">
                <a
                  href="https://app.termly.io/policy-viewer/policy.html?policyUUID=fcb07211-f5b1-4b86-915e-4a393d54a3c7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#F6FFBC] transition-colors duration-200"
                >
                  Privacy Policy
                </a>
              </div>
              <div className="text-base font-normal font-header">
                <a
                  href="https://app.termly.io/policy-viewer/policy.html?policyUUID=ae7e109c-aee5-417d-8b96-0307a9aead2b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#F6FFBC] transition-colors duration-200"
                >
                  Terms & Conditions
                </a>
              </div>
              <div className="legal-text text-base font-normal font-header">
                © 2024 Gothic Moon Creative Studio LLC
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;