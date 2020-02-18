import IPresenter from '../Base/IPresenter';
import User from '../../../../Domain/Entities/User';

class CreateUserPresenter implements IPresenter {
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
        id: this.result.id,
        name: this.result.name,
        lastname: this.result.lastname,
        dni: this.result.dni ? this.result.dni : 'none',
        age: this.result.userAge ? this.result.userAge : 'none',
        birthYear: this.result.userBirthYear ? this.result.userBirthYear : 'none',
        phoneArea: this.result.userPhoneAreaCode ? this.result.userPhoneAreaCode : 'none',
        phoneNumber: this.result.userPhoneNumber ? this.result.userPhoneNumber : 'none',
        cellPhoneNumber: this.result.userCellphoneNumber ? this.result.userCellphoneNumber : 'none',
        city: this.result.userCity ? this.result.userCity : 'none',
        state: this.result.userState ? this.result.userState : 'none',
        country: this.result.userCountry ? this.result.userCountry : 'none',
        email: this.result.userEmail,
        roles: this.result.getRolesFromUserRole(),
      },
    };
  }
}

export default CreateUserPresenter;
