const logger = require('../../libs/script/logger')
const express = require('express');

let attachApis = function (app, server) { 
    app.get('/home', function (req, res) {
        logger.info("Glomped user :3")
        res.status(200).send('Hewwo World! ~nya :3c');
    });

    app.get('/no', function (req, res) {
        throw new Error("BROKEN");
    });

    app.get('/failed', function (req, res) {
        var asdf = 0;
        var strgin = "";
        var te = strgin / asdf;
        let a = te.as.sa.as;
        res.status(600);
    });

    app.get('*', function(req, res, next) {
        let err = new Error("Page Not Found");
        err.statusCode = 404;
        next(err);
    });
}

module.exports = attachApis;