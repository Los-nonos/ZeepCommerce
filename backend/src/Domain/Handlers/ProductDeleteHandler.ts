import Product from "../Entity/Product";
import ProductDeleteCommand from '../Commands/ProductDeleteCommand';
import ProductDeleteHandlerInterface from '../../Infraestructure/Interfaces/ProductDeleteHandlerInterface';

class ProductDeleteHandler implements ProductDeleteHandlerInterface{

    public async Handle(command: ProductDeleteCommand): Promise <string> {

        const id = command.getId();

        const product = await Product.findOne({Id: id});

        if (!product){
            throw new Error('not found product');
        }

        try {
            await product.remove();
            return "product deleted";
        } catch (error) {
            return error.message;
        }
    }
}

export default ProductDeleteHandler;