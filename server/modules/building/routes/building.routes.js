'use strict';

var building = require('../controllers/building.controller');
var moduleName = 'building';
var path = '/api/' + moduleName;

module.exports = function (app) {
    app.route(path + '/')
    .get(building.getBuilding);
};