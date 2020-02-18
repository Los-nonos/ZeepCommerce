import { BadRequest } from '../../Errors/BadRequest';
import { IdSchema } from '../../Validator/Schemas/Common';
import { StoreProductSchema } from '../../Validator/Schemas/ProductSchema';
import ProductEditCommand from '../../../../Application/Commands/Product/ProductEditCommand';
import { injectable, inject } from 'inversify';
import Validator from '../../Validator/Validator';

@injectable()
class EditProductAdapter {
  private readonly validator: Validator;
  constructor(@inject(Validator) validator: Validator) {
    this.validator = validator;
  }

  public async from(body: any, params: any) {
    const error = this.validator.validate(body, StoreProductSchema);

    const errorId = this.validator.validate(params, IdSchema);

    if (error) {
      throw new BadRequest(JSON.stringify(this.validator.validationResult(error)));
    }

    if (errorId) {
      throw new BadRequest(JSON.stringify(this.validator.validationResult(errorId)));
    }

    return new ProductEditCommand(
      params.id,
      body.name,
      body.description,
      body.basePrice,
      body.tax,
      body.costPrice,
      body.margin,
    );
  }
}

export default EditProductAdapter;
