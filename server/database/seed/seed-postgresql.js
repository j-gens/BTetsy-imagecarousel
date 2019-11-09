require('dotenv').config();
const { Pool } = require('pg');
const fs = require('fs');
const copyFrom = require('pg-copy-streams').from;

//log-in information kept in .env file
const pool = new Pool({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT
});

//scripts to create the products table and product_images table
const createProductTable = `
CREATE TABLE IF NOT EXISTS products (
  productId integer UNIQUE PRIMARY KEY,
  productName text,
  isLiked boolean
);
`;
const createImageTable = `
CREATE TABLE IF NOT EXISTS product_images (
  imageId integer UNIQUE,
  imageUrl text,
  productId integer
);
`;
//scripts to upload data from csv files to respective tables
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
//script to set up the index on the product_images table
const createImageIndex = `
CREATE INDEX product_images_fkey_index
  ON product_images (productId);
`;
//script to set up the foreign key on the product_images table
const createImageForeignKey = `
ALTER TABLE product_images
  ADD CONSTRAINT product_images_fkey
  FOREIGN KEY (productId) REFERENCES products (productId) ON DELETE CASCADE;
`;

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
    //index the productId column
    await client.query(createImageIndex);
    //add a foreign key constraint
    await client.query(createImageForeignKey);
    //commit all changes
    await client.query(`COMMIT`)
    //error handling
  } catch(error) {
    await client.query(`ROLLBACK`)
    throw error
    //release client back into pool
  } finally {
    client.release()
    //close the pool once seeding is done
    pool.end().then(() => {
      //eslint-disable-next-line
      console.log('complete - thanks for waiting!')
    })
  }
})().catch(error => console.log(error.stack))


