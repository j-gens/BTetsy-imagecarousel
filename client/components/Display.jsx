import React from 'react';
import styles from './styles.css';

const DisplayPic = ({
  image, index, selectedPic, currIndex,
}) => (
  <li className={styles.thumbnails}>
    <div
      role="button"
      tabIndex="0"
      aria-label="thumbnail image button"
      onClick={(e) => { selectedPic(e); }}
    >
      <img
        alt="item"
        src={image}
        className={index === currIndex ? styles.thumbnailAfter : styles.thumbnailBefore}
        id={index}
      />
    </div>
  </li>
);

export default DisplayPic;
