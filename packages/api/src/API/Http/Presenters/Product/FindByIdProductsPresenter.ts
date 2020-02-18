import IPresenter from '../Base/IPresenter';
import Product from '../../../../Domain/Entities/Product';

class FindByIdProductPresenter implements IPresenter {
  private readonly result: Product;
  constructor(result: Product) {
    this.result = result;
  }

  toJson(): string {
    return JSON.stringify(this.getData());
  }
  getData(): object {
    return {
      result: {
        id: this.result.Id,
        name: this.result.name,
        description: this.result.description,
        basePrice: this.result.basePrice,
        costPrice: this.result.costPrice,
        marginPrice: this.result.margin,
        salePrice: this.result.salePrice,
        tax: this.result.tax,
        categories: this.result.categories.map(category => {
          return {
            id: category.id,
            name: category.name,
            description: category.description,
          };
        }),
        productsSimilars: this.result.categories[0].products.map(product => {
          return {
            id: product.Id,
            name: product.name,
            description: product.description,
            basePrice: product.basePrice,
            costPrice: product.costPrice,
            marginPrice: product.margin,
            salePrice: product.salePrice,
            tax: product.tax,
          };
        }),
      },
    };
  }
}

export default FindByIdProductPresenter;
