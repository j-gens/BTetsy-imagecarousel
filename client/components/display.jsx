import React from 'react';
import style from './style.js';

const DisplayPic = (props) => {
  return (
    <li key={props.index} style={style.listPic}>
      <img src={props.image} style={style.eachPic}>
      </img>
    </li>
  );
};

export default DisplayPic;