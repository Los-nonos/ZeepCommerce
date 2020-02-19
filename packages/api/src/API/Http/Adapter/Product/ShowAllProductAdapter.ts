import { BadRequest } from '../../Errors/BadRequest';
import { IdSchema } from '../../Validator/Schemas/Common';
import ProductFindCommand from '../../../../Application/Commands/Product/ProductFindCommand';
import { injectable, inject } from 'inversify';
import Validator from '../../Validator/Validator';

@injectable()
class ShowAllProductAdapter {
  private readonly validator: Validator;
  constructor(@inject(Validator) validator: Validator) {
    this.validator = validator;
  }

  public async from(params: any) {
    const error = this.validator.validate(params, IdSchema);
    if (error) {
      throw new BadRequest(JSON.stringify(this.validator.validationResult(error)));
    }

    return new ProductFindCommand(params.id);
  }
}

export default ShowAllProductAdapter;
