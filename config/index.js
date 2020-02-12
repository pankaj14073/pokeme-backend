const logger = require("./logger");
const config = require("./default");
const dotenv = require("dotenv");
dotenv.config();
console.log(logger);
config.env={
    endpoint: process.env.API_URL,
    masterKey: process.env.API_KEY,
    port: process.env.PORT
  };

module.exports=config;