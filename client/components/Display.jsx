import React from 'react';
import styles from './styles.css';

const DisplayPic = ({
  image, index, selectedPic, currThumbnail, currTN,
}) => (
  <li className={styles.thumbnails}>
    <div
      role="button"
      tabIndex="0"
      aria-label="thumbnail image button"
      onClick={(e) => { selectedPic(e); currThumbnail(e); }}
    >
      <img
        alt="item"
        src={image}
        className={index === currTN ? styles.thumbnailAfter : styles.thumbnailBefore}
        id={index}
      />
    </div>
  </li>
);

export default DisplayPic;
