import React from 'react';
import TwoColumn from '../layouts/TwoColumn';
import ScaleInCenter from '../Animations/ScaleInCenter/ScaleInCenter';

const SideBySide = ({ leftContent, rightContent }) => {
  return (
    <TwoColumn
      leftContent={
        <ScaleInCenter className="left-focus">
          {leftContent}
        </ScaleInCenter>
      }
      rightContent={
        <ScaleInCenter className="right-focus" style={{ animationDelay: '0.5s' }}>
          {rightContent}
        </ScaleInCenter>
      }
    />
  );
};

export default SideBySide;