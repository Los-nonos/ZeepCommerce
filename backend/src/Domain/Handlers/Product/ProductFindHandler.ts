import Product from "../../Entity/Product";
import ProductFindCommand from "../../Commands/ProductCommands/ProductFindCommand";
import ProductFindHandlerInterface from "../../../Infraestructure/Interfaces/ProductFindHandlerInterface";
import { injectable } from "inversify";

@injectable()
class ProductFindHandler implements ProductFindHandlerInterface{

    public FindOne = async (command: ProductFindCommand): Promise <Product> => {
        
        try{
            const id = command.getId();

            const product: Product = await Product.findOne({where: {Id: id}});
            
            if(!product) {
                throw new Error('Not product found');
            }
            else {
                return product;
            }

        } catch(error){

            return error.message;
        }
    }

    
    public FindAll = async (command: ProductFindCommand): Promise <Product[]> => {

        try{
            const id = command.getId();
            if (id === -1) {
                return Product.find({ where: { limit: 10 } });
            }

            const product: Product = await Product.findOne({where: {Id: id}});
            
            if(!product) {
                throw new Error('Not product found');
            }
            else {
                return Product.find({ where: {limit: 10}});
            }

        } catch(error){

            return error.message;
        }       
    }
    
    
}

export default ProductFindHandler;