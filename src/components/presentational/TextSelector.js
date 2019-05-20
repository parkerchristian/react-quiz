import React from 'react';
import PropTypes from 'prop-types';

export default function TextSelector({ text, handleChange }) {
  return <input name="text" value={text} onChange={handleChange} />;
}

TextSelector.propTypes = {
  text: PropTypes.string,
  handleChange: PropTypes.func
};
