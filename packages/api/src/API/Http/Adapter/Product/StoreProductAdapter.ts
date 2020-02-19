import { StoreProductSchema } from '../../Validator/Schemas/ProductSchema';
import ProductCreateCommand from '../../../../Application/Commands/Product/ProductCreateCommand';
import { BadRequest } from '../../Errors/BadRequest';
import { injectable, inject } from 'inversify';
import Validator from '../../Validator/Validator';

@injectable()
class StoreProductAdapter {
  private readonly validator: Validator;
  constructor(@inject(Validator) validator: Validator) {
    this.validator = validator;
  }

  public async from(body: any) {
    const error = this.validator.validate(body, StoreProductSchema);

    if (error) {
      throw new BadRequest(JSON.stringify(this.validator.validationResult(error.details)));
    }

    return new ProductCreateCommand(body.name, body.description, body.basePrice, body.tax, body.costPrice, body.margin);
  }
}

export default StoreProductAdapter;
