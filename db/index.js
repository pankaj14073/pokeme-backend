var mongoose = require("mongoose");
var config = require("../config")
mongoose
  .connect(config.db.url)
  .then(() => {
    console.log("db connected");
  })
  .catch(err => {
    console.log("db error", err);
  });
