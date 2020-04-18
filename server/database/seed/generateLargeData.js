const faker = require('faker');
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

const getIfLiked = () => {
  let value = getRandomNumber(10);
  if (value <= 2) {
    return true;
  }
  return false;
}

//create the stream to write to the csv file
const productDataCsv = fs.createWriteStream('./productData.csv')

function generateProductDataCsv(total) {
  let i = total;
  const generateProductLine = () => {
    return `${i},${faker.commerce.productName()},${getIfLiked()}\n`;
  }

  write();

  function write() {
    let ok = true;
    do {
      i--;
      ok = productDataCsv.write(generateProductLine(), 'utf8');
    } while (i > 0 && ok);
    if (i > 0) {
      productDataCsv.once('drain', write);
    }
    if (i === 0) {
      console.log('part 1 complete');
      return;
    }
  }
}

generateProductDataCsv(10000000);

