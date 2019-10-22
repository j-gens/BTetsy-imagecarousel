import React from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';
import CarouselPic from './carousel.jsx';
import DisplayPic from './display.jsx';
import LeftArrow from './leftArrow.jsx';
import RightArrow from './rightArrow.jsx';
import HeartButton from './heartButton.jsx';
import Modal from './modal.jsx';
import './styles.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      currIndex: 0,
      translateVal: 0,
      show: false,
      like: false,
      productId: null
    };
    this.nextPicture = this.nextPicture.bind(this);
    this.prevPicture = this.prevPicture.bind(this);
    this.selectedPic = this.selectedPic.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.toggleHeart = this.toggleHeart.bind(this);
  }

  toggleModal (event) {
    this.setState({ show: !this.state.show})
  }

  async toggleHeart (event) {
    await this.setState({ like: !this.state.like});
    axios.put('/products', {
      productId: this.state.productId,
      like: this.state.like
    })
      .then(response => {
        console.log(response, 'hello');
      })
      .catch(error => {
        console.log(err);
      });
  }

  componentDidMount() {
    var randomNum = (max) => {
      return Math.floor(Math.random() * max) + 1;
    };
    var productId = randomNum(4);
    this.setState({productId: productId});
    axios.get(`/products/${productId}`)
    .then((results) => {
      this.setState({images: results.data[0].pictureUrl, like: results.data[0].like})
    })
    .catch((error) => {
      console.log(error);
    })
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

  selectedPic(event) {
    var selectedImg = Number(event.target.id);
    this.setState(state => ({
      currIndex: selectedImg,
      translateVal: -(this.carouselWidth() * selectedImg)
    }));
  }

  render () {
    return (
      <div>
        <div className="carousel" >
          <div className="carouselWrapper"
            style={{
              transform: `translateX(${this.state.translateVal}px)`
            }}>
            {this.state.images.map((image, index) =>
            (<CarouselPic key={index} image={image} toggleModal={this.toggleModal} />)
            )}
          </div>

          <HeartButton
          toggleHeart={this.toggleHeart} like={this.state.like}
          />

          <LeftArrow
            prevPicture={this.prevPicture}
          />

          <RightArrow
            nextPicture={this.nextPicture}
          />

          <div className="displayContainer" >
            <ul className="pictureList" style={{listStyleType: 'none'}}>
              {this.state.images.map((image, index) =>
                (<DisplayPic key={index} index={index} image={image} selectedPic={this.selectedPic}/>)
              )}
            </ul>
          </div>
        </div>
        <Modal toggle={this.toggleModal} show={this.state.show}
        currIndex={this.state.currIndex} image={this.state.images}/>
      </div>
    );
  }
}
export default App;