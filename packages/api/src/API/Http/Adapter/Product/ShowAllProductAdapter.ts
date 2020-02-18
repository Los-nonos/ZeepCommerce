import { Request } from 'express';
import { BadRequest } from '../../Errors/BadRequest';
import { IdSchema } from '../../Validator/Schemas/Common';
import ProductFindCommand from '../../../../Application/Commands/Product/ProductFindCommand';
import { injectable } from 'inversify';

@injectable()
class ShowAllProductAdapter {
  public async from(req: Request) {
    let id: any = req.query.search;

    if (!id) {
      id = 0;
    } else {
      const resultId = IdSchema.validate({ id });
      if (resultId.error) {
        throw new BadRequest(resultId.error.message);
      }
    }

    return new ProductFindCommand(id);
  }
}

export default ShowAllProductAdapter;
