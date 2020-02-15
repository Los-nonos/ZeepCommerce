import { Request } from 'express';
import { CategoryShowSchema } from '../../Validator/Schemas/CategorySchema';
import { InvalidData } from '../../Errors/InvalidData';
import CategoryFindCommand from '../../../../Application/Commands/Category/CategoryFindCommand';
import { injectable } from 'inversify';

@injectable()
class ShowAllCategoryAdapter {
  public async from(req: Request) {
    let id: any = req.query.search;

    if (!id) {
      id = 0;
    } else {
      const findCategoryResult = CategoryShowSchema.validate(req.query.search);

      if (findCategoryResult.error || findCategoryResult.errors) {
        throw new InvalidData(findCategoryResult.error.message || findCategoryResult.errors.message);
      }
    }

    return new CategoryFindCommand(id);
  }
}

export default ShowAllCategoryAdapter;
