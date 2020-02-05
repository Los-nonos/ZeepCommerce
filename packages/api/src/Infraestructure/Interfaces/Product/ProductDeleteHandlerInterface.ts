import ProductDeleteCommand from '../../../Application/Commands/Product/ProductDeleteCommand';

interface ProductDeleteHandlerInterface {
  Handle(command: ProductDeleteCommand): Promise<string>;
}

export default ProductDeleteHandlerInterface;
