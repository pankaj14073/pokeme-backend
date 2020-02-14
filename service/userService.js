var dbModel = require("./../db/models");
var userModel = dbModel.User;
class UserService {
  async  checkUserExist(email) {

    var user = await userModel.findOne({
      where: { email: email }
    });
    if (user)
      return true;
    else
      return false;
  }
  async checkUserValid(email, userPassword) {
    return true;
  }
  async addUser(name, email, password) {

    if (this.checkUserExist(email))
      throw new Error('Email already registered');

    var newUser = new userModel({
      name: name,
      email: email,
      password: password,
      username: email
    });
    await newUser.save();
  }
  async getUser(filter) {
    return await userModel.find(filter);
  }
  async  getUserById(id) {
    return await userModel.findById(filter);
  }
}
module.exports = new UserService();