import ProductCreateCommand from '../../../Application/Commands/Product/ProductCreateCommand';
import Product from '../../../Domain/Entities/Product';

interface ProductCreateHandlerInterface {
  Handle(command: ProductCreateCommand): Promise<Product>;
}

export default ProductCreateHandlerInterface;
