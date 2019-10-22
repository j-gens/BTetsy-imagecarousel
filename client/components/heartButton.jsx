import React from 'react';
import './styles.css';

const HeartButton = (props) => (
  <div className="heartShapeButton" onClick={props.toggleHeart}>
    {props.like ?
      <i className="fa fa-heart" aria-hidden="true" style={{
        color: 'rgb(193, 60, 39)'}}>
      </i>
      :
      <i className="fa fa-heart-o" aria-hidden="true" ></i>
    }
  </div>
);

export default HeartButton;
