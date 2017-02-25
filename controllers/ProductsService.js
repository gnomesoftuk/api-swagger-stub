'use strict';

exports.productsGET = function(args, res, next) {
  /**
   * Product Types
   * The Products endpoint returns information about the *Uber* products offered at a given location. The response includes the display name and other details about each product, and lists the products in the proper display order. 
   *
   * latitude Double Latitude component of location.
   * longitude Double Longitude component of location.
   * returns List
   **/
  var examples = {};
  examples['application/json'] = [ {
  "image" : "aeiou",
  "product_id" : "aeiou",
  "description" : "aeiou",
  "display_name" : "aeiou",
  "capacity" : "aeiou"
} ];
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

