'use strict';
const logger = require('../../libs/script/logger');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const methodOverride = require('method-override');
const endpoints = require('../controllers/index');

module.exports = function attachMiddlewares (app, server) {
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(enableRespondMethod);
    app.use(methodOverride());
    app.use(morgan('dev'));

    app.use(endpoints);

    app.use(errorHandler);
};

let enableRespondMethod = function (req, res, next) {
    res.respond = function (status = 200, data = {}, message) {
        let response = {
            statusCode: status,
            success: status < 400,
            data,
        };

        if (message) response.message = message;

        logger.info(status, data, message);
        
        res.status(status).json(response);
    };
    next();
};

let errorHandler = function (err, req, res, next) {
    let response = {};

    if (err.statusCode) {
        response.statusCode = err.statusCode;
    } else {
        response.statusCode = 500;
    }

    if (err.message) {
        response.message = err.message;
    } else {
        response.message = "Encountered a server error, please try again later";
    }

    response.success = err.statusCode < 400;

    logger.error(
        response.statusCode,
        {
            method: req.method,
            originUrl: req.originalUrl,
            body: req.body,
        },
        response.message,
    );

    res.status(response.statusCode).json(response);
};