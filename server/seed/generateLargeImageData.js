const faker = require('faker');
const fs = require('fs');

/*
SCHEMA:
TABLE 1: products
ProductId (unique integer) -- i
ProductName (string) -- faker.commerce.productName()
isLiked (boolean)

TABLE 2: product_images
imageId (unique integer) -- i
imageUrl (string) -- faker.image.imageUrl()
ProductId (Foreign Key - integer) -- getRandomProductId(10M)
*/

const getRandomNumber = (max) => {
  return Math.ceil(Math.random() * max);
};

//create the streams to write to csv files
const imageDataCsv = fs.createWriteStream('./imageData.csv')


const generateLargeImageDataCsv = (total, callback) => {
  let i = total;

  const generatePhotoLine = () => {
    return `${i},${faker.image.imageUrl()},${getRandomNumber(10000000)}\n`;
  }

  write();

  function write() {
    let ok = true;
    do {
      i--;
      if (i === 0) {
        imageDataCsv.write(generatePhotoLine(), 'utf8', callback);
      } else {
        ok = imageDataCsv.write(generatePhotoLine(), 'utf8');
      }
    } while (i > 0 && ok);
    if (i > 0) {
      imageDataCsv.once('drain', write);
    }
  }
}


generateLargeImageDataCsv(35000000, console.log);

