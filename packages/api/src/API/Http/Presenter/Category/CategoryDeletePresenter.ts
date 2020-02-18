import PresenterInterface from '../Base/PresenterInterface';

class CategoryDeletePresenter implements PresenterInterface {
  private result: string;

  constructor(result: string) {
    this.result = result;
  }

  public getData(): object {
    return { result: this.result };
  }

  public toJson(): string {
    return JSON.stringify(this.getData());
  }
}

export default CategoryDeletePresenter;
