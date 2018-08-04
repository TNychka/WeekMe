/*
* Aug 4th 2018
* Parse and add all custom endpoint objects to the express router
*/
'use strict';
const express = require('express');
const _ = require('lodash');

// Custom endpoints
const status = require('./status');
const notFound = require('./notFound');

const api = express();
const router = express.Router();

// Attach all endpoints
let endpoints = {};
endpoints = _.merge(endpoints, status);
endpoints = _.merge(endpoints, notFound);

// Add all endpoints to router
_.forEach(endpoints, endpoint => {
    switch (endpoint.method.toLowerCase()) {
        case 'get':
            router.get(endpoint.url.toString(), endpoint.call);
        break;
        case 'post':
            router.post(endpoint.url.toString(), endpoint.call);
        break;
    }
});

api.use('/', router);

module.exports = api;