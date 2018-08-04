/*
* Aug 4th 2018
* Create custom errors for server use
*/
'use strict'
const logger = require('../libs/script/logger');

class DataBaseError extends Error {
    constructor(...args) {
        logger.error("Server database encountered an error");
        super(...args)
        Error.captureStackTrace(this, DataBaseError)
    }
}

class ServerError extends Error {
    constructor(...args) {
        logger.error("Server encountered an error");
        super(...args)
        Error.captureStackTrace(this, DataBaseError)
    }
}

export const DataBaseError = DataBaseError;
export const ServerError = ServerError;