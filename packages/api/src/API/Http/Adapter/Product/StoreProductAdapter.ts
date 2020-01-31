import { Request } from 'express';
import NameSchema from '../../Validator/Schemas/NameSchema';
import PriceSchema from '../../Validator/Schemas/PriceSchema';
import DescriptionSchema from '../../Validator/Schemas/DescriptionSchema';
import ProductCreateCommand from '../../../../Domain/Commands/ProductCommands/ProductCreateCommand';
import { InvalidData } from '../../ErrorsHandlers/Errors/InvalidData';

class StoreProductAdapter {
  public async from(req: Request) {
    const { name, price, description }: any = req.body;

    const resultName = NameSchema.validate({ name: name });
    const resultPrice = PriceSchema.validate({ price: price });
    const resultDescription = DescriptionSchema.validate({ description: description });

    if (resultName.error) {
      throw new InvalidData(resultName.error.message);
    }

    if (resultPrice.error) {
      throw new InvalidData(resultPrice.error.message);
    }

    if (resultDescription.error) {
      throw new InvalidData(resultDescription.error.message);
    }

    return new ProductCreateCommand(
      resultName.value.name,
      resultPrice.value.price,
      resultDescription.value.description,
    );
  }
}

export default StoreProductAdapter;