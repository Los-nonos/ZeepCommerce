import { BadRequest } from '../../Errors/BadRequest';
import { IdSchema } from '../../Validator/Schemas/Common';
import ProductFindCommand from '../../../../Application/Commands/Product/ProductFindCommand';
import { injectable, inject } from 'inversify';
import Validator from '../../Validator/Validator';

@injectable()
class ShowProductAdapter {
  private validator: Validator;

  constructor(@inject(Validator) validator: Validator) {
    this.validator = validator;
  }

  public from(params: any) {
    const resultId = this.validator.validate(params, IdSchema);

    if (resultId) {
      throw new BadRequest(JSON.stringify(this.validator.validationResult(resultId)));
    }

    return new ProductFindCommand(params.id);
  }
}

export default ShowProductAdapter;
