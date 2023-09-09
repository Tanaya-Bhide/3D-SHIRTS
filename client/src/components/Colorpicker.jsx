import React from 'react';
import { SketchPicker } from 'react-color';
import { useSnapshot } from 'valtio';
import state from '../store';

function Colorpicker() {
  const snap = useSnapshot(state);
  
  // Define an array of preset HEX colors
  const presetColors = [
    '#FF5733',
    '#4286f4',
    '#E74C3C',
    '#3498DB',
    '#27AE60',
    '#9B59B6',
    '#F1C40F',
    '#34495E',
    '#D35400',
    '#1ABC9C',
    // Add more HEX colors as needed
  ];
  
  // Style for positioning the Colorpicker to the right of an icon
  const colorpickerStyle = {
    position: 'absolute',
    left: '100%', // Position to the right of the icon
    marginLeft: '10px', // Add some space between the icon and Colorpicker
    top: '0', // Adjust the top position as needed
  };

  return (
    <div style={colorpickerStyle}>
      <SketchPicker
        disableAlpha
        presetColors={presetColors}
        color={snap.color}
        onChange={(color) => state.color = color.hex} 
      />
    </div>
  )
}

export default Colorpicker;

