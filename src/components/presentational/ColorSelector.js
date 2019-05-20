import React from 'react';
import PropTypes from 'prop-types';

export default function ColorSelector({ color, handleChange }) {
  return (
    <input name="color" value={color} type="color" onChange={handleChange} />
  );
}
  
ColorSelector.propTypes = {
  color: PropTypes.string,
  handleChange: PropTypes.func
};
