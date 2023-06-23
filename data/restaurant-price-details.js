const restaurant_prices_1 = require("./restaurant_prices_1.js");
const restaurant_prices_2 = require("./restaurant_prices_2.js");
const restaurant_prices_3 = require("./restaurant_prices_3.js");
const all_restaurant_prices = new Map([
  [1, restaurant_prices_1],
  [2, restaurant_prices_2],
  [3, restaurant_prices_3],
]);

module.exports = all_restaurant_prices;
