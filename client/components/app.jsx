import React from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';
import style from './style.js';
import CarouselItem from './carousel.jsx';
import LeftArrow from './leftArrow.jsx';
import RightArrow from './rightArrow.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        'https://btetsy.s3.us-east-2.amazonaws.com/2_1.jpg',
        'https://btetsy.s3.us-east-2.amazonaws.com/2_2.jpg',
        'https://btetsy.s3.us-east-2.amazonaws.com/2_3.jpg'
      ],
      currentIndex: 0,
      translateValue: 0
    };
    this.nextPicture = this.nextPicture.bind(this);
    this.prevPicture = this.prevPicture.bind(this);
  }
  carouselWidth () {
    //todo: figure out how to get size
    //if u change css size of width, change next line too
    return 400;
  }

  //LEFT: go to the prev picture in carousel
  prevPicture() {
    //if current index is 0
    if (this.state.currentIndex === 0) {
      this.setState(state => ({
        currentIndex: this.state.images.length - 1,
        translateValue: -(this.state.images.length - 1) * (this.carouselWidth())
      }));
    } else {
      this.setState(state => ({
        currentIndex: state.currentIndex - 1,
        translateValue: state.translateValue + (this.carouselWidth())
      }));
    }
  }

  //RIGHT: go to the next picture in carousel
  nextPicture() {
    //if the current picture is the last one
    if (this.state.currentIndex === this.state.images.length - 1) {
      //return state to 0
      return this.setState({
        currentIndex: 0,
        translateValue: 0
      });
    } else {
    //else if not the current picture, keep going to the next one
      this.setState(state => ({
        currentIndex: state.currentIndex + 1,
        translateValue: state.translateValue + -(this.carouselWidth())
      }));
    }
  }

  render () {
    return (

      <div className="carousel" style={style.carousel}>
        <h1 style={style.header}>BTS</h1>
        <div className="carouselWrapper"
          style={{display: 'inline-flex',
            //translateX moves pics horizontally
            //translateY goes up and down when i click on left and right arrows
            transform: `translateX(${this.state.translateValue}px)`,
            transition: 'transform ease-out 0.45s'
          }}>
          {this.state.images.map((image, index) => (<CarouselItem key={index} image={image} />
          ))}
        </div>

        <LeftArrow
          prevPicture={this.prevPicture}
        />

        <RightArrow
          nextPicture={this.nextPicture}
        />
      </div>
    );
  }
}

ReactDom.render(<App/>,
  document.getElementById('app')
);
export default App;