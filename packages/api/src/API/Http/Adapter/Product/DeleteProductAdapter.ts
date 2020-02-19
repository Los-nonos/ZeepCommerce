import { injectable, inject } from 'inversify';
import ProductDeleteCommand from '../../../../Application/Commands/Product/ProductDeleteCommand';
import { IdSchema } from '../../Validator/Schemas/Common';
import { BadRequest } from '../../Errors/BadRequest';
import Validator from '../../Validator/Validator';

@injectable()
class DeleteProductAdapter {
  private readonly validator: Validator;
  constructor(@inject(Validator) validator: Validator) {
    this.validator = validator;
  }

  public async from(req: any): Promise<ProductDeleteCommand> {
    const resultId = this.validator.validate(req, IdSchema);

    if (resultId) {
      throw new BadRequest(JSON.stringify(this.validator.validationResult(resultId.details)));
    }

    return new ProductDeleteCommand(Number(req.id));
  }
}

export default DeleteProductAdapter;
