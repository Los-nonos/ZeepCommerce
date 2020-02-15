import IPresenter from '../Base/IPresenter';

class FindUserRolePresenter implements IPresenter {
  private result: any;
  constructor(result: any) {
    this.result = result;
  }
  public toJson(): string {
    return JSON.stringify(this.getData());
  }
  public getData(): object {
    const array = this.result.map(role => {
      return { name: role.Name };
    });
    return { result: array };
  }
}

export default FindUserRolePresenter;
