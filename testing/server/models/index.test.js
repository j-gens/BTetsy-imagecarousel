const productModel = require('../../../server/models/index.js');
const axios = require('axios');

// module.exports.saveProduct = saveProduct;
// module.exports.saveWishlist = saveWishlist;

// module.exports.getProductById = getProductById;
// module.exports.getWishlistByUsername = getWishlistByUsername;

describe('Product Model', () => {

  test('it should retrieve product data from the database', async () => {
    let result = await productModel.getProducts();
    expect(result).toBeDefined();
    expect(result.length).toBe(19);
    expect(result[0].productItem).toBe('BTS BT21 Official Pyjamas Set');
  });

  test('it should retrieve wishlist data from the database', async () => {
    let result = await productModel.getWishlists();
    expect(result).toBeDefined();
    expect(result.length).toBe(2);
    expect(result[1].username).toBe('KIMTAEHYUNG');
  });

});

describe('API Routes', () => {
  test('A get request to /products/3 should return the requested product', async () => {
    try {
      var response = await axios.get('http://localhost:3000/products/3');
    } catch (err){
      console.error(err);
    }
    expect(response.data[0].productId).toBe(3);
    expect(response.data[0].productItem).toBe('BTS - Bunny Hat Series Enamel Pin');
  });
});