import PresenterInterface from '../../Presenter/Base/PresenterInterface';
import Category from '../../../../Domain/Entities/Category';

class CategoryFindByIdPresenter implements PresenterInterface {

    private resultCategory: Category;

    constructor(resultCategory: Category) {
        this.resultCategory = resultCategory;
    }

    public getData(): object {
        return {
            resultCategory: {
                id: this.resultCategory.id,
                name: this.resultCategory.name,
                description: this.resultCategory.description
            }
        };
    }

    public toJson(): string {
        return JSON.stringify(this.getData());
    }
}

export default CategoryFindByIdPresenter;