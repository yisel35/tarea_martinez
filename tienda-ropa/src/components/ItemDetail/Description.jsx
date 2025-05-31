import React from 'react';

const Description = ({ text }) => {
  return (
    <p className="description-text" style={{ 
      fontSize: '0.9rem', 
      color: '#666', 
      lineHeight: '1.6',
      marginBottom: '1rem'
    }}>
      {text}
    </p>
  );
};

export default Description;