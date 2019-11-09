const express = require('express');
const db = require('./database/index.js');

const port = 3333;
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}));

app.use(express.static(`${__dirname}/../dist`));


//get individual product item images
app.get('/products/:productId', (req, res) => {
  db.getProductQuery([req.params.productId], (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data.rows);
    }
  });
});

//update like of productId
app.patch('/products/:productId', (req, res) => {
  db.updateIsLikedQuery([req.params.productId], (err, data) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).send(data.rowCount.toString());
  });
});

// removing a product from the db
app.delete('/products/:productId', (req, res) => {
  db.removeProductQuery([req.params.productId], (err, data) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).send(data.rowCount.toString());
  })
})

//adding a product to the db (sent via url-endcoded form data)
app.post('/products', (req, res) => {
  db.addProductQuery([req.body.productId, req.body.productName, req.body.isLiked], (err, data) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).send(data.rowCount.toString());
  })
})

app.listen(port, () => {
  //eslint-disable-next-line
  console.log(`listening to ${port}`);
});
module.exports.app = app;
