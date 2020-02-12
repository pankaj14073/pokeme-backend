const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const routes = require("./routes")(app);
const config = require("./config");
var db = require("./db");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((err, req, res, next) => {
  // log the error...
  res.sendStatus(500).json({ message: "Something failed", error: err });
})
const port = config.env.port || 3000;
const server = app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});
