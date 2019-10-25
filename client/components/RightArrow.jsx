import React from 'react';
import styles from './styles.css';

const RightArrow = ({ nextPicture }) => (
  <div role="button" tabIndex="0" aria-label="right arrow" className={`${styles.rightArrow} ${styles.arrow}`} onClick={nextPicture}>
    <i className="fa fa-angle-right fa-3x" aria-hidden="true" />
  </div>
);

export default RightArrow;
