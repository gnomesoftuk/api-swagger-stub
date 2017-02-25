'use strict';

exports.locationGET = function(args, res, next) {
  /**
   * Locate premesis within a certain area.
   * The location endpoint returns information about premesis within a searched location.
   *
   * country String The search country. (optional)
   * street String The search street. (optional)
   * city String The search city. (optional)
   * postCode String The search postCode. (optional)
   * latitude BigDecimal The search latitude. (optional)
   * longitude BigDecimal The search longitude. (optional)
   * geographical BigDecimal If true, should return the geo-coordinates of all premesis in the response. (optional)
   * maxDistance BigDecimal The maximum distance to find premesis from the search location. (optional)
   * maxResult BigDecimal The maximum number of premesis to find. (optional)
   * returns SuccessResponse
   **/
  var examples = {};
  examples['application/json'] = {
  "apiVersion" : "aeiou",
  "data" : [ {
    "owner" : "aeiou",
    "openHours" : [ {
      "dayOfWeek" : "aeiou",
      "openTime" : "aeiou",
      "closedTime" : "aeiou"
    } ],
    "distance" : 123,
    "city" : "aeiou",
    "latitude" : 123,
    "description" : "aeiou",
    "salesForceId" : "aeiou",
    "phoneNumber" : "aeiou",
    "districtId" : 123,
    "parcelshopId" : 123,
    "street" : "aeiou",
    "name" : "aeiou",
    "postCode" : "aeiou",
    "facilities" : [ "aeiou" ],
    "longitude" : 123
  } ]
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

