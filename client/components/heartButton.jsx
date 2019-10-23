import React from 'react';
import styles from './styles.css';

const HeartButton = ({ toggleHeart, like }) => (
  <div role="button" tabIndex="0" aria-label="wishlist button" className={styles.heartShapeButton} onClick={toggleHeart}>
    {like
      ? (
        <i
          className="fa fa-heart"
          aria-hidden="true"
          style={{ color: 'rgb(193, 60, 39)' }}
        />
      )
      : <i className="fa fa-heart-o" aria-hidden="true" />}
  </div>
);

export default HeartButton;
