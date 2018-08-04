/*
* Aug 4th 2018
* Home and status endpoints
*/
'use strict';
const Database = require('../database')

let endpoints = {};

endpoints.home = {
    method: 'GET',
    url: '/home',
    call: function (req, res) {
        res.respond(200, "Status: OK");
    }
};

endpoints.signUp = {
    method: 'GET',
    url: '/signUp',
    call: function (req, res) {
        const User = new Database.UserModel({
            name: "New User",
            password: "Hey no this is secret don't read this part :(",
        });
        User.save(function(err, User) {
            // TODO
        });
        res.respond(200, "Saved: OK");
    }
}

module.exports = endpoints;