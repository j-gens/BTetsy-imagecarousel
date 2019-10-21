import React from 'react';
import './styles.css';

const LeftArrow = (props) => (
  <div className="leftArrow arrow" onClick={props.prevPicture}>
    <i className="fa fa-angle-left fa-3x" aria-hidden="true"></i>
  </div>
);

export default LeftArrow;