import IPresenter from '../Base/IPresenter';
import User from '../../../../Domain/Entities/User';

class FindUserPresenter implements IPresenter {
  private readonly result: User[];
  constructor(result: User[]) {
    this.result = result;
  }
  toJson(): string {
    return JSON.stringify(this.getData());
  }
  getData(): object {
    const array = this.result.map(user => {
      return {
        id: user.Id,
        name: user.Name,
        lastname: user.Lastname,
        dni: user.Dni ? user.Dni : 'none',
        age: user.Age ? user.Age : 'none',
        birthYear: user.BirthYear ? user.BirthYear : 'none',
        phoneArea: user.PhoneAreaCode ? user.PhoneAreaCode : 'none',
        phoneNumber: user.PhoneNumber ? user.PhoneNumber : 'none',
        cellPhoneNumber: user.CellphoneNumber ? user.CellphoneNumber : 'none',
        city: user.City ? user.City : 'none',
        state: user.State ? user.State : 'none',
        country: user.Country ? user.Country : 'none',
        email: user.Email,
        roles: user.getRolesFromUserRole(),
      };
    });

    return { result: array };
  }
}

export default FindUserPresenter;
