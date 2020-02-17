import PresenterInterface from '../Base/PresenterInterface';
import Category from '../../../../Domain/Entities/Category';

class CategoryFindAllPresenter implements PresenterInterface {
  private resultCategory: Category[];

  constructor(resultCategory: Category[]) {
    this.resultCategory = resultCategory;
  }

  public getData(): object {
    return { resultCategory: this.resultCategory };
  }

  public toJson(): string {
    return JSON.stringify(this.getData());
  }
}

export default CategoryFindAllPresenter;
