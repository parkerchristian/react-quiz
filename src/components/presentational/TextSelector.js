import React from 'react';
import PropTypes from 'prop-types';

export default function TextSelector({ text }) {
  return <input name="text" value={text} />;
}

TextSelector.propTypes = {
  text: PropTypes.string 
};
