const logger = require('../../libs/script/logger');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const methodOverride = require('method-override');
const endpoints = require('../controllers/index')

module.exports = function attachMiddlewares (app, server) {
    endpoints(app, server);

    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(methodOverride())
    app.use(morgan('dev'));

    app.use(errorHandler);
}

let errorHandler = function (err, req, res, next) {
    // failed call
    console.log(err);
    logger.error(JSON.stringify(err));

    res.status(err.statusCode || 500).send("Owopsie boobsie~~! :3");
};