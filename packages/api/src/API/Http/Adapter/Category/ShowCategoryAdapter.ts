import { Request } from 'express';
import { CategoryShowSchema } from '../../Validator/Schemas/CategorySchema';
import { InvalidData } from '../../Errors/InvalidData';
import CategoryFindCommand from '../../../../Application/Commands/Category/CategoryFindCommand';
import { injectable, inject } from 'inversify';
import Validator from '../../Validator/Validator';

@injectable()
class ShowCategoryAdapter {
  private validator: Validator;

  constructor(@inject(Validator) validator: Validator) {
    this.validator = validator;
  }

  public async from(req: Request): Promise<CategoryFindCommand> {
    const findCategoryResult = this.validator.validator(req.body, CategoryShowSchema);

    if (findCategoryResult) {
      throw new InvalidData(JSON.stringify(this.validator.validationResult(findCategoryResult)));
    }

    return new CategoryFindCommand(req.body.id, req.body.name);
  }
}

export default ShowCategoryAdapter;
