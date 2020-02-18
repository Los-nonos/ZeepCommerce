import Product from '../../../Domain/Entities/Product';
import ProductCreateAndEditCommand from '../../Commands/Product/ProductEditCommand';
import ProductEditHandlerInterface from '../../../Infraestructure/Interfaces/Product/ProductEditHandlerInterface';
import { injectable } from 'inversify';

@injectable()
class ProductEditHandler implements ProductEditHandlerInterface {
  public async Handle(command: ProductCreateAndEditCommand): Promise<Product> {
    const id = command.getId();

    const product = await Product.findOne({ Id: id });

    if (!product) {
      throw new Error('Not found product');
    }

    product.name = command.getName();
    product.basePrice = command.getBasePrice();
    product.description = command.getDescription();

    try {
      return await product.save();
    } catch (error) {
      return error.message;
    }
  }
}

export default ProductEditHandler;
