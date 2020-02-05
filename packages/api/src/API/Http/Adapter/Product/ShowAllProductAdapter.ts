import { Request } from 'express';
import { InvalidData } from '../../Errors/InvalidData';
import IdSchema from '../../Validator/Schemas/IdSchema';
import ProductFindCommand from '../../../../Application/Commands/Product/ProductFindCommand';
import { injectable } from 'inversify';

@injectable()
class ShowAllProductAdapter {
  public from(req: Request) {
    let id: any = req.query.search;

    if (!id) {
      id = 0;
    } else {
      const resultId = IdSchema.validate({ id });
      if (resultId.error) {
        throw new InvalidData(resultId.error.message);
      }
    }

    return new ProductFindCommand(id);
  }
}

export default ShowAllProductAdapter;
