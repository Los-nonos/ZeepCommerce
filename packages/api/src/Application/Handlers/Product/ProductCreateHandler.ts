import { injectable } from 'inversify';
import Product from '../../../Domain/Entities/Product';
import ProductCreateCommand from '../../Commands/Product/ProductCreateCommand';
import ProductCreateHandlerInterface from '../../../Infraestructure/Interfaces/Product/ProductCreateHandlerInterface';

@injectable()
class ProductCreateHandler implements ProductCreateHandlerInterface {
  public async Handle(command: ProductCreateCommand): Promise<Product> {
    const { name, price, description }: any = command;

    const product = new Product();
    product.name = name;
    product.basePrice = price;
    product.description = description;

    try {
      return await product.save();
    } catch (error) {
      return error.message;
    }
  }
}

export default ProductCreateHandler;
