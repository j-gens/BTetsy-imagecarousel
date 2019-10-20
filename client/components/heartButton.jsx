import React from 'react';
import style from './style.js';

const HeartButton = (props) => (
  <div className="heartShape" onClick={props.toggleHeart} style={style.heart}>
    {props.like ?
      <i className="fa fa-heart" aria-hidden="true" style={{
        color: 'rgb(193, 60, 39)', ...style.heartButton
      }}></i>
      :
      <i className="fa fa-heart-o" aria-hidden="true" style={style.heartButton}></i>
    }
  </div>
);

export default HeartButton;
