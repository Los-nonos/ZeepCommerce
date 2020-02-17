import { Request } from 'express';
import { InvalidData } from '../../Errors/InvalidData';
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

    const resultId = this.validator.validator(req.body, ShowProductSchema);

    if (resultId) {
      throw new InvalidData(JSON.stringify(this.validator.validationResult(resultId)));
    }

    return new ProductFindCommand(req.body.id);
  }
}

export default ShowProductAdapter;
