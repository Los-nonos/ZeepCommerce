import { Request } from 'express';
import NameSchema from '../../../../Application/Adapters/Schemas/NameSchema';
import PriceSchema from '../../../../Application/Adapters/Schemas/PriceSchema';
import DescriptionSchema from '../../../../Application/Adapters/Schemas/DescriptionSchema';
import ProductCreateCommand from '../../../../Domain/Commands/ProductCommands/ProductCreateCommand';

class StoreProductAdapter {
  public async from(req: Request) {
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

    return new ProductCreateCommand(
      resultName.value.name,
      resultPrice.value.price,
      resultDescription.value.description,
    );
  }
}

export default StoreProductAdapter;