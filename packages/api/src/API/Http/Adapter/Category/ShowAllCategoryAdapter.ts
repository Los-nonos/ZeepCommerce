import { Request } from 'express';
import { BadRequest } from '../../Errors/BadRequest';
import { injectable, inject } from 'inversify';
import Validator from '../../Validator/Validator';
import CategoryFindByIdCommand from '../../../../Application/Commands/Category/CategoryFindCommand';
import { IdSchema } from '../../Validator/Schemas/Common';

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
      const findIdCategoryResult = this.validator.validate(req.params, IdSchema);

      if (findIdCategoryResult) {
        throw new BadRequest(JSON.stringify(this.validator.validationResult(findIdCategoryResult)));
      }
    }

    return new CategoryFindByIdCommand(id, req.params.name);
  }
}

export default ShowAllCategoryAdapter;
