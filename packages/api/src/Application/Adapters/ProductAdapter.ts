import { Request } from 'express';
import IdSchema from './Schemas/IdSchema';
import NameSchema from './Schemas/NameSchema';
import DescriptionSchema from './Schemas/DescriptionSchema';
import PriceSchema from './Schemas/PriceSchema';
import ProductCreateCommand from '../../Domain/Commands/ProductCommands/ProductCreateCommand';
import ProductEditCommand from '../../Domain/Commands/ProductCommands/ProductEditCommand';
import ProductDeleteCommand from '../../Domain/Commands/ProductCommands/ProductDeleteCommand';

class ProductAdapter {
  public async CreateAdapter(req: Request): Promise<ProductCreateCommand> {
    const { name, price, description }: any = req.body;

    const resultName = NameSchema.validate({ name: name });
    const resultPrice = PriceSchema.validate({ price: price });
    const resultDescription = DescriptionSchema.validate({
      description: description,
    });

    if (resultName.error) {
      throw new Error(resultName.error.message);
    }

    if (resultPrice.error) {
      throw new Error(resultPrice.error.message);
    }

    if (resultDescription.error) {
      throw new Error(resultDescription.error.message);
    }

    return new ProductCreateCommand(resultName.value, resultPrice.value, resultDescription.value);
  }

  public async EditAdapter(req: Request): Promise<ProductEditCommand> {
    const { id, name, price, description }: any = req.params;

    const resultId = IdSchema.validate({ id: id });

    if (resultId.error) {
      throw new Error(resultId.error.message);
    }

    //To Do: hacer demás validaciones

    return new ProductEditCommand(id, name, price, description);
  }

  public async DeleteAdapter(req: Request): Promise<ProductDeleteCommand> {
    const { id }: any = req.params;

    const resultId = IdSchema.validate({ id: id });

    if (resultId.error) {
      throw new Error(resultId.error.message);
    }

    return new ProductDeleteCommand(resultId.value);
  }

  public async FindAllAdapter(req: Request): Promise<ProductDeleteCommand> {
    let {id}: any = req.body;

    if(!id){
      const resultId = IdSchema.validate({id: id});
      
      if(resultId.error){
        throw new Error(resultId.error.message);
      }
    }
    else{
      id = 0;
    }

    return new ProductDeleteCommand(id);
  }
}

export default ProductAdapter;
