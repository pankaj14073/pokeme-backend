import UserModel from '../models/user';
import CompanyModel from '../models/company';
import SalaryModel from '../models/salary';
class UserService {

  constructor(userModel, companyModel, salaryModel) {
    this.userModel = userModel;
    this.companyModel = companyModel;
    this.salaryModel = salaryModel;
  }

  Sigup() {
    // Caling UserMode, CompanyModel, etc
  }

  getMyUser(userId) {
    // models available throug 'this'
    const user = this.userModel.findById(userId);
    return user;
  }

}