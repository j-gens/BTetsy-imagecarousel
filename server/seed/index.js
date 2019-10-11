var faker = require('faker');
const models = require('../models/index.js');

let productSeed = () => {
  for (let i = 0; i < 20; i++) {
    var randomProductItem = faker.commerce.productName();
    var randomArray = [faker.image.fashion(), faker.image.cats(), faker.image.technics(), faker.image.transport(), faker.image.abstract()];
    var productArray = [];

    var randomNum = (max) => {
      return Math.floor(Math.random() * max);
    };
    var randomNumUpTo4 = randomNum(4);

    for (let i = 0; i < randomNum(4) + 1; i++) {
      productArray.push(randomArray[randomNumUpTo4]);
    }
    models.saveProduct(randomProductItem, productArray);
  }
};

productSeed();
