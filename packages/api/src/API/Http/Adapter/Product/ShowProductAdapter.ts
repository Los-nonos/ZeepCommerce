import { Request } from 'express';
import { InvalidData } from '../../Errors/InvalidData';
import IdSchema from '../../Validator/Schemas/IdSchema';
import ProductFindCommand from '../../../../Application/Commands/Product/ProductFindCommand';
import { injectable } from 'inversify';

@injectable()
class ShowProductAdapter {
  public from(req: Request) {
    const { id }: any = req.params;

    const resultId = IdSchema.validate({ id });

    if (resultId.error) {
      throw new InvalidData(resultId.error.message);
    }

    return new ProductFindCommand(resultId.value.id);
  }
}

export default ShowProductAdapter;
