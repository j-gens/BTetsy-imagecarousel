const exampleStyle = {
  header: {
    color: 'salmon'
  },
  arrow: {
    height: '50px',
    width: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#f9f9f9',
    borderRadius: '50%',
    cursor: 'pointer',
    transition: 'transform ease-in .1s'
  },
  leftArrow: {
    position: 'absolute',
    top: '50%',
    left: '5%',
    height: '30px',
    width: '30px'
  },
  rightArrow: {
    position: 'absolute',
    top: '50%',
    right: '2%',
    height: '30px',
    width: '30px'
  },
  carousel: {
    position: 'relative',
    width: '400px',
    height: '500px',
    margin: '0 auto',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  },
  carouselWrapper: {
    position: 'relative',
    height: '100%',
    width: '100%'
  },
  carouselItem: {
    display: 'inline-block',
    height: '100%',
    width: '100%'
  }

};
export default exampleStyle;