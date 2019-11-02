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
const productDataCsv = fs.createWriteStream('./productData.csv', {encoding: 'utf8'})


const generateProductDataCsv = (total) => {
  let i = total;

  const generateProductLine = () => {
    return `${i},${faker.commerce.productName()},false\n`;
  }

  do {
    i--;
    productDataCsv.write(generateProductLine())
    .on('drain', write)
    .on('error', (err) => {
      console.log('product csv err ', err);
    })

  } while (i > 0);

}


generateProductDataCsv(10000000);


