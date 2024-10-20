import React from 'react';
import SideBySide from '../templates/SidebySide';

const Intro = () => {
  // Define CSS classes for title and paragraph
  const titleClasses = `text-[2.5rem] md:text-[4rem] lg:text-[4.5rem] xl:text-[6rem] font-header font-medium mb-2`;
  const paragraphClasses = `text-[1.25rem] md:text-[1.25rem] lg:text-[1.5rem] font-body leading-[150%]`;

  // Define leftContent for the SideBySide component
  const leftContent = (
    <div className="flex flex-col">
      <h1 className={`${titleClasses} w-[20rem] md:w-full lg:w-[30rem] xl:w-[40rem]`}>
        Welcome to <span className="font-serif special-text">gothic moon</span>
      </h1>
    </div>
  );

  // Define rightContent for the SideBySide component, wrapping each paragraph with the TextReveal animation
  const rightContent = (
    // Single TextReveal wrapper around all paragraphs
    <div className="w-full flex flex-col" style={{ display: 'flex', flexDirection: 'column' }}>
      <p className={`${paragraphClasses} mb-4`}>
        Navigating the intricate world of user experience design can be a daunting task. That's where Gothic Moon comes in. As your trusted UX compass, we'll guide you through the complex terrain, ensuring your digital presence shines bright.
      </p>
      <p className={`${paragraphClasses} mb-4`}>
        I'm Mary Sargent, Founder & CEO of Gothic Moon. I'm a product designer with over six years of experience crafting engaging and intuitive digital products. My expertise lies in designing enterprise tools for the media and entertainment industries, where attention to detail and user-centricity are paramount.
      </p>
      <p className={paragraphClasses}>
        Let's embark on a journey together to create exceptional user experiences. Welcome to Gothic Moon.
      </p>
      </div>
  );

  // Return the SideBySide component with left and right content
  return <SideBySide leftContent={leftContent} rightContent={rightContent} />;
};

export default Intro;