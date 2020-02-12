const common = require("./common");
const admin = require("./admin");
const auth = require("./auth");
const account = require("./account");
module.exports = app => {
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Authorization, token, Accept"
    );
    next();
  });
  app.use("/api/v1/account", account);
  app.use("/api/v1/common", common);
  app.use("/api/v1/admin", admin);
  app.use("/api/v1/auth", auth);
  app.use((req, res, nex) => {
    res
      .status(404)
      .send({ code: 404, message: "requested resource not found." });
  });
  return app;
};
