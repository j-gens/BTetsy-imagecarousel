import React from 'react';
import style from './style.js';

const RightArrow = (props) => (
  <div className="rightArrow arrow" onClick={props.nextPicture} style={style.rightArrow}>
    <i className="fa fa-angle-right fa-3x" aria-hidden="true" style={style.arrow}></i>
  </div>
);

export default RightArrow;