import http from "k6/http";
import { Rate } from "k6/metrics";

var myFailRate = new Rate("failed requests");

export let options = {
  thresholds: {
    "failed requests": ["rate<0.01"],
  },
  duration: "10m",
  rps: 1000,
  vusMax: 250
};

export default function() {
  const generateRandomNumber = () => {
    return Math.floor(Math.random() * 10000000)
  }
  const generateUrl = () => {
    return `http://localhost:3333/products/${generateRandomNumber()}`
  }

  let res = http.get(generateUrl());
  myFailRate.add(res.status !== 200);
};



