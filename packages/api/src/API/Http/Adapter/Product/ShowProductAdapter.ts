import { Request } from 'express';
import { InvalidData } from '../../ErrorsHandlers/Errors/InvalidData';
import IdSchema from '../../Validator/Schemas/IdSchema';
import ProductFindCommand from '../../../../Domain/Commands/ProductCommands/ProductFindCommand';
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
