import Product from '../../../Domain/Entities/Product';
import ProductCreateAndEditCommand from '../../../Domain/Commands/Product/ProductEditCommand';
import ProductEditHandlerInterface from '../../../Infraestructure/Interfaces/Product/ProductEditHandlerInterface';
import { injectable } from 'inversify';

@injectable()
class ProductEditHandler implements ProductEditHandlerInterface {
  public async Handle(command: ProductCreateAndEditCommand): Promise<string> {
    const id = command.getId();

    const product = await Product.findOne({ Id: id });

    if (!product) {
      throw new Error('Not found product');
    }

    product.name = command.getName();
    product.price = command.getPrice();
    product.description = command.getDescription();

    try {
      await product.save();
      return 'Product edited';
    } catch (error) {
      return error.message;
    }
  }
}

export default ProductEditHandler;
