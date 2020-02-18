import PresenterInterface from '../../Presenter/Base/PresenterInterface';
import Category from '../../../../Domain/Entities/Category';

class CategoryCreatePresenter implements PresenterInterface {
  private result: Category;

  constructor(result: Category) {
    this.result = result;
  }

  public getData(): object {
    return {
      resultCategory: {
        id: this.result.id,
        name: this.result.name,
        description: this.result.description,
      },
    };
  }

  public toJson(): string {
    return JSON.stringify(this.getData());
  }
}

export default CategoryCreatePresenter;
