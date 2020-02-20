import IPresenter from '../Base/IPresenter';
import Category from '../../../../Domain/Entities/Category';

class CategoryFindAllPresenter implements IPresenter {
  private result: Category[];

  constructor(result: Category[]) {
    this.result = result;
  }

  public getData(): object {
    const array = this.result.map(category => {
      return {
        id: category.id,
        name: category.name,
        description: category.description,
      };
    });
    return { result: array };
  }

  public toJson(): string {
    return JSON.stringify(this.getData());
  }
}

export default CategoryFindAllPresenter;