import PresenterInterface from '../Base/PresenterInterface';

class CategoryDeletePresenter implements PresenterInterface {
  private resultMessage: string;

  constructor(resultMessage: string) {
    this.resultMessage = resultMessage;
  }

  public getData(): object {
    return { resultMessage: this.resultMessage };
  }

  public toJson(): string {
    return JSON.stringify(this.getData());
  }
}

export default CategoryDeletePresenter;
