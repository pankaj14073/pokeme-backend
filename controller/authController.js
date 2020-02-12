const bcrypt = require("bcrypt");
const _ = require("lodash");
const authService = require("./../service/authService");
const userService = require("./../service/userService");
// validate user exist or not

class AuthController {
  async validateUser(req, res, next) {
    const isUserExist = userService.checkUserExist("test@test.com");
    if (isUserExist != null) {
      const match = await bcrypt.compare(
        req.body.password,
        isUserExist.password
      );
      if (match) {
        let user = userService.getUserById(isUserExist.id);
        res.locals.user = user;
        return res.send({user});
      } else {
        throw new Error("invalid password")
      }
    } else {
      throw new Error("user not found")
    }
  }
  async addUser(req, res, next) {
    await userService.addUser();
    res.send("OK");
  }
  async getUser(req, res, next) {
    const userList = await userService.getUser({});
    res.status(200).send(userList);
  }
}
module.exports = new AuthController();
