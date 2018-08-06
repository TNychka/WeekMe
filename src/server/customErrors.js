/*
* Aug 4th 2018
* Create custom errors for server use
*/
'use strict';
const logger = require('../libs/script/logger');

/**
 * Custom error for any database error that occurs during access of db info
 * @extends Error
 */
export class DataBaseError extends Error {
  constructor(...args) {
    logger.error('Server database encountered an error');
    super(...args);
    Error.captureStackTrace(this, DataBaseError);
  }
}

/**
 * Custom error for any generic server error
 * @extends Error
 */
export class ServerError extends Error {
  constructor(...args) {
    logger.error('Server encountered an error');
    super(...args);
    Error.captureStackTrace(this, DataBaseError);
  }
}
