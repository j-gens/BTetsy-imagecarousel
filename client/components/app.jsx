import React from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';
import style from './style.js';
import CarouselPic from './carousel.jsx';
import DisplayPic from './display.jsx'
import LeftArrow from './leftArrow.jsx';
import RightArrow from './rightArrow.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemName: 'BTS BT21 Official Pyjamas Set',
      images: [
        'https://btetsy.s3.us-east-2.amazonaws.com/2_1.jpg',
        'https://btetsy.s3.us-east-2.amazonaws.com/2_2.jpg',
        'https://btetsy.s3.us-east-2.amazonaws.com/2_3.jpg'
      ],
      currIndex: 0,
      translateVal: 0,
    };
    this.nextPicture = this.nextPicture.bind(this);
    this.prevPicture = this.prevPicture.bind(this);
  }

  carouselWidth () {
    var pic = document.getElementById('carouselPic');
    return pic.clientWidth;
  }

  prevPicture() {
    const lengthOfImages = this.state.images.length - 1;

    this.state.currIndex === 0 ?
      this.setState(state => ({
        currIndex: lengthOfImages,
        translateVal: -(lengthOfImages) * (this.carouselWidth())
      }))
      :
      this.setState(state => ({
        currIndex: state.currIndex - 1,
        translateVal: state.translateVal + (this.carouselWidth())
      }));
  }

  nextPicture() {
    const lengthOfImages = this.state.images.length - 1;

    this.state.currIndex === lengthOfImages ?
      this.setState({
        currIndex: 0,
        translateVal: 0
      })
      :
      this.setState(state => ({
        currIndex: state.currIndex + 1,
        translateVal: state.translateVal + -(this.carouselWidth())
      }));
  }

  render () {
    return (
      <div>
        <h3 style={style.header}>{this.state.itemName}</h3>
        <div className="carousel" style={style.carousel}>
          <div className="carouselWrapper"
            style={{display: 'inline-flex',
              transform: `translateX(${this.state.translateVal}px)`,
              transition: 'transform ease-out 0.45s'
            }}>
            {this.state.images.map((image, index) => (<CarouselPic key={index} image={image} />)
            )}
          </div>

          <LeftArrow
            prevPicture={this.prevPicture}
          />

          <RightArrow
            nextPicture={this.nextPicture}
          />

          <div className="displayList">
            <ul className="pictureList" style={{listStyleType: 'none'}}>
              {this.state.images.map((image, index) =>
                (<DisplayPic key={index} image={image}/>)
              )}
            </ul>
          </div>
        </div>



      </div>
    );
  }
}

ReactDom.render(<App/>,
  document.getElementById('app')
);
export default App;