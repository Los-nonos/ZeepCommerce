import Product from '../Entity/Product';
import ProductEditCommand from '../../Domain/Commands/ProductEditCommand';
import ProductEditHandlerInterface from '../../Infraestructure/Interfaces/ProductEditHandlerInterface';

class ProductEditHandler implements ProductEditHandlerInterface{

    public async Handle(command : ProductEditCommand): Promise <string> {

        const id = command.getId();

        const product = await Product.findOne({Id: id});

        if(!product){
            throw new Error('Not found product');
        }

        const {name, price, description}: any = command;

        product.name = name;
        product.price = price;
        product.description = description;

        try{

            await product.save();
            return 'Product edited';

        } catch(error){

            return error.messsage;
        }
    }
}

export default ProductEditHandler;