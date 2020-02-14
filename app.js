const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const config = require("./config");
var db = require("./db");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const routes = require("./routes")(app);

app.use((err, req, res, next) => {
  // log the error...
  res.status(500).send({ isError: true, error: err.message });
})

const port = config.env.port || 3000;
const server = app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});
