require('dotenv').config();
const { Pool } = require('pg');

//log-in information kept in .env file
const pool = new Pool({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT
})

module.exports = {
  getProductQuery: (productId, callback) => {
    return pool.query(`SELECT * FROM products INNER JOIN product_images ON products.productId = product_images.productId WHERE products.productId = ?;`, productId, callback)
  },

  updateIsLikedQuery: (productId, callback) => {
    return pool.query(`UPDATE products SET isLiked = NOT isLiked WHERE productId = ?;`, productId, callback)
  },

  removeProductQuery: (productId, callback) => {
    return pool.query(`DELETE FROM products WHERE productId = ?`, productId, callback)
  }

  addProductQuery: (params, callback) => {
    return pool.query(`INSERT INTO products (productId, productName, isLiked) VALUES (?, ?, ?)`, params, callback)
  },
}



