import React from 'react';

const CarouselPic = (props) => {
  return (

    <div className="carouselPic" id="carouselPic" style={{
      backgroundImage: `url(${props.image})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50% 60%',
      width: '400px',
      height: '400px',
      position: 'relative',
      float: 'left'
    }}>
    </div>
  );
};



export default CarouselPic;