/*
* Aug 4th 2018
* Attach custom methods to res object for endpoint usage
*/
'use strict'
const logger = require('../../libs/script/logger');

const attachCustomMethods = function (req, res, next) {
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

module.exports = attachCustomMethods;