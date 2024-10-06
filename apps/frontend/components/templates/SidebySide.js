import React, { useRef } from 'react';
import TwoColumn from '../layouts/TwoColumn';

const SideBySide = ({ leftContent, rightContent }) => {
  // Create refs for the left and right columns
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  return (
    <TwoColumn
      leftContent={<div ref={leftRef}>{leftContent}</div>}
      rightContent={<div ref={rightRef}>{rightContent}</div>}
    />
  );
};

export default SideBySide;