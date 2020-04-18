const fs = require('fs');

/*
POSTGRESQL SCHEMA:
TABLE 1: products
productId (unique integer) -- i
productName (string) -- faker.commerce.productName()
productSeller (string) -- faker.internet.userName()
isLiked (boolean) -- getIfLiked()

TABLE 2: product_images
imageId (unique integer) -- i
imageUrl (string) -- faker.image.imageUrl()
ProductId (Foreign Key - integer) -- getRandomProductId(10M)
*/

const getRandomNumber = (max) => {
  return Math.floor(Math.random() * max);
};

const distributePhotos = (i) => {
  if (i < 10000000) {
    return i;
  }
  return getRandomNumber(10000000);
}

//create the stream to write to csv file
const imageDataCsv = fs.createWriteStream('./imageData.csv')

const generateLargeImageDataCsv = (total) => {
  let i = total;
  const generatePhotoLine = () => {
    return `${i},${getRandomNumber(100).toString()},${distributePhotos(i)}\n`;
  }

  write();

  function write() {
    let ok = true;
    do {
      i--;
      ok = imageDataCsv.write(generatePhotoLine(), 'utf8');
    } while (i > 0 && ok);
    if (i > 0) {
      imageDataCsv.once('drain', write);
    }
    if (i === 0) {
      console.log('part 2 complete');
      return;
    }
  }
}


generateLargeImageDataCsv(35000000);

