import PresenterInterface from '../Base/PresenterInterface';
import Category from '../../../../Domain/Entities/Category';

class CategoryFindAllPresenter implements PresenterInterface {
  private result: Category[];

  constructor(result: Category[]) {
    this.result = result;
  }

  public getData(): object {
    const array = this.result.map(category => {
      return {
        id: category.id,
        name: category.name
      }
    });
    return { result: array };
  }

  public toJson(): string {
    return JSON.stringify(this.getData());
  }
}

export default CategoryFindAllPresenter;
