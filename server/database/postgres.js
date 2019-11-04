require('dotenv').config();
const { Pool } = require('pg');
const fs = require('fs');
const copyFrom = require('pg-copy-streams').from;


const createProductTable = `
CREATE TABLE IF NOT EXISTS products (
  productId integer UNIQUE PRIMARY KEY,
  productName text,
  isLiked boolean
);
`;
const createImageTable = `
CREATE TABLE IF NOT EXISTS product_images (
  imageId integer UNIQUE PRIMARY KEY,
  imageUrl text,
  productId integer
);
`;

const uploadProductData = `
COPY products (productId, productName, isLiked)
  FROM STDIN
  WITH DELIMITER ',';
`;
const uploadImageData = `
COPY product_images (imageId, imageUrl, productId)
  FROM STDIN
  WITH DELIMITER ',';
`;

// const updateImageTable = `
// ALTER TABLE product_images
//   ADD CONSTRAINT fk_products
//   FOREIGN KEY (productId)
//   REFERENCES products (productId);
// `;

const pool = new Pool({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT
});

(async() => {
  const client = await pool.connect()

  try {
    await client.query(`BEGIN`)
    //create the tables in db after connection
    await client.query(createProductTable)
    await client.query(createImageTable)
    //copy in the product data from the csv files
    const stream = client.query(copyFrom(uploadProductData));
    const fileStream = fs.createReadStream('productData.csv')
    await fileStream.pipe(stream);
    //copy in the image data from the csv files
    const iStream = client.query(copyFrom(uploadImageData));
    const iFileStream = fs.createReadStream('imageData.csv')
    await iFileStream.pipe(iStream);

    await client.query(`COMMIT`)

  } catch(error) {
    await client.query(`ROLLBACK`)
    throw error

  } finally {
    client.release()
  }

})().catch(error => console.log(error.stack))


module.exports = {
  query: (text, params, callback) => {
    const start = Date.now();
    return pool.query(text, params, (err, results) => {
      const duration = Date.now() - start;
      console.log('executed query', { text, duration, rows: results.rowCount });
      callback(err, results);
    })
  }
}

