const express = require('express');
const parser = require('body-parser');
const models = require('./models/index.js');
const port = 3000;
const app = express();
app.use(parser.json());

app.use(express.static(__dirname + '/../dist'));
//get the names and pics of the products
app.get('/products', function (req, res) {
  res.send(models.getProducts());
});

//add product name, url, and username
app.post('/products', function (req, res) {
  models.saveProduct(req.body.productId, req.body.productItem, req.body.pictureUrl);
  res.end('done');
});

//getting item and username from wishlist
app.get('/wishlists', function (req, res) {
  res.send(models.getWishlists());
});

//adding product name and username to wishlist
app.post('/wishlists', function (req, res) {
  models.saveWishlist(req.body.products, req.body.username);
  res.end('finished');
});

//get individual product item
app.get('/products/:productId', function (req, res) {
  res.send(models.getProductById(req.params.productId));
});
//get liked of product item
app.get('/products/:like', function (req, res) {
  res.send(models.getLike(req.params.like));

});
//getting individual wishlist
app.get('/wishlists/:username', function (req, res) {
  models.getWishlistByUsername(req.params.username, (err, data) => {
    if (err) {
      console.error('this is an error in getting username of wishlists');
    } else {
      res.send(data);
    }
  });
});
app.listen(port, function() {
  console.log(`listening to ${port}`);
});
module.exports.app = app;