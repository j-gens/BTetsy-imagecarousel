const faker = require('faker');
const fs = require('fs');
const createCsvStringifier = require('csv-writer').createObjectCsvStringifier;

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

const getRandomProductId = (max) => {
  return Math.ceil(Math.random() * max);
}


const productCsvWriter = createCsvWriter({
  path: 'path here',
  header: [
    'productId', 'productName', 'isLiked'
  ]
});

const imageCsvWriter = createCsvWriter({
  path: 'path here',
  header: [
    'imageId', 'imageUrl', 'productId'
  ]
});






