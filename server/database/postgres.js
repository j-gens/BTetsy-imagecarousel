require('dotenv').config();
const { Client } = require('pg');
const productData = require('../productData.csv');
const imageData = require('../imageData.csv'));


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
  productId integer REFERENCES products
);
`;

const client = new Client({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT
});

await client.connect()



