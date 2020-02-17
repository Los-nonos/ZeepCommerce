import PresenterInterface from '../../Presenter/Base/PresenterInterface';
import Category from '../../../../Domain/Entities/Category';

class CategoryEditPresenter implements PresenterInterface {
  private result: Category;

  constructor(result: Category) {
    this.result = result;
  }

  public getData(): object {
    return {
      result: this.result
    };
  }

  public toJson(): string {
    return JSON.stringify(this.getData());
  }
}

export default CategoryEditPresenter;
