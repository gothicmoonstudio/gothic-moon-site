import React from 'react';
import SideBySide from '../templates/SidebySide';

  const Intro = () => {

  const titleClasses = `text-[3rem] md:text-[4rem] lg:text-[6rem] font-header font-medium mb-4`;
  const paragraphClasses = `text-[1rem] md:text-[1.25rem] lg:text-[1.5rem] font-body leading-[150%]`;

  const leftContent = (
    <div className="flex flex-col">
      <h1 className={titleClasses}>
        Welcome to <span className="font-serif special-text">gothic moon</span>
      </h1>
    </div>
  );

  const rightContent = (
    <div className="flex flex-col">
      <p className={`${paragraphClasses} mb-4`}>
        Navigating the intricate world of user experience design can be a daunting task. That's where Gothic Moon comes in. As your trusted UX compass, we'll guide you through the complex terrain, ensuring your digital presence shines bright.
      </p>
      <p className={`${paragraphClasses} mb-4`}>
      I'm Mary Sargent, a seasoned UX designer with over six years of experience crafting engaging and intuitive digital products. My expertise lies in designing enterprise tools for the media and entertainment industries, where attention to detail and user-centricity are paramount.
      </p>
      <p className={`${paragraphClasses}`}>
      Let's embark on a journey together to create exceptional user experiences. Welcome to Gothic Moon.
      </p>
    </div>
  );

  return (
    <SideBySide leftContent={leftContent} rightContent={rightContent} />
  );
};

export default Intro;