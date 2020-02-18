import ProductEditCommand from '../../../Application/Commands/Product/ProductEditCommand';
import Product from '../../../Domain/Entities/Product';

interface ProductEditHandlerInterface {
  Handle(command: ProductEditCommand): Promise<Product>;
}

export default ProductEditHandlerInterface;
