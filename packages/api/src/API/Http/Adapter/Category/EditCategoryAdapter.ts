import { Request } from 'express';
import { CategoryEditSchema } from '../../Validator/Schemas/CategorySchema';
import { InvalidData } from '../../Errors/InvalidData';
import CategoryEditCommand from '../../../../Application/Commands/Category/CategoryEditCommand';
import { injectable, inject } from 'inversify';
import Validator from '../../Validator/Validator';
import IdSchema from '../../Validator/Schemas/IdSchema';

@injectable()
class EditCategoryAdapter {
  private validator: Validator;

  constructor(@inject(Validator) validator: Validator) {
    this.validator = validator;
  }

  public async from(req: Request): Promise<CategoryEditCommand> {
    const categoryEditResultId = this.validator.validator(req.params, IdSchema);
    const categoryEditResult = this.validator.validator(req.body, CategoryEditSchema);

    if (categoryEditResultId) {
      throw new InvalidData(JSON.stringify(this.validator.validationResult(categoryEditResultId)));
    }

    if (categoryEditResult) {
      throw new InvalidData(JSON.stringify(this.validator.validationResult(categoryEditResult)));
    }

    return new CategoryEditCommand(Number(req.params.id), req.body.name, req.body.description);
  }
}

export default EditCategoryAdapter;
