import React from 'react';
import './styles.css';

const RightArrow = ({ nextPicture }) => (
  <div role="button" tabIndex="0" aria-label="right arrow" className="rightArrow arrow" onClick={nextPicture}>
    <i className="fa fa-angle-right fa-3x" aria-hidden="true" />
  </div>
);

export default RightArrow;
