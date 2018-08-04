'use strict';
let endpoints = {};

endpoints.catchAll = {
    method: 'GET',
    url: '*',
    call: function (req, res) {
        res.respond(404, {error: "Not Found", message: "Page not found"});
    }
};

module.exports = endpoints;