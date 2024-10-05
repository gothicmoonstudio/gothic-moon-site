import React from 'react';
import TwoColumn from '../layouts/TwoColumn'; // Ensure the path is correct

const SideBySide = ({ leftContent, rightContent }) => {
  return (
    <TwoColumn leftContent={leftContent} rightContent={rightContent} />
  );
};

export default SideBySide;