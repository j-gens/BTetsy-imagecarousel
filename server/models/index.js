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

let getProducts = (callback) => {
  MyProductsModel.find({}).sort([['productId', 'ascending']]).exec(function (err, docs) {
    callback(err, docs);
  });
};
let getWishlists = (callback) => {
  MyWishlistModel.find({}, (err, docs) => {
    callback(err, docs);
  });
};
//get product by name
let getProductByName = (productId, callback) => {
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
module.exports.getProductByName = getProductByName;
module.exports.getWishlistByUsername = getWishlistByUsername;