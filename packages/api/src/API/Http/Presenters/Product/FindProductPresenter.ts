import IPresenter from '../Base/IPresenter';
import Product from '../../../../Domain/Entities/Product';

class FindProductPresenter implements IPresenter {
  private readonly result: Product[];
  constructor(result: Product[]) {
    this.result = result;
  }

  toJson(): string {
    return JSON.stringify(this.getData());
  }
  getData(): object {
    const array = this.result.map(product => {
      return {
        id: product.Id,
        name: product.name,
        description: product.description,
        basePrice: product.basePrice,
        costPrice: product.costPrice,
        marginPrice: product.margin,
        salePrice: product.salePrice,
        tax: product.tax,
        categories: product.categories.map(category => {
          return {
            id: category.id,
            name: category.name,
            description: category.description,
          };
        }),
      };
    });

    return {
      result: array,
    };
  }
}

export default FindProductPresenter;
