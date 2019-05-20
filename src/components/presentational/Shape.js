import React from 'react';
import PropTypes from 'prop-types';

export default function Shape({ text, color, backgroundColor }) {
  const style = { 
    width: '100px', 
    height: '100px', 
    backgroundColor, 
    color
  };

  return (
    <div style={style}>{text}</div>
  );
}

Shape.propTypes = {
  backgroundColor: PropTypes.string, 
  color: PropTypes.string, 
  text: PropTypes.string 
};
