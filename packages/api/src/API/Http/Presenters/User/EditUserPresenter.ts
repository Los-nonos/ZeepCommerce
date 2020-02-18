import IPresenter from '../Base/IPresenter';
import User from '../../../../Domain/Entities/User';

class EditUserPresenter implements IPresenter {
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
        dni: this.result.dni,
        age: this.result.userAge,
        birthYear: this.result.userBirthYear,
        phoneArea: this.result.userPhoneAreaCode,
        phoneNumber: this.result.userPhoneNumber,
        cellPhoneNumber: this.result.userCellphoneNumber,
        city: this.result.userCity,
        state: this.result.userState,
        country: this.result.userCountry,
        email: this.result.userEmail,
        roles: this.result.getRolesFromUserRole(),
      },
    };
  }
}

export default EditUserPresenter;
