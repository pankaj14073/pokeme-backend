/* eslint-disable no-unused-vars */
const { format } = require('winston');
const { combine, timestamp, json, prettyPrint } = format;
const winston = require('winston');
const config = require('../config');
console.log(config);
const logger = winston.createLogger({
    level: config.logger.level,
    format: combine(timestamp(), json()),
    transports: [],
    exitOnError: false,
});
if (config.logger.enabled) {
    logger.add(
        new winston.transports.Console({
            handleExceptions: true,
        }),
    );
}

module.exports = logger;
