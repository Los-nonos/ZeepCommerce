import { Request } from 'express';
import { CategoryShowSchema } from '../../Validator/Schemas/CategorySchema';
import { InvalidData } from '../../Errors/InvalidData';
import CategoryFindCommand from '../../../../Application/Commands/Category/CategoryFindCommand';
import { injectable, inject } from 'inversify';
import Validator from '../../Validator/Validator';
import CategoryFindByIdCommand from '../../../../Application/Commands/Category/CategoryFindCommand';
import IdSchema from '../../Validator/Schemas/IdSchema';

@injectable()
class ShowAllCategoryAdapter {
  private validator: Validator;

  constructor(@inject(Validator) validator: Validator) {
    this.validator = validator;
  }

  public async from(req: Request): Promise<CategoryFindByIdCommand> {
    let id: any = req.query.search;

    if (!id) {
      id = 0;
    } else {
      const findIdCategoryResult = this.validator.validator(req.params, IdSchema);

      if (findIdCategoryResult) {
        throw new InvalidData(JSON.stringify(this.validator.validationResult(findIdCategoryResult)));
      }
    }

    return new CategoryFindByIdCommand(id);
  }
}

export default ShowAllCategoryAdapter;
