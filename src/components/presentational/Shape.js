import React from 'react';
import PropTypes from 'prop-types';

export default function Shape({ text, backgroundColor, textColor }) {
  return (
    <div style={{ width: '100px', height: '100px', backgroundColor: backgroundColor, color: textColor }}>{text}</div>
  );
}

Shape.propTypes = {
  backgroundColor: PropTypes.string, 
  textColor: PropTypes.string, 
  text: PropTypes.string 
};
