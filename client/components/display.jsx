import React from 'react';
import './styles.css';

const DisplayPic = ({ image, index, selectedPic }) => (
  <li className="thumbnails">
    <div
      role="button"
      tabIndex="0"
      aria-label="thumbnail image button"
      onClick={selectedPic}
    >
      <img
        alt="item"
        src={image}
        className="thumbnail"
        id={index}
      />
    </div>
  </li>
);

export default DisplayPic;
