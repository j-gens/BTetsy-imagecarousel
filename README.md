# Craft Marketplace App: Photo Carousel Service

* [Overview](https://github.com/j-gens/BTetsy-imagecarousel#overview)
* [Technologies](https://github.com/j-gens/BTetsy-imagecarousel#technologies)
* [Getting Started](https://github.com/j-gens/BTetsy-imagecarousel#getting-started)
* [License](https://github.com/j-gens/BTetsy-imagecarousel#license)

## Overview

E-commerce app for handmade goods and wares.

#### Team Members

* Julia Gens - [j-gens](https://github.com/j-gens) - Photo Carousel Service
* Djason Sylvaince - [ingdjason](https://github.com/ingdjason) - Reviews Service
* Emily Meeks - [minglewook](https://github.com/minglewook) - Product Details Service
* Logan Dudley - [logandudley](https://github.com/logandudley) - Checkout Service

#### Photo Carousel Service Contributors

* Silin Dang - [silkyh13](https://github.com/silkyh13)
  * Designed and built the front-end and UI
* Julia Gens - [j-gens](https://github.com/j-gens)
  * Replaced and built out photo carousel service back end
  * Optimized PostgreSQL data schema to reduce query time latency from 3s to 4ms
  * Executed horizontal scaling with multiple EC2 instances and implemented load balancer for 200% increase in throughput while maintaining response time latency

## Technologies

* JavaScript
* Node/Express
* PostgreSQL
* AWS (EC2/S3)
* New Relic
* Loader.io
* k6.io

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

#### Installing

1. Clone the repository onto your local machine
```
$ git clone https://github.com/j-gens/BTetsy-carousel-service.git
```
2. Change directories into the BTetsy-carousel-service root directory
```
cd BTetsy-carousel-service
```
3. Install the dependencies in a local node_modules folder
```
npm install
```
4. Generate the data and seed the PostgreSQL database
> This command will generate a product data (10M entries) csv file and an image data (35M entries) csv file before uploading both to the database
```
npm run-script seed
```
5. Assemble the bundle within the public folder
```
npm run-script build
```
6. Start the server on your local machine
```
npm start
```
7. View in browser by going to [http://localhost:3000](http://localhost:3000)


## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/j-gens/BTetsy-imagecarousel/blob/master/LICENSE) file for details
