const express = require('express');
let port = 1028;
let app = express();
const parser = require('body-parser');
app.use(parser.json());
const models = require('./models/index.js');

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
  models.saveProduct(req.body.productItem, req.body.pictureUrl, req.body.username);
  res.end('am i dead yet?');
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

  res.end('am i dead now?');
});

//get individual product item
app.get('/products/:productItem', function (req, res) {
  models.getProductByName(req.params.productItem, (err, data) => {
    if (err) {
      throw err;
    } else {
      res.send(data);
    }
  });
});
//getting individual wishlist
//why am i still alive...
app.get('/wishlists/:username', function (req, res) {
  //(productItem, callback)
  models.getWishlistByUsername(req.params.username, (err, data) => {
    if (err) {
      throw err;
    } else {
      res.send(data);
    }
  });
});
app.listen(port, function() {
  console.log(`waiting for death @ ${port}`);
});