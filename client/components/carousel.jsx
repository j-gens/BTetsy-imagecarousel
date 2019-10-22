import React from 'react';
import styles from './styles.css';

const CarouselPic = (props) => {
  return (
    <div className="carouselPic" id="carouselPic" onClick={props.toggleModal} style={{
      backgroundImage: `url(${props.image})`
    }}>
    </div>
  );
};

export default CarouselPic;
