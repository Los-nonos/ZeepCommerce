import ProductEditCommand from '../../Domain/Commands/ProductEditCommand';

interface ProductEditHandlerInterface{

    Handle(command: ProductEditCommand): Promise <string>;
}

export default ProductEditHandlerInterface;