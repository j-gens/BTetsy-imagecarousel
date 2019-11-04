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

//create the stream to write to csv file
const productDataCsv = fs.createWriteStream('./productData.csv')


function generateProductDataCsv(total, callback) {
  let i = total;
  const generateProductLine = () => {
    return `${i},${faker.commerce.productName()},false\n`;
  }

  write();

  function write() {
    let ok = true;
    do {
      i--;
      ok = productDataCsv.write(generateProductLine(), 'utf8');
    } while (i > 1 && ok);
    if (i > 0) {
      productDataCsv.once('drain', write);
    } else if (i === 0) {
      productDataCsv.write(generateProductLine(), 'utf8', callback);
    }
  }
}

generateProductDataCsv(10000000, console.log);

