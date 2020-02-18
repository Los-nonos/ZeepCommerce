import { Request } from 'express';
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

  public async from(req: any) {
    let id: any = req.search;

    if (!id) {
      id = 0;
    } else {
      const error = this.validator.validate(req, IdSchema);
      if (error) {
        throw new BadRequest(JSON.stringify(this.validator.validationResult(error)));
      }
    }

    return new ProductFindCommand(id);
  }
}

export default ShowAllProductAdapter;
