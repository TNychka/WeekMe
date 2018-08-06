/*
* Aug 4th 2018
* Handle any errors thrown during request processing
*/
'use strict';
const logger = require('../../libs/script/logger');

const errorHandler = function(err, req, res, next) {
  let response = {};

  if (err.statusCode) {
    response.statusCode = err.statusCode;
  } else {
    response.statusCode = 500;
  }

  if (err.message) {
    response.message = err.message;
  } else {
    response.message = 'Encountered a server error, please try again later';
  }

  response.success = err.statusCode < 400;
  logger.error(
    response.statusCode,
    {
      method: req.method,
      originUrl: req.originalUrl,
      body: req.body,
    },
    response.message
  );

  res.status(response.statusCode).json(response);
};

module.exports = errorHandler;
