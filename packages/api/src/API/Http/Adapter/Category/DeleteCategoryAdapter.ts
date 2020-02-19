import { Request } from 'express';
import { CategoryDeleteSchema } from '../../Validator/Schemas/CategorySchema';
import { BadRequest } from '../../Errors/BadRequest';
import CategoryDeleteCommand from '../../../../Application/Commands/Category/CategoryDeleteCommand';
import { injectable, inject } from 'inversify';
import Validator from '../../Validator/Validator';

@injectable()
class DeleteCategoryAdapter {
  private validator: Validator;

  constructor(@inject(Validator) validator: Validator) {
    this.validator = validator;
  }

  public async from(req: any): Promise<CategoryDeleteCommand> {
    const error = this.validator.validate(req, CategoryDeleteSchema);

    if (error) {
      throw new BadRequest(JSON.stringify(this.validator.validationResult(error.details)));
    }

    return new CategoryDeleteCommand(Number(req.id));
  }
}

export default DeleteCategoryAdapter;
