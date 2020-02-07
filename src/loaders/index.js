const expressLoader = require('./express');
const dependencyInjectorLoader = require('./dependencyInjector');
const mongooseLoader = require('./mongoose');
const jobsLoader = require('./jobs');
const Logger = require('./logger');

module.exports = async ({ expressApp }) => {

    console.log("yyy");


    const mongoConnection = await mongooseLoader();
    Logger.info('✌️ DB loaded and connected!');

    const userModel = {
        name: 'userModel',
        model: require('../models/user'),
    };
    const { agenda } = await dependencyInjectorLoader({
        mongoConnection,
        models: [
            userModel,
            // salaryModel,
            // whateverModel
        ],
    });

    Logger.info('✌️ Dependency Injector loaded');

    await jobsLoader({ agenda });
    Logger.info('✌️ Jobs loaded');

    await expressLoader({ app: expressApp });
    Logger.info('✌️ Express loaded');
};
