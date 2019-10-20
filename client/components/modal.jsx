import React from 'react';
import style from './style.js';

const Modal = (props) => {
  return (
    <div onClick={props.toggle} style={props.show ? style.modal : style.displayNone}>
      <div className="container" style={style.container}>
        <img src={props.image[props.currIndex]} style={style.modalContent}/>
        <span style={style.button}>&times;</span>
      </div>
    </div>
  );
};

export default Modal;

