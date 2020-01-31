import { Request } from 'express';
import { InvalidData } from '../../ErrorsHandlers/Errors/InvalidData';
import IdSchema from '../../Validator/Schemas/IdSchema';
import NameSchema from '../../Validator/Schemas/NameSchema';
import DescriptionSchema from '../../Validator/Schemas/DescriptionSchema';
import PriceSchema from '../../Validator/Schemas/PriceSchema';
import ProductEditCommand from '../../../../Domain/Commands/ProductCommands/ProductEditCommand';
import { injectable } from 'inversify';

@injectable()
class EditProductAdapter {
  public from(req: Request) {
    const { id }: any = req.params;
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

    return new ProductEditCommand(
      resultId.value.id,
      resultName.value.name,
      resultPrice.value.price,
      resultDescription.value.description,
    );
  }
}

export default EditProductAdapter;