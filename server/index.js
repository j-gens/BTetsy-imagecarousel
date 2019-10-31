const express = require('express');
const parser = require('body-parser');
const models = require('./models/index.js');

const port = 3333;
const app = express();
app.use(parser.json());

app.use(express.static(`${__dirname}/../dist`));


// get individual product item
app.get('/products/:productId', (req, res) => {
  models.getProductById(req.params.productId, (err, data) => {
    if (err) {
      throw err;
    } else {
      res.send(data);
    }
  });
});

// update like of productId
app.put('/products/:productId', (req, res) => {
  models.updateProduct(req.params.productId, req.body.like, (err, results) => {
    if (err) {
      res.status(404).send('Error occured updating product info');
    }
    res.status(200).send(results);
  });
});

// adding product name and username to wishlist
app.post('/wishlist/:username', (req, res) => {
  models.saveWishlist(req.body.products, req.body.username);
  res.end('finished');
});

// removing username (and products) from wishlist
app.delete('/wishlist/:username', (req, res) => {
  models.removeUserWishlist(req.body.username);
  res.end('finished');
});

// getting individual wishlist
app.get('/wishlists/:username', (req, res) => {
  models.getWishlistByUsername(req.params.username, (err, data) => {
    if (err) {
      // eslint-disable-next-line
      console.error('this is an error in removing item from wishlist');
      res.send(err);
    } else {
      res.end('removed');
    }
  });
});


app.listen(port, () => {
  // eslint-disable-next-line
  console.log(`listening to ${port}`);
});
module.exports.app = app;
