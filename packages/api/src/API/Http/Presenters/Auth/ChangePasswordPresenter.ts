import IPresenter from '../Base/IPresenter';

class ChangePasswordPresenter implements IPresenter {
  private response: any;
  
  constructor(response: any) {
    this.response = response;
  }

  toJson(): string {
    throw new Error('Method not implemented.');
  }

  getData(): object {
    throw new Error('Method not implemented.');
  }
}

export default ChangePasswordPresenter;
