import IPresenter from '../Base/IPresenter';

class FindByIdUserRolePresenter implements IPresenter {
  private result: any;
  constructor(result: any) {
    this.result = result;
  }
  public toJson(): string {
    return JSON.stringify(this.getData());
  }
  public getData(): object {
    return { result: { name: this.result.Name } };
  }
}

export default FindByIdUserRolePresenter;
