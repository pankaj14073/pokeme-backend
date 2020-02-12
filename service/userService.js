var dbModel=require("./../db/models");
var userModel=dbModel.User;
class UserService {

  async  checkUserExist(email){
       return await db.user.findOne({
            where: { email: email }
          });

    }
    async checkUserValid(email,userPassword){
        return true;
    }
    async addUser(){
        var newUser = new userModel({
            name: 'Chris',
            email: 'test@test.com',
            password: 'password' 
          });
          newUser.save()
    }
   async getUser(filter){
      return  await userModel.find(filter);   
  }
   async  getUserById(id){
     return  await userModel.findById(filter);         
    }
}
module.exports=new UserService();