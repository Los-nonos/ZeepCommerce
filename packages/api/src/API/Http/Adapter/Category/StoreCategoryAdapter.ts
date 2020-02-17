import { Request } from 'express';
import { InvalidData } from '../../Errors/InvalidData';
import { CategoryCreateSchema } from '../../Validator/Schemas/CategorySchema';
import CategoryCreateCommand from '../../../../Application/Commands/Category/CategoryCreateCommand';
import { injectable, inject } from 'inversify';
import Validator from '../../Validator/Validator';

@injectable()
class StoreCategoryAdapter {
  private validator: Validator;

  constructor(@inject(Validator) validator: Validator) {
    this.validator = validator;
  }

  public async from(req: Request): Promise<CategoryCreateCommand> {
    const storeCategoryResult = this.validator.validator(req.body, CategoryCreateSchema);

    if (storeCategoryResult) {
      throw new InvalidData(JSON.stringify(this.validator.validationResult(storeCategoryResult)));
    }

    return new CategoryCreateCommand(req.body.id, req.body.name);
  }
}

export default StoreCategoryAdapter;