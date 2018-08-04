/*
* Aug 4th 2018
* Attach database methods to res object for endpoint usage
*/
'use strict'
const mongodb = require('mongodb').MongoClient;
const logger = require('../../libs/script/logger');
const DataBaseError = require('../customErrors');

const databaseAddress = 'mongodb://localhost:27017/weekMe';

mongodb.connect(databaseAddress, function(err, db) {
  if(!err) {
    logger.log("New session connected to mongod host");
  } else {
    throw new DataBaseError("Database failed to connect");
  }
});

module.exports = mongodb;