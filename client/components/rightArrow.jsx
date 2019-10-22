import React from 'react';
import './styles.css';

const RightArrow = (props) => (
  <div className="rightArrow arrow" onClick={props.nextPicture}>
    <i className="fa fa-angle-right fa-3x" aria-hidden="true"></i>
  </div>
);

export default RightArrow;