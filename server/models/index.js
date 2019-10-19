const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/BTetsy', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});


const Product = mongoose.Schema({
  productId: {type: Number, unique: true},
  productItem: String,
  pictureUrl: Array,
  like: Boolean
});
const Wishlist = mongoose.Schema({
  products: Array,
  username: {type: String, unique: true}
});

const MyProductsModel = mongoose.model('Product', Product);
const MyWishlistModel = mongoose.model('Wishlist', Wishlist);

//save 1 product
let saveProduct = (productId, productItem, pictureUrl, like) => {
  const instance = new MyProductsModel({
    productId: productId,
    productItem: productItem,
    pictureUrl: pictureUrl,
    like: like
  });
  instance.save((err) => {
    if (!err) {
      console.log('success');
    }
  });
};

let saveWishlist = async (products, username) => {
  const instance = new MyWishlistModel({
    products: products,
    username: username
  });
  return await instance.save();
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
//get product by id
let getProductById = (productId, callback) => {
  MyProductsModel.find({productId: productId}, (err, docs) => {
    callback(err, docs);
  });
};
//get wishlist by username
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
module.exports.MyWishlistModel = MyWishlistModel;