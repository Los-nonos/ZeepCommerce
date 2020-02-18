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

  public async from(req: Request): Promise<CategoryDeleteCommand> {
    const categoryDeleteResult = this.validator.validate(req.params, CategoryDeleteSchema);

    if (categoryDeleteResult) {
      throw new BadRequest(JSON.stringify(this.validator.validationResult(categoryDeleteResult)));
    }

    return new CategoryDeleteCommand(Number(req.params.id));
  }
}

export default DeleteCategoryAdapter;
