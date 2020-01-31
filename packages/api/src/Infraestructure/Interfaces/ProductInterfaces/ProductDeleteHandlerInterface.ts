import ProductDeleteCommand from '../../../Domain/Commands/Product/ProductDeleteCommand';

interface ProductDeleteHandlerInterface {
  Handle(command: ProductDeleteCommand): Promise<string>;
}

export default ProductDeleteHandlerInterface;
