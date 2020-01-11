import IdSchema from "./Schemas/IdSchema";
import NameSchema from "./Schemas/NameSchema";
import {Request} from 'express';
import ProductDeleteCommand from '../../Domain/Commands/ProductCommand';
import PriceSchema from "./Schemas/PriceSchema";
import DescriptionSchema from "./Schemas/DescriptionSchema";

class ProductAdapter {

    public Created(req: Request){
        const {name, price, description} : any = req.body;

        const resultProd = NameSchema.validate({ name: name});
        
        if (resultProd.error) {
            throw new Error(resultProd.error.message);
        }

        const resultPrice = PriceSchema.validate({price: price});
        if (resultPrice.error) {
            throw new Error(resultPrice.error.message);
        }
        
        const resultDescription = DescriptionSchema.validate({description: description});
        if (resultDescription.error) {
            throw new Error(resultPrice.error.message);
        }
    }

    public Delete(req: Request) : ProductDeleteCommand {
        const { id }: any = req.params;

        const resultId = IdSchema.validate({ id: id });

        if (resultId.error) {
            throw new Error(resultId.error.message);
        }

        return new ProductDeleteCommand(resultId.value);
    }

}

export default ProductAdapter;