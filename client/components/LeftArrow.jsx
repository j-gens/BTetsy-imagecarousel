import React from 'react';
import styles from './styles.css';

const LeftArrow = ({ prevPicture }) => (
  <div role="button" tabIndex="0" aria-label="left arrow" className={`${styles.leftArrow} ${styles.arrow}`} onClick={prevPicture}>
    <i className="fa fa-angle-left fa-3x" aria-hidden="true" />
  </div>
);

export default LeftArrow;
