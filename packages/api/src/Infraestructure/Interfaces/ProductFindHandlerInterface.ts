import ProductFindCommand from '../../Domain/Commands/ProductCommands/ProductFindCommand';
import Product from '../../Domain/Entity/Product';

interface ProductFindHandlerInterface {
  FindOne(command: ProductFindCommand): Promise<Product>;
  FindAll(command: ProductFindCommand): Promise<Product[]>;
}

export default ProductFindHandlerInterface;
