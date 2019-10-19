const express = require('express');
const parser = require('body-parser');
const models = require('./models/index.js');
const port = 3000;
const app = express();
app.use(parser.json());

app.use(express.static(__dirname + '/../dist'));
//get the names and pics of the products
app.get('/products', function (req, res) {
  models.getProducts((err, data) => {
    if (err) {
      throw err;
    } else {
      res.send(data);
    }
  });
});

//add product name, url, and username
app.post('/products', function (req, res) {
  models.saveProduct(req.body.productId, req.body.productItem, req.body.pictureUrl);
  res.end('done');
});

//getting item and username from wishlist
app.get('/wishlists', function (req, res) {
  models.getWishlists((err, data) => {
    if (err) {
      throw err;
    } else {
      res.send(data);
    }
  });
});

//adding product name and username to wishlist
app.post('/wishlists', function (req, res) {
  models.saveWishlist(req.body.products, req.body.username);
  res.end('finished');
});

//get individual product item
app.get('/products/:productId', function (req, res) {
  models.getProductById(req.params.productId, (err, data) => {
    if (err) {
      throw err;
    } else {
      res.send(data);
    }
  });
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