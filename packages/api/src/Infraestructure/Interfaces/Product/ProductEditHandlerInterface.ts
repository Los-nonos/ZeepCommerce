import ProductEditCommand from '../../../Application/Commands/Product/ProductEditCommand';

interface ProductEditHandlerInterface {
  Handle(command: ProductEditCommand): Promise<string>;
}

export default ProductEditHandlerInterface;
