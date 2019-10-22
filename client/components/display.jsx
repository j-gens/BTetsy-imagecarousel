import React from 'react';
import styles from './styles.css';

const DisplayPic = (props) => {
  return (
    <li onClick={props.selectedPic} className="thumbnails">
      <img src={props.image} className="thumbnail" id={props.index}>
      </img>
    </li>
  );
};


export default DisplayPic;
