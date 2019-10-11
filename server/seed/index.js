var faker = require('faker');
const models = require('../models/index.js');

let productSeed = () => {
  for (let i = 0; i < 10; i++) {
    var randomUsername = faker.internet.userName();

    var randomProductItem = faker.commerce.productName();

    var randomArray = [faker.image.fashion(), faker.image.cats(), faker.image.animals()];
    var randomPic = Math.floor(Math.random() * 3);
    var randomNumber = Math.floor(Math.random() * 4);
    var productArray = [];

    for (let i = 0; i < randomNumber + 1; i++) {
      productArray.push(randomArray[randomPic]);
    }
    models.saveProduct(randomProductItem, productArray, randomUsername);
  }
};

productSeed();
