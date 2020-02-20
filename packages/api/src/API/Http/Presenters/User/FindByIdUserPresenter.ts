import IPresenter from '../Base/IPresenter';
import User from '../../../../Domain/Entities/User';

class FindByIdUserPresenter implements IPresenter {
  private readonly result: User;
  constructor(result: User) {
    this.result = result;
  }
  toJson(): string {
    return JSON.stringify(this.getData());
  }
  getData(): object {
    return {
      result: {
        id: this.result.Id,
        name: this.result.Name,
        lastname: this.result.Lastname,
        dni: this.result.Dni ? this.result.Dni : 'none',
        age: this.result.Age ? this.result.Age : 'none',
        birthYear: this.result.BirthYear ? this.result.BirthYear : 'none',
        phoneArea: this.result.PhoneAreaCode ? this.result.PhoneAreaCode : 'none',
        phoneNumber: this.result.PhoneNumber ? this.result.PhoneNumber : 'none',
        cellPhoneNumber: this.result.CellphoneNumber ? this.result.CellphoneNumber : 'none',
        city: this.result.City ? this.result.City : 'none',
        state: this.result.State ? this.result.State : 'none',
        country: this.result.Country ? this.result.Country : 'none',
        email: this.result.Email,
        roles: this.result.getRolesFromUserRole(),
      },
    };
  }
}

export default FindByIdUserPresenter;
