/*
* Aug 4th 2018
* All middlewares and endpoints are attached here
*/
'use strict';
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const morgan = require('morgan');

const controllers = require('../controllers/index');
const attachCustomMethods = require('./attachCustomMethods');
const errorHandler = require('./errorHandler');

module.exports = function attachMiddleware(app, server) {
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());
    app.use(attachCustomMethods);
    app.use(methodOverride());
    app.use(morgan('dev'));

    app.use(controllers);

    app.use(errorHandler);
};
