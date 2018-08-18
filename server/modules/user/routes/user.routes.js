'use strict';

var user = require('../controllers/user.controller');
var moduleName = 'user';
var path = '/api/' + moduleName;

module.exports = function (app) {
    app.route(path + '/')
    .post(user.login);
};