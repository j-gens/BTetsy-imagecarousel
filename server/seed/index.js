const faker = require('faker');
const models = require('../models/index.js');

models.saveProduct(1, 'BTS BT21 Official Pyjamas Set', ['https://btetsy.s3.us-east-2.amazonaws.com/2_1.jpg', 'https://btetsy.s3.us-east-2.amazonaws.com/2_2.jpg', 'https://btetsy.s3.us-east-2.amazonaws.com/2_3.jpg', 'https://btetsy.s3.us-east-2.amazonaws.com/1_4.jpeg', 'https://btetsy.s3.us-east-2.amazonaws.com/2_5.jpg', 'https://btetsy.s3.us-east-2.amazonaws.com/2_6.jpg', 'https://btetsy.s3.us-east-2.amazonaws.com/2_7.jpeg'], true);
models.saveProduct(2, 'Love Yourself Unisex Premium T-Shirt', ['https://btetsy.s3.us-east-2.amazonaws.com/1_1.jpg', 'https://btetsy.s3.us-east-2.amazonaws.com/1_2.jpg', 'https://btetsy.s3.us-east-2.amazonaws.com/1_3.jpg'], false);
models.saveProduct(3, 'New Item! BTS V Dress Shirt', ['https://btetsy.s3.us-east-2.amazonaws.com/4_1.jpg', 'https://btetsy.s3.us-east-2.amazonaws.com/4_2.jpg', 'https://btetsy.s3.us-east-2.amazonaws.com/4_3.jpg'], false);
models.saveProduct(4, 'BTS V Korean Pajamas Evenie UNISEX', ['https://btetsy.s3.us-east-2.amazonaws.com/5_1.jpg', 'https://btetsy.s3.us-east-2.amazonaws.com/5_2.jpeg', 'https://btetsy.s3.us-east-2.amazonaws.com/5_3.jpg', 'https://btetsy.s3.us-east-2.amazonaws.com/5_4.jpg'], true);

const productSeed = () => {
  for (let i = 5; i < 101; i += 1) {
    const randomProductItem = faker.commerce.productName();
    // eslint-disable-next-line
    const randomArray = [faker.image.fashion(), faker.image.cats(), faker.image.technics(), faker.image.transport(), faker.image.abstract()];
    const likeArray = [true, false];
    const productArray = [];

    const randomNum = (max) => Math.floor(Math.random() * max);
    const randomNumUpTo5 = randomNum(5);
    const randomNumUpTo2 = randomNum(2);
    for (let j = 0; j < randomNum(4) + 1; j += 1) {
      productArray.push(randomArray[randomNumUpTo5]);
    }
    models.saveProduct(i, randomProductItem, productArray, likeArray[randomNumUpTo2]);
  }
};

const wishlistSeed = () => {
  models.saveWishlist(['BTS BT21 Official Pyjamas Set', 'BTS - Bunny Hat Series Enamel Pin'], 'KIMTAEHYUNG');
};

productSeed();
wishlistSeed();
