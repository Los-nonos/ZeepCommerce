import IPresenter from '../Base/IPresenter';
import User from '../../../../Domain/Entities/User';

class ChangePasswordPresenter implements IPresenter {
  private user: User;

  constructor(user: User) {
    this.user = user;
  }

  toJson(): string {
    return JSON.stringify(this.getData());
  }

  getData(): object {
    return {
      name: this.user.name,
      lastname: this.user.lastname,
    };
  }
}

export default ChangePasswordPresenter;
