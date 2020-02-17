import { Request } from 'express';
import { InvalidData } from '../../Errors/InvalidData';
import IdSchema from '../../Validator/Schemas/IdSchema';
import ProductFindCommand from '../../../../Application/Commands/Product/ProductFindCommand';
import { injectable, inject } from 'inversify';
import Validator from '../../Validator/Validator';
import { ShowProductSchema } from '../../Validator/Schemas/ProductSchema';

@injectable()
class ShowProductAdapter {
  private validator: Validator;

  constructor(@inject(Validator) validator: Validator) {
    this.validator = validator;
  }

  public from(req: Request) {
    //const { id }: any = req.params;

    const resultId = this.validator.validator(IdSchema, ShowProductSchema);

    if (resultId.error) {
      throw new InvalidData(resultId.error.message);
    }

    return new ProductFindCommand(resultId.value.id);
  }
}

export default ShowProductAdapter;
