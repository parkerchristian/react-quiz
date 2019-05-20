import React from 'react';
import PropTypes from 'prop-types';

export default function ColorSelector({ backgroundColor, textColor }) {
  return (
    <input name="backgroundColor" value={backgroundColor} type="color" />,
    <input name="textColor" value={textColor} type="color" />
  );
}
  
ColorSelector.propTypes = {
  backgroundColor: PropTypes.string, 
  textColor: PropTypes.string 
};
