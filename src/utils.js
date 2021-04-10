"use strict";

require("dotenv").config();

const apikeymap = process.env.API_KEY_MAP;
const apikeyweather = process.env.API_KEY_WEATHER;
module.exports = { apikeymap, apikeyweather };
