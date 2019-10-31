const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/BTetsy', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


const Product = mongoose.Schema({
  productId: { type: Number, unique: true },
  productItem: String,
  pictureUrl: Array,
  like: Boolean,
});
const Wishlist = mongoose.Schema({
  products: Array,
  username: { type: String, unique: true },
});

const MyProductsModel = mongoose.model('Product', Product);
const MyWishlistModel = mongoose.model('Wishlist', Wishlist);

// save 1 product
const saveProduct = (productId, productItem, pictureUrl, like) => {
  const instance = new MyProductsModel({
    productId,
    productItem,
    pictureUrl,
    like,
  });
  instance.save((err) => {
    if (!err) {
      // eslint-disable-next-line
      console.log('success');
    }
  });
};

//==============================================//
//==============================================//

// get product by id
const getProductById = (productId, callback) => {
  MyProductsModel.find({ productId }, (err, docs) => {
    callback(err, docs);
  });
};

// update product when liked
const updateProduct = (productId, like, callback) => {
  MyProductsModel.updateOne({ productId }, { like }, (err, docs) => {
    callback(err, docs);
  });
};

// save a wishlist for a user
const saveWishlist = async (products, username) => {
  const instance = new MyWishlistModel({
    products,
    username,
  });
  await instance.save();
};

//remove username (and products) from wishlist
const removeUserWishlist = (username, callback) => {
  MyWishlistModel.deleteOne({ username }, (err) => {
    callback(err);
  });
}

// get wishlist by username
const getWishlistByUsername = (username, callback) => {
  MyWishlistModel.find({ username }, (err, data) => {
    callback(err, data);
  });
};

module.exports.updateProduct = updateProduct;
module.exports.saveProduct = saveProduct;
module.exports.saveWishlist = saveWishlist;
module.exports.getProductById = getProductById;
module.exports.getWishlistByUsername = getWishlistByUsername;
module.exports.MyWishlistModel = MyWishlistModel;
module.exports.removeUserWishlist = removeUserWishlist;
