import { injectable } from 'inversify';
import { Request } from 'express';
import ProductDeleteCommand from '../../../../Domain/Commands/ProductCommands/ProductDeleteCommand';
import IdSchema from '../../Validator/Schemas/IdSchema';
import { InvalidData } from '../../ErrorsHandlers/Errors/InvalidData';

@injectable()
class DeleteProductAdapter {
  public async from(req: Request): Promise<ProductDeleteCommand> {
    const { id }: any = req.params;

    const resultId = IdSchema.validate({ id });

    if (resultId.error) {
      throw new InvalidData(resultId.error.message);
    }

    return new ProductDeleteCommand(resultId.value.id);
  }
}

export default DeleteProductAdapter;
