import Product from '../Entity/Product';
import ProductCreateHandlerInterface from '../../Infraestructure/Interfaces/ProductCreateHandlerInterface'

class ProductCreateHandler implements  ProductCreateHandlerInterface{

        public async Handle(command: any): Promise <string> {

            const {name, price, description}: any = command;

            const product = new Product();
            product.name = name;
            product.price = price;
            product.description = description;

            try{

                await product.save();
                return 'Product created';

            } catch(error){

                return error.message;
            }
        }
}

export default ProductCreateHandler;