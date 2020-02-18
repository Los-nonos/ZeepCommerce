import { Request } from 'express';
import { CategoryDeleteSchema } from '../../Validator/Schemas/CategorySchema';
import { InvalidData } from '../../Errors/InvalidData';
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
    const categoryDeleteResult = this.validator.validator(req.params, CategoryDeleteSchema);

    if (categoryDeleteResult) {
      throw new InvalidData(JSON.stringify(this.validator.validationResult(categoryDeleteResult)));
    }

    return new CategoryDeleteCommand(Number(req.params.id));
  }
}

export default DeleteCategoryAdapter;
