'use strict';

const attachMiddleware = require('./middlewares/index');
const express = require('express');
const http = require('http');
const logger = require('../libs/script/logger');

const app = express();
const server = http.createServer();

app.set('port', 8081);

attachMiddleware(app, server);

server.on('request', app);
server.listen(app.get('port'), () => {
  logger.info(`Express server listening on port ${app.get('port')}`);
});
