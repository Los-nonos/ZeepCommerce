import { Request } from 'express';
import { CategoryShowSchema } from '../../Validator/Schemas/CategorySchema';
import { InvalidData } from '../../Errors/InvalidData';
import CategoryFindCommand from '../../../../Application/Commands/Category/CategoryFindCommand';
import { injectable } from 'inversify';

@injectable()
class ShowCategoryAdapter {
  public async from(req: Request) {
    const findCategoryResult = CategoryShowSchema.validate(req.query.search);

    if (findCategoryResult.error || findCategoryResult.errors) {
      throw new InvalidData(findCategoryResult.error.message || findCategoryResult.errors.message);
    }
    return new CategoryFindCommand(findCategoryResult.value.id);
  }
}

export default ShowCategoryAdapter;
