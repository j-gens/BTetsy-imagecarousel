import React from 'react';
import style from './style.js';

const CarouselPic = (props) => {
  return (
    <div className="carouselPic" id="carouselPic" onClick={props.toggleModal} style={{
      backgroundImage: `url(${props.image})`,
      ...style.carouselPic
    }}>
    </div>
  );
};

export default CarouselPic;
