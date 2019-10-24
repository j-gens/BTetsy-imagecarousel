import React from 'react';
import styles from './styles.css';

const ModalBox = ({
  toggle,
  currIndex,
  show,
  image,
}) => (
  <div role="button" aria-label="show modal" tabIndex="0" onClick={toggle} className={show ? styles.modal : styles.displayNone}>
    <div className={styles.modalContainer}>
      <img alt="modal content" src={image[currIndex]} className={styles.modalContent} />
      <span className={styles.button}>&times;</span>
    </div>
  </div>
);

export default ModalBox;
