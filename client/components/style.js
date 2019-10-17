const exampleStyle = {
  header: {
    fontWeight: 400,
    fontSize: '20px',
    lineHeight: '26px',
    position: 'relative',
    right: '-70%',
    top: '50px'
  },
  arrow: {
    height: '50px',
    width: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'white',
    borderRadius: '50%',
    cursor: 'pointer',
    transition: 'transform ease-in .1s'
  },
  leftArrow: {
    position: 'absolute',
    top: '40%',
    left: '5%',
    height: '30px',
    width: '30px'
  },
  rightArrow: {
    position: 'absolute',
    top: '40%',
    right: '10%',
    height: '30px',
    width: '30px'
  },
  carousel: {
    position: 'relative',
    width: '500px',
    height: '700px',
    right: '25%',
    margin: '0 auto',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  },
  carouselWrapper: {
    position: 'relative',
    height: '100%',
    width: '100%'
  },
  carouselPic: {
    display: 'inline-block',
    height: '100%',
    width: '100%'
  },
  listPic: {
    position: 'relative',
    float: 'left'
  },
  eachPic: {
    width: '70px',
    height: '70px'
  },
  carouselPic: {
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 60%',
    width: '500px',
    height: '500px',
    position: 'relative',
    float: 'left'
  },
  carouselWrapper: {
    display: 'inline-flex',
    transition: 'transform ease-out 0.45s'
  }
};
export default exampleStyle;