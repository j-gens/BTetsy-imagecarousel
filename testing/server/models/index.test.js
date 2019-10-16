const productModel = require('../../../server/models/index.js');
const axios = require('axios');
var request = require('supertest')('http://localhost:3000');
const mongoose = require('mongoose');
var MyWishlistModel = productModel.MyWishlistModel;
MyWishlistModel.find({username:/test_User/i}).remove().exec();

describe('Product Model', () => {

  test('it should retrieve product data from the database', async () => {
    let result = await productModel.getProducts();
    expect(result).toBeDefined();
    expect(result.length).toBe(19);
    expect(result[0].productItem).toBe('BTS BT21 Official Pyjamas Set');
  });

  test('it should retrieve product data by id from the database', async () => {
    let result = await productModel.getProductById(1);

    expect(result).toBeDefined();
    expect(result[0].pictureUrl.length).toBe(3);
    expect(result[0].productItem).toBe('BTS BT21 Official Pyjamas Set');
  });

  test('it should retrieve wishlist data from the database', async () => {
    let result = await productModel.getWishlists();
    expect(result).toBeDefined();
    expect(result.length).toBe(2);
    expect(result[1].username).toBe('KIMTAEHYUNG');
  });

  test('it should retrieve wishlist data by username from the database', async () => {
    let result = await productModel.getWishlistByUsername('KIMTAEHYUNG');
    expect(result).toBeDefined();
    expect(result[0].products.length).toBe(2);
  });

  test('it should fetch a created wishlist from the database', async () => {
    let _ = await productModel.saveWishlist(['Test Item1','Test Item2', 'Test Item3'], 'test_User');
    let result = await productModel.getWishlists()
    expect(result.length).toBe(3);
    MyWishlistModel.find({username:/test_User/i}).remove().exec();
  });

});


describe('API Routes', () => {
  test('A get request to /products/3 should return the requested product', (done) => {
    request.get('/products/3')
    .expect(200)
    .expect((res) => {
      expect(res.body[0].productId).toEqual(3);
      expect(res.body[0].productItem).toEqual('BTS - Bunny Hat Series Enamel Pin');
    })
    .end(done);
  });
})
