const logger = require('../../libs/script/logger')
const express = require('express');
const _ = require('lodash');

const notFound = require('./notFound');
const status = require('./status');

const api = express();
const router = express.Router();

let endpoints = {}

endpoints = _.merge(status, notFound);

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