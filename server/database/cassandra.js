require('dotenv').config();
const cassandra = require('cassandra-driver');
const executeConcurrent = cassandra.concurrent.executeConcurrent;
// const parse = require('csv-parse');
// const fs = require('fs');
// const stream = require('stream');
// const util = require('util');


const client = new cassandra.Client({
  contactPoints:[process.env.CS_HOST],
  localDataCenter: process.env.CS_CENTER,
  keyspace: process.env.CS_KEY,
  protocolOptions: {
    maxSchemaAgreementWaitSeconds: 30
  }
});

/*
SIDE-NOTE:
currently using the same / very similar data schema as with postgresql - foresee making changes after initial query tests to improve efficiency
*/

const cassCreateProductTable = `
CREATE TABLE IF NOT EXISTS products (
  productid int PRIMARY KEY,
  productname text,
  isliked boolean
);
`;
const cassCreateImageTable = `
CREATE TABLE IF NOT EXISTS product_images (
  imageid int,
  imageurl text,
  productid int,
  PRIMARY KEY (imageid, productid))
WITH CLUSTERING ORDER BY (productId DESC);
`;
const uploadCassProductData = `
INSERT INTO products ("productid", "productname", "isliked")
  VALUES (?, ?, ?);
`;
const uploadCassImageData = `
INSERT INTO product_images ("imageid", "imageurl", "productid")
  VALUES (?, ?, ?);
`;


(async() => {
  //set up connection to cassandra
  await client.connect();
  //set up tables in keyspace
  await client.execute(cassCreateProductTable);
  await client.execute(cassCreateImageTable);

})().catch(error => console.log(error))


