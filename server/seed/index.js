var faker = require('faker');
const models = require('../models/index.js');

models.saveProduct(1, 'BTS BT21 Official Pyjamas Set', [ 'https://btetsy.s3.us-east-2.amazonaws.com/2_1.jpg', 'https://btetsy.s3.us-east-2.amazonaws.com/2_2.jpg', 'https://btetsy.s3.us-east-2.amazonaws.com/2_3.jpg']);
models.saveProduct(2, 'Love Yourself Unisex Premium T-Shirt', [ 'https://btetsy.s3.us-east-2.amazonaws.com/1_1.jpg', 'https://btetsy.s3.us-east-2.amazonaws.com/1_2.jpg', 'https://btetsy.s3.us-east-2.amazonaws.com/1_3.jpg']);
models.saveProduct(3, 'BTS - Bunny Hat Series Enamel Pin', [ 'https://btetsy.s3.us-east-2.amazonaws.com/3_1.jpg', 'https://btetsy.s3.us-east-2.amazonaws.com/3_2.jpg', 'https://btetsy.s3.us-east-2.amazonaws.com/3_3.jpg']);

let productSeed = () => {

  for (let i = 4; i < 20; i++) {
    var randomProductItem = faker.commerce.productName();
    var randomArray = [faker.image.fashion(), faker.image.cats(), faker.image.technics(), faker.image.transport(), faker.image.abstract()];
    var productArray = [];

    var randomNum = (max) => {
      return Math.floor(Math.random() * max);
    };
    var randomNumUpTo5 = randomNum(5);

    for (let i = 0; i < randomNum(4) + 1; i++) {
      productArray.push(randomArray[randomNumUpTo5]);
    }
    models.saveProduct(i, randomProductItem, productArray);
  }
};

let wishlistSeed = () => {
  var randomUsername = faker.internet.userName();
  models.saveWishlist(['BTS BT21 Official Pyjamas Set', 'BTS - Bunny Hat Series Enamel Pin'], 'KIMTAEHYUNG');
};

productSeed();
wishlistSeed();