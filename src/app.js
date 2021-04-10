"use strict";

const { getGeolocation, getWeatherInfo } = require("./service/service");

const address = process.argv[2];

if (!address) console.log("ERROR:Field empty!");
else {
  getGeolocation(address, (err, res) => {
    if (err) return console.log(err);

    const location = res.location;

    getWeatherInfo(res.latitude, res.longitude, (err, res) => {
      if (err) return console.log(err);
      console.log(location);
      console.log(res);
    });
  });
}
