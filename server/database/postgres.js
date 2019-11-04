require('dotenv').config();
const { Pool } = require('pg');


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
    await client.query(createProductTable)
    await client.query(createImageTable)
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

