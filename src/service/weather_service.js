"use strict";

const { apikeyweather } = require("../utils");
const request = require("request");

const getWeatherInfo = (lat, long, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=${apikeyweather}&query=${lat},${long}`;

  request({ url: url, json: true }, (err, res) => {
    const body = res.body;

    if (err) callback("Unable to connect to Internet!", undefined);
    else if (body.error) callback(body.error.info, undefined);
    else {
      const msg = `${body.current.weather_descriptions[0]}.It is ${body.current.temperature}°C outside.But it feels like ${body.current.feelslike}°C`;
      callback(undefined, msg);
    }
  });
};

module.exports = { getWeatherInfo };
