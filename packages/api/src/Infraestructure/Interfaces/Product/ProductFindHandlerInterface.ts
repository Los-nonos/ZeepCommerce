import ProductFindCommand from '../../../Application/Commands/Product/ProductFindCommand';
import Product from '../../../Domain/Entities/Product';

interface ProductFindHandlerInterface {
  FindOne(command: ProductFindCommand): Promise<Product>;
  FindAll(command: ProductFindCommand): Promise<Product[]>;
}

export default ProductFindHandlerInterface;
