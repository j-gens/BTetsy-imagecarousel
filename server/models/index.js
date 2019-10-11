const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/BTetsy', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Product = mongoose.Schema({
  productItem: String,
  pictureUrl: Array,
  username: String
});
const Wishlist = mongoose.Schema({
  products: Array,
  username: {type: String, unique: true}
});

const MyProductsModel = mongoose.model('Product', Product);
const MyWishlistModel = mongoose.model('Wishlist', Wishlist);

//save 1 product
let saveProduct = (productItem, pictureUrl, username) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  const instance = new MyProductsModel({
    productItem: productItem,
    pictureUrl: pictureUrl,
    usename: username
  });
  instance.save((err) => {
    if (!err) {
      console.log('success');
    }
  });
};

let saveWishlist = (products, username) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
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
//get all the products
let getProducts = (callback) => {
  MyProductsModel.find({}, (err, docs) => {
    callback(err, docs);
  });
};
let getWishlists = (callback) => {
  MyWishlistModel.find({}, (err, docs) => {
    callback(err, docs);
  });
};
//get product by name
let getProductByName = (productItem, callback) => {
  MyProductsModel.find({productItem: productItem}, (err, docs) => {
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
module.exports.getProductByName = getProductByName;
module.exports.getWishlistByUsername = getWishlistByUsername;