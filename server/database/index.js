require('dotenv').config();
const { Pool } = require('pg');

//log-in information kept in .env file
const pool = new Pool({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT
});




// module.exports = {
//   query: (text, params, callback) => {
//     const start = Date.now();
//     return pool.query(text, params, (err, results) => {
//       const duration = Date.now() - start;
//       console.log('executed query', { text, duration, rows: results.rowCount });
//       callback(err, results);
//     })
//   }
// }

module.exports.pool = pool;

