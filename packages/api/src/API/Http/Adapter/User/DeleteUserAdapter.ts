import { IdSchema } from '../../Validator/Schemas/Common';
import { BadRequest } from '../../Errors/BadRequest';
import DeleteUserCommand from '../../../../Application/Commands/User/DeleteUserCommand';
import { injectable, inject } from 'inversify';
import Validator from '../../Validator/Validator';

@injectable()
class DeleteUserAdapter {
  private validator: Validator;

  constructor(@inject(Validator) validator: Validator) {
    this.validator = validator;
  }

  public async from(params: any) {
    const error = this.validator.validate(params, IdSchema);

    if (error) {
      throw new BadRequest(JSON.stringify(error.details));
    }

    return new DeleteUserCommand(params.id);
  }
}

export default DeleteUserAdapter;
