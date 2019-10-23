import React from 'react';
import styles from './styles.css';

const DisplayPic = ({ image, index, selectedPic }) => (
  <li className={styles.thumbnails}>
    <div
      role="button"
      tabIndex="0"
      aria-label="thumbnail image button"
      onClick={selectedPic}
    >
      <img
        alt="item"
        src={image}
        className={styles.thumbnail}
        id={index}
      />
    </div>
  </li>
);

export default DisplayPic;
