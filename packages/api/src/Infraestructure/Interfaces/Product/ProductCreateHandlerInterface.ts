import ProductCreateCommand from '../../../Application/Commands/Product/ProductCreateCommand';

interface ProductCreateHandlerInterface {
  Handle(command: ProductCreateCommand): Promise<string>;
}

export default ProductCreateHandlerInterface;
