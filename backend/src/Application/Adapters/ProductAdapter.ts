import {Request} from 'express';
import IdSchema from './Schemas/IdSchema';
import NameSchema from './Schemas/NameSchema';
import DescriptionSchema from './Schemas/DescriptionSchema';
import PriceSchema from './Schemas/PriceSchema';
import ProductCreateCommand from '../../Domain/Commands/ProductCreateCommand';
import ProductEditCommand from '../../Domain/Commands/ProductCreateCommand';
import ProductDeleteCommand from '../../Domain/Commands/ProductDeleteCommand';

class ProductAdapter {

    public CreateAdapter(req: Request): ProductCreateCommand{
        const { id, name, price, description }: any = req.params;

        const resultId = IdSchema.validate({ id: id });
        const resultName = NameSchema.validate({ name: name });
        const resultPrice = PriceSchema.validate( { price: price });
        const resultDescription = DescriptionSchema.validate({ description: description });

        if(resultId.error) {
            throw new Error(resultId.error.message);
        }

        if(resultName.error) {
            throw new Error(resultName.error.message);
        }

        if(resultPrice.error) {
            throw new Error(resultPrice.error.message);
        }

        if(resultDescription.error) {
            throw new Error(resultDescription.error.message);
        }

        return new ProductCreateCommand(resultName.value, resultPrice.value, resultDescription.value);
    }

    public EditAdapter(req: Request): ProductEditCommand {
        const { id, name, price, description }: any = req.params;

        const resultId = IdSchema.validate({ id: id });

        if(resultId.error) {
            throw new Error(resultId.error.message);
        }

        return new ProductEditCommand(name, price, description);
    }

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