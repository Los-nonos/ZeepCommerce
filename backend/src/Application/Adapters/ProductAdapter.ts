import IdSchema from "./Schemas/IdSchema";
import {Request} from 'express';
import ProductDeleteCommand from '../../Domain/Commands/ProductDeleteCommand';

class ProductAdapter {

    public DeleteAdapter(req: Request) : ProductDeleteCommand {
        const { id }: any = req.params;

        const resultId = IdSchema.validate({ id: id });

        if (resultId.error) {
            throw new Error(resultId.error.message);
        }

        return new ProductDeleteCommand(resultId.value);
    }

}

export default ProductAdapter;