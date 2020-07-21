# weWare
## Craft Marketplace App

* [Overview](https://github.com/j-gens/craft-marketplace-app#overview)
* [Technologies](https://github.com/j-gens/craft-marketplace-app#technologies)
* [Getting Started](https://github.com/j-gens/craft-marketplace-app#getting-started)
* [Performance Testing](https://github.com/j-gens/craft-marketplace-app#performance-testing)
* [License](https://github.com/j-gens/craft-marketplace-app#license)

![alt arts and crafts](https://j-gens-portfolio.s3-us-west-1.amazonaws.com/weware-gen.jpg)

## Overview

E-commerce app for homemade goods and wares.

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
$ git clone https://github.com/j-gens/craft-marketplace-app.git
```
2. Change directories into the craft-marketplace-app root directory
```
$ cd craft-marketplace-app
```
3. Install the dependencies in a local node_modules folder
```
$ npm install
```
4. Generate the data and seed the PostgreSQL database
> This command will generate product data (10M entries) and image data (35M entries)
```
$ npm run-script seed
```
5. Assemble the bundle within the public folder
```
$ npm run-script build
```
6. Start the server on your local machine
```
$ npm start
```
7. View in browser by going to [http://localhost:3000](http://localhost:3000)

#### Testing

The legacy tests were written using Jest.  Run them with the following command:

```
$ npm run-script test
```
## Performance Testing

Local performance testing was done with k6 as the load testing tool.

Below is one of the k6 results printout from testing.  Things to note:

* __vus__ = active virtual users (with __vus_max__ being the maximum possible number of virtual users)
  * _For the test below, the __vus_max__ was set to 1000_
* __http_reqs__ = the total number of HTTP requests that k6 generated
  * _For the test below, the __http_reqs__ was 1173/s_
* __http_req_duration__ = the total time for the request (how long the server took to process the request and respond)
  * _For the test below, the __http_req_duration__ was an average of 129ms and max of 1.22s_

![alt k6 test](https://j-gens-portfolio.s3-us-west-1.amazonaws.com/weware-k6.png)

Performance testing of the deployed app was done with loader.io as the cloud-based load testing tool.

Below is a loader.io results printout from testing 100 requests per second.

![alt 100 rps test](https://j-gens-portfolio.s3-us-west-1.amazonaws.com/weware-proxy-100rps.png)

Below is a second loader.io results printout from testing 1000 requests per second.

![alt 1000 rps test](https://j-gens-portfolio.s3-us-west-1.amazonaws.com/weware-proxy-1000rps.png)

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/j-gens/craft-marketplace-app/blob/master/LICENSE) file for details
