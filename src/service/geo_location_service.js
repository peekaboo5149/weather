"use strict";

const request = require("request");
const { apikeymap } = require("../utils");

const getGeolocation = (city, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${city}.json?access_token=${apikeymap}&limit=1`;

  request({ url: url, json: true }, (err, res) => {
    const body = res.body;

    if (err) callback("Unable to connect to Internet", undefined);
    else if (body.message) callback(body.message, undefined);
    else if (body.features.length === 0)
      callback("Cannot find location!Try again!", undefined);
    else
      callback(undefined, {
        latitude: body.features[0].center[1],
        longitude: body.features[0].center[0],
        location: body.features[0].place_name,
      });
  });
};

module.exports = { getGeolocation };
