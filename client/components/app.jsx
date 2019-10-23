import React from 'react';
import axios from 'axios';
import CarouselPic from './CarouselPic.jsx';
import DisplayPic from './Display.jsx';
import LeftArrow from './LeftArrow.jsx';
import RightArrow from './RightArrow.jsx';
import HeartButton from './HeartButton.jsx';
import ModalBox from './ModalBox.jsx';
import styles from './styles.css';

class App extends React.Component {
  // static functions refer to App
  static carouselWidth() {
    const pic = document.getElementById('carouselPic');
    return pic.clientWidth;
  }

  constructor(props) {
    super(props);
    this.state = {
      images: [],
      currIndex: 0,
      translateVal: 0,
      show: false,
      like: false,
      productId: null,
    };
    this.nextPicture = this.nextPicture.bind(this);
    this.prevPicture = this.prevPicture.bind(this);
    this.selectedPic = this.selectedPic.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.toggleHeart = this.toggleHeart.bind(this);
  }


  componentDidMount() {
    const randomNum = (max) => (Math.floor(Math.random() * max) + 1
    );
    const productId = randomNum(4);
    this.setState({ productId });
    axios.get(`/products/${productId}`)
      .then((results) => {
        this.setState({ images: results.data[0].pictureUrl, like: results.data[0].like });
      })
      .catch((error) => {
        // eslint-disable-next-line
        console.error(error);
      });
  }

  toggleModal() {
    this.setState((state) => ({ show: !state.show }));
  }

  // eslint-disable-next-line
  async toggleHeart () {

    await this.setState((state) => ({ like: !state.like }));
    axios.put('/products', {
      // eslint-disable-next-line
      productId: this.state.productId,
      // eslint-disable-next-line
      like: this.state.like
    })
      .then((response) => {
        // eslint-disable-next-line
        console.log(response);
      })
      .catch((error) => {
        // eslint-disable-next-line
        console.error(error);
      });
  }

  prevPicture() {
    const { images, currIndex, translateVal } = this.state;
    const imagesLength = images.length - 1;
    if (currIndex === 0) {
      this.setState(() => ({
        currIndex: imagesLength,
        translateVal: -(imagesLength) * (App.carouselWidth()),
      }));
    } else {
      this.setState(() => ({
        currIndex: currIndex - 1,
        translateVal: translateVal + (App.carouselWidth()),
      }));
    }
  }

  nextPicture() {
    const { images, currIndex, translateVal } = this.state;
    const imagesLength = images.length - 1;
    if (currIndex === imagesLength) {
      this.setState({
        currIndex: 0,
        translateVal: 0,
      });
    } else {
      this.setState(() => ({
        currIndex: currIndex + 1,
        translateVal: translateVal + -(App.carouselWidth()),
      }));
    }
  }

  selectedPic(event) {
    const selectedImg = Number(event.target.id);
    this.setState(() => ({
      currIndex: selectedImg,
      translateVal: -(App.carouselWidth() * selectedImg),
    }));
  }

  render() {
    const {
      translateVal, images, like, show, currIndex,
    } = this.state;
    return (

      <div>
        <div className={styles.carousel}>
          <div
            className={styles.carouselWrapper}
            style={{
              transform: `translateX(${translateVal}px)`,
            }}
          >
            {images.map((image) => (<CarouselPic key={image} image={image} toggleModal={this.toggleModal} />))}
          </div>

          <HeartButton
            toggleHeart={this.toggleHeart}
            like={like}
          />

          <LeftArrow
            prevPicture={this.prevPicture}
          />

          <RightArrow
            nextPicture={this.nextPicture}
          />

          <div className={styles.displayContainer}>
            <ul className={styles.pictureList} style={{ listStyleType: 'none' }}>
              {images.map((image, index) => (<DisplayPic key={image} index={index} image={image} selectedPic={this.selectedPic} />))}
            </ul>
          </div>
        </div>
        <ModalBox
          toggle={this.toggleModal}
          show={show}
          currIndex={currIndex}
          image={images}
        />
      </div>
    );
  }
}
export default App;
