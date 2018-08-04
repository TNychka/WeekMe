/*
* Aug 4th 2018
* Catch all for unhandled endpoints
*/
'use strict';
const logger = require('../../libs/script/logger');
let endpoints = {};

endpoints.catchAll = {
    method: 'GET',
    url: '*',
    call: function (req, res) {
        logger.error('Page not found');
        res.respond(404, {error: "Not Found", message: "Page not found"});
    }
};

module.exports = endpoints;