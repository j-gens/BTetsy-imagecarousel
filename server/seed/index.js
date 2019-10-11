var faker = require('faker');
const models = require('./models/index.js');
//usernames
var randomUsername = faker.internet.userName();
// console.log('randomUsername', randomUsername);//Elton_Hauck
//product names
var randomProductName = faker.commerce.productName();
// console.log('randomProductName', randomProductName);//Practical Soft Towels
//url images of those product names
var randomImageUrl = faker.image.fashion();
// console.log('randomImageUrl', randomImageUrl);//http://lorempixel.com/640/480/fashion <=this is depression


var productArray = [];
