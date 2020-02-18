import { CategoryEditSchema } from '../../Validator/Schemas/CategorySchema';
import { BadRequest } from '../../Errors/BadRequest';
import CategoryEditCommand from '../../../../Application/Commands/Category/CategoryEditCommand';
import { injectable, inject } from 'inversify';
import Validator from '../../Validator/Validator';
import { IdSchema } from '../../Validator/Schemas/Common';

@injectable()
class EditCategoryAdapter {
  private validator: Validator;

  constructor(@inject(Validator) validator: Validator) {
    this.validator = validator;
  }

  public async from(body: any, params: any): Promise<CategoryEditCommand> {
    const categoryEditResultId = this.validator.validate(params, IdSchema);
    const categoryEditResult = this.validator.validate(body, CategoryEditSchema);

    if (categoryEditResultId) {
      throw new BadRequest(JSON.stringify(this.validator.validationResult(categoryEditResultId)));
    }

    if (categoryEditResult) {
      throw new BadRequest(JSON.stringify(this.validator.validationResult(categoryEditResult)));
    }

    return new CategoryEditCommand(Number(params.id), body.name, body.description);
  }
}

export default EditCategoryAdapter;
