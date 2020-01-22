import Product from '../../Entity/Product';
import ProductDeleteCommand from '../../Commands/ProductCommands/ProductDeleteCommand';
import { injectable } from 'inversify';

@injectable()
class ProductDeleteHandler {
  constructor() {}

  public async Handle(command: ProductDeleteCommand): Promise<string> {
    const id = command.getId();

    const product = await Product.findOne({ Id: id });

    if (!product) {
      throw new Error('Product not found.');
    }

    try {
      await product.remove();
      return 'Product deleted';
    } catch (error) {
      return error.message;
    }
  }
}

export default ProductDeleteHandler;
