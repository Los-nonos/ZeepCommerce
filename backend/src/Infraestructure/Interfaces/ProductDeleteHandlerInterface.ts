import ProductDeleteCommand from '../../Domain/Commands/ProductDeleteCommand';

interface ProductDeleteHandlerInterface{

    Handle(command: ProductDeleteCommand): Promise <string>;
}

export default ProductDeleteHandlerInterface;

