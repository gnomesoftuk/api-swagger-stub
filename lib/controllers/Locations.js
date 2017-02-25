'use strict';

var url = require('url');

var Locations = require('./LocationsService');

module.exports.locationGET = function locationGET (req, res, next) {
  Locations.locationGET(req.swagger.params, res, next);
};
