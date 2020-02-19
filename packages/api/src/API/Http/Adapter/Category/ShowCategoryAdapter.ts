import { CategoryShowSchema } from '../../Validator/Schemas/CategorySchema';
import { BadRequest } from '../../Errors/BadRequest';
import CategoryFindCommand from '../../../../Application/Commands/Category/CategoryFindCommand';
import { injectable, inject } from 'inversify';
import Validator from '../../Validator/Validator';

@injectable()
class ShowCategoryAdapter {
  private validator: Validator;

  constructor(@inject(Validator) validator: Validator) {
    this.validator = validator;
  }

  public async from(params: any): Promise<CategoryFindCommand> {
    const findCategoryResult = this.validator.validate(params, CategoryShowSchema);

    if (findCategoryResult) {
      throw new BadRequest(JSON.stringify(this.validator.validationResult(findCategoryResult.details)));
    }

    return new CategoryFindCommand(params.id ? params.id : null, params.name ? params.name : null);
  }
}

export default ShowCategoryAdapter;
