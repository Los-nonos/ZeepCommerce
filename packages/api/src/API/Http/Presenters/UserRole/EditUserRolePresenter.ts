import IPresenter from '../Base/IPresenter';

class EditUserRolePresenter implements IPresenter {
  private result: any;
  constructor(result: any) {
    this.result = result;
  }
  public toJson(): string {
    return JSON.stringify(this.getData());
  }
  public getData(): object {
    return { result: this.result };
  }
}

export default EditUserRolePresenter;
