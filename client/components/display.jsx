import React from 'react';
import style from './style.js';

const DisplayPic = (props) => {
  return (
    <li onClick={props.selectedPic} style={style.listPic}>
      <img src={props.image} style={style.eachPic} id={props.index}>
      </img>
    </li>
  );
};

export default DisplayPic;