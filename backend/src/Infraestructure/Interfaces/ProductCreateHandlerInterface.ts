import ProductCreateCommand from '../../Domain/Commands/ProductCreateCommand';

interface ProductCreateHandlerInterface {

    Handle(command: ProductCreateCommand): Promise <string>;
}

export default ProductCreateHandlerInterface;