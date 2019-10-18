import React from 'react';
import style from './style.js';

const Modal = (props) => {
  return (
    <div onClick={props.toggle} style={props.show ? style.modal : style.displayNone}>
      <img src={props.image[props.currIndex]} />
    </div>
  );
};

export default Modal;

