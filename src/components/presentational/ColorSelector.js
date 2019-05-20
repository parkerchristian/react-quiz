import React from 'react';
import PropTypes from 'prop-types';

export default function ColorSelector({ color, handleChange, backgroundColor }) {
  return (
    <>
    <input name="backgroundColor" value={backgroundColor} type="color" onChange={handleChange}></input>
    <input name="color" value={color} type="color" onChange={handleChange}></input>
    </>
  );
}
  
ColorSelector.propTypes = {
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  handleChange: PropTypes.func
};
