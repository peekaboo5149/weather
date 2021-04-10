"use strict";

const { getGeolocation } = require("./geo_location_service");
const { getWeatherInfo } = require("./weather_service");

module.exports = { getGeolocation, getWeatherInfo };
