import React from 'react';

const PrimaryButton = ({ label }) => {
  return (
    <div className="primary-button">
      <div className="primary-button-text">
        {label}
      </div>
    </div>
  );
};

export default PrimaryButton;
