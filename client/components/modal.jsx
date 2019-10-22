import React from 'react';
import './styles.css';

const Modal = (props) => {
  return (
    <div onClick={props.toggle} className={props.show ? 'modal' : 'displayNone'}>
      <div className="modalContainer">
        <img src={props.image[props.currIndex]} className="modalContent"/>
        <span className="button">&times;</span>
      </div>
    </div>
  );
};

export default Modal;

