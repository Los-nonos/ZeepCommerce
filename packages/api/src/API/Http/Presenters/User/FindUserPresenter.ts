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
        id: user.id,
        name: user.name,
        lastname: user.lastname,
        dni: user.dni ? user.dni : 'none',
        age: user.userAge ? user.userAge : 'none',
        birthYear: user.userBirthYear ? user.userBirthYear : 'none',
        phoneArea: user.userPhoneAreaCode ? user.userPhoneAreaCode : 'none',
        phoneNumber: user.userPhoneNumber ? user.userPhoneNumber : 'none',
        cellPhoneNumber: user.userCellphoneNumber ? user.userCellphoneNumber : 'none',
        city: user.userCity ? user.userCity : 'none',
        state: user.userState ? user.userState : 'none',
        country: user.userCountry ? user.userCountry : 'none',
        email: user.userEmail,
        roles: user.getRolesFromUserRole(),
      };
    });

    return { result: array };
  }
}

export default FindUserPresenter;
