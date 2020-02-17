import IPresenter from '../Base/IPresenter';

class CreateUserRolePresenter implements IPresenter {
  private result: any;
  constructor(result: any) {
    this.result = result;
  }
  public toJson(): string {
    return JSON.stringify(this.getData());
  }
  public getData(): object {
    return { result: { name: this.result.Name, id: this.result.Id } };
  }
}

export default CreateUserRolePresenter;
