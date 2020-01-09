import Product from "../Entity/Product";
import ProductDeleteCommand from '../Commands/ProductDeleteCommand';

class ProductDeleteHandler{

    constructor(){

    }

    public async handle(command: ProductDeleteCommand): Promise<string> {

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