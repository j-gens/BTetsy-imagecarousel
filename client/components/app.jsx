import React from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';
import style from './style.js';
import CarouselPic from './carousel.jsx';
import DisplayPic from './display.jsx';
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
    this.selectedPicture = this.selectedPicture.bind(this);
  }

  carouselWidth () {
    var pic = document.getElementById('carouselPic');
    return pic.clientWidth;
  }

  prevPicture() {
    const imagesLength = this.state.images.length - 1;
    this.state.currIndex === 0 ?
      this.setState(state => ({
        currIndex: imagesLength,
        translateVal: -(imagesLength) * (this.carouselWidth())
      }))
      :
      this.setState(state => ({
        currIndex: state.currIndex - 1,
        translateVal: state.translateVal + (this.carouselWidth())
      }));
  }

  nextPicture() {
    const imagesLength = this.state.images.length - 1;
    this.state.currIndex === imagesLength ?
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

  selectedPicture(event) {
    var selectedImg = Number(event.target.id);
    this.setState(state => ({
      currIndex: selectedImg,
      translateVal: -(this.carouselWidth() * selectedImg)
    }));
  }

  render () {
    return (
      <div>
        <h3 style={style.header}>{this.state.itemName}</h3>
        <div className="carousel" style={style.carousel}>
          <div className="carouselWrapper"
            style={{
              transform: `translateX(${this.state.translateVal}px)`,
              ...style.carouselWrapper
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
                (<DisplayPic key={index} index={index} image={image} selectedPicture={this.selectedPicture}/>)
              )}
            </ul>
          </div>
        </div>



      </div>
    );
  }
}


export default App;