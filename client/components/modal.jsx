import React from 'react';
import './styles.css';

const Modal = ({
  toggle,
  currIndex,
  show,
  image,
}) => (
  <div role="button" aria-label="show modal" tabIndex="0" onClick={toggle} className={show ? 'modal' : 'displayNone'}>
    <div className="modalContainer">
      <img alt="modal content" src={image[currIndex]} className="modalContent" />
      <span className="button">&times;</span>
    </div>
  </div>
);

export default Modal;
