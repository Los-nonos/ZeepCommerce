import Product from '../../../Domain/Entities/Product';
import ProductFindCommand from '../../../Application/Commands/Product/ProductFindCommand';
import ProductFindHandlerInterface from '../../../Infraestructure/Interfaces/Product/ProductFindHandlerInterface';
import { injectable } from 'inversify';
import { MoreThanOrEqual, Equal } from 'typeorm';
import { DataBaseError } from '../../../Infraestructure/Errors/DataBaseError';

@injectable()
class ProductFindHandler implements ProductFindHandlerInterface {
  public FindOne = async (command: ProductFindCommand): Promise<Product> => {
    try {
      const id = command.getId();

      const product: Product = await Product.findOne({ where: { Id: Equal(id) } });

      if (!product) {
        throw new Error('Not product found');
      } else {
        return product;
      }
    } catch (error) {
      throw new DataBaseError(error.message);
    }
  };

  public FindAll = async (command: ProductFindCommand): Promise<Product[]> => {
    try {
      const id = command.getId();
      const product: Product[] = await Product.find({ where: { Id: MoreThanOrEqual(id), limit: 10 } });

      return product;
    } catch (error) {
      throw new DataBaseError(error.message);
    }
  };
}

export default ProductFindHandler;
