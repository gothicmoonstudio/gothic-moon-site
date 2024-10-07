import React from 'react';

const UVPCard = ({ title, description, imageSrc }) => {
  // Inline styles for the card and its elements
  const cardStyle = {
    width: '376px',
    height: '523px',
    minWidth: '376px',
    minHeight: '523px',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: '20px',
    padding: '24px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
  };

  const imageContainerStyle = {
    width: '100%',
    height: '50%',
    overflow: 'hidden',
    borderRadius: '15px',
    marginBottom: '16px',
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  };

  const titleStyle = {
    fontSize: '1.5rem',
    fontWeight: '600',
    color: '#333',
    margin: '0 0 16px 0',
    textAlign: 'center',
  };

  const descriptionStyle = {
    fontSize: '1rem',
    color: '#666',
    textAlign: 'center',
  };

  return (
    <div style={cardStyle}>
      {imageSrc && (
        <div style={imageContainerStyle}>
          <img src={imageSrc} alt={title} style={imageStyle} />
        </div>
      )}

      <h2 style={titleStyle}>{title}</h2>

      <p style={descriptionStyle}>{description}</p>
    </div>
  );
};

export default UVPCard;