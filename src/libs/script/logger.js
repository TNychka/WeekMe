const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf } = format;

const logger = createLogger();

const cleanFormat = printf(info => {
    let log = "";
    if (info.timestamp) {
        log += `${info.timestamp} `;
    }
    if (info.label) {
        log += `${info.label} `;
    }
    if (info.level) {
        log += `[${info.level}]: `;
    }
    if (info.message) {
        log += `${info.message}`;
    }
    return log.trim();
});

logger.add(new transports.File({
    filename: 'error.log',
    dirname: 'logs',
    level: 'error',
    format: combine(
        timestamp(),
        label({
            label: 'oopsies!11! server did a boopsies :3c we r very swory and are doing workies on it ~nya :33'
        }),
        cleanFormat,
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
            label: 'Info Log'
        }),
        cleanFormat,
    ),
}));

logger.add(new transports.Console({
  level: 'info',
  format: combine(
    timestamp(),
    label({
        label: 'Console'
    }),
    cleanFormat,
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
    }
}

process.on('unhandledRejection', function(err) { 
    logger.error("UNCAUGHT REJECTION, Inside 'unhandledRejection' event: " + err.message );
    logger.error(err.stack);
});

process.on('unhandledException', function(err) { 
    logger.error("UNCAUGHT EXCEPTION, Inside 'uncaughtException' event: " + err.message );
    logger.error(err.stack);
});

module.exports = winstonLogger;