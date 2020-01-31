import ProductEditCommand from '../../../Domain/Commands/Product/ProductEditCommand';

interface ProductEditHandlerInterface {
  Handle(command: ProductEditCommand): Promise<string>;
}

export default ProductEditHandlerInterface;
