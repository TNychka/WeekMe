const {createLogger, format, transports} = require('winston');
const {combine, splat, simple, timestamp, json, label} = format;

const logger = createLogger();

logger.add(new transports.File({
  filename: 'error.log',
  dirname: 'logs',
  level: 'error',
  format: combine(
    timestamp(),
    label({
      label: 'Error Log',
    }),
    splat(),
    json()
  ),
}));

logger.add(new transports.File({
  filename: 'combined.log',
  dirname: 'logs',
  level: 'info',
  timestamp: true,
  format: combine(
    timestamp(),
    label({
      label: 'Info Log',
    }),
    splat(),
    json()
  ),
}));

logger.add(new transports.Console({
  level: 'info',
  format: combine(
    timestamp(),
    label({
        label: 'Console',
    }),
    splat(),
    simple()
  ),
}));

let winstonLogger = {
    debug(...args) {
        logger.debug(...args);
    },
    verbose(...args) {
        logger.verbose(...args);
    },
    info(...args) {
        logger.info(...args);
    },
    warn(...args) {
        logger.warn(...args);
    },
    error(...args) {
        logger.error(...args);
    },
};

process.on('unhandledRejection', function(err) {
  logger.error('UNCAUGHT REJECTION, Inside \'unhandledRejection\' event: '
    + err.message );
  logger.error(err.stack);
});

process.on('unhandledException', function(err) {
    logger.error('UNCAUGHT EXCEPTION, Inside \'uncaughtException\' event: '
      + err.message );
    logger.error(err.stack);
});

module.exports = winstonLogger;
