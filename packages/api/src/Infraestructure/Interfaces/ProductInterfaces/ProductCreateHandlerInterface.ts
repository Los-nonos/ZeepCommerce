import ProductCreateCommand from '../../../Domain/Commands/Product/ProductCreateCommand';

interface ProductCreateHandlerInterface {
  Handle(command: ProductCreateCommand): Promise<string>;
}

export default ProductCreateHandlerInterface;
