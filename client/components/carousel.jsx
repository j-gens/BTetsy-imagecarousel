import React from 'react';

const CarouselItem = (props) => {

  return (

    <div className="carouselItem" style={{
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



export default CarouselItem;