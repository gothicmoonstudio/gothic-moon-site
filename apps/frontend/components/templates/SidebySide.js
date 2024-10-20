import React from 'react';
import TwoColumn from '../layouts/TwoColumn';
import SlideInLeft from '../Animations/SlideInLeft/SlideInLeft';
import SlideInRight from '../Animations/SlideInRight/SlideInRight';

const SideBySide = ({ leftContent, rightContent }) => {
  return (
    <TwoColumn
      leftContent={
        <SlideInLeft className="left-focus">
          {leftContent}
        </SlideInLeft>
      }
      rightContent={
        <SlideInRight className="right-focus" style={{ animationDelay: '0.5s' }}>
          {rightContent}
        </SlideInRight>
      }
    />
  );
};

export default SideBySide;