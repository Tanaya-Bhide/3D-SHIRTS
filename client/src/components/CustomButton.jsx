import React from 'react';
import state from '../store'; // Adjust the import path
import { useSnapshot } from 'valtio';
import { getContrastingColor } from '../config/helpers';

function CustomButton({ type, title, customStyles, handleClick }) {
  const snap = useSnapshot(state);

  const generateStyle = (type) => {
    const commonStyles = {
      padding: '12px 20px',
      borderRadius: '20px', // Adjust the border radius as needed
      fontWeight: 'bold',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease, color 0.3s ease, transform 0.2s ease',
    };

    if (type === 'filled') {
      return {
        ...commonStyles,
        backgroundColor: snap.color,
        color: getContrastingColor(snap.color),
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        transform: 'scale(1)',
      };
    };
  };

  return (
    <button
      id="custom-button"
      className={`rounded-full ${customStyles}`}
      style={{ ...generateStyle(type) }}
      onClick={handleClick}
    >
      {title}
    </button>
  );
}

export default CustomButton;
