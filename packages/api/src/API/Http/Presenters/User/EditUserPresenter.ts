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
        id: this.result.Id,
        name: this.result.Name,
        lastname: this.result.Lastname,
        dni: this.result.Dni,
        age: this.result.Age,
        birthYear: this.result.BirthYear,
        phoneArea: this.result.PhoneAreaCode,
        phoneNumber: this.result.PhoneNumber,
        cellPhoneNumber: this.result.CellphoneNumber,
        city: this.result.City,
        state: this.result.State,
        country: this.result.Country,
        email: this.result.Email,
        roles: this.result.getRolesFromUserRole(),
      },
    };
  }
}

export default EditUserPresenter;
