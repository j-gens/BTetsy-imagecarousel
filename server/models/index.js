const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/BTetsy', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});


const Product = mongoose.Schema({
  productId: {type: Number, unique: true},
  productItem: String,
  pictureUrl: Array
});
const Wishlist = mongoose.Schema({
  products: Array,
  username: {type: String, unique: true}
});

const MyProductsModel = mongoose.model('Product', Product);
const MyWishlistModel = mongoose.model('Wishlist', Wishlist);

//save 1 product
let saveProduct = (productId, productItem, pictureUrl) => {
  const instance = new MyProductsModel({
    productId: productId,
    productItem: productItem,
    pictureUrl: pictureUrl
  });
  instance.save((err) => {
    if (!err) {
      console.log('success');
    }
  });
};

let saveWishlist = (products, username) => {
  const instance = new MyWishlistModel({
    products: products,
    username: username
  });
  instance.save((err) => {
    if (!err) {
      console.log('success');
    }
  });
};

let getProducts = async (callback) => {

  return await MyProductsModel.find({}).sort([['productId', 'ascending']]).exec();
};

let getWishlists = async (callback) => {
  return await MyWishlistModel.find({});
};
//get product by name
let getProductById = (productId, callback) => {
  MyProductsModel.find({productId: productId}, (err, docs) => {
    callback(err, docs);
  });
};
let getWishlistByUsername = (username, callback) => {
  MyWishlistModel.find({username: username}, (err, docs) => {
    callback(err, docs);
  });
};
module.exports.saveProduct = saveProduct;
module.exports.saveWishlist = saveWishlist;
module.exports.getProducts = getProducts;
module.exports.getWishlists = getWishlists;
module.exports.getProductById = getProductById;
module.exports.getWishlistByUsername = getWishlistByUsername;