import React from 'react';
import style from './style.js';

//need fa or it will just be a box
//fa-arrow-left gives me the left arrow
//fa-2x gives me the size
const LeftArrow = (props) => (
  <div className="leftArrow arrow" onClick={props.prevPicture} style={style.leftArrow}>
    <i className="fa fa-angle-left fa-3x" aria-hidden="true" style={style.arrow}></i>
  </div>
);

export default LeftArrow;