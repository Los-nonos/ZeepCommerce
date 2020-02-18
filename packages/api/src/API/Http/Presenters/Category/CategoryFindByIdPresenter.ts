import IPresenter from '../Base/IPresenter';
import Category from '../../../../Domain/Entities/Category';

class CategoryFindByIdPresenter implements IPresenter {
  private result: Category;

  constructor(result: Category) {
    this.result = result;
  }

  public getData(): object {
    return {
      result: {
        name: this.result.name,
        description: this.result.description,
      },
    };
  }

  public toJson(): string {
    return JSON.stringify(this.getData());
  }
}

export default CategoryFindByIdPresenter;
