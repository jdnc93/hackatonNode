'use strict';

var faceRecog = require('../controllers/faceRecog.controller');
var moduleName = 'faceRecog';
var path = '/api/' + moduleName;

module.exports = function (app) {
    app.route(path + '/create')
    .post(faceRecog.createPerson);

    app.route(path + '/edit')
    .post(faceRecog.editPerson);
};