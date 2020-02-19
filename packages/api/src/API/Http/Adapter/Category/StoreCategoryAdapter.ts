import { BadRequest } from '../../Errors/BadRequest';
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

  public async from(req: any): Promise<CategoryCreateCommand> {
    const storeCategoryResult = this.validator.validate(req, CategoryCreateSchema);

    if (storeCategoryResult) {
      throw new BadRequest(JSON.stringify(this.validator.validationResult(storeCategoryResult.details)));
    }

    return new CategoryCreateCommand(req.name, req.description);
  }
}

export default StoreCategoryAdapter;
