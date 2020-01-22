import { Request } from 'express';
import IdSchema from './Schemas/IdSchema';
import NameSchema from './Schemas/NameSchema';
import DescriptionSchema from './Schemas/DescriptionSchema';
import PriceSchema from './Schemas/PriceSchema';
import ProductCreateCommand from '../../Domain/Commands/ProductCommands/ProductCreateCommand';
import ProductEditCommand from '../../Domain/Commands/ProductCommands/ProductEditCommand';
import ProductDeleteCommand from '../../Domain/Commands/ProductCommands/ProductDeleteCommand';
import ProductFindCommand from '../../Domain/Commands/ProductCommands/ProductFindCommand';
import { injectable } from 'inversify';
import ProductAdapterInterface from '../../Infraestructure/Interfaces/ProductAdapterInterface';
import { InvalidData } from '../../Infraestructure/ErrorsHandlers/Errors/InvalidData';


@injectable()
class ProductAdapter implements ProductAdapterInterface {

    public async CreateAdapter(req: Request): Promise <ProductCreateCommand> {
        const { name, price, description }: any = req.body;

        const resultName = NameSchema.validate({ name: name });
        const resultPrice = PriceSchema.validate({ price: price });
        const resultDescription = DescriptionSchema.validate({ description: description });

        if (resultName.error) {
            throw new Error(resultName.error.message);
        }

        if (resultPrice.error) {
            throw new Error(resultPrice.error.message);
        }

        if (resultDescription.error) {
            throw new Error(resultDescription.error.message);
        }

        return new ProductCreateCommand(resultName.value.name, resultPrice.value.price, resultDescription.value.description);
    }

    public async EditAdapter(req: Request): Promise <ProductEditCommand> {
        const { id }: any= req.params;
        const { name, price, description }: any = req.body;

        const resultId = IdSchema.validate({ id: id });
        const resultName = NameSchema.validate({ name: name });
        const resultPrice = PriceSchema.validate({ price: price });
        const resultDescription = DescriptionSchema.validate({ description: description });

        if (resultId.error) {
            throw new InvalidData(resultId.error.message);
        }

        if (resultName.error) {
            throw new InvalidData(resultName.error.message);
        }

        if (resultPrice.error) {
            throw new InvalidData(resultPrice.error.message);
        }

        if (resultDescription.error) {
            throw new InvalidData(resultDescription.error.message);
        }

        return new ProductEditCommand(resultId.value.id, resultName.value.name, resultPrice.value.price, resultDescription.value.description);
    }

    public async DeleteAdapter(req: Request): Promise <ProductDeleteCommand> {

        const { id }: any = req.params;

        const resultId = IdSchema.validate({ id });

        if (resultId.error) {
            throw new InvalidData(resultId.error.message);
        }

        return new ProductDeleteCommand(resultId.value.id);
    }

    public async ShowAllAdapter(req: Request): Promise <ProductFindCommand> {
        
        let id : any = req.query.search;
        
        if(!id) {   
            id = 0;

        } else {
            const resultId = IdSchema.validate({ id });
            if(resultId.error) {
                throw new InvalidData(resultId.error.message);
            }
        }

        return new ProductFindCommand(id);
    }

    public async ShowByIdAdapter(req: Request): Promise <ProductFindCommand> {

        const { id }: any = req.params;

        const resultId = IdSchema.validate({ id });

        if (resultId.error) {
            throw new InvalidData(resultId.error.message);
        }

        return new ProductFindCommand(resultId.value.id);
    }

}

export default ProductAdapter;