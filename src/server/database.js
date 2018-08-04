/*
* Aug 4th 2018
* Attach database methods to res object for endpoint usage
*/
'use strict'
var mongoose = require('mongoose');
const logger = require('../libs/script/logger');
const DataBaseError = require('./customErrors');

const databaseAddress = 'mongodb://localhost:27017/WeekMe';

const db = mongoose.connection;
mongoose.connect(databaseAddress);
db.on('error', console.error.bind(console, 'connection error:')); // TODO


const UserSchema = new mongoose.Schema({
  name: String,
  password: String
});

module.exports.UserModel = mongoose.model('User', UserSchema);