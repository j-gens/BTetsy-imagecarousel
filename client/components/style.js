const exampleStyle = {
  example: {
    position: 'relative',
    right: '-150%'
  },
  header: {
    fontWeight: 400,
    fontSize: '20px',
    lineHeight: '26px',
    position: 'relative',
    right: '-70%',
    top: '50px'
  },
  heartButton: {
    height: '30px',
    width: '30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'white',
    borderRadius: '50%',
    cursor: 'pointer',
    transition: 'transform ease-in .1s'
  },
  heart: {
    position: 'absolute',
    top: '4px',
    right: '4px',
    height: 'auto',
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
  displayContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginLeft: '-8%'
  },
  listPic: {
    position: 'relative',
    float: 'left',
  },
  eachPic: {
    width: '60px',
    height: '60px'
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
  },
  container: {
    display: 'block',
    position: 'absolute',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  displayNone: {
    display: 'none'
  },
  modal: {
    display: 'flex',
    position: 'fixed',
    zIndex: '1',
    paddingTop: '30px',
    left: '0',
    bottom: '0',
    top: '0px',
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    overflowY: 'hidden',
    overflowX: 'hidden',
    backgroundColor: 'rgb(0,0,0)',
    backgroundColor: 'rgba(0,0,0,0.4)'
  },
  modalContent: {
    display: 'block',
    width: '600px',
    height: 'auto',
    marginLeft: '450px',
    marginRight: 'auto'
  },
  button: {
    display: 'inline-block',
    position: 'absolute',
    top: '2.5%',
    left: '97%',
    transform: 'translate(-50%, -50%)',
    MsTransform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    color: 'black',
    borderColor: 'rgba(0, 0, 0, 0.15)',
    borderWidth: '1px',
    borderStyle: 'solid',
    fontSize: '16px',
    padding: '12px 24px',
    textAlign: 'center',
    margin: '12px 12px 0px 0px',
    padding: '12px 18px',
    font: '400 11px system-ui'
  },
};

export default exampleStyle;