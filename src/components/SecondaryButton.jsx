import React from 'react';

const SecondaryButton = ({ label }) => {
  return (
    <div className="secondary-button">
      <div className="secondary-button-text">
        {label}
      </div>
    </div>
  );
};

export default SecondaryButton;
